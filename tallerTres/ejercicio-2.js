/*
(sentencia switch)Diseñar un algoritmo que lea por teclado un número contenido
entre 1 y 10. Se desea visualizar si el nuúmero es par o impar.En primer lugar, se
deberá detectar si el número está comprendido en el rango válido (1 a 10) y a
continuaciónsi el número es 1, 3, 5, 7, 9, escribir un mensaje de "impar" si es 2, 4, 
6, 8, 10, escribir un mensaje de "par". 
*/

let numero = 0;/*parseInt(Prompt("Por favor ingrese numero"));*/

if (isNaN(numero) || numero >= 1 && numero <= 10) {
    console.log("El numero " + numero + " esta en el rango de 1 a 10.");
} else {
    console.log("Por favor ingrese un numero valido entre 1 a 10.");
}

switch (numero) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        console.log(numero + " es impar.")
        break;

    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        console.log(numero + " es par.")
        break;

    default:
        console.log("El dato ingresado no es valido para este ejercicio.")
}