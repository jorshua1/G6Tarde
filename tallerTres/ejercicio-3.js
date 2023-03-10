/*
(sentencia switch) Diseñar un algoritmo que lea un número entero entre  1 y 10, y nos
muestre por pantalla el número ingresado en letra (1 = uno). Si el número leido no está
comprendido entre 1 y 10 mostrar un mensaje de error. 
*/

let numero = 0;/*parseInt(Prompt("Por favor ingrese numero"));*/

switch (numero) {
    case 1: console.log(numero + " = uno.")
        break;
    case 2: console.log(numero + " = dos.")
        break;
    case 3: console.log(numero + " = tres.")
        break;
    case 4: console.log(numero + " = cuatro.")
        break;
    case 5: console.log(numero + " = cinco.")
        break;
    case 6: console.log(numero + " = seis.")
        break;
    case 7: console.log(numero + " = siete.")
        break;
    case 8: console.log(numero + " = ocho.")
        break;
    case 9: console.log(numero + " = nueve.")
        break;
    case 10: console.log(numero + " = diez.")
        break;

    default:
        console.log("Error")
}