/*
Para tributar un determinado impuesto se debe ser mayor de 16 años y 
tener unos ingresos iguales o superiores a 1000 € mensuales. 
Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y 
muestre por pantalla si el usuario tiene que tributar o no.
*/

let edad = 16;/*parseInt(prompt("Por favor ingrese edad de la persona a tributar."));*/
let ingreso = 1000;/*parseFloat(prompt("por favor digite valor de ingresos mensuales (sin puntos, ni comas)"));*/

if ((isNaN(edad)) || isNaN(ingreso) || edad <= 16) {
    console.log("La persona es menor a la edad permitidad, no puede tirbutar.");

} else if (ingreso < 1000) {
    console.log("La persona posee ingresos mensuales menores a los requeridos, no puede tributar.");

} else {
    console.log("La persona cumple con las condiciones para tributar.");
}