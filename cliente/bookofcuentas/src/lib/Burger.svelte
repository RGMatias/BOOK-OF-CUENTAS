<script>
  import agregarSRC from "../assets/icons/Agregar.png"
  import filtroSRC from "../assets/icons/Filtro.png"
    import Botton from "./Botton.svelte";
    import Logout from "./Logout.svelte";
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
  <Botton src={agregarSRC} buttonName="AGREGAR"/>
  <Botton src={filtroSRC} buttonName="FILTRO"/>
  <Botton src="" withIcon={false} buttonName="CERRAR SESION"/>
</div>
<Logout  />
<style>
  /* Estilos para icono de hamburguesa y ventana emergente  */
  .container {
    display: inline-block;
    cursor: pointer;
  }

  .item{
<<<<<<< Updated upstream
    justify-self: center;
    margin: 55px 0px;
=======
 justify-self: end;
 width: 50px;
>>>>>>> Stashed changes
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
    top: 7em;
    left: 101em;
    width: 285px;/* Ajusta el ancho según tus necesidades */
    height: 755px;
    flex-shrink: 0; 
    background-color: #000000;
    border: 1px solid #000000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto 0.99fr;
    align-content: start;
    
  }
  /* <CSS: Clases para mostrar u ocultar la ventana emergente */
  /* .show {
    display: block;
  } */

  .hide {
    display: none;
  }
 
  @media only screen and (max-width: 800px) {
    .popup-container {
    position: fixed;
    top: 10.5em;
    left: 11.2em;
    width: 229px;
    height: 725px;    
  }
    

}
</style>



