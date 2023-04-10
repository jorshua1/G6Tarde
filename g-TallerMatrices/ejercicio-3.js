/*
Crear una matriz numérica de 3x3 que permita almacenar un número en cada posición y mostrarlos en pantalla.
*/

let matrizTres=[];






let matrizNumerica = [[], [], []]
let numeroEntrada = 0;
let resultadoMatriz = "";

for (i = 0; i < matrizNumerica.length; i++) {

    numeroEntrada = 1;

    for (j = 0; j < matrizNumerica[i].length; j++) {

        text += matriz[i][j] + "\t";
        console.log(matriz[i][j]);
    }
    console.log(numeroEntrada)
}



let tabla = [];
let numero = 0;
let mostrarTabla = "";

for (let fila = 0; fila < 3; fila++) {
    tabla[fila] = new Array();
    if (fila > 0) {
        mostrarTabla += "\n"
    }
    for (let columna = 0; columna < 3; columna++) {
        tabla[fila][columna] = Number(prompt(`Ingrese un número en la fila ${fila} y columna ${columna}`));
        while (isNaN(tabla[fila][columna])) {
            alert("Ha ingresado un valor no válido. Inténtelo de nuevo.");
            tabla[fila][columna] = Number(prompt(`Ingrese un número en la fila ${fila} y columna ${columna}`));
        }
        mostrarTabla += tabla[fila][columna] + "  ";
    }
}
alert(`Matriz numérica 3x3 \n${mostrarTabla}`);

let alto, ancho, linea, cadena;

alto = 10;/*parseInt(prompt("Teclea un numero N"));*/

for (linea = 0; linea < alto; linea++) {

    cadena = ''

    for (ancho = 0; ancho <= linea; ancho++) {
        cadena += "*";

    }
    console.log(`${cadena}`);
}