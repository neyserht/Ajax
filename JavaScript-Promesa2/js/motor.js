const data1 =
[
    {
        ide: 1,
        pai: 'España',
        pop: 46000000
    },
    {
        ide: 2,
        pai: 'Alemania',
        pop: 86000000
    },
    {
        ide: 3,
        pai: 'España',
        pop: 46000000
    }
];
// const data1 = [];

// Crear la funcion

const gettingData1 = () =>
{
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (data1.length>0)
            {
                resolve(data1);
                //console.log(data1);
            } else if(data1.length===0)
            {
                reject(new Error("No hay datos"));
            }
            
        }, 2000);
    });
}

function getData1()
{
    gettingData1()
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message))
}


// Llamada a la promesa (sintaxis 2 - Sintaxis endulzada - Syntactic Sugar)
async function getData2()
{
    try
    {
        const data = await gettingData1();
        console.log(data);
    }
    catch (error)
    {
        console.log(error.message);
    }    
}


// Evento asociado al control
window.addEventListener("load", function(event){
    
    // Paso 1 - Referencia de los elementos
    const b1 = document.getElementById("b1");

    // Paso 2 - Asociación del elemento al eventoy llamada a la función
    if(b1)
    {
        b1.addEventListener("click", function(event){
            getData2();
        });
    }
    

});

