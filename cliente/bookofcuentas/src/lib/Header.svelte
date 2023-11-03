<script>
    import Burger from "./Burger.svelte";
    
    let src = 'src/assets/logo_pequeño-removebg-preview.png'
    let name = 'bookICON'
</script>

<header>
    <div class="container marco">
        <div class="title-mobile"> 
           <img {src} alt="bookICON">
        </div>
        <div>
            <Burger />
        </div>
        <div  class="tres-puntos font-color" >Nombre:Gustavo Horacio Real de la Villa Fuente</div>
        <div  class="tres-puntos font-color">Saldo Total:99999999999</div>
    </div>
</header>

<style>
.marco{
    border-radius: 0px 0px 50px 50px;
    background: #000000;
    width: 700px;
    height: 164px;
    flex-shrink: 0;
    margin: -8px;
    }

header{
    display: grid;
    grid-template-columns:auto auto auto;

}

.container{
    display: grid;
    grid-template-columns:auto auto auto auto;
    
}

.font-color{
    color: antiquewhite;
}

@media only screen and (max-width: 800px) {
    .container {
      grid-template-columns:auto auto auto;
        
    }
    .title-mobile{
        grid-column: 1/3;
    }
    .tres-puntos{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(255, 252, 252)313;

    }

}
    </style>

