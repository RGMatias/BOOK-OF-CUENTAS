<script>
   
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
    <input type="text" name="Fecha" id="Fecha">
    <input type="text" name="Informacion" id="Informacion">
    <form action="/Seleccion-tipo" method="post">
        <input type="radio" name="Tipo" value="Salida"> Salida
        <input type="radio" name="Tipo" value="Entrada"> Entrada
    </form>
    
    <input type="number" name="Monto" id="Monto">
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