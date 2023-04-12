/*Ejercicio 2 
Crear un vector de 5 elementos de cadenas de caracteres, inicializa el vector con 
datos leídos por el teclado. Copia los elementos del vector en otro vector pero en 
orden inverso, y muéstralo por la pantalla. */

let vector = new Array();
let otroVector = new Array();
let i = 0;
for ( i = 0; i < 5; i++) {

    vector[i] = prompt(`Ingrese un caracter.`); 
}

i = vector.length-1

for (let j = 0; j < vector.length; j++ ){

    otroVector[j] = vector[i];
    i--;
}

console.log(vector)
console.log(otroVector)