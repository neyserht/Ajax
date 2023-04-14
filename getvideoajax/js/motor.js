function update_progress(e)
{
    if (e.lengthComputable)
    {
                
    }
}

function cargarVideo(videoServidor)
{
    //alert("hola con el evento en JS");
    let ajax1 = new XMLHttpRequest();

    ajax1.onprogress = update_progress;
    
    ajax1.onreadystatechange = function()
    {
        if (ajax1.readyState==4 && ajax1.status==200)
        {
            document.getElementById(d1.id).innerHTML = ajax1.responseText;
        }
    };

    ajax1.open('GET', servidor1, true);
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
            cargarVideo(videoServidor);

        });
    }

});