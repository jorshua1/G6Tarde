//Un oprador ternario es un condicional de una sola linea 

let nombre = prompt("Ingrese su nombre");
//Lo ideal es usar una sola condicion y no pasarse de dos 
let saludo = nombre ==="" ? "Ingrese un nombre valido " : "Hola " + nombre 

console.log(saludo);

nombre ==="" || nombre ==="." || typeof nombre ==="Number" ? "ingrese un nomber valido " : nombre === "Nicolas" ? "Bienvenido " : "Bienvenido invitado"