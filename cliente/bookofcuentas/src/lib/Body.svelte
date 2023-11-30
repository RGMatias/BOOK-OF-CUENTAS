<script>
    import { AddBalance } from "../controllers/Saldo/AddBalance";
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
    }
    

</script>

<div>
    <div class="container">
        <div>Fecha</div>
        <div>Informacion</div>
        <div>Tipo</div>
        <div>Monto</div>
        <div>Button</div>
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

    }


   
@media only screen and (max-width: 800px) {
    .container{
        width:24em;
        height: 37em;
    }
    

}
</style>