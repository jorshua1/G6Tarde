let examenMat = parseFloat(prompt("Ingrese la nota del examen de matematicas"));
let tareaUnoMat = parseFloat(prompt("Ingrese la nota de la tarea uno de matematicas"));
let tareaDosMat = parseFloat(prompt("Ingrese la nota de la tarea dos de matematicas"));
let tareaTresMat = parseFloat(prompt("Ingrese la nota de la tarea tres de matematicas"));

let notaTotalMat = parseFloat((examenMat*0.9) + ((tareaUnoMat+tareaDosMat+tareaTresMat)/3*0.1));

alert("La nota final de matematicas es: " + notaTotalMat);


let examenFis = parseFloat(prompt("Ingrese la nota del examen de fisica"));
let tareaUnoFis = parseFloat(prompt("Ingrese la nota de la tarea uno de fisica"));
let tareaDosFis = parseFloat(prompt("Ingrese la nota de la tarea dos de fisica"));

let notaTotalFis = parseFloat((examenFis*0.8) + ((tareaUnoFis+tareaDosFis)/2*0.2));

alert("La nota final de fisica es: " + notaTotalFis);

let examenQui = parseFloat(prompt("Ingrese la nota del examen de quimica"));
let tareaUnoQui = parseFloat(prompt("Ingrese la nota de la tarea uno de quimica"));
let tareaDosQui = parseFloat(prompt("Ingrese la nota de la tarea dos de quimicas"));
let tareaTresQui = parseFloat(prompt("Ingrese la nota de la tarea tres de quimica"));

let notaTotalQui = parseFloat((examenQui*0.85) + ((tareaUnoQui+tareaDosQui+tareaTresQui)/3*0.15));

alert("La nota final de quimica es: " + notaTotalMat);

let promedioGeneral = parseFloat((notaTotalMat + notaTotalQui + notaTotalFis)/3);
alert("El promedio general de las tres materia es: " + promedioGeneral);