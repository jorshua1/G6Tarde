//Escribir un programa que pida al usuario un numero entero positivo y muestre en pantalla todos los numeros impares desde 1 hasta ese numero 

var numero = parseInt(prompt("Ingrese numero"))
var i = parseInt
var impar = parseInt
while(isNaN(numero) || numero == " "){
    alert("Ingrese dato valido")
    var numero = parseInt(prompt("Ingrese numero"))
}

for (i = 1; i<=numero; i++){
    if (i %2===1){
    impar = i
    console.log(impar)
}}