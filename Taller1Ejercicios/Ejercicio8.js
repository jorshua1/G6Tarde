let NotExamM = parseFloat(prompt("Ingrese la nota de su examen de matematicas"));
let NotTaMat1 = parseFloat(prompt("Ingrese la nota de su primer tarea de matematicas"));
let NotTaMat2 = parseFloat(prompt("Ingrese la nota de su segunda tarea de matematicas"));
let NotTaMat3 = parseFloat(prompt("Ingrese la nota de su tercer tarea de matematicas"));
let ProExamM = (NotExamM * 0.9);
let ProTareasM = ((NotTaMat1 + NotTaMat2 + NotTaMat3) / 3)*0.1;
let ProGeneMat = (ProExamM + ProTareasM)


let NotExamF = parseFloat(prompt("Ingrese la nota de su examen de fisica"));
let NotTaFis1 = parseFloat(prompt("Ingrese la nota de su primer tarea de fisica"));
let NotTaFis2 = parseFloat(prompt("Ingrese la nota de su segunda tarea de fisica"));
let ProExamF = (NotExamF * 0.8);
let ProTareasF = ((NotTaFis1 + NotTaFis2) / 2)*0.2;
let ProGeneFis = (ProExamF + ProTareasF)


let NotExamQ = parseFloat(prompt("Ingrese la nota de su examen de quimica"));
let NotTaQui1 = parseFloat(prompt("Ingrese la nota de su primer tarea de quimica"));
let NotTaQui2 = parseFloat(prompt("Ingrese la nota de su segunda tarea de quimica"));
let NotTaQui3 = parseFloat(prompt("Ingrese la nota de su tercer tarea de quimica"));
let ProExamQ = (NotExamQ * 0.85);
let ProTareasQ = ((NotTaQui1 + NotTaQui2 + NotTaQui3) / 3)*0.15;
let ProGeneQui = (ProExamM + ProTareasM)

let PromGen = (ProGeneMat + ProGeneFis + ProGeneQui)/3;

console.log("Su promedio de Matematicas es de  "+ProGeneMat);
console.log("Su promedio de fisica es de  "+ProGeneFis);
console.log("Su promedio de quimica es de  "+ProGeneQui);
console.log("Su promedio general es de  "+PromGen);