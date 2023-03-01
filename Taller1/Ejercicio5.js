alert("Ingrese valores decimales de 1 a 5");
let cal1=parseFloat(prompt("Ingrese la nota 1"));
let cal2=parseFloat(prompt("Ingrese la nota 2"));
let cal3=parseFloat(prompt("Ingrese la nota 3"));
let cal4=parseFloat(prompt("Ingrese la nota 4"));

cal1 = cal1*0.3;
cal2=cal2*0.3;
cal3=cal3*0.2;
cal4=cal4*0.2;

let promedio = (cal1+cal2+cal3+cal4);

console.log("el promedio del estudiante es de "+promedio);