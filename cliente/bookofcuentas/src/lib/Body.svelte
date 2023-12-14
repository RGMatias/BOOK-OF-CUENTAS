<script>
    import { onMount } from "svelte";
    import { AddBalance, GetBalance } from "../controllers/Saldo/";
    import { DeleteBalance } from "../controllers/Saldo/DeleteBalance";
    import { EditBalance } from "../controllers/Saldo/EditBalance";
    import {FiltroFecha}   from "../Tools/FiltroFecha"
    import {MostrarModal , MostrarModalEdit} from "../store/balance"
    import Agregar from "./Agregar.svelte";
    import Filtro from "./Filtro.svelte";
    import Modal from "./Modal.svelte";
    
    let informacion
    let tipo
    let monto

    function saveInfo(pInformacion, pTipo, pMonto) {
        informacion=pInformacion
        tipo=pTipo
        monto=pMonto   
        console.log(informacion, tipo, monto, "componenteBody")     
    }
    
    async function agregarBalance(){
      let result = await AddBalance(new Date().getTime(), informacion, tipo, monto)
      if (!result.sucess) return 
      console.log(result.msg)
      saldos.push(result.data) 
      saldos = saldos
    }
    let saldos = []
    onMount(async()=>{
        let fechas = FiltroFecha ()
        let result = await GetBalance(fechas.fechaInicio, fechas.fechaFin)
        console.log(result)
        if (!result.sucess) return
        saldos = result.data
        for (let index = 0; index < saldos.length; index++) {
            saldos[index].isEdit= false
            
        }
        saldos = saldos
        console.log(saldos)
    })
    async function DeleteBalanceButton(id) {
        let result = await DeleteBalance(id)
        if (!result.sucess) return
        console.log(result)
        let index = saldos.findIndex(s=>s._id==id)
        if (index==-1)  return
        saldos.splice(index,1)
        saldos = saldos
    }
    function EditBalanceButton(id , monto) {
        let index = saldos.findIndex(s=>s._id==id)
        if (index==-1)  return
        saldos[index].isEdit= true
        saldos = saldos
        setTimeout(() => {
            
            document.getElementById("saldo_"+id).value = monto
        }, 100);
    }
    async function ActualizarBalance(id) {
        let index = saldos.findIndex(s=>s._id==id)
        if (index==-1)  return
        let saldoActual = document.getElementById("saldo_"+id).value
        let result =await  EditBalance(id,saldoActual)
        if (!result.sucess) return
        result.data.isEdit = false
        saldos[index]=result.data
        saldos = saldos
        console.log(result)
    }
    
</script>

<div>
    <div class="container">
        <div>Fecha</div>
        <div>Informacion</div>
        <div>Tipo</div>
        <div>Monto</div>
        <div>Button</div>
        <!-- hay que controlar el arreglo de each para ver si no esta vacio -->
        {#each saldos as saldo}
            <div>{new Date (saldo.fecha).toLocaleDateString()}</div>
            <div>{saldo.informacion}</div>
            <div>{saldo.status}</div>
            {#if saldo.isEdit}
                <div>
                    <input type="number" name="" id={"saldo_"+saldo._id}>
                </div>
            {:else}

                <div>{saldo.monto }</div>
                
            {/if}
            <!-- en el ultimo van los buttons de edit y delete -->
            <div> 
                {#if saldo.isEdit}
                    <button on:click={()=>{ActualizarBalance(saldo._id)}}> Actualizar</button>
                {:else}
                    <button on:click={()=>{EditBalanceButton(saldo._id , saldo.monto)}}> edit</button>
                {/if}
                <button on:click={()=>{DeleteBalanceButton(saldo._id)}} >delete</button>
            </div>

        {/each}
    </div>

    {#if $MostrarModal}
         <Modal action={()=>{agregarBalance()}}>
             <Agregar action={saveInfo} />
             
         </Modal>
    {/if}
    {#if $MostrarModalEdit}
         <Modal action={()=>{agregarBalance()}}>
             <!-- <Filtro /> -->
             <Agregar action={saveInfo} />
             
         </Modal>
    {/if}
</div>

<!-- a -->
<style>
    .container{
        margin: 1em 1em 1em 1em;
        width: 117em;
        height: 30em;
        flex-shrink: 0;
        border-radius: 25px;
        border: 5px solid #000;
        background: #FFEEDE;
        mix-blend-mode: soft-light;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        align-content: start;
        z-index: 0;
    }


   
@media only screen and (max-width: 800px) {
    .container{
        width:24em;
        height: 37em;
    }
    

}
</style>