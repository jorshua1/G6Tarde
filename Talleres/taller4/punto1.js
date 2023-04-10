let numeros = new Array(11);

numeros[10] = 0;
for(let i = 0; i < (numeros.length-1); i++){
    numeros[i] = Number(prompt("Ingrese un número."));
    while(isNaN(numeros[i])){
        numeros[i] = Number(prompt("Error. Por favor, ingrese un número."));
    }
    numeros[10]+= numeros[i]
    console.log(numeros[i]);
}

console.log("La sumatoria de los números es de: " + numeros[10]);