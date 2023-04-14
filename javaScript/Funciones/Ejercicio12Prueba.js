/*Ejercicio con operador ternario:

12. Escribir una función en JavaScript 
que tome como parámetro un número y devuelva
"Positivo" si el número es mayor que cero, 
"Negativo" si el número es menor que
cero y "Cero" si el número es cero. */

let positivo = 12;
let negativo = -24;
let cero = 0;

function signoCero(numero){
    
    return numero<0 ? "Negativo " : numero>0 ? "Positivo" : "Cero"

}
 console.log(signoCero(positivo))
 console.log(signoCero(negativo))
 console.log(signoCero(cero))



