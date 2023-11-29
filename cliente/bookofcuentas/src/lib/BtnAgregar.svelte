<script>
    export let buttonName 
    export let positive= true
    export let action
    let borderColor= ""
    if (!positive) {
        borderColor="colorBlack"
    }
    
</script>
<div>
    {#if positive}
        <button on:click={()=>{action()}} class="positive-Btn container-P" >{buttonName}</button>
        
    {:else}
        <button on:click={()=>{action()}} class="negative-Btn container-N" >{buttonName}</button>
    {/if}
</div>



<style>
    
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
