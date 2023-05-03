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
    
    //ajax1.open('GET',"json/bd1.json",true);


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

// Verificar la carga de pagina
window.onload = function () {
    
    const body1 = document.body;
    //alert(body1.id.toString);

    if (body1.id=="index") 
    {
        alert("Estas en Index 1");
    } 
    else if (body1.id=="index2")
    {
        alert("Estas en Index 2");
    }


}


// Cuando todos los recursos se hayan cargado se añade el escuchador de eventos

window.addEventListener("load", async function(event)
{

    // Leer JSON y asignarlo a pa variable peliculas

    //let peliculasJSON = await fetch('lista.json', { method: 'GET' });
    //let peliculas = await peliculasJSON.json();
    //console.log(peliculas);

    let resultadoBusqueda = [];
    let resultadoBusquedaSR = [];

    const peliculasJSON = await fetch('lista.json');
    const peliculas = await peliculasJSON.json();
    

    peliculas.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            //console.log(`${key} ${value}`);
            if (value.includes("a")) {

                //console.log(obj['id']);
                resultadoBusqueda.push(peliculas.indexOf(obj));
                //console.log(typeof peliculas);
                //console.log(obj.key);
            }
        });
        //console.log('-------------------');
    });

    // Eliminar indices repetidos en el Resultado
    for (let i = 0; i < resultadoBusqueda.length; i++) {
        if (!resultadoBusquedaSR.includes(resultadoBusqueda[i])) {
            resultadoBusquedaSR.push(resultadoBusqueda[i]);
        }
    }

    console.log(resultadoBusquedaSR);

    // Crear cards del resultado

    



    //listarPeliculas("total");

    var texto = document.getElementById("texto");

    texto.addEventListener("input",function(){
        listarPeliculas(texto.value);

 
        
    })
   
    let objeto;
    //let objeto2;
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
