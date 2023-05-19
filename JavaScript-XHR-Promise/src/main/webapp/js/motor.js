// Crear funciones
function makeRequest(method, url){
    
    // 1.- Crear el objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // 2.- Crear y devolver la promesa
    return new Promise( function(resolve, reject){

        // 3.- Abrir la conexión con el método y la url indicada
        xhr.open(method, url, true);

        // 5-A.- Escuchar el evento load que se dispara cuando la petición termina
        xhr.onload = function()
        {
            // si el estado de la respuesta es 200 (Éxito)
            if (xhr.status === 200) {
                // Resolver la promesa con la respuesta como texto
                resolve(xhr.responseText);
            }
            // Si el estado de la respuesta no es 200 (Error)
            else
            {
                // Rechazar la promesa con el estado de la respuesta como motivo
                reject(xhr.status);
            }
            
        };

        // 5-B.- Escuchar el evento load que se dispara cuando hay un problema con la red
        xhr.onerror = function(){
            reject('Error de red');
        };

        // 4.- Enviar la petición
        xhr.send();


    });



    
}

// Asociación de eventos
window.addEventListener("load",function(event)
{
    // Paso 1 - Referencia a los objetos
    const b1 = document.getElementById("b1");
    const d1 = document.getElementById("d1");
    
    const controller1 = "UserController"; // Indicar solo el nombre del controlador
    
    // Paso 2 - Asociación del elemento al evento y llamada a la función
    if(b1)
    {
        b1.addEventListener("click",function(event){

            // Realizar la petición
            makeRequest('GET', 'servidor.php')
            .then(function(response){
                // Si la promesa se resuelve, mostrar la respuesta en el div
                document.getElementById(d1.id).innerHTML = response;
            })
            .catch(function(error){
                // Si la promesa es rechazada, mostrar el error por consola
                console.log(error);
            });
            
        });
    }
    
});


