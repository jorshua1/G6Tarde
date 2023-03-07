//Realiza un programa que reciba dos números por teclado e indique cuál es mayor o si son iguales.

alert("Este programa pide dos numeros y calcula cual es mayor");

var numero1 = Number (prompt("Ingrese numero 1"));
var numero2 = Number (prompt("Ingrese numero 2"));

if (isNaN(numero1)|| numero1 <=0){
    console.log ("Ingrese un valor valido"); 
}if (isNaN(numero2)|| numero2 <=0){
        console.log ("Ingrese un valor valido"); 
}else if (numero1 > numero2){
    console.log("Numero 1 es mayor que numero 2")
}else if (numero1 < numero2){
    console.log("Numero 2 es mayor que numero 1")
}else {
    console.log("Ambos numeros son iguales")
}