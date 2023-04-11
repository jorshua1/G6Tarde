/* 3. Crear una matriz numérica de 3x3 que permita almacenar un número en cada posición y mostrarlos en pantalla. */

let vMatriz = []

for (let vX = 0; vX < 3; vX++) {
    vMatriz[vX] =  new Array ();

    for (let vY = 0; vY < 3; vY++) {
        vMatriz[vX][vY] = parseInt(prompt("Ingrese los numeros"));

    }
    vMatriz.sort();
    console.table(vMatriz);
}
//==============================================================================================================

let vArrays01 = [];
let vArraysA = [];
let vArraysB = [];
let vArraysC = [];

for (let vX = 0; vX < 3; vX++) {
    vMatriz[vX] =  vArrays01[[],[],[]];

    for (let vY = 0; vY < 3; vY++) {
        vMatriz[vX][vY] = parseInt(prompt("Ingrese los numeros"));

    }
    vMatriz.sort();
    console.table(vMatriz);
}