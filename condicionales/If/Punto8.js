let vPromedioMateria01; //Matematicas
let vExamenMate = parseFloat(prompt("Ingrese la nota del examen de Matematicas"));
let vPromedioExamenMate = vExamenMate * 0.90;
let vTareaM1 = parseFloat(prompt("Ingrese la nota de la tarea 1 de Matematicas"));
let vTareaM2 = parseFloat(prompt("Ingrese la nota de la tarea 2 de Matematicas"));
let vTareaM3 = parseFloat(prompt("Ingrese la nota de la tarea 3 de Matematicas"));
let vPromedioTarea = ((vTareaM1 + vTareaM2 + vTareaM3) / 3 )* 0.10;
vPromedioMateria01 = (vPromedioExamenMate + vPromedioTarea);

let vPromedioMateria02; //Fisica
let vExamenFisica = parseFloat(prompt("Ingrese la nota del examen de Fisica"));
let vPromedioExamenFisica = vExamenFisica * 0.80;
let vTareaF1 = parseFloat(prompt("Ingrese la nota de la tarea 1 de Fisica"));
let vTareaF2 = parseFloat(prompt("Ingrese la nota de la tarea 2 de Fisica"));
let vPromedioTareaF = ((vTareaF1 + vTareaF2 ) / 2 )* 0.20;
vPromedioMateria02 = (vPromedioExamenFisica + vPromedioTareaF);

let vPromedioMateria03; //Quimica
let vExamenQuimica = parseFloat(prompt("Ingrese la nota del examen de Quimica"));
let vPromedioExamenQuimica = vExamenQuimica * 0.85;
let vTareaQ1 = parseFloat(prompt("Ingrese la nota de la tarea 1 de Quimica"));
let vTareaQ2 = parseFloat(prompt("Ingrese la nota de la tarea 2 de Quimica"));
let vTareaQ3 = parseFloat(prompt("Ingrese la nota de la tarea 3 de Quimica"));
let vPromedioTareaQ = ((vTareaQ1 + vTareaQ2 + vTareaQ3 ) / 3 )* 0.15;
vPromedioMateria03 = (vPromedioExamenFisica + vPromedioTareaF);

let vTotalTodasM = (vPromedioMateria01 + vPromedioMateria02 + vPromedioMateria03) / 3;
     alert("El promedio de matematicas es = " + PromedioMateria01 + '\n' + "El promedio de fisica es = " + vPromedioMateria02 + '\n' + "El promedio de quimica es = " + vPromedioMateria03 + '\n' + "El promedio general es = " + vTotalTodasM)