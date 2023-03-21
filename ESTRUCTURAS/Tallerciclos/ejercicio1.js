/*
Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese número.
*/
let numeroEntero = parseInt(prompt("ingrese el numero entero positivo"));
while(isNaN(numeroEntero) || numeroEntero<0){
     numeroEntero = parseInt(prompt("ingrese el numero entero positivo"))
}
for(i = 0; i < numeroEntero ; i++ ){
if(i % 2 == 1){
    console.log(i)
}
}
