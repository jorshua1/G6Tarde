/*
(sentencia switch)Diseñar un algoritmo que lea por teclado un número contenido
entre 1 y 10. Se desea visualizar si el nuúmero es par o impar.En primer lugar, se
deberá detectar si el número está comprendido en el rango válido (1 a 10) y a
continuaciónsi el número es 1, 3, 5, 7, 9, escribir un mensaje de "impar" si es 2, 4, 
6, 8, 10, escribir un mensaje de "par". 
*/

let numero = 1;/*parseInt(Prompt("Por favor ingrese numero"));*/

switch(numero){
    case 1:
    case 3:
    case 5:
    case 7:        console.log(numero + " es impar.")
    break;
}