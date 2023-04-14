/*
Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número.
*/
let enteroPositivo = 10;/*parseInt(prompt("Por favor ingrese numero entero."));*/

for (i = 0; i < enteroPositivo; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}