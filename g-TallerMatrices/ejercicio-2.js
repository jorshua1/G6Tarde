/*
Escribir un programa que indique de almacene en un arreglo unidimensional 100 datos e indique cuántos elementos positivos hay en el mismo.
*/

let arregloNumeros = new Array(100)
let numerosPositivos = 0;
let numeroNegativos = 0;

for (let i = 0; i < arregloNumeros.length; i++) {
    arregloNumeros[i] = Math.floor(Math.random() * (100 - (-100))) + (-100);

    if (arregloNumeros[i] > 0) {
        numerosPositivos++

    } else {
        numeroNegativos++
    }
}

console.log(`
El vector contiene los siguientes numeros ${arregloNumeros}
Contiene 
${numerosPositivos} numeros positivos
${numeroNegativos} numeros negativos`);
