function update_progress(e)
{
    if (e.lengthComputable)
    {
           let percentage = Math.round((e.loaded / e.total)*100);
           console.log(percentage + '%');
    }
    else
    {
        console.log("No se puede calcula el progreso de la descarga porque se desconoce el tamaño total del achivo")
    }
}

function transfer_complete()
{
    console.log("Descarga completada");
}

function transfer_failed(e)
{
    console.log("Ha ocurrido un error durante la descarga");
}

function transfer_canceled(e)
{
    console.log("La descarga ha sido cancelada pr el usuario");
}

function cargarVideo(videoServidor, resultado1)
{
    //alert("hola con el evento en JS");
    let ajax1 = new XMLHttpRequest();

    ajax1.onprogress = update_progress;
    ajax1.addEventListener("load", transfer_complete, false);
    ajax1.addEventListener("error", transfer_failed, false);
    ajax1.addEventListener("abort", transfer_canceled, false);
    
    ajax1.onreadystatechange = function()
    {
        if (ajax1.readyState==4 && ajax1.status==200)
        {
            document.getElementById(resultado1.id).innerHTML = ajax1.responseText;
        }
    };

    ajax1.open('GET', videoServidor, true);
    ajax1.send();
}


// Cuando todos los recursos se hayan cargado se añade el escuchador de eventos
window.addEventListener("load", function(event)
{

    //Establecer una referencia de los elementos
    const resultado1 = document.getElementById("resultado1");
    
    
    // Asociar el elemento al evento y llamada a la funcion
    if(resultado1)
    {

        resultado1.addEventListener("click", function(event)
        {
            event.preventDefault();
            const videoServidor = "servidor.html"
            cargarVideo(videoServidor, resultado1);

        });
    }

});