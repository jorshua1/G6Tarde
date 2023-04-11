/*
Escribir un programa que indique de almacene en un arreglo unidimensional 100 datos e indique cuántos elementos positivos hay en el mismo.
*/

let arregloUnidimensionalUno = new Array(100);// Crear arregloUnidimensionalUno vacío de 100 filas
console.log(arregloUnidimensionalUno);
let numerosPositivosUno = 0;
let numerosNegativosUno = 0;

for (let i = 0; i < arregloUnidimensionalUno.length; i++) {
    arregloUnidimensionalUno[i] = Math.floor(Math.random() * 201) - 100;

    if (arregloUnidimensionalUno[i] > 0) {
        numerosPositivosUno++

    } else {
        numerosNegativosUno++
    }
}

console.log(`
El vector contiene los siguientes numeros ${arregloUnidimensionalUno}
Contiene 
${numerosPositivosUno} numeros positivos
${numerosNegativosUno} numeros negativos`);



let tamañoArray = 100 /*parseInt(prompt("Ingrese el tamaño del arreglo:"));*/

let arregloUnidimensionalDos = new Array(tamañoArray);// Crear arregloUnidimensionalDos vacío de N filas
console.log(arregloUnidimensionalDos);
let numerosPositivos = 0;
let numerosNegativos = 0;

for (let i = 0; i < arregloUnidimensionalDos.length; i++) {
    arregloUnidimensionalDos[i] = Math.floor(Math.random() * 201) - 100;

    if (arregloUnidimensionalDos[i] > 0) {
        numerosPositivos++;

    } else {
        numerosNegativos++;
    }
}

console.log(`
El vector contiene los siguientes numeros ${arregloUnidimensionalDos}
Contiene 
${numerosPositivos} numeros positivos
${numerosNegativos} numeros negativos`);
