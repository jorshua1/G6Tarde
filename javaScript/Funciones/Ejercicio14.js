/*Ejercicio con estructuras de control y repetitivas:
14. Escribir una función en JavaScript que tome como parámetro un número y muestre
por consola los números del 1 al número ingresado, pero si el número es múltiplo de
3 mostrar "Fizz" en lugar del número y si el número es múltiplo de 5 mostrar "Buzz"
en lugar del número. */

function FizzBuzz(numero) {
    for (let i = 0; i < numero; i++) {

        if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
    
}

let numero = parseInt(prompt(`Ingrese un numero`))

console.log(FizzBuzz(numero))
