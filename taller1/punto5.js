let valorNota1 = parseFloat(prompt("¿Cuál es la primera nota? (20%)"))*0.2;
let valorNota2 = parseFloat(prompt("¿Cuál es la segunda nota? (20%)"))*0.2;
let valorNota3 = parseFloat(prompt("¿Cuál es la tercera nota? (30%)"))*0.3;
let valorNota4 = parseFloat(prompt("¿Cuál es la cuarta nota? (30%)"))*0.3;

let notaTotal = valorNota1+valorNota2+valorNota3+valorNota4;
alert("La nota final del estudiante es: " + notaTotal);
