//-------------------------EJERCICIO #1---------------------------

let vNota1 = parseFloat(prompt("Ingrese resultados nota 1"));
let vNota2 = parseFloat(prompt("Ingrese resultados nota 2"));
let vNota3 = parseFloat(prompt("Ingrese resultados nota 3"));
let vNota4 = parseFloat(prompt("Ingrese resultados nota 4"));
let vPromedioCalificaiones;

let vNotas40 = (40 * (vNota1 + vNota2)) / 100;
let vNotas60 = (60 * (vNota3 + vNota4)) / 100;
vPromedioCalificaiones = (vNotas40 + vNotas60) / 2;

    alert("El promedio de calificaciones es =" + vPromedioCalificaiones)