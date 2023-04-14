function peticionServidor(d1, servidor1)
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

    ajax1.open('GET', servidor1, true);
    ajax1.send();
}


// Cuando todos los recursos se hayan cargado se añade el escuchador de eventos
window.addEventListener("load", function(event)
{

    //Establecer una referencia de los elementos
    const b1 = document.getElementById("b1");
    const d1 = document.getElementById("d1");
    const servidor1 = "servidor.php";
    
    // Asociar el elemento al evento y llamada a la funcion
    if(b1)
    {
        const c1 = document.getElementById("c1");
        const c2 = document.getElementById("c2");
        const d1 = document.getElementById("d1");


        b1.addEventListener("click", function(event)
        {
            event.preventDefault();
            peticionServidor(d1, servidor1);

        });
    }

});