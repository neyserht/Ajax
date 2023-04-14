function peticionServidor1(servidor1, c1, c2, d1)
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
    

    // 2. Envío de la petición al servidor
    ajax1.open('GET',servidor1 + "?c1=" + c1.value + "&c2=" + c2.value , true);
    ajax1.send();
}


// Cuando Todos los recursos se hayan cargado...
window.addEventListener("load", function(event){
    // Establecer una referecia de los elementos
    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");
    const b1 = document.getElementById("b1");
    const d1 = document.getElementById("d1");
    let servidor1 = "";

    // Asociar el elementoal evento y llamada a la función
    if(b1)
    {
        b1.addEventListener("click", function(event){
            event.preventDefault();
            servidor1 = "servidor.php";
            peticionServidor1(servidor1, c1, c2, d1);
        });
    }
});



