// Funcion para poblar informacion de peliculas
async function listarPeliculas(parametro) {
    //console.log(parametro);
    
    // Leer JSON y asignarlo a pa variable peliculas
    let resultadoBusqueda = [];
    let resultadoBusquedaSR = [];

    const peliculasJSON = await fetch('./pelis.json');
    const peliculas = await peliculasJSON.json();
    let peliculasFinal = [];
    let contador = 0;
    parametro = parametro.toUpperCase();

    // Verificar coincidencia entre la busqueda y la infromacion del JSON
    peliculas.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            
            if (value.toUpperCase().includes(parametro)) {

                resultadoBusqueda.push(peliculas.indexOf(obj));
                let test = peliculas[peliculas.indexOf(obj)];
                contador++;
            } 
        });
        
    });


    // Eliminar indices repetidos en el Resultado
    for (let i = 0; i < resultadoBusqueda.length; i++) {
        if (!resultadoBusquedaSR.includes(resultadoBusqueda[i])) {
            resultadoBusquedaSR.push(resultadoBusqueda[i]);
        }
    }

    // Agregar los objetos unicos al array resultado

    for(i in peliculas) {
        resultadoBusquedaSR.forEach(e => {
            if (e==i) {
                peliculasFinal.push(peliculas[i]);
            }
        });
      };

      // Eliminar elementos de d1
      removeAllChilds("d1");

      for(p in peliculasFinal){
        let id = peliculasFinal[p]["id"];
        let titulo = peliculasFinal[p]["titulo"];
        let genero = peliculasFinal[p]["genero"];

        // Dibujar el DOM con el resultado
        dibujarPeliculas(id, titulo, genero);
      };

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
    console.log("Vacio");

    const peliculasJSON = await fetch('./pelis.json');
    const peliculas = await peliculasJSON.json();
    
    for(p in peliculas){
        let id = peliculas[p]["id"];
        let titulo = peliculas[p]["titulo"];
        let genero = peliculas[p]["genero"];

        // Dibujar el DOM con el resultado
        dibujarPeliculas(id, titulo, genero);
        };


    var texto = document.getElementById("texto");
    let d1 = document.getElementById("d1");

    texto.addEventListener("input",function(){
        listarPeliculas(texto.value);
    })
   
    let objeto;


    this.document.body.addEventListener("click", function(event){
        objeto =  event.target;
        //console.log(objeto.className);
        if(objeto.className=="home"){

            console.log(objeto.id);
            let div = document.getElementById("d1");
            let servidor1 = "game.php";
            let argumento = objeto.id;

            peticionServidor(argumento, div, servidor1);
        }
            
    });

});



function removeAllChilds(a)
 {
 var a=document.getElementById(a);
 while(a.hasChildNodes())
	a.removeChild(a.firstChild);	
 }


 function dibujarPeliculas(id, titulo, genero)
 {
    //Dibujar
    let div1 = document.createElement("div"); 
    div1.id="div";
    div1.classList="col-md-6 col-xl-3 p-3"
    div1.style="width: 18rem;"
    d1.appendChild(div1);

    let a1= document.createElement("a");
    a1.href="game.php?id="+id;
    div1.appendChild(a1);

    let img1= document.createElement("img");
    img1.href="game.php?id=005";
    img1.id=id;
    img1.src="img/"+id+".jpg";
    img1.className="card-img-top claseVideo1";
    img1.name="nombreVideo1";
    img1.alt="";
    a1.appendChild(img1);

    let div01 = document.createElement("div"); 
    div01.classList="card-body"
    div1.appendChild(div01);

    let h01 = document.createElement("h5");
    h01.className="card-title";
    h01.textContent = titulo;
    div01.appendChild(h01);

    let p01 = document.createElement("p");
    p01.className="card-text";
    p01.textContent = genero;
    div01.appendChild(p01);

    let a01= document.createElement("a");
    a01.href="game.php?id="+id;
    a01.className="btn btn-primary";
    a01.textContent = "Ver Pelicula";
    div01.appendChild(a01);
 }

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
    /*
    let objJSON1 = this.response;
    let objJSON2 = objJSON1.parse(objJSON1);
    let pelicular1 = objJSON2["peliculas"];
    
    ajax1.open('GET',"json/bd1.json",true);
    */
}