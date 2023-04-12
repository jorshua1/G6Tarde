/*Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno (comprendidas entre 0 y 10). 
A continuación debe mostrar todas las notas, la nota media, la nota más alta que ha sacado y la menor.*/

let notaAlumno = 0;
let vectorNotas = new Array(5)

for (i = 0; i < vectorNotas.length; i++) {

    if(isNaN(notaAlumno)){
        console.log("Por favor ingrese un valor valido")
    }
    notaAlumno = parseInt(prompt("Por favor ingrese las notas del estudiante."));
}