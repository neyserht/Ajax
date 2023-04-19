function peticionServidor(c1, c2, d1, d2, servidor1)
{
    //alert("hola con el evento en JS");
    let ajax1 = new XMLHttpRequest();
    
    let objJSON1 = {
        "nom" : c1.value,
        "tlf" : c2.value
    };

    objJSON1 = JSON.stringify(objJSON1);
    
    ajax1.onreadystatechange = function()
    {
        if (ajax1.readyState==4 && ajax1.status==200)
        {
            objJSON1 = JSON.parse(ajax1.responseText);
            document.getElementById(d1.id).innerHTML = objJSON1.nom;
            document.getElementById(d2.id).innerHTML = objJSON1.tlf;
        }
    };

    ajax1.open('GET', servidor1 + "?datosJSON1="+ objJSON1, true);
    ajax1.send();
}

// Cuando todos los recursos se hayan cargado se añade el escuchador de eventos
window.addEventListener("load", function(event)
{

    //Establecer una referencia de los elementos
    // Button
    const b1 = document.getElementById("b1");
    
    // Input
    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");

    // Div
    const d1 = document.getElementById("d1");
    const d2 = document.getElementById("d2");
    
    // Servidor
    const servidor1 = "servidor.php";

    
    // Asociar el elemento al evento y llamada a la funcion
    if(b1)
    {

        

        b1.addEventListener("click", function(event)
        {
            event.preventDefault();
            peticionServidor(c1, c2, d1, d2, servidor1);

        });
    }

});