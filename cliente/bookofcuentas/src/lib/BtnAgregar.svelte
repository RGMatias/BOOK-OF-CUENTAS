<script>
    export let buttonName 
    export let positive= true
    let borderColor= ""
    if (!positive) {
        borderColor="colorBlack"
    }
</script>
<div>
    {#if positive}
        <button class="positive-Btn container-P" >{buttonName}</button>
        
    {:else}
        <button class="negative-Btn container-N" >{buttonName}</button>
    {/if}
</div>



<style>
/* .grid-class-button{
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    padding: 10px;
    margin: 5px;
    border: solid 0.5px white;
    border-radius: 25px;
    padding: 5px;
    height: 45px;
    align-items: center;
    align-content: center;
} */
  .positive-Btn{
        width: 142px;
        height: 39.13px;
        flex-shrink: 0;
        fill: #000;
        stroke-width: 1px;
        stroke: #000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .negative-Btn{
        width: 142px;
        height: 39.13px;
        flex-shrink: 0;
        fill: #000;
        stroke-width: 1px;
        stroke: #000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  
  .container-P{
        width:150;
        height: 48;  
        background-color: black;
        color:white;
        border-radius: 50px;
        color: #FFEEDE;
        text-align: center;
        font-family: "khand";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

  }

  .container-N{
        width:150;
        height: 48;  
        background-color: #980505;
        color:white;
        border-radius: 50px;
        color: #FFEEDE;
        text-align: center;
        font-family: "khand";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

  }


</style>
