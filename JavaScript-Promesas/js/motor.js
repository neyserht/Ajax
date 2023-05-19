// Definición de un objeto "promesa1"
// Si la ejecución de la petición asíncrona es exitosa se llama resolve(...)
// Si la ejecución de la petición asíncrona fracasa se llama reject(...)
let promesa1 = new Promise((resolve, reject)=>{
    // Se usa setTimeout(...) para simular código asincrono (XHR o una API HTML5)
    setTimeout(function(){
        // resolve para el "éxito"
        // reject para el "eror"
        resolve("Éxito");
        reject(new Error("Error"));
    }, 2500)
});

// Ejecución del objeto "promesa1"

promesa1.then(
    // Éxito en la ejecución
    result => console.log("Resultado: " + result),
    error => console.log("Resultado: " + error)
);


