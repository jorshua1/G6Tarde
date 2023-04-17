/*Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno (comprendidas entre 0 y 10). 
A continuación debe mostrar todas las notas, la nota media, la nota más alta que ha sacado y la menor.*/

let notas = [];
let nombres = [];
let alumnos;

alumnos = parseInt(prompt("por indicar la cantidad de estudiantes a evaluar"));
while (isNaN(alumnos) || alumnos < 0){
    alert("Error, el valor ingresado es invalido");
    alumnos = parseInt(prompt("por indicar la cantidad de estudiantes a evaluar"));
}

for (var nombre = 1; nombre < nombres; nombre++) {
    tabla[nombre]=[];
    for (var nota = 0; nota < 5; nota++) {
        tabla[nombre][nota] = prompt("ingrese algo");
    }
}
