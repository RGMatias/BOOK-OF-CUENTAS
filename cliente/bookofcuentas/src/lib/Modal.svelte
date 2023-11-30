<script>
    import BtnAgregar from "./BtnAgregar.svelte";


</script>
<div class="modal">
    <div class="modal-container">
          
        <slot/>
        <div>
            <div class="grid-class-button">
                <div class="agregarCenter">
                    <BtnAgregar buttonName="AGREGAR"/>
                </div>
                <div>
                    <BtnAgregar positive={false} buttonName="CANCELAR"/>
                </div>
          
            </div> 
            
        </div>
            
       
    </div>

</div>
<style>

    .modal{
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.4)
       
        
    }
    .modal-container{
        position: relative;
        width: max-content;
        height: max-content;
        z-index: 200;
        background-color:#FFEEDE;
        margin: auto;
        top: 35%;
        padding: 40px;
        border-radius: 50px 0px 0px 50px;
        border-right: 20px solid #000;
        border-bottom: 2px solid #000;
        border-left: 10px solid #000;   
    }

.grid-class-button{
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    padding: 10px;
    margin: 5px;
    height: 45px;
}

.agregarCenter{
    justify-self: end;
}

</style>

<!-- markup (zero or more items) goes here -->