/*Queremos guardar los nombres y la edades de los alumnos de un curso. 
Realiza un programa que introduzca el nombre y la edad de cada alumno. 
El proceso de lectura de datos terminará cuando se introduzca como nombre un asterisco (*) Al finalizar se mostrará los siguientes datos:

Todos lo alumnos mayores de edad.
Los alumnos mayores (los que tienen más edad)*/

let nombre;
let edad;
let cont = 0;
let estudiantes = [];
let edades = [];
let mayores_edad = [];

do {
    nombre = "";
    edad = 0;

    nombre = prompt("Escriba el nombre del alumno");
    while (!isNaN(nombre)) {
        alert("El valor ingrsado no es tipo texto");
        nombre = prompt("Escriba el nombre del alumno");
    }
    estudiantes[cont] = nombre;

    if (nombre !== "*") {

        edad = parseInt(prompt("Por favor digite la edad del estudiante " + estudiantes[cont]));
        while (isNaN(edad) || edad < 0) {
            alert("El valor ingrsado no es tipo texto");
            edad = parseInt(prompt("Por favor digite la edad del estudiante " + estudiantes[cont]));
        }

        edades[cont] = edad;
        for (let i = 0; i < estudiantes.length; i++) {
            for (let i = 0; i < estudiantes.length; i++) {
                if (edades[i] < edades[i + 1]) {
                    aux = edades[i]; edades[i] = edades[i + 1]; edades[i + 1] = aux;
                    aux = estudiantes[i]; estudiantes[i] = estudiantes[i + 1]; estudiantes[i + 1] = aux;
                }
            }
        }

        if (edad >= 18) {
            let x = 0;
            mayores_edad[x] = edad;
            x++;
        }
    }

    cont++;
} while (nombre !== "*");

console.table(mayores_edad);



