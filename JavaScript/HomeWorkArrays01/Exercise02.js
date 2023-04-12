/* Crear un vector de 5 elementos de cadenas de caracteres, inicializa el vector con datos leídos por el teclado. Copia los elementos del vector en otro vector pero en orden inverso, y muéstralo por la pantalla. */

let vElement = [];

for (let i = 0; i < 5; i++) {
    let vNumber = parseInt(prompt(`Ingrese un valor para el elemento ${i + 1}:`));
    vElement.push(vNumber);
}

let vElementInverso = vElement.reverse();

console.log("Vector original: " + vElement);
console.log("Nuevo vector en orden inverso: " + vElementInverso);

//======================================================================================================================

let vector = new Array(5);

for(let i = 0; i < vector.length; i++) {
  vector[i] = prompt("Ingrese un valor para el elemento " + (i+1) + ":");
}
let nuevoVector = new Array(5);


for(let i = 0, j = vector.length - 1; i < vector.length; i++, j--) {
  nuevoVector[i] = vector[j];
}

console.log(vector + "\n" + nuevoVector);
console.log("Vector original: " + vector + "<br>");
console.log("Nuevo vector en orden inverso: " + nuevoVector);

//======================================================================================================================


