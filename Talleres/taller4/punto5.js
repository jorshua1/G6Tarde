let numeros = new Array (10);
let llenarArray = 0;
let aleatoridad = 0;
let buscarNumero = 0;
let posiciones = "";

llenarArray = Number(prompt("¿Cómo desea llenar la matriz?\n1) Manualmente.\n2)Aleatoriamente (Solo números entre 1 y 100)."));
while((llenarArray!==1)&&(llenarArray!==2)){
    alert("Por favor, seleccione una opción válida.")
    llenarArray = Number(prompt("¿Cómo desea llenar la matriz?\n1) Manualmente.\n2)Aleatoriamente."));
}
switch (llenarArray){
    case 1:
        for(let i = 0; i<numeros.length; i++){
            numeros[i] = Number(prompt(`Ingrese el número de la posición N°${i} de la matriz. (Solo se permiten enteros).`));
            while((isNaN(numeros[i]))||(!Number.isInteger(numeros[i]))){
                alert("Por favor, ingrese un valor válido.");
                numeros[i] = Number(prompt(`Ingrese el número de la posición N°${i} de la matriz. (Solo se permiten enteros).`));
            }
        }
        break;
    case 2:
        for(let i = 0; i<numeros.length; i++){
            numeros[i] = parseInt((Math.random()*100)+1);
        }
        break;
}

do{
    alert(`Los números almacenados en la matriz son: \n${numeros}`);
    buscarNumero = Number(prompt("¿Qué número deseas buscar en la matriz?\n(Para salir, ingresa un valor no númerico)."));
    if(!isNaN(buscarNumero)){
        for(let buscando = 0; buscando<numeros.length; buscando++){
            if(numeros[buscando]===buscarNumero){
                posiciones += `Posición ${buscando}.\n`;
            }
        }
        if(posiciones!==""){
            alert(`El número ${buscarNumero} se ha encontrado en las siguientes posiciones de la matriz:\n${posiciones}`);
        }else{
            alert(`El número ${buscarNumero} no se ha encontrado en la matriz.`);
        }

    }else{
        alert("Saliendo...");
    }
    posiciones = ""
}while(!isNaN(buscarNumero));
