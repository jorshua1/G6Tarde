/*Calcular el numero e pulsaciones que una persona debe tener por cada de 10 segundos de
ejercicio, si la formula es: num.pulsaciones=(220 -edad)/100*/

let edad = parseInt(prompt("por favor ingrese edad:"));

numPulsaciones = (220 - edad)/100;

console.log("el numero de pulsaciones por cada 10 segundos de ejercicio debe ser de : " + numPulsaciones);