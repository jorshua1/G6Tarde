/* Crear un vector de 5 elementos de cadenas de caracteres, inicializa el vector con datos leídos por el teclado. 
Copia los elementos del vector en otro vector pero en orden inverso, y muéstralo por la pantalla. */
let vector1 = new Array(5);
let vector2 = new Array(5);
for (let i = 0; i < vector1.length; i++) {
    vector1[i] = prompt(`ingrese un dato en la posición ${i}`)
} console.log(vector1);
let i = (vector1.length - 1);
for (var j = 0; j < vector1.length; j++) {
    vector2[j] = vector1[i]
    i--;
} console.log(vector2);