//EJERCICIOS ALGORITMIA ESTRUCTURA CONDICIONAL
/*EJERCICIO 1: LEER DOS NUMEROS Y LOS IMPRIMA DE FORMA ASCENDENTE*/
let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("ingrese el segundo numero"));
if(isNaN(num1) || isNaN(num2)){
    console.log("error");
}else if(num1>num2){
    console.log(num1)
    console.log(num2)
}else if(num1<num2){
    console.log(num2)
    console.log(num1)
}else{
    console.log("los numeros son iguales");
}
//EJERCICIO 2:
var numero = parseInt(prompt("ingrese un numero de 1 a 10 "));
switch (numero) {
    case 1 :
    case 3 :
    case 5 :
    case 7 :
    case 8 :
        console.log("impar");
        break;
    case 2 :
    case 4 :
    case 6 :
    case 8 :
    case 10:
        console.log("par");
        break;

    default:
        console.log("no es un numero valido");
    
}
//EJERCICIO 3:
var numero = parseInt(prompt("ingrese un numero de 1 a 10 "));
switch (numero) {
    case 1 :
        console.log(numero + "= uno");
        break;
    case 2 :
        console.log(numero + "= dos");
    case 3 :
        console.log(numero + "= tres");
        break;    
    case 4 :
        console.log(numero + "= cuatro");
        break;    
    case 5 :
        console.log(numero + "= cinco");
        break;    
    case 6 :
        console.log(numero + "= seis");
        break;    
    case 7 :
        console.log(numero + "= siete");
        break;   
    case 8 :
        console.log(numero + "= ocho");
        break;    
    case 9 :
        console.log(numero + "= nueve");
        break;
    case 10:
        console.log(numero + "= diez");
        break;

    default:
        console.log("no es un numero valido");

 }
 