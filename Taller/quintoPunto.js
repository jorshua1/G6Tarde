let nota1=parseFloat(prompt("Ingrese la primera nota del estudiante:"));
let nota2=parseFloat(prompt("Ingrese la segunda nota del estudiante:"));
let nota3=parseFloat(prompt("Ingrese la tercera nota del estudiante:"));
let nota4=parseFloat(prompt("Ingrese la cuarta nota del estudiante:"));

let notaFinal=((((nota1 + nota1)/2)*0.4)+(((nota3+nota4)/2)*0.6));
console.log("La nota final del estudiante es: ", notaFinal);