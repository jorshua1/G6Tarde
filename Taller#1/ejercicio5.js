let nombre = prompt("ingrese su nombre");
let nota1 = parseFloat(prompt("ingrese la nota#1 con decimales que equivale al 20%"))*0.20;
let nota2 = parseFloat(prompt("ingrese la nota#2 con decimales que equivale al 20%"))*0.20;
let nota3 = parseFloat(prompt("ingrese la nota#3 con decimales que equivale al 30%"))*0.30;
let nota4 = parseFloat(prompt("ingrese la nota#4 con decimales que equivale al 30%"))*0.30;


let totalnotas=(nota1+nota2+nota3+nota4);

alert("Apreciado estudiate: "+ nombre + " su promedio de notas es: " + totalnotas);