<script>
    import { onMount } from "svelte";
    import { AddBalance } from "../controllers/Saldo/AddBalance";
    import { GetBalance } from "../controllers/Saldo/GetBalance";
    import { DeleteBalance } from "../controllers/Saldo/DeleteBalance";
    import {FiltroFecha}   from "../Tools/FiltroFecha"
    import Agregar from "./Agregar.svelte";
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
      console.log(result.msg)
      saldos.push(result.data) 
      saldos = saldos
    }
    let saldos = []
    onMount(async()=>{
        let fechas = FiltroFecha ()
        let result = await GetBalance(fechas.fechaInicio, fechas.fechaFin)
        saldos = result.data
        console.log(result)
    })
    async function DeleteBalanceButton(id) {
        let result = await DeleteBalance(id) 
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
            <div>{saldo.monto}</div>
            <!-- en el ultimo van los buttons de edit y delete -->
            <div> <button> edit</button> <button on:click={()=>{DeleteBalanceButton(saldo._id)}} >delete</button></div>

        {/each}
    </div>

    <Modal action={()=>{agregarBalance()}}>
        <Agregar action={saveInfo} />
        
    </Modal>
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
    }


   
@media only screen and (max-width: 800px) {
    .container{
        width:24em;
        height: 37em;
    }
    

}
</style>