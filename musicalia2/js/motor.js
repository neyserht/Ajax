function peticionServidor(disco, servidor1)
{
    //alert("hola con el evento en JS");
    let ajax1 = new XMLHttpRequest();
    
    ajax1.onreadystatechange = function()
    {
        if (ajax1.readyState==4 && ajax1.status==200)
        {
            document.getElementById(d1.id).innerHTML = ajax1.responseText;
        }
    };

    ajax1.open('GET', servidor1 + '?pista='+ disco.id , true);
    ajax1.send();

}

// Cuando todos los recursos se hayan cargado se añade el escuchador de eventos

window.addEventListener("load", function(event)
{

    //Establecer una referencia de los elementos
    const disco = this.document.getElementsByName("disco");


    const servidor1 = "servidor.php";  
    
    // Asociar el elemento al evento y llamada a la funcion
    
    if(disco){

        for (let index = 0; index < disco.length; index++) {
            let pista = disco[index];
            //element.addEventListener("click", function(event)
            //console.log(pista);
            pista.addEventListener("click", function(event)
            {
                event.preventDefault();
                peticionServidor(pista, servidor1);
            })
        };

    }

});