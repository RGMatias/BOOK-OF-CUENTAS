<script>
    export let buttonName 
    export let src
    export let withIcon= true
    let borderColor= ""
    if (!withIcon) {
        borderColor="colorRed"
    }
    export let action 
</script>
<div class="grid-class-button {borderColor}" >
    {#if withIcon}
        <img {src} alt="">
        <button  on:click={action()} >{buttonName}</button>
        
    {:else}
        <button class="withOutIcons colorRed"  on:click={action()}>{buttonName}</button>
    {/if}
</div>


<style>
    .grid-class-button{
        display: grid;
        grid-template-columns: 50px auto;
        margin: 5px;
        border: solid 0.5px white;
        border-radius: 25px;
        padding: 5px;
        height: 45px;
        align-items: center;
        align-content: center;
        z-index: 40px;
    }
    img{
        width: 50px;
    }
    button{
        background-color: transparent;
        border: none;
        color: white;
    }
    .withOutIcons{
        grid-column: 1/3;
    }
    .colorRed{
        color: red;
        border-color: red;
        align-self: end;
    }
</style>
