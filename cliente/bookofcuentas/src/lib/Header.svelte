<script>
    import Burger from "./Burger.svelte";
    
    let src = 'src/assets/logo_pequeño-removebg-preview.png'
    let name = 'bookICON'
</script>

<header>
    <div class="container marco">
        <img {src} alt="bookICON" style="width: 20em;">
        <div  class="tres-puntos font-color  " style="justify-self:center;" >Nombre:Darwin Rodriguez Gamarra</div>
        <div  class="tres-puntos font-color" >Saldo Total:99999999999</div>
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
    display: grid;
    /* grid-template-columns:auto auto  auto auto; */

}

.container{
    display: grid;
    width: 100%;
    grid-template-columns:auto auto auto auto;
    justify-content:center ;

}

.font-color{
    color: antiquewhite;
}

@media only screen and (max-width: 800px) {
    .container {
      grid-template-columns:auto auto;
      grid-template-rows: auto auto;
        
    }
    /* .item{
  grid-area: 1 / 2 ;
} */
    .tres-puntos{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(255, 252, 252)313;

    }

}
    </style>

