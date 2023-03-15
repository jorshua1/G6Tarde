let nombre = ""/*prompt("Ingrese su nombre");*/
let saludo = nombre === "" ? "ingrese un nombre valido" : "Hola " + nombre;

console.log(saludo);

console.log(nombre === "" || nombre === "." || typeof nombre === "Number" ?
    "ingrese un nombre valido" : nombre === "Jeff" ?
        "Bievenido " + nombre : "Bienvenido nuevo usuario" + nombre);


let numero = 0 /*parseFloat(prompt("Por favor ingrese numero."));*/

console.log(isNaN(numero) || numero % 2 == 0 ? "El numero es par" : "El numero es impar");