/*
Operador condicional (ternario)
El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos.
Este operador se usa con frecuencia como atajo para la instrucción if.

Sintaxis
condición ? expr1 : expr2

Parámetros
condición
Una expresión que se evalúa como true o false.
expr1, expr2
Expresión con valores de algún tipo.

Descripción
Si la condición es true, el operador retorna el valor de la expr1; de lo contrario, devuelve el valor de expr2. 
Por ejemplo, para mostrar un mensaje diferente en función del valor de la variable isMember, se puede usar esta declaración:*/

let isMember = false;
console.log("La Cuota es de:  " + (isMember ? "$2.00" : "$10.00"));

/*También puedes asignar variables dependiendo del resultado de la condición ternaria:*/

let elvisLives = Math.PI > 4 ? "Sip" : "Nop"
console.log(elvisLives);


/*Operador condicional (ternario) en JavaScript
Si tienes una sentencia corta if else, entonces puedes optar por ir con el operador ternario.
La palabra ternario significa algo compuesto de tres partes.*/

let nombre = ""/*prompt("Ingrese su nombre");*/
let saludo = nombre === "" ? "ingrese un nombre valido" : "Hola " + nombre;
console.log(saludo);

console.log(nombre === "" || nombre === "." || typeof nombre === "Number" ?
    "ingrese un nombre valido" : nombre === "Jeff" ?
        "Bievenido " + nombre : "Bienvenido nuevo usuario" + nombre);


let numero = 0 /*parseFloat(prompt("Por favor ingrese numero."));*/

console.log(isNaN(numero) || numero % 2 == 0 ? "El numero es par" : "El numero es impar");

/*Esta es la sintaxis básica para un operador ternario:
La condición va antes de la ? marca y si es true, entonces el código entre el ? marca y : ejecutaría.
Si la condición es false, se ejecutará el código después de :.

condicion ? if condicion es verdadera : if condicion es falsa*/

const edadMia = 32;
const ciudadano = edadMia >= 18 ? "Puede votar" : "No puede votar";
console.log(ciudadano);

//Comparando con  if-else seria:

const edadSuya = 32;
let ciudadanoDos;

if (edadSuya >= 18) {
    ciudadanoDos = "Puede votar";

} else {
    ciudadanoDos = "No puede votar";
}
console.log(ciudadanoDos);

//condicion ? if condicion es verdadera : if condicion es falsa.

let puntaje = 5;
console.log(puntaje >= 6 ? 'Pasaste' : 'Fallaste');

//Comparando con  if-else seria:
puntaje = 5;
if (puntaje >= 6) {
    console.log('Aprobaste');
    
}
else {
    console.log('Fallaste');
}