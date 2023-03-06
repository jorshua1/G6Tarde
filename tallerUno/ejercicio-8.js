/*Un alumno desea saber cual será su promedio general en las tres materias más dificiles
que cursa y cual será el promedio que obtendrá en cada una de ellas. Estas materias se
evalúan como se muestra a continuanción.

La calificación de matematicas se otiene de la siguiente manera:
Examen 90%
Promedio de tareas 10%
En esta materia se pidieron un promedio de tres tareas.

La calificacion de fisica se obtiene de la siguiente manera:
Examen 80%
Promedio de tareas 20%
En esta materia se pidieron un promedio de dos tareas.

La calificacion ed quimica se obtiene de la siguiente manera:
Examen 85%
Promedio de tareas 15%
En esta matertia se pidieron un promedio de tres tareas.*/

let examenMatematica = parseFloat(prompt("Por favor ingese nota de examen de matematica:"));
let tareaUnoMatematica = parseFloat(prompt(" Por favor ingrese nota de tarea uno matematica"));
let tareaUDosMatematica = parseFloat(prompt(" Por favor ingrese nota de tarea dos matematica"));
let tareaTresMatematica = parseFloat(prompt(" Por favor ingrese nota de tarea tres matematica"));

let examenFisica = parseFloat(prompt("Por favor ingese nota de examen de fisica:"));
let tareaUnoFisica = parseFloat(prompt(" Por favor ingrese nota de tarea uno fisica"));
let tareaUDosFisica = parseFloat(prompt(" Por favor ingrese nota de tarea dos fisica"));

let examenQuimica = parseFloat(prompt("Por favor ingese nota de examen de quimica:"));
let tareaUnoQuimica = parseFloat(prompt(" Por favor ingrese nota de tarea uno quimica"));
let tareaUDosQuimica = parseFloat(prompt(" Por favor ingrese nota de tarea dos quimica"));
let tareaTresQuimica = parseFloat(prompt(" Por favor ingrese nota de tarea tres quimica"));

notaExamenMatematica = (examenMatematica/100)*90;
notaTareaMatematica = (((tareaUnoMatematica + tareaUDosMatematica + tareaTresMatematica)/3)/100)*10;
promedioMatematica = notaExamenMatematica + notaTareaMatematica;

notaExamenFisica = (examenFisica/100)*80;
notaTareaFisica = (((tareaUnoFisica+ tareaUDosFisica)/2)/100)*20;
promedioFisica = notaExamenFisica + notaTareaFisica;

notaExamenQuimica = (examenQuimica/100)*85;
notaTareaQuimica = (((tareaUnoQuimica+ tareaUDosQuimica+ tareaTresQuimica)/3)/100)*15;
promedioQuimica = notaExamenQuimica + notaTareaQuimica;

promedioTotal= promedioMatematica + promedioFisica + promedioQuimica;

console.log(" los promedio que obtendra de las materias son : Matematicas = " + promedioMatematica + "; Fisica = " + promedioFisica + "; Quimica = " + promedioQuimica + " y un promedio total de : " + promedioTotal);

