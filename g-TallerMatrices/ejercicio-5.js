/*
Diseñar un algoritmo que cree una matriz unidimensional de 1O posiciones numéricas,
después las imprima en pantalla y luego permita buscar un número almacenado previamente, 
si lo encuentra muestre en que posición esta y si no, que muestre "valor no encontrado".
*/

// Crear una matriz unidimensional de 10 posiciones numéricas
let matrizUnidimensional = new Array(10);

for (let i = 0; i < 10; i++) {
    matrizUnidimensional[i] = Math.floor(Math.random() * 100); // Generar números aleatorios del 0 al 99
}

// Imprimir la matrizUnidimensional en pantalla
console.log(matrizUnidimensional);

// Pedir al usuario que ingrese el número a buscar y validar que sea un número
let numeroBuscado = 25;/*prompt("Ingresa el número que deseas buscar:");*/

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
let matriz = new Array(10);

// Llenar la matriz con valores numéricos
for (let i = 0; i < matriz.length; i++) {
    let numero = 2;/*parseInt(prompt(`Ingresa un número en la posición ${i}`));*/
    matriz[i] = numero;
}

// Imprimir la matriz en pantalla
console.log("La matriz es:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}

// Buscar un número en la matriz
let encontradoDos = false;
let buscar = parseInt(prompt("Ingresa el número a buscar"));
for (let i = 0; i < matriz.length; i++) {
    if (matriz[i] === buscar) {
        encontradoDos = true;
        console.log(`El número ${buscar} está en la posición ${i}`);
        break;
    }
}
if (!encontradoDos) {
    console.log("Valor no encontrado")
}