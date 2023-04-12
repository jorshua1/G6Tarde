/*Ejercicio 3 
Se quiere realizar un programa que lea por teclado las 5 notas obtenidas 
por un alumno (comprendidas entre 0 y 10). A continuación debe mostrar 
todas las notas, la nota media, la nota más alta que ha sacado y la menor */

let notas = new Array(5);
let suma = 0;
for(i = 0; i<5; i++){

    notas[i] = parseFloat(prompt(`Ingrese la nota N#${i+1} del estudiante`));

    while(isNaN(notas[i]) || notas[i] < 0 || notas[i] > 10){
        notas[i] = parseFloat(prompt(`Ingrese la nota N#${i+1} del estudiante \n(comprendidas entre 0 y 10)`))
    }
    suma += notas[i];
}

alert(`Las notas del estudiante son ${notas}`);
alert(`Las nota promdeio del estudiante es ${suma/notas.length}`);
alert(`Las nota maxima del estudiante es: ${Math.max(...notas)} y la nota minima es: ${Math.min(...notas)}`);

