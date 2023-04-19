let nombre = prompt("Ingrese su nombre");
let saludo = nombre === ""? " Ingrese un nombre valido" : "Hola "+nombre

console.log(saludo);

let num = Number(prompt("Ingrese un numero"));
isNaN(num) ? "error " : num%2 == 0 ? "Es par" : num === "0" ? "neutro" : "es impar"
