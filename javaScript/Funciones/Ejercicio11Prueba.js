/*Ejercicio con estructuras de control:

11. Escribir una función en JavaScript que 
tome como parámetro un número y devuelva
"Es par" si el número es par y "Es impar" 
si el número es impar.*/


function parImpar (numero){
    if(numero%2 == 0){
        return "Es par"
    }else{
        return "Es impar"
    }
}

let numero= parseInt(prompt(`Ingrese un numero`))
alert(parImpar(numero))
