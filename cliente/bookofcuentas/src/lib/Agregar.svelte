<script>
    // your script goes here
</script>

<div class="container">
    <form action="/action_page.php">
        <label for="fecha">Fecha:
        <br><br/>
        </label>
        <input type="datetime-local" id="fecha" name="fecha">
      </form>

      <form action="/action_page.php">
        <label for="informacion">Informacion
        <br><br>
        </label>
        <input type="text" id="informacion" name="informacion"><br><br>
      </form>

    <form action="/action_page.php">
        <label for="Tipo">Tipo:
          <br><br>
        </label>
        <select name="tipo" id="tipo">
          <option value="Entrada">Entrada</option>
          <option value="Salida">Salidad</option>
        </select>
      
    </form>
      <form action="/action_page.php" >
        <label for="monto">Monto
        <br><br>
        </label>
        <input value="" type="number" id="monto" name="monto">
        
      </form>

      <input class="position" type="Agregar" value="Agregar">
      <input type="Cancelar" value="cancelar">
</div>

<style>
    
    .container{
        margin: -40em 1em 1em 10em;
    position: 0em 0em 0em 0em;
    width: 45em;
    height: 9em;
    flex-shrink: 0;
    border-radius: 25px;
    border: 5px solid #000;
    background: #FFEEDE;
    /* mix-blend-mode: soft-light; */
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: auto;
        
    }

    .position{
        grid-column: 1;
    }
</style>

<!-- markup (zero or more items) goes here -->