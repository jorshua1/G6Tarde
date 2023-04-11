/*
Diseñar un algoritmo que cree una matriz unidimensional de 1O posiciones numéricas,
después las imprima en pantalla y luego permita buscar un número almacenado previamente, 
si lo encuentra muestre en que posición esta y si no, que muestre "valor no encontrado".
*/

// Crear una matriz unidimensional de 10 posiciones numéricas
let matrizUnidimensional = new Array(10);

for (let i = 0; i < 10; i++) {
    matrizUnidimensional[i] = Math.floor(Math.random() * 10); // Generar números aleatorios del 0 al 99
}

// Imprimir la matrizUnidimensional en pantalla
console.log(matrizUnidimensional);

// Pedir al usuario que ingrese el número a buscar y validar que sea un número
let numeroBuscado = 1;/*prompt("Ingresa el número que deseas buscar:");*/

while (isNaN(numeroBuscado)) {
    numeroBuscado = 0;/*prompt("Por favor, ingresa un número válido:");*/
}

// Buscar el número en la matrizUnidimensional
let encontrado = false;
let posicion;

for (let i = 0; i < matrizUnidimensional.length; i++) {

    if (matrizUnidimensional[i] == numeroBuscado) {
        encontrado = true;
        posicion = i;

    }
}

// Mostrar el resultado de la búsqueda
if (encontrado) {
    console.log(`El número ${numeroBuscado} se encuentra en la posición ${posicion} de la matrizUnidimensional.`);
} else {
    console.log("Valor no encontrado.");
}



// Crear una matriz de 10 posiciones numéricas
let matrizUnidimensionalDos = new Array(10);

// Llenar la matrizUnidimensionalDos con valores numéricos
for (let i = 0; i < matrizUnidimensionalDos.length; i++) {
    let numeroBuscadoDos = parseInt(prompt(`Ingresa un número en la posición ${i}`));
    matrizUnidimensionalDos[i] = numeroBuscadoDos;
}

// Imprimir la matrizUnidimensionalDos en pantalla
console.log("La matrizUnidimensionalDos es:");
for (let i = 0; i < matrizUnidimensionalDos.length; i++) {
    console.log(matrizUnidimensionalDos[i]);
}

// Buscar un número en la matrizUnidimensionalDos
let encontradoDos = false;
let buscar = parseInt(prompt("Ingresa el número a buscar"));
for (let i = 0; i < matrizUnidimensionalDos.length; i++) {
    if (matrizUnidimensionalDos[i] === buscar) {
        encontradoDos = true;
        console.log(`El número ${buscar} está en la posición ${i}`);
        break;
    }
}
if (!encontradoDos) {
    console.log("Valor no encontrado")
}