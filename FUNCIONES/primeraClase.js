// declarando la palabra clave FUNCTION
function validador (){

}

//metodo 2 para declarar una funcion
let validador2 = () => ""

//Metodo 3 para declarar una funcion (anonima)
let validador3 = function(){

}

//Ejemplo 1
let y=prompt("Ingrese algo")
function validador (numero){
    if(isNaN(numero)){
        return "Error dato invalido"
    }else{
        return numero
    }
}
console.log(validador(y));

//Punto 11
function validador (){
    let numero=Number(prompt("Ingrese un numero"))
    while(isNaN(numero) || numero<0){
        alert("ingrese un numero valido")
        numero=Number(prompt("Ingrese un numero"))
    }
    if(numero%2===0){
        return "Es par"
    }else{
        return "Es impar"
    }
}
alert(validador());

//punto 12

function validador(){
    let num=Number(prompt("Ingrese un numero"))
    while(isNaN(num)){
        alert("ingrese un numero valido")
        num=Number(prompt("Ingrese un numero"))
    }
    return num<0 ? "Es negativo"  : num===0 ? "Es cero" : num>0 ? "Es positivo" : ""
     
}
alert(validador());

//punto 13

