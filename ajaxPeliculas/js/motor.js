let pelicula1 = ['España',47351567,499603,27063];
let pelicula2 = ['Alemania',83240525 ,349380,46208];
let pelicula3 = ['Francia',67391582,547557,39030];
let pelicula4 = ['Italia',59554023,297730,31714];
let peliculas = [pelicula1,pelicula2, pelicula3, pelicula4];
let resultado = [];
let verifica = false;

function buscarPais(c1, d1, d2, d3, d4){
        for(let n of peliculas){
        for(let m of n){
            console.log(m);
            if(c1.value ==m){
                d1.value = (n[m]);
                d2.value = ('ok');
                resultado = n;
                verifica = true;
            }
        }
    }

    if (verifica) {
        d1.innerHTML = `Pais:    ${resultado[0]}`;
        d2.innerHTML = `Población: \t${resultado[1]}`;
        d3.innerHTML = `Área: \t${resultado[2]}`;
        d4.innerHTML = `PIB per cápita: \t${resultado[3]}`;
        c1.value =  '';
        verifica = false;
    } else{
        alert('El dato ingresado no esta registrado.');
        d1.innerHTML = '';
        d2.innerHTML = '';
        d3.innerHTML = '';
        d4.innerHTML = '';
        c1.value =  '';
    }

}


// Cuando Todos los recursos se hayan cargado...
window.addEventListener("load", function(event){
    // Establecer una referecia de los elementos
    const c1 = document.getElementById("c1");
    const b1 = document.getElementById("b1");
    const d1 = document.getElementById("d1");
    const d2 = document.getElementById("d2");
    const d3 = document.getElementById("d3");
    const d4 = document.getElementById("d4");
    let servidor1 = "";

    // Asociar el elementoal evento y llamada a la función
    if(b1)
    {
        b1.addEventListener("click", function(event){
            event.preventDefault();
            //servidor1 = "servidor.php";
            buscarPais(c1, d1, d2, d3, d4);
        });
    }
});



