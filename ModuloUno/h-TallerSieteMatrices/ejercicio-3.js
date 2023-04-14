/*Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno (comprendidas entre 0 y 10). 
A continuación debe mostrar todas las notas, la nota media, la nota más alta que ha sacado y la menor.*/

let notasAlumno;
let vectorNotas = new Array(5);
let notaAlta = 0;
let notaMenor = 10;
let notaMedia = 0;

for (i = 0; i < vectorNotas.length; i++) {

    notasAlumno = "a";/*prompt(`Por favor ingrese nota del alumno:`);*/

    while (isNaN(notasAlumno) || notasAlumno < 0 || notasAlumno > 10) {
        notasAlumno = 5;/*parseInt(prompt(`Por favor: debe ingresar una nota entre el rango de  0 a 10`));*/
    }

    vectorNotas[i] = notasAlumno;
    console.log(vectorNotas);

    notaMedia += notasAlumno;

    if (notasAlumno >= 0) {
        notaAlta = notasAlumno;
    } else { }
    console.log(notaAlta);

    if (notasAlumno < notaMenor) {
        notaMenor = notasAlumno;
    } else { }
    console.log(notaMenor);


}


let notaUno = vectorNotas[0];
let notaDos = vectorNotas[1];
let notaTres = vectorNotas[2];
let notaCuatro = vectorNotas[3];
let notaCinco = vectorNotas[4];

console.log(`
Las notas obtenidas son:
Nota 1: ${notaUno}
Nota 2: ${notaDos}
Nota 3: ${notaTres}
Nota 4: ${notaCuatro}
Nota 5: ${notaCinco}

La nota media es: ${notaMedia / vectorNotas.length}
La nota alta es: ${notaAlta}
La nota menor es: ${notaMenor}`)