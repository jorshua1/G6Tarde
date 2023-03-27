/* CONDICIONALES.

*Pseudocodigo.

if (condición) {
  código a ejecutar si la condición es verdadera
} else {
  ejecuta este otro código si la condición es falsa
}

Aquí tenemos:

La palabra clave if seguida de unos paréntesis.
Una condición a probar, puesta dentro de los paréntesis (típicamente "¿es este valor mayor que este otro valor?", o "¿existe este valor?"). Esta condición usará los operadores de comparación que hemos hablado en el módulo anterior y retorna un valor true o false (verdadero o falso).
Un conjunto de llaves, en las cuales tenemos algún código — puede ser cualquier código que deseemos, código que se ejecutará sólamente si la condición retorna true.
La palabra clave else.
Otro conjunto de llaves, dentro de las cuales tendremos otro código — puede ser cualquier código que deseemos, y sólo se ejecutará si la condición no es true.
Este código es fácil de leer — está diciendo "si (if) la condición retorna verdadero (true), entonces ejecute el código A, sino (else) ejecute el código B"

Habrás notado que no tienes que incluir else y el segundo bloque de llaves — La siguiente declaración también es perfectmaente legal.
*/
let edad1 = parseInt(prompt("Ingrese su edad: "));

if (edad1 >= 18) {
    alert("Es mayor de edad.");
    /*Codigo a ejecutar si es verdadero*/
} else {
    alert("Es menor de edad.");
    /*Codigo a ejecutar si es falsa*/
}

let edad2 = parseInt(prompt("Ingrese su edad: "));

if (edad2 >= 18) {
    alert("Es mayor de edad.");
} else {
    alert("Es menor de edad.");
}

let edad3 = parseInt(prompt("Ingrese su edad."));

if (edad3 > 0 && edad3 >= 18) {
    alert("Es mayor de edad");
} else if (edad3 <= 0) {
    alert("Error, ingrese valor valido");
} else {
    alert("Es menor de edad");
}

let edad4 = parseInt(prompt("Ingrese su edad."));

if (isNaN(edad4)) {
    alert("Error");
} else if (edad4 >= 1 && edad4 >= 18) {
    alert("Es mayor de edad.");
} else if (edad4 >= 1 && edad4 <= 17) {
    alert("Es menor de edad");
} else {
    alert("Ingrese una edad valida");
}

let edad5 = parseInt(prompt("Ingrese su edad."));

if (isNaN(edad5) || edad5 < 0) {
    alert("ingrese valor valido");
} else if (edad5 > 0 && edad5 >= 18) {
    alert("Es mayor de edad.");
} else {
    alert("Es menor de edad.");
}

let numero = parseInt(prompt("Ingrese su numero."));

if (isNaN(numero) || numero % 2 == 0) {
    alert("Es numero par");
} else {
    alert("Es numero impar.");
}
/*control de temperaturas de galpones de engorde*/

let temperatura = parseInt(prompt("Ingrese su lectura."));

if (isNaN(temperatura) || temperatura >= 32) {
    alert("Apagar calefactor del galpon.");
} else if (temperatura <= 27) {
    alert("Encender calefactor del galpon.");
} else {
    alert("Temperatura estable, tomar registro de termometros fisicos");
}

let diametroRueda = parseFloat(prompt("Ingrese su diametro."));

if (isNaN(diametroRueda) || diametroRueda > 1.4) {
    alert("La rueda es para vehiculo grande.");
} else if (diametroRueda > 0.8 && diametroRueda <= 1.4) {
    alert("Larueda es para vehiculo mediano.");
} else {
    alert("La rueda es para vehiculo pequeño.");
}