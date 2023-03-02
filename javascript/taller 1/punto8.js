// punto 8;
let notaexamenm=parseInt(prompt("ingrese la nota de del examen de matematicas"));
let tarea1m=parseInt(prompt("ingrese la nota de la primera tarea de materamticas"));
let tarea2m=parseInt(prompt("ingrese la nota de la segunda tarea de materamticas"));
let tarea3m=parseInt(prompt("ingrese la nota de la tercera tarea de materamticas"));
let notaexamenf=parseInt(prompt("ingrese la nota de del examen de fisica"));
let tarea1f=parseInt(prompt("ingrese la nota de la primera tarea de fisica"));
let tarea2f=parseInt(prompt("ingrese la nota de la segunda tarea de fisca"));
let notaexamenq=parseInt(prompt("ingrese la nota de del examen de quimica"));
let tarea1q=parseInt(prompt("ingrese la nota de la primera tarea de quimica"));
let tarea2q=parseInt(prompt("ingrese la nota de la segunda tarea de quimica"));
let tarea3q=parseInt(prompt("ingrese la nota de la tercera tarea de quimica"));
let promediom=(tarea1m+tarea2m+tarea3m)/3;
let promediof=(tarea1f+tarea2f)/2;
let promedioq=(tarea1q+tarea2q+tarea3q)/3;
let notafinalmate=(notaexamenm*0.9)+(promediom*0.1);
let notafinalfisica=(notaexamenf*0.8)+(promediof*0.2);
let notafinalquimica=(notaexamenq*0.85)+(promedioq*0.15);
console.log(notaexamenm);
console.log(notafinalfisica);
console.log(notafinalquimica);


