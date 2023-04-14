function peticionServidor1(form1, b1, d1, servidor)
{
    // Creación del objeto XMLHttpRequest
    let ajax1 = new XMLHttpRequest();
    // Creación del objeto FormData
    let formData1 = new FormData(form1);

    // 1. Devolución del servidor
    ajax1.onreadystatechange = function(){
        if (ajax1.readyState==4 && ajax1.status==200)
        {
            document.getElementById(d1.id).innerHTML = ajax1.responseText;
        }
        else {
            document.getElementById(d1.id).innerHTML = "No se han enviado los datos";
        }

        //form1.reset();
    };
    // Sevidor.php?argumento1=c1.value&huevosFritos=c2.value
     
    ajax1.open('POST', servidor, true);
    ajax1.send(formData1);

    
}

function peticionServidor2(form1, b1, d1, servidor)
{

    // Desabilitar el boton
    b1.disable = true;

    // Creación del objeto XMLHttpRequest
    let ajax1 = new XMLHttpRequest();
    // Creación del objeto FormData
    let formData1 = new FormData(form1);

    // 1. Devolución del servidor
    ajax1.addEventListener("load",function(event){
        // Limpiar formulario
        form1.reset();
        // Habilitar el boton
        b1.disable = false;
        document.getElementById(d1.id).innerHTML = ajax1.responseText;
    });    

    // 1. Error en el envio de los datos
    ajax1.addEventListener("error",function(event){
        // Limpiar formulario
        form1.reset();
        // Habilitar el boton
        b1.disable = false;
        document.getElementById(d1.id).innerHTML = "No se han enviado los datos";
    });  

    // Sevidor.php?argumento1=c1.value&huevosFritos=c2.value
    ajax1.open('POST', servidor, true);
    ajax1.send(formData1);

    
    
}

// Cuando Todos los recursos se hayan cargado...
window.addEventListener("load", function(event){
    // Establecer una referecia de los elementos
    const form1 = document.getElementById("form1");
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const d1 = document.getElementById("d1");
    let servidor = "";

    // Asociar el elementoal evento y llamada a la función
    if(form1)
    {
        form1.addEventListener("submit", function(event){
            event.preventDefault();
            servidor = "servidor.php";
            peticionServidor2(form1, b1, d1, servidor);
        });
    }
});



