//FUNCIONES
//es un bloque de codigo que se utiliza para ordenar, mediante parametros hace una operacion y da un resultado,
//Es un bloque de codigo que puede recibir o no recibir parametros y devuelve resultados.
function validador() { }; // funcion nombrada
let validador = () => "resuelve algo"; // funcion flecha
let validador = function () { }; //funcion anonima
let x = prompt("ingrese un numero");
console.log(validador(x));
function validador(numero) {
    if (isNaN(numero)) {
        return "ERROR DATO INVALIDO"
    }else{
        return numero
    }
}

/* 11. Escribir una función en JavaScript que tome como parámetro un número y devuelva
"Es par" si el número es par y "Es impar" si el número es impar. */
let numero = prompt("ingrese un numero");
function validador(dato){
    if(isNaN(dato)){
        return "ERROR DATO INVALIDO"
    }else{
        let resultado = dato%2
        if(resultado === 0){
            return "Es par"
        }else{
            return "Es impar"
        }
    }
} console.log(validador(numero));

/* 12. Escribir una función en JavaScript que tome como parámetro un número y devuelva
"Positivo" si el número es mayor que cero, "Negativo" si el número es menor que
cero y "Cero" si el número es cero. */

let numero = prompt("ingrese un numero");
function validador(dato){
    if(isNaN(dato)){
        return "ERROR DATO INVALIDO"
    }else{
        if(dato>0){
            return "Positivo"
        }else if(dato<0){
            return "Negativo"
        }else{
            return "Cero"
        }
    }
} console.log(validador(numero));

/*13. Escribir una función en JavaScript que tome como parámetro un número y muestre
por consola los números del 1 al número ingresado.*/

let numero = prompt("ingrese un numero");
validador(numero);
function validador(dato){
    if(isNaN(dato)){
        return "ERROR DATO INVALIDO"
    }else if(dato>0){
        for(let i=1; i<=dato; i++){
            console.log(i);
        }
    }else{
        for(let i=1; i>=dato; i--){
            console.log(i);
        }
    }
}

/*14. Escribir una función en JavaScript que tome como parámetro un número y muestre
por consola los números del 1 al número ingresado, pero si el número es múltiplo de
3 mostrar "Fizz" en lugar del número y si el número es múltiplo de 5 mostrar "Buzz"
en lugar del número. */

function FizZBuzz(numero){
    for (let i =0; i < numero; i++){
        if(i % 3 === 0){
            console.log("Fizz")
        }else if(i % 5 === 0){
            console:log("Buzz")
        }else{
            console.log(i)
        }
    }      
}

numero = parseInt(prompt("Ingrese un numero"))

console.log(FizZBuzz(numero))
