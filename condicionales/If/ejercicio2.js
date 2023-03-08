//Crea un programa que pida al usuario dos números y muestre el resultado de su división. Si el segundo número es 0, debe mostrar un mensaje de error.

alert("Este programa pide dos numeros y muestra su devision");

var numero1 = Number (prompt("Ingrese numero 1"));
var numero2 = Number (prompt("Ingrese numero 2"));
var resultado = numero1 / numero2

if (isNaN(numero1)|| numero1 <=0){
    console.log ("Ingrese un valor valido")
}if (isNaN(numero2)|| numero2 <=0){
        console.log ("Error")
}else if (resultado >=0){
    console.log("El resultado de la division es = " + resultado)
}