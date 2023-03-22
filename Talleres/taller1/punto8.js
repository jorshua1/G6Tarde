
//Calificación Matemáticas

let examenMat = parseFloat(prompt("¿Cuánto sacó en el examen de Matemáticas?"))*0.9;

let tareaMat1 = parseFloat(prompt("¿Cuánto sacó en la primera tarea de Matemáticas?"));
let tareaMat2 = parseFloat(prompt("¿Cuánto sacó en la segunda tarea de Matemáticas?"));
let tareaMat3 = parseFloat(prompt("¿Cuánto sacó en la tercera tarea de Matemáticas?"));

let promedioTareasMat = (tareaMat1+tareaMat2+tareaMat3)*(1/30);

let notaMat = examenMat+promedioTareasMat;

alert("El estudiante tuvo una nota de: " + notaMat + " en Matemáticas");

//Calificación Física

let examenFis = parseFloat(prompt("¿Cuánto sacó en el examen de física?"))*0.8;

let tareaFis1 = parseFloat(prompt("¿Cuánto sacó en la primera tarea de Física?"));
let tareaFis2 = parseFloat(prompt("¿Cuánto sacó en la segunda tarea de Física?"));

let promedioTareasFis = (tareaFis1+tareaFis2)*0.1;

let notaFis = examenFis+promedioTareasFis;

alert("El estudiante tuvo una nota de: " + notaFis + " en Física");

//Calificación Química

let examenQui = parseFloat(prompt("¿Cuánto sacó en el examen de Química?"))*0.85;

let tareaQui1 = parseFloat(prompt("¿Cuánto sacó en la primera tarea de Química?"));
let tareaQui2 = parseFloat(prompt("¿Cuánto sacó en la segunda tarea de Química?"));
let tareaQui3 = parseFloat(prompt("¿Cuánto sacó en la tercera tarea de Química?"));

let promedioTareasQui = ((tareaQui1+tareaQui2+tareaQui3)/3)*0.15;

let notaQui = examenQui+promedioTareasQui;

alert("El estudiante tuvo una nota de: " + notaQui + " en Química");

//Resumen calificaciones finales

alert("Matemáticas: " + notaMat + " - Física: " + notaFis + " - Química: " + notaQui);

let promedioGeneral = (notaMat+notaFis+notaQui)/3;

alert("El promedio general del estudiante es: " + promedioGeneral);