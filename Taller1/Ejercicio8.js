//Matematicas

alert("Ingresar valores de 1-5");
let examenMate=parseInt(prompt("Ingrese el examen de matematicas"));
examenMate=examenMate*0.9;

let tarea1Mate=parseInt(prompt("Ingrese la nota del taller 1 de matematicas"));
let tarea2Mate=parseInt(prompt("Ingrese la nota del taller 2 de matematicas"));
let tarea3Mate=parseInt(prompt("Ingrese la nota del taller 3 de matematicas"));

promedioTareaMate=((tarea1Mate+tarea2Mate+tarea3Mate)/3)*0.1;

promedioMate= examenMate+promedioTareaMate;

alert("El promedio en la materia de matematicas es de "+promedioMate);

//Fisica
let examenFisica=parseInt(prompt("Ingrese el examen de fisica"));
examenFisica=examenFisica*0.8;

let tarea1Fisi=parseInt(prompt("Ingrese la nota del taller 1 de fisica"));
let tarea2Fisi=parseInt(prompt("Ingrese la nota del taller 2 de fisica"));

promedioTareaFisi= ((tarea1Fisi+tarea2Fisi)/2)*0.2;

promedioFisi= examenFisica+promedioTareaFisi;

alert("El promedio en la materia de fisica es de "+promedioFisi);

//Quimica
let examenQuimica=parseInt(prompt("Ingrese el examen de qumica"));
examenQuimica=examenQuimica*0.85

let tarea1Quimi=parseInt(prompt("Ingrese la nota del taller 1 de quimica"));
let tarea2Quimi=parseInt(prompt("Ingrese la nota del taller 2 de quimica"));
let tarea3Quimi=parseInt(prompt("Ingrese la nota del taller 3 de quimica"));

promedioTareaQuimi=((tarea1Quimi+tarea2Quimi+tarea3Quimi)/3)*0.15;

promedioQuimi= examenQuimica+promedioTareaQuimi;

alert("El promedio en la materia de quimica es de "+promedioQuimi);

// promedio de las 3 materias

let promedioGeneral = (promedioFisi+promedioMate+promedioQuimi)/3;

alert("El promedio general en las 3 materias fue de "+promedioGeneral);