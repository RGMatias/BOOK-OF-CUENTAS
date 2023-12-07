<script>
  
  export let action


  let informacion
  let tipo
  let monto

  $:rInfo = informacion
  $:rTipo = tipo
  $:rMonto = monto
  $:{
    action(rInfo, rTipo, rMonto)
  }
 
  
</script>

<div class="container">
  
      <label for="fecha">Fecha:</label>
      <label for="informacion">Informacion</label>
      <label for="Tipo">Tipo:</label>
      <label for="monto">Monto</label>

      <div class="container-Date">
        {new Date().toLocaleDateString()}
      </div>
      <div>
        <input bind:value={informacion} type="text" id="informacion" name="informacion" class="container-L">
      </div>
      <div>
        <select bind:value={tipo} name="tipo" id="tipo" class="font container-L">
          <option value="ENTRADA">Entrada</option>
          <option value="SALIDA">Salida</option>
        </select>
      </div>
      <div>
        <input bind:value={monto} type="number" id="monto" name="monto" class="container-L">
      </div>
</div>

<style>
  
  .container{
  width: 45em;
  flex-shrink: 0;
  background: #FFEEDE;
  display: grid;
  z-index: 20;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto;
  gap: 15px;
  padding: 15px;
  justify-items: center;
  text-align: center;
      
  }

  .font{
    font-family: 'koulen'
  }

  .container-L{
    border-radius: 100px;
  }
  
  .container-Date{
    width: 10ppx;
    border-radius: 100px;
    border: solid 1px;
    border-color: black;
    background-color: white;
  }
  /* .inline-block{
    display: inline-block;
  } */
  /* .position{
      grid-column: 1/3;
      justify-self: end;
    
  }
  .position2{
    grid-column: 3/5;
    justify-self: start;

  }

  .buttonstyle{
    text-align: center;

  } */

     
@media only screen and (max-width: 900px) {
/* .position{
      grid-column: auto;
      justify-self: start;
    
  }
  .position2{
    grid-column: auto;
    justify-self: start;

  } */
  .container{
      width: 50%;
      height: 50%;
      grid-template-columns: 30px;
      justify-items:auto;
  }
  }
</style>

<!-- markup (zero or more items) goes here -->