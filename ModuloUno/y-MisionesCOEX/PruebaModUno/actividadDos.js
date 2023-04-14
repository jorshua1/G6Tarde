/*
Ejercicio con operador ternario:

12. Escribir una función en JavaScript que tome como parámetro un número y devuelva
"Positivo" si el número es mayor que cero, "Negativo" si el número es menor que
cero y "Cero" si el número es cero.*/

function validadorNumerosDos(numeroDos) {

    if (isNaN(numeroDos)) {
        return "No es un numero";

    } else if (numeroDos === 0) {
        return "Cero";

    } else {
        return numeroDos < 0 ? "Negativo" : "Positivo";//Aplicando Operador ternario.
    }
}

let numeroDos = 1;

console.log(validadorNumerosDos(numeroDos));