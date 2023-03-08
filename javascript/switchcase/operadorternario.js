let nombre = prompt("Ingrese su nombre");
// antes del signo de interrogación es el  condicional if, después del interrogante es lo que se va a realizar y después de los dos puntos es else
let saludo = nombre==="" ? "Ingrese un nombre valido" : "Hola " + nombre

console.log(saludo)

nombre === "" || nombre === "." || typeof nombre === "Number" ? "Ingrese un nombre valido" : nombre === "Miguel" ? "Bienvenido" : "bienvenido invitado"


//par o impar

let numero = Number(prompt("Ingrese un número"))

let parImpar = numero === isNaN ? "Ingrese un nombre valido" : numero%2 === 1 ? "Es un numero impar" : "Es un numero par"

console.log(parImpar)