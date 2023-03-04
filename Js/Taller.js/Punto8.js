//-------------------------EJERCICIO #8---------------------------

//Matematicas

alert("Ingresar valores de 1-5");
let exaMat = parseInt(prompt("Ingrese el resultado del examen de matematicas"));
exaMat = exaMat * 0.9;

let tarea1Mat = parseInt(prompt("Ingrese la nota del taller 1 de matematicas"));
let tarea2Mat = parseInt(prompt("Ingrese la nota del taller 2 de matematicas"));
let tarea3Mat = parseInt(prompt("Ingrese la nota del taller 3 de matematicas"));

let promedioTareaMate = ((tarea1Mat + tarea2Mat + tarea3Mat) / 3) * 0.1;

promedioMate = exaMat + promedioTareaMate;

alert("El promedio en la materia de matematicas es de " + promedioMate);


//Fisica

let exaFis = parseInt(prompt("Ingrese el examen de fisica"));
exaFis = exaFis * 0.8;

let tarea1Fis = parseInt(prompt("Ingrese la nota del taller 1 de fisica"));
let tarea2Fis = parseInt(prompt("Ingrese la nota del taller 2 de fisica"));

let promedioTareaFis = ((tarea1Fis + tarea2Fis) / 2) * 0.2;

promedioFis = exaFis + promedioTareaFis;

alert("El promedio en la materia de fisica es de "+ promedioFis);


//Quimica

let exaQuim = parseInt(prompt("Ingrese el examen de qumica"));
exaQuim = exaQuim * 0.85

let tarea1Quim = parseInt(prompt("Ingrese la nota del taller 1 de quimica"));
let tarea2Quim = parseInt(prompt("Ingrese la nota del taller 2 de quimica"));
let tarea3Quim = parseInt(prompt("Ingrese la nota del taller 3 de quimica"));

promedioTareaQuim = ((tarea1Quim + tarea2Quim + tarea3Quim) / 3) * 0.15;

promedioQuim = exaQuim + promedioTareaQuim;

alert("El promedio en la materia de quimica es de " + promedioQuim);

// promedio de las 3 materias

let promedioGen = (promedioFis + promedioMate + promedioQuim)/3;

alert("El promedio general en las 3 materias fue de "+promedioGen);