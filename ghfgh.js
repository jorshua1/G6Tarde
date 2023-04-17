/* 11. Escribir una función en JavaScript que tome como parámetro un número y devuelva
"Es par" si el número es par y "Es impar" si el número es impar.*/
let numero = parseInt(prompt("Ingrese un numero"));
function funcion() {
    if(numero%2==0){
        return("Es Par")
    }else{
        return("Es Impar")
    }
}console.log(funcion(numero));


/* 12. Escribir una función en JavaScript que tome como parámetro 
un número y devuelva "Positivo" si el número es mayor q*/

let positivo = parseInt(prompt("Ingrese un numero"));
function funcion() {
    if(positivo<0){
        return("Negativo")
    }
    else if(positivo===0){
        return("Cero")
    }
    else{
        return("Es Impar")
    }
}console.log(funcion(positivo));

/* 13. Escribir una función en JavaScript que tome como parámetro 
un número y muestre por consola los números del 1 al número 
ingresado.*/

let numeroUno = parseInt(prompt("Ingrese un numero"))
function funcion() {
    for(i=1; i<=numeroUno; i++){
        console.log(i)
    }
}console.log(funcion());


/*14. Escribir una función en JavaScript que tome como parámetro un número y muestre
por consola los números del 1 al número ingresado, pero si el número es múltiplo de
3 mostrar "Fizz" en lugar del número y si el número es múltiplo de 5 mostrar "Buzz"
en lugar del número.*/

let numeroDos = parseInt(prompt("Ingrese un numero"))
function funcion() {
    for(i=1; i<=numeroDos; i++){
        if(i===3){
            console.log("Fizz")
        }
        else if(i===5){
            console.log("Buzz");
        }
        console.log(i)
    }
}console.log(funcion());
