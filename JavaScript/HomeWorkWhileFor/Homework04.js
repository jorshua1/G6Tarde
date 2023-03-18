/* 4. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números impares desde 1 hasta ese numero */

var vNumber = parseInt(prompt("Ingrese un numero impar para ver su registros"));

while (isNaN(vNumber) || vNumber <= 0) {
    vNumber = parseInt(prompt("Dato INVALIDO \n \n Ingrese un numero impar"));
}while (vNumber % 2 === 0 || vNumber <= 0) {
    vNumber = parseInt(prompt("Dato INVALIDO \n \n Ingrese un numero impar \n no PAR"));
}for (let vI = 1; vI < vNumber; vI++) {
    alert("Los numeros impares son " + vI + "\n el numero impar escogido es: " + vNumber);
}