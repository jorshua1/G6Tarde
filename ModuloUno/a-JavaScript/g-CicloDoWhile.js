/*
do...while
La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, 
hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de 
ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

Sintaxis
do
  sentencia
while (condición);

sentencia
Una sentencia que se ejecuta al menos una vez y es reejecutada cada vez que la condición se evalúa a verdadera. 
Para ejecutar múltiples sentencias dentro de un bucle, utilice la sentencia block ({ ... }) para agrupar aquellas sentencias.

condición
Una expresión se evalúa después de cada pase del bucle. 
Si condición se evalúa como verdadera, la sentencia se re-ejecuta. 
Cuando condición se evalúa como falsa, el control pasa a la siguiente sentencia hacer mientras.

Ejemplos
Usando hacer mientras
En el siguiente ejemplo, el bucle hacer mientras itera al menos una vez y se reitera hasta que i ya no sea menor que 5.
*/

let i = 0;

do {

    i += 1;

    console.log(i);

} while (i < 5);

console.log(i);

let numero = 9;

do {

    console.log(numero);

    numero++
}
while (numero <= 10) {
}
console.log("XD");


do {

    console.log("El valor de i es: " + i);

    i += 5;

} while (i <= 50);


/*
tabla de multiplicar
*/
let numeroMultiplicando = 1;/*parseInt(prompt(" por favor ingrese numero de la tabla que necesita visualizar"));*/
let numeroMultiplicador = 1;

if (isNaN(numeroMultiplicando)) {

    console.log("Por favor ingrese un valor valido");

} else {
    
    do {

        let resultado = numeroMultiplicando * numeroMultiplicador

        console.log(numeroMultiplicando + " x " + numeroMultiplicador + " = " + resultado);

        numeroMultiplicador++;

    } while (numeroMultiplicador <= 10)

    numeroMultiplicador = 1;

    numeroMultiplicando++
}