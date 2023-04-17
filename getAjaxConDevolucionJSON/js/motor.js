function peticionServidor(d1, d2, servidor1)
{
    //alert("hola con el evento en JS");
    let ajax1 = new XMLHttpRequest();
    
    ajax1.onreadystatechange = function()
    {
        if (ajax1.readyState==4 && ajax1.status==200)
        {
            let objJSON1 =  JSON.parse(ajax1.responseText);
            document.getElementById(d1.id).innerHTML = "Nombre: " + objJSON1.nombre;
            document.getElementById(d2.id).innerHTML = "Telefono: " + objJSON1.tlf;
        }
    };

    ajax1.open('GET', servidor1, true);
    ajax1.send();
}


// Cuando todos los recursos se hayan cargado se añade el escuchador de eventos
window.addEventListener("load", function(event)
{

    //Establecer una referencia de los elementos
    const b1 = document.getElementById("b1");
    const servidor1 = "servidor.php";
    
    // Asociar el elemento al evento y llamada a la funcion
    if(b1)
    {

        const d1 = document.getElementById("d1");
        const d2 = document.getElementById("d2");

        b1.addEventListener("click", function(event)
        {
            event.preventDefault();
            peticionServidor(d1, d2, servidor1);

        });
    }

});