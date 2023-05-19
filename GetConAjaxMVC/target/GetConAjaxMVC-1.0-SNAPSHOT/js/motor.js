// Crear funciones
function ajaxGet1(c1, c2, c3, b1, d1, controller1){
    //alert("Estas en el buen camino");
    let ajax1 = new XMLHttpRequest();
    ajax1.onreadystatechange = function () {
        if(this.readyState==4 && this.status==200)
        {
            document.getElementById(d1.id).innerHTML = this.responseText;
            c1.value="";
            c2.value="";
            c3.value="";
        } else
        {
            document.getElementById(d1.id).innerHTML = "Error";
        }
    };

    //ajax1.open("GET", "UserController?c1="+c1.value+"&c2="+c2.value+"&c3="+c3.value, true);
    ajax1.open("GET", controller1 + "?c1="+c1.value+"&c2="+c2.value+"&c3="+c3.value, true);
    ajax1.send;
}

// Asociación de eventos
window.addEventListener("load",function(event)
{
    // Paso 1 - Referencia a los objetos
    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");
    const c3 = document.getElementById("c3");
    const b1 = document.getElementById("b1");
    const d1 = document.getElementById("d1");
    
    const controller1 = "UserController"; // Indicar solo el nombre del controlador
    
    // Paso 2 - Asociación del elemento al evento y llamada a la función
    if(b1)
    {
        b1.addEventListener("click",function(event){
           ajaxGet1(c1, c2, c3, b1, d1, controller1); 
        });
    }
    
});


