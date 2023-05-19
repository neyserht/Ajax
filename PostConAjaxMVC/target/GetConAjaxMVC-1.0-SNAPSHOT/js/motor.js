function ajaxPost1(c1,f1,c2,c3,b1,d1,controller1)
{
    let ajax1 = new XMLHttpRequest();
    
    ajax1.onreadystatechange = function()
    {
        // Exito en el envio
        ajax1.addEventListener("load", function(event){
            // alert(event.target.responseText);
            d1.innerHTML = this.responseText; //
            // Limpiar el formulario
            f1.reset();
            // Habilitar el boton
            b1.disable = false;
        });
        
        // Error en el envio
        ajax1.addEventListener("error", function(event){
            // alert(event.target.responseText);
            alert('Error: no se a enviado la informacion');
            //d1.innerHTML = this.responseText; //
            // Limpiar el formulario
            f1.reset();
            // Habilitar el boton
            b1.disable = false;
        });
        
        
       
    };
    let argumentos1 = "?c1=" + c1.value + "&c2=" + c2.value + "&c3=" + c3.value;
    ajax1.open("POST", controller1 + argumentos1, true);
    ajax1.send();
}


//asociacion de eventos
window.addEventListener("load", function(event){
    
    //Paso 1 Referencia de los objetos
    const f1 = document.getElementById("f1");
    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");
    const c3 = document.getElementById("c3");
    const b1 = document.getElementById("b1");
    const d1 = document.getElementById("d1");
    const controller1 = "UserController"; // Indicar solo el nombre del controlador
    
    // Paso 2 - Asociacion de del elemento al evento y llamada a la funcion
    if(f1)
    {
        f1.addEventListener("submit",function(event){
           event.preventDefault();
           // Deshabilitar el boton
           b1.disable = true;
           ajaxPost1(c1,f1,c2,c3,b1,d1,controller1); 
        });
    }
    
    
});