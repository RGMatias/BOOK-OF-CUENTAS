<script>
</script>

<header>
    <div class="container">
        <div class="title-mobile">BOOK OF 
            <div class="block-inline">C</div>
            <div class="rotar block-inline">U</div>
            <div class="block-inline">E</div>
            <div class="rotar block-inline">N</div>
            <div class="rotar block-inline">T</div>
            <div class="rotar block-inline">A</div>
            <div class="rotar block-inline">S</div>
        </div>
        <div class="tres-puntos">Nombre:Gustavo Horacio Real de la Villa Fuente</div>
        <div class="tres-puntos">Saldo Total:99999999999</div>
    </div>
    <div>Burguerbutton</div>
</header>

<style>
header{
    display: grid;
    grid-template-columns:auto auto;

}

.container{
    display: grid;
    grid-template-columns:auto auto auto;
    
}

.rotar{
    transform: rotate(180deg) translateY(1px);
    
}

.block-inline{
    display: inline-block;
    
}


@media only screen and (max-width: 800px) {
    .container {
      grid-template-columns:auto auto;
        
    }
    .title-mobile{
        grid-column: 1/3;
    }
    .tres-puntos{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

}
    </style>

