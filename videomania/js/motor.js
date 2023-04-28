function peticionServidor(argumento, div, servidor1)
{
    //alert("hola con el evento en JS");
    let ajax1 = new XMLHttpRequest();
    
    ajax1.onreadystatechange = function()
    {
        if (ajax1.readyState==4 && ajax1.status==200)
        {
            div.innerHTML = ajax1.responseText;
        }
    };
    //ajax1.open('GET', servidor1 + '?argumento='+ argumento , true);
    ajax1.open('GET', servidor1 + "?datosJSON1="+ argumento, true);
    ajax1.send();

    // BORJA
    let objJSON1 = this.response;
    let objJSON2 = objJSON1.parse(objJSON1);
    let pelicular1 = objJSON2["peliculas"];
    
    ajax1.open('GET',"json/bd1.json",true);
}

// Funcion para poblar informacion de peliculas
function listarPeliculas(parametro) {
    console.log(parametro);

    let ajax1 = new XMLHttpRequest();
    
    ajax1.onreadystatechange = function()
    {
        if (ajax1.readyState==4 && ajax1.status==200)
        {
            div.innerHTML = ajax1.responseText;
        }
    };

    let servidor1 = "pelicula.php";
    let div = document.getElementById("d1");

    ajax1.open('GET', servidor1 + "?parametro="+ parametro, true);
    ajax1.send();

}

// Cuando todos los recursos se hayan cargado se añade el escuchador de eventos

window.addEventListener("load", function(event)
{
    listarPeliculas("total");

    var texto = document.getElementById("texto");

    texto.addEventListener("input",function(){
        listarPeliculas(texto.value);
        
    })
   
    let objeto;
    let objeto2;
    // Asociar a body el evento click....
    // (convertir todos los elementos que contiene el "body" en cliqueables)

    this.document.body.addEventListener("click", function(event){
        objeto =  event.target;
        //console.log(objeto.className);
        if(objeto.className=="claseVideo1"){

            console.log(objeto.id);
            let div = document.getElementById("d1");
            let servidor1 = "servidor1.php";
            let argumento = objeto.id;

            peticionServidor(argumento, div, servidor1);
        }
            
    });




    

    

    


    
    

    // Asociar el elemento al evento y llamada a la funcion
    
    /*if(discos)
    {
        peticionServidor(disk, div, servidor1);
         
    }*/

});