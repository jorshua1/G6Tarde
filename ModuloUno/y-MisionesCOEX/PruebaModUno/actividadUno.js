/*Ejercicio con estructuras de control:

11. Escribir una función en JavaScript que tome como parámetro un número y devuelva
"Es par" si el número es par y "Es impar" si el número es impar.*/

let numero = 2;

if (isNaN(numero)){
    console.log("No es un numero.");

} else if (numero % 2 == 0) {
    console.log("Es Par");

} else {
    console.log("Es Impar");
}
