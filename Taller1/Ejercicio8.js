//MATEMATICAS
alert("ingresar valores de 1 a 5");
let examenMate=parseInt(prompt("ingrese el examen de matematicas"));

let tarea1Mate=parseInt(prompt("ingrese la nota del taller 1 de matematicas"));
let tarea2Mate=parseInt(prompt("ingrese la nota del taller 2 de matematicas"));
let tarea3Mate=parseInt(prompt("ingrese la nota del taller 3 de matematicas"));

promedioTareaMate=((tarea1Mate+tarea2Mate+tarea3Mate)/3)*0.1;
promedioMate=examenMate+promedioTareaMate;

alert("el promedio en la materia de matematicas es de"+promedioMate);

//FISICA
let examenFisica=parseInt(prompt("ingrese el examen de fisica"));
examenFisica=examenFisica*0.8;

let tarea1Fis=parseInt(prompt("ingrese la nota del taller 1 de fisica"));
let tarea2Fis=parseInt(prompt("ingrese la nota del taller 2 de fisica"));

promedioTareaFis=((tarea1Fis+tarea2Fis)/2)*0.2;
promedioFis=examenFisica+promedioTareaFis;

alert("el promedio en la materia de fisica es de"+promedioFis);

//QUIMICA
let examenQuimica=parseInt(prompt("ingrese el examen de quimica"));
examenQuimica=examenQuimica*0.85;

let tarea1Quim=parseInt(prompt("ingrese la nota del taller 1 de quimica"));
let tarea2Quim=parseInt(prompt("ingrese la nota del taller 2 de quimica"));
let tarea3Quim=parseInt(prompt("ingrese la nota del taller 3 de quimica"));

promedioTareaQuim=((tarea1Quim+tarea2Quim+tarea3Quim)/3)*0.15;
promedioQuim=examenQuimica+promedioTareaQuim;

alert("el promedio en la tarea de Quimica es de"+ promedioQuim);

//promedio de las 3 materias
let promedioGeneral=(promedioMate+promedioFis+promedioQuim)/3;
alert("el promedio general de la 3 materias fue de"+promedioGeneral);

