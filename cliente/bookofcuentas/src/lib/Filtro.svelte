<script>
    import { GetBalance } from "../controllers/Saldo";
    import {MostrarModalEdit} from "../store/balance"
    
    let fechaInicio
    let fechaFin
    export let action

    
    async function dateF(){
      console.log({fechaInicio, fechaFin})
      let fechaInicio2 = new Date(fechaInicio).getTime()
      let fechaFin2 = new Date(fechaFin).getTime()
      
      if (fechaInicio2>fechaFin2) {
        return
      }

      let result = await GetBalance(fechaInicio2, fechaFin2)
        console.log(result)
        action(result.data)
        // if (!result.sucess) return
        // saldos = result.data
        // for (let index = 0; index < saldos.length; index++) {
        //     saldos[index].isEdit= false
            
        // }

      $MostrarModalEdit=false

      
    }
</script>

<div class="container">
    
    
        <label for="Fecha Desde">Fecha Desde</label>
        <label for="Fecha Hasta">Fecha Hasta</label>
      
        <div>
          <input bind:value={fechaInicio} type="datetime-local" id="fechasDesde" name="Fecha Desde">
        </div>
      
        <div>
          <input bind:value={fechaFin} type="datetime-local" id="fechaHasta" name="Fecha Hasta">
        </div>
        <div class="">
          <input class="buttonstyle" type="button" on:click={()=>{dateF()}} value="Agregar">
        </div>
        <div class="">
          <input class="buttonstyle" type="button" on:click={()=>{$MostrarModalEdit=false}} value="Cancelar">
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
    grid-template-columns: auto auto ;
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