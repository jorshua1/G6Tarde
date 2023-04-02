let numeros = new Array(10)
let sumatoria = 0;

for(let i = 0; i < numeros.length; i++){
    numeros[i] = Number(prompt("Ingrese un número."));
    while(isNaN(numeros[i])){
        numeros[i] = Number(prompt("Error. Por favor, ingrese un número."));
    }
    sumatoria += numeros[i]
}
console.log(numeros);
console.log(sumatoria);