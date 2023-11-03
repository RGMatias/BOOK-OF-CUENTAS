<script>
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<!-- Icono de hamburguesa y ventana emergente -->
<div class="container {isMenuOpen ? 'change' : ''}" on:click={toggleMenu}>
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>

<!-- Ventana emergente -->
<div class="popup-container {isMenuOpen ? 'show' : 'hide'}">
  <button class="popup-button-white">AGREGAR</button>
  <button class="popup-button-white">FILTRO</button>
  <button class="popup-button-red">CERRAR SESIÒN</button>
</div>

<style>
  /* Estilos para icono de hamburguesa y ventana emergente  */
  .container {
    display: inline-block;
    cursor: pointer;
  }

  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #FFFFFF;
    margin: 6px 0;
    transition: 0.4s;
  }

 /* Estilos para la transformación de las barras  */
  .change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
  }

  /* Estilos para la ventana emergente */
  .popup-container {
    position: fixed;
    top: 120px;
    left: 400px;
    width: 285px;/* Ajusta el ancho según tus necesidades */
    height: 755px;/* Ajusta el ancho según tus necesidades */
    flex-shrink: 0; /* Ajusta el ancho según tus necesidades */
    background-color: #000000;
    border: 1px solid #000000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
  }
   
  /* Estilo de el contenido de la ventana emergente  */
  .popup-button-red{
    border-radius: 25px;
    border: 1px solid rgba(152, 5, 5, 0.75);
    color: #980505BF;
    background: #000000;
    width: 285.185px;
    height: 68.91px;
    flex-shrink: 0;
  }

  .popup-button-white{
    border-radius: 25px;
    border: 1px solid rgba(240, 225, 206, 0.75);
    background: #000;
    color: #F0E1CEBF;
    width: 285.185px;
    height: 68.91px;
    flex-shrink: 0;
  }
  /* <CSS: Clases para mostrar u ocultar la ventana emergente */
  .show {
    display: block;
  }

  .hide {
    display: none;
  }
 
</style>



