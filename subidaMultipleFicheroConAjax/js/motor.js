function deshabilitarControl1(control1)
{
    control1.disabled = true;
}

function habilitarControl1(control1)
{
    control1.disabled = false;
}

function ajaxFileUpload1(form1, controlador1, div1){

    let ajax1 = new XMLHttpRequest();
    let formData1 = new FormData(form1);
    formData1.append("InformacionAdicional1", "Informacion Adicional");

    ajax1.onreadystatechange = function(){
        if(ajax1.status==200)
        // && ajax1.status==200
        {
            document.getElementById(div1.id).innerHTML = ajax1.responseText;
        }
        else
        {
            document.getElementById(div1.id).innerHTML = "Error: no se ha podido enviar el fichero(" + ajax1.status +")";
        }
    };

    ajax1.open('POST', controlador1, true);
    ajax1.send(formData1);

}


function subirFichero1(form1, boton1, controlador1, divResultado1)
{
    //alert("Mensaje 1");
    deshabilitarControl1(boton1);
    ajaxFileUpload1(form1, controlador1, divResultado1);
    //alert("Mensaje 2");
    habilitarControl1(boton1);
    form1.reset();
    // form1.
}


// Cuando todos los recursos se hayan cargado...
window.addEventListener("load", function(event){

    // Establecer una referencia de los elementos
    const form1 = document.getElementById("form1");

    // Asociar el elemento al evento y llamada a la función
    if(form1)
    {
        
        const divResultado1 = document.getElementById("divResultado1");
        const boton1 = document.getElementById("boton1");
        let controlador1 = "controllers/subir-fichero.php";
        // const controlador1 = document.getElementById("controllers/subir-fichero.php");
        // const controlador1 = document.getElementById("controllers/subir-fichero.php");

        form1.addEventListener("submit", function(event){
            event.preventDefault();
            subirFichero1(form1, boton1, controlador1, divResultado1);
        });
    }

});