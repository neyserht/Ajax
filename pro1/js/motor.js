function mostrar(t01, d01){
    let texto = "En un lugar de la mancha de cuyo nombre no quiero acordarme vivia un lustre hidalgo de mancha...";
    //texto = texto.substring(5,7);
    //texto = texto.slice(4,-1);
    //texto = texto.replace("Mancha","Luna");
    //d01.innerHTML=texto.replace('mancha','luna');
    //d01.innerHTML=texto.toUpperCase();
    d01.innerHTML=texto.toLowerCase();
    t01.value="";
}


// Gestor de eventos Inicio
window.addEventListener("load",function(event){
    // Boton B1 INICIO
    // Referencia de los elementos

    // Paso 1:  Referencia de los elementos

    const b01 = this.document.getElementById("b01");
    const t01 = this.document.getElementById("t01");
    const d01 = this.document.getElementById("d01");

    // Paso 2:  Asociación del evento a la asociación
    if (b01) {
        b01.addEventListener("click",function (event){
           event.preventDefault();
           mostrar(t01,d01); 
        });
    }

    // Boton B1 FIN
    
});

// Gestor de eventos Fin
