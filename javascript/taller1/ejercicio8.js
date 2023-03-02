//matematicas
let examenM = parseInt(prompt("Digite la nota del Examen de matematicas"));
let tarM1 = parseInt(prompt("Digite la nota de la tarea 1"));
let tarM2 = parseInt(prompt("Digite la nota de la tarea 2"));
let tarM3 = parseInt(prompt("Digite la nota de la tarea 3"));

let promedioExamenM = examenM * 0.9;
let promedioTareasM = (tarM1 + tarM2 + tarM3) / 3;
let sumaM = promedioTareasM * 0.1;
let totalMatematicas = promedioExamenM + sumaM;

//fisica
let examenF = parseInt(prompt("Digite la nota del Examen de fisica"));
let tarF1 = parseInt(prompt("Digite la nota de la tarea 1"));
let tarF2 = parseInt(prompt("Digite la nota de la tarea 2"));

let promedioExamenF = examenM * 0.8;
let promedioTareasF = (tarF1 + tarF2) / 2;
let sumaF = promedioTareasF * 0.2;
let totalFisica = promedioExamenF + sumaF;

//Quimica
let examenQ = parseInt(prompt("Digite la nota del Examen de quimica"));
let tarQ1 = parseInt(prompt("Digite la nota de la tarea 1"));
let tarQ2 = parseInt(prompt("Digite la nota de la tarea 2"));
let tarQ3 = parseInt(prompt("Digite la nota de la tarea 3"));

let promedioExamenQ = examenQ * 0.85;
let promedioTareasQ = (tarQ1 + tarQ2 + tarQ3) / 3;
let sumaQ = promedioTareasQ * 0.15;
let totalQuimica = promedioExamenQ + sumaQ;

//general
let promedioGeneral = (totalFisica + totalMatematicas + totalQuimica) / 3;

console.log("El promedio de Matematicas es: " + totalMatematicas);
console.log("El promedio de Fisica es: " + totalFisica);
console.log("El promedio de Quimica es: " + totalQuimica);
console.log("El promedio General es: " + promedioGeneral);
