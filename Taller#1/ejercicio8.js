let nombre = prompt("ingrese su nombre");
let examenMatematicas= parseFloat(prompt("ingrese el valor de su examen de matematicas"))*0.9;
let tareaM1 = parseFloat(prompt("ingrese las nota de la tarea#1"));
let tareaM2 = parseFloat(prompt("ingrese las nota de la tarea#2"));
let tareaM3 = parseFloat(prompt("ingrese las nota de la tarea#3"));
let PromedioTareasMate = ((tareaM1+tareaM2+tareaM3)/3)*0.10;

let defMatematicas = (PromedioTareasMate+examenMatematicas);

alert("Apreciado estudiate: "+ nombre + " la calificacion de Matematicas fue: " + defMatematicas);

let examenFisica= parseFloat(prompt("ingrese el valor de su examen de Fisica"))*0.8;
let tareaF1 = parseFloat(prompt("ingrese las nota de la tarea#1"));
let tareaF2 = parseFloat(prompt("ingrese las nota de la tarea#2"));
let promedioTareasFisica=((tareaF1+tareaF2)/2)*0.20;

let defFisica = (promedioTareasFisica+examenFisica);

alert("Apreciado estudiate: "+ nombre + " la calificacion de Fisica fue: " +defFisica);

let examenQuimica= parseFloat(prompt("ingrese el valor de su examen de Quimica"))*0.85;
let tareaQ1 = parseFloat(prompt("ingrese las nota de la tarea#1"));
let tareaQ2 = parseFloat(prompt("ingrese las nota de la tarea#2"));
let tareaQ3 = parseFloat(prompt("ingrese las nota de la tarea#3"));
let promedioTareasQuimica=((tareaQ1+tareaQ2+tareaQ3)/3)*0.15;

let defQuimica = (promedioTareasQuimica+examenQuimica);

alert("Apreciado estudiate: "+ nombre + " la calificacion de Quimica fue: " +defQuimica);

alert("Apreciado estudiate: "+ nombre + " sus definitivas son las siguientes" + "  Matematicas  " + defMatematicas + "  Fisica  " + defFisica + "  Quimica  " +defQuimica  );