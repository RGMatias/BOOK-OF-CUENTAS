<script>
   import {AddBalance} from "../controllers/Saldo/AddBalance.js"
   import Relog from "./Relog.svelte";
    let Informacion = "" , tipo = "" , monto =0
   const Add =async () => {
    let balance = await AddBalance (0 , Informacion, tipo , monto)
    console.log(balance)
   }
setTimeout(async() => {
    await Add()
},1000);

</script>

<div>
    <div class="container">
        <div>Fecha</div>
        <div>Informacion</div>
        <div>Tipo</div>
        <div>Monto</div>
        <div>Button</div>
    </div>
</div>
<div>
    <Relog/>
    <input type="text" name="Informacion" bind:value={Informacion} >
    <select bind:value={tipo}>
        <option value="ENTRADA">
            ENTRADA
        </option>
        <option value="SALIDA">
            SALIDA
        </option>
    </select>
    <input type="number" name="Monto" id="Monto" bind:value={monto}>
    <button on:click={()=>Add()}>Agregar saldo</button>
</div>
<!-- a -->
<style>
    .container{
        margin: 1em 1em 1em 1em;
        width: 117em;
        height: 45em;
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