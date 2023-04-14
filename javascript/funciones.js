//Par o impar Función punto 11

let numeroPar = 28;
let numeroImpar = 57;

function parOImpar(numero){
    if(numero%2 === 0){
        return (`El número (${numero}) es par`);
    }else{
        return (`El número (${numero}) es impar`);
    }
}
console.log(parOImpar(numeroPar));
console.log(parOImpar(numeroImpar));

//---------------------------------------------------
// Positivo o negativo Punto 12
let positivo = 35
let negativo = -65
let cero = 0;

function positivoNegativoCero(numero){
    return numero >0 ? `El número (${numero}) es POSITIVO` : numero <0 ? `El número (${numero}) es NEGATIVO` : `El número (${numero}) es CERO`
}
console.log(positivoNegativoCero(positivo));
console.log(positivoNegativoCero(negativo));
console.log(positivoNegativoCero(cero));

//---------------------------------------------------
// Contar punto 13
let numPositivo = 10;
let numNegativo = -10

function recorrido(numero){
    console.log(numero<0 ? `El numero (${numero}) ingresado es negativo` : `El numero (${numero}) ingresado es positivo`);
    if(numero>=0){
        for(let i = 1; i<=numero;i++){
            console.log(i)
        }
    }else{
        for(let i = 1; i>=numero;i--){
            console.log(i)
        }
    }
}
console.log(recorrido(numPositivo));
console.log(recorrido(numNegativo));

//---------------------------------------------------
// Punto 14
let numeroPositivo5 = 5;
let numeroPositivo6 = 6;
let numeroPositivo7 = 7;
let numeroNegativo = -3;

function fizzBuzz(numero){
    let recorrido = []
    if(numero>0){
        for(let i = 1; i<=numero;i++){
            recorrido[i-1] = i
        }
        if(numero%3 === 0){
            recorrido[numero-1] = "Fizz"
        }else if(numero%5 === 0){
            recorrido[numero-1] = "Buzz"
        }
        console.log(recorrido)
    }else{
        console.log("No es un positivo")
    }
}
console.log(fizzBuzz(numeroPositivo5));
console.log(fizzBuzz(numeroPositivo6));
console.log(fizzBuzz(numeroPositivo7));
console.log(fizzBuzz(numeroNegativo));


//---------------------------------------------------

function validador(numero){
    if(isNaN(numero)){
        return "error dato inválido"
    }else{
        return numero
    }
}
let a = prompt("Ingrese un número")
console.log(validador(a))

//---------------------------------------------------

function validar(numero){
    while(isNaN(numero)){
        numero = prompt("Ingrese un número")
    }
    return numero
}
let b = Number(prompt("Ingrese un número"))
console.log(validar(b))

//---------------------------------------------------

