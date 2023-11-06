<script>
    import Burger from "./Burger.svelte";
    
    let src = 'src/assets/logo_pequeño-removebg-preview.png'
    let name = 'bookICON'
</script>

<header>
    <div class="container marco">
        <img {src} alt="bookICON" class="icon">
        <div  class="tres-puntos font-color data item" >Nombre:Darwin Rodriguez Gamarra</div>
        <div  class="tres-puntos font-color data item2"  >Saldo Total:99999999999</div>
        <Burger/>
    </div>
</header>

<style>

.marco{
    border-radius: 0px 0px 50px 50px;
    background: #000000;
    width: 700px;
    height: 164px;
    flex-shrink: 0;
    }

header{
    /* display: grid; */
    grid-template-columns:auto auto  auto auto;

}

.container{
    display: grid;
    width: 100%;
    grid-template-columns:auto auto auto auto;
    /* justify-content:center ; */

}

.font-color{
    color: antiquewhite;
}

.icon{
    width: 20em;
    justify-self: center;
    margin: 30px 0px;
}

.data{   
    justify-self: center;
    margin: 60px 0px;

}

@media only screen and (max-width: 800px) {

    .marco{
        height: 12em;
        border-radius: 0px 0px 20px 20px;

    }
   
    .container {
      grid-template-columns:auto auto;
      grid-template-rows: auto auto;
    }
    
    .item{
        order: 3;
        margin: -2em 3em 0em 0em;
    }
    .item2{
        order:4;
        margin: -2em 6em 0em 0em;
    }
    
    .tres-puntos{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(255, 252, 252)313;

    }

}
    </style>

