/*Crear un vector de 5 elementos de cadenas de caracteres, inicializa el vector con datos leídos por el teclado. Copia 
los elementos del vector en otro vector pero en orden inverso, y muéstralo por la pantalla.*/

let vectorElementos = ["Miercoles", "Doce", "Abril", "Año", "Veinte veintitres"]
console.log(vectorElementos.length);
let vectorElementosInverso = new Array(5);

let vectorInverso = vectorElementos.length - 1;

for (let i = 0; i < vectorElementos.length; i++) {
    vectorElementosInverso[i] = vectorElementos[vectorInverso]
    vectorInverso--;
}
console.log(vectorElementos);
console.log(vectorElementosInverso);