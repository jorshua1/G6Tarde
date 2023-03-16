/*Genera un script que pida cinco números al usuario usando un bucle for normal 
(usa prompt para pedir los datos y conviértelos a valor numérico posteriormente). 
Almacena los números introducidos por el usuario en un array. A continuación usando 
un for in que recorra el array, muestra un mensaje informando del resultado de 
multiplicar cada uno de los números por 3. Ejemplo:

Se pedirán al usuario cinco números, supongamos que introduce 1, 3, 9, 10 y 7

A continuación se mostrará el mensaje:

Multiplicamos por 3 los números introducidos: 1*3 = 3, 3*3 = 9, 9*3 = 27, 10*3 = 30 y 7*3 =21. */
let numeros = [];

for (let i = 0; i < 5; i++) {

    let numero = Number(prompt("Introduce un número"));
    numeros.push(numero);

}

alert("Multiplicamos por 3 los números introducidos: ");

for (let indice = 0; indice < numeros; indice++) {
    let numero = numeros[indice];
    let resultado = numero * 3;

    alert(numero + " x 3 = " + resultado);
}
//--------------------------------------------------------------------

for (let i = 0; i < 5; i++) {

    let numero = Number(prompt("Introduce un número"));
    // Validar si el numero es un número o no
    while (isNaN(numero)) {
        // Mostrar un mensaje de error y pedir otro número
        alert("Por favor, introduce un número válido");
        numero = Number(prompt("Introduce un número"));
    }
    numeros.push(numero);

}

alert("Multiplicamos por 3 los números introducidos: ");

for (let indice in numeros) {
    let numero = numeros[indice];
    let resultado = numero * 3;

    alert(numero + " x 3 = " + resultado);
}