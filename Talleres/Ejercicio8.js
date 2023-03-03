//Matematicas
let examenM = parseInt(prompt("Ingrese la nota del examen"));
let nota1M = parseInt(prompt("Ingrese la nota de la primera tarea"));
let nota2M = parseInt(prompt("Ingrese la nota de la segunda tarea"));
let nota3M = parseInt(prompt("Ingrese la nota de la tercera tarea"));

let operacionEM = examenM * 0.9;
let operacionTM = (nota1M + nota2M + nota3M/3) * 0.1;
let operacionFm = (operacionEM + operacionTM );

console.log(operacionFm);

//Fisica
let examenF = parseInt(prompt("Ingrese el examen de Fisica"));
let nota1F = parseInt(prompt("Ingrese la prmera nota de Fisica"));
let nota2F = parseInt(prompt("Ingrese la segunda nota de Fisica"));

let operacionEF = examenF * 0.8
let operacionTF = (nota1F + nota2F/2) * 0.2;
let operacionFF = (operacionEF + operacionTF);

console.log(operacionFF);

//Quimica
let examenQ = parseInt(prompt("Ingrese el examen de Quimica"));
let nota1Q = parseInt(prompt("Ingrese la prmera nota de Quimica"));
let nota2Q = parseInt(prompt("Ingrese la segunda nota de Quimica"));

let operacionEQ = examenQ * 0.85
let operacionTQ = (nota1Q + nota2Q/3) * 0.15;
let operacionFQ = (operacionEQ + operacionTQ);

console.log(operacionFQ);

alert("Su nota final en matematicas es: " + operacionFm)
alert("Su nota final en fisica es: " + operacionFF)
alert("Su nota final en Quimica es: " + operacionFQ)

