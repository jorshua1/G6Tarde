/*
En una granja existen N conejos, C1 blancos y C2 negros. se venden X conejos negros
y Y conejos blancos. Hacer un algoritmo que:
a)Imprima la cantidad de conejos vendida.
b)Si P1 es el precio de venta de los conejos blancos y P2 el precio de venta de los 
conejos negros, imprima el monto total de la venta.
c)Imprima el color de los conejos que se vendieron más.
*/

let conejosC1 = 100;/*parseInt(prompt("Por favor ingrese total de C1 conejos blancos."))*/
let conejosC2 = 100;/*parseInt(prompt("Por favor ingrese total de C2 conejos negros."))*/
let conejosY = 1;/*parseInt(prompt("Por favor ingrese total de Y conejos blancos vendidos."))*/
let conejosX = 0;/*parseInt(prompt("Por favor ingrese total de Y conejos negros vendidos."))*/
let conejosVendidosY = 0;
let conejosVendidosX = 0;

conejosN = (isNaN(conejosC1) || isNaN(conejosC2) || conejosC1 + conejosC2);
console.log("En la granja existen N = " + conejosN + " conejos.");

if (isNaN(conejosY) || conejosY >= 1) {
    conejosBlancos = conejosC1 - conejosY;
    console.log(" los conejos blancos vendidos fueron: " + conejosBlancos);
} else {
    console.log("No se han vendido conejos blancos");
}