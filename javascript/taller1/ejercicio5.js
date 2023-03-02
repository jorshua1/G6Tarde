let not1 = parseInt(prompt("Ingrese la nota 1:"));
let not2 = parseInt(prompt("Ingrese la nota 2:"));
let not3 = parseInt(prompt("Ingrese la nota 3:"));
let not4 = parseInt(prompt("Ingrese la nota 4:"));

let not40 = (not1+not2)*0.4;
let not60 = (not3+not4)*0.6;

let prom = (not40+not60)/2
console.log("El promedio del estudiante es: " +prom);
