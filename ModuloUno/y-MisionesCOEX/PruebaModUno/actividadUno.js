/*Ejercicio con estructuras de control:

11. Escribir una función en JavaScript que tome como parámetro un número y devuelva
"Es par" si el número es par y "Es impar" si el número es impar.*/

function validadorNumeros(numero) {

    //Aplicando estructura de control if / else
    
    if (isNaN(numero)) {
        return "No es un numero.";

    } else if (numero % 2 === 0) {
        return "Es Par";

    } else {
        return "Es Impar";
    }
}

let numero = "a";

console.log(validadorNumeros(numero));