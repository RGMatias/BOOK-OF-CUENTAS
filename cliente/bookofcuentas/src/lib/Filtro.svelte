<script>
    // your script goes here
</script>

<div class="container">
    
        <label for="fecha">Fecha:</label>
        <label for="informacion">Informacion</label>
        <label for="Tipo">Tipo:</label>
        <label for="monto">Monto</label>

        <div>
          <!-- <input type="datetime-local" id="fecha" name="fecha">     -->
          {new Date().toLocaleDateString()}
        </div>
        <div>
          <input type="text" id="informacion" name="informacion">
        </div>
        <div>
          <select name="tipo" id="tipo">
            <option value="Entrada">Entrada</option>
            <option value="Salida">Salidad</option>
          </select>
        </div>
        <div>
          <input value="" type="number" id="monto" name="monto">
        </div>
        <div class="position">
          <input class="buttonstyle" type="button" value="Agregar">
        </div>
        <div class="position2">
          <input class="buttonstyle" type="button" value="Cancelar">
        </div>
</div>

<style>
    
    .container{
        /* margin: -40em 1em 1em 10em; */
    position: absolute;
    top: 0;
    right: 0;
    width: 45em;
    height: 9em;
    flex-shrink: 0;
    border-radius: 25px;
    border: 5px solid #000;
    background: #FFEEDE;
    /* mix-blend-mode: soft-light; */
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: grid;
    z-index: 20;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto;
    gap: 10px;
    justify-items: center;
    text-align: center;
        
    }

    /* .inline-block{
      display: inline-block;
    } */
    .position{
        grid-column: 1/3;
        justify-self: end;
      
    }
    .position2{
      grid-column: 3/5;
      justify-self: start;

    }

    .buttonstyle{
      text-align: center;

    }

       
@media only screen and (max-width: 900px) {
  .position{
        grid-column: auto;
        justify-self: start;
      
    }
    .position2{
      grid-column: auto;
      justify-self: start;

    }
    .container{
        width: 50%;
        height: 50%;
        grid-template-columns: 30px;
        justify-items:auto;
    }
    }
</style>

<!-- markup (zero or more items) goes here -->