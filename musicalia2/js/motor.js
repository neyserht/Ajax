function peticionServidor(p01, audio, servidor1)
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

    ajax1.open('GET', servidor1 + '?pista='+ p01.name , true);
    ajax1.send();

}

function peticionGeneral(pista, servidor1){
    peticionServidor(p01, audio, servidor1);

}


// Cuando todos los recursos se hayan cargado se añade el escuchador de eventos
window.addEventListener("load", function(event)
{

    //Establecer una referencia de los elementos
    const pista = this.document.getElementsByName("pista");

    const p01 = this.document.getElementById("p01");
    const p02 = this.document.getElementById("p02");
    const p03 = this.document.getElementById("p03");
    const p04 = this.document.getElementById("p04");

    const audio = document.getElementById("audio");

    const servidor1 = "servidor.php";  
    
    // Asociar el elemento al evento y llamada a la funcion
 
    if(p01){

        for(var i = 0; i < pista.length; i++) {
            (function(index) {
                pista[index].addEventListener("click", function(event) {
                    event.preventDefault();
                    peticionServidor(p01, audio, servidor1);
                 console.log("Clicked index: " + index);
               })
            })(i);
          }

        // pista.addEventListener("click", function(event)
        // {
        //     event.preventDefault();
        //     peticionServidor(p01, audio, servidor1);

        // });
    }

});