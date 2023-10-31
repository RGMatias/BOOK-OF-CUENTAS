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
  Contenido de la ventana emergente.
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
    background-color: #333;
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
    top: 50px;
    left: 50px;
    width: 300px; /* Ajusta el ancho según tus necesidades */
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
  }

  /* <CSS: Clases para mostrar u ocultar la ventana emergente */
  .show {
    display: block;
  }

  .hide {
    display: none;
  }
</style>



