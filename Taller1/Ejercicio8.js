Materia1 = "Matematicas"

let Examen1M = parseFloat(prompt("Dijite su nota examen1M"))*0.9;
let Tarea1M = parseFloat(prompt("Dijite su nota tarea1"));
let Tarea2M = parseFloat(prompt("Dijite su nota tarea2"));
let Tarea3M = parseFloat(prompt("Dijite su nota tarea3"));
let PromedioTareasM = ((Tarea1M+Tarea2M+Tarea3M)/3)*0.1
let NotaMatematicas = (Examen1M+PromedioTareasM)
let Examen1F  = parseFloat(prompt("Dijite su nota examen1F"))*0.8;
let Tarea1F = parseFloat(prompt("Dijite su nota tarea1F"));
let Tarea2F = parseFloat(prompt("Dijite su nota tarea2F"));
let PromedioTareasF = ((Tarea1F+Tarea2F)/2)*0.2;
let NotaFisica = (Examen1F+PromedioTareasF);
let Examen1Q = parseFloat(prompt("Dijite su nota examen1Q"))*0.85;
let Tarea1Q = parseFloat(prompt("Dijite su nota tarea1Q"));
let Tarea2Q = parseFloat(prompt("Dijite su nota tarea2Q"));
let Tarea3Q = parseFloat(prompt("Dijite su nota tarea3Q"));
let PromedioTareasQ = ((Tarea1Q+Tarea2Q+Tarea3Q)/3)*0.15
let NotaQuimica = (Examen1Q+PromedioTareasQ)

let PromedioTotalMaterias = (NotaQuimica+NotaMatematicas+NotaFisica)/3;
console.log ("su nota de matematicas es", NotaMatematicas)
console.log (NotaFisica)
console.log (NotaQuimica)
console.log (PromedioTotalMaterias)