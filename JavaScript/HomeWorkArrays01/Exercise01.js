/* Realizar un programa que defina un vector llamado “vector_numeros” de 10 enteros, a continuación lo inicialice con valores aleatorios (del 1 al 10) y posteriormente muestre en pantalla cada elemento del vector junto con su cuadrado y su cubo. */

let vector_numeros = [];

for (let vi = 0; vi < 10; vi++) {
    vector_numeros.push(Math.floor(Math.random() * 10) + 1);

}   for (let vi = 0; vi < vector_numeros.length; vi++) {
    let vNumber = vector_numeros[vi];
    let vNumberII = vNumber * vNumber;
    let vNumberIII = vNumber * vNumber * vNumber;
    console.log(vNumber + " - " + vNumberII + " - " + vNumberIII);
    }
//======================================================================================================================
let vVector_numeros = []

for (let vi = 0; vi < 10; vi++) {
    vVector_numeros.push(Math.floor(Math.random() * 10) + 1);

}   for (let vi = 0; vi < vVector_numeros.length; vi++) {
    let vNumber = vVector_numeros[vi];
    console.log(vNumber + " - " + (vNumber*vNumber) + " - " + (vNumber*vNumber*vNumber));
    }

















