//MATEMATICAS

let notaExamenM = parseFloat(prompt("Ingrese la nota del examen de Matematicas"));
let nota1M = parseFloat(prompt("Ingrese la nota del primer trabajo"));
let nota2M = parseFloat(prompt("Ingrese la nota del segundo trabajo"));
let nota3M = parseFloat(prompt("Ingrese la nota del tercer trabajo"));
let notaTrabajosM = (nota1M+nota2M+nota3M)*0.1/3;
let totalExamen = notaExamenM*0.9;
let definitiva = totalExamen+notaTrabajosM;
console.log(definitiva);

//FISICA

let notaExamenF = parseFloat(prompt("Ingrese la nota del examen de Fisica"));
let nota1F = parseFloat(prompt("Ingrese la nota del primer trabajo"));
let nota2F = parseFloat(prompt("Ingrese la nota del segundo trabajo"));
let notaTrabajosF = (nota1F+nota2F)*0.2/2;
let totalExamenF = notaExamenF*0.8;
let definitivaF = totalExamenF+notaTrabajosF;
console.log(definitivaF);

//QUIMICA

let notaExamenQ = parseFloat(prompt("Ingrese la nota del examen de Quimica"));
let nota1Q = parseFloat(prompt("Ingrese la nota del primer trabajo"));
let nota2Q = parseFloat(prompt("Ingrese la nota del segundo trabajo"));
let nota3Q = parseFloat(prompt("Ingrese la nota del tercer trabajo"));
let notaTrabajosQ = (nota1Q+nota2Q+nota3Q)*0.15/3;
let totalExamenQ = notaExamenQ*0.85;
let definitivaQ = totalExamenQ+notaTrabajosQ;
console.log(definitivaQ);





