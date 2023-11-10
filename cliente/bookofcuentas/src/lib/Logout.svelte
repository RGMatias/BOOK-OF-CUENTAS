<script>
    import Botton from "./Botton.svelte";
    let isAlertOpen = false
    function toggleLogout () {
        isAlertOpen = !isAlertOpen
    }
</script>
{#if true}
    <div class="popup-cont-log {isAlertOpen ? 'show' : 'hide-log'}">
        <div>
            ¿ESTA SEGURO/A QUE DESEA CERRAR SESION?
        </div>
        <Botton src="" withIcon={true} buttonName="SI"/>
        <Botton src="" withIcon={false} buttonName="NO"/>
    </div>
{:else}
    <div class="popup-cont-log {isAlertOpen ? 'show' : 'hide-log'}">
        <div>
            ¿ESTA SEGURO/A QUE DESEA Borrar?
        </div>
        <Botton src="" withIcon={true} buttonName="SI"/>
        <Botton src="" withIcon={false} buttonName="NO"/>
    </div>
{/if}
<style>
/* Estilos para la ventana emergente */
    .popup-cont-log {
        position: fixed;
        top: 24em;
        left: 53em;
        width: 20em;/* Ajusta el ancho según tus necesidades */
        height: 12em;
        background-color: #000000;
        border: 1px solid #000000;
        border-radius: 9%;
        color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
    }

    /* <CSS: Clases para mostrar u ocultar la ventana emergente */
    /* .show {
        display: block;
    }

    .hide-log {
        display: none;
    } */
</style>

