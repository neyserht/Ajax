function peticionServidor1(d1, servidor)
{
    let ajax1 = new XMLHttpRequest();

    // 1. Devolución del servidor
    ajax1.onreadystatechange = function(){
        if (ajax1.readyState==4 && ajax1.status==200)
        {
            document.getElementById(d1.id).innerHTML = ajax1.responseText;
        }
    };
    // Sevidor.php?argumento1=c1.value&huevosFritos=c2.value
     
    ajax1.open('POST', servidor, true);
    ajax1.send();
}

// Cuando Todos los recursos se hayan cargado...
window.addEventListener("load", function(event){
    // Establecer una referecia de los elementos
    const b1 = document.getElementById("b1");
    const d1 = document.getElementById("d1");
    let servidor = "";

    // Asociar el elementoal evento y llamada a la función
    if(b1)
    {
        b1.addEventListener("click", function(event){
            event.preventDefault();
            servidor = "servidor.php";
            peticionServidor1(d1, servidor);
        });
    }
});



