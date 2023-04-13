/*Ejercicio 8Permalink
Queremos guardar los nombres y la edades de los alumnos de un curso. 
Realiza un programa que introduzca el nombre y la edad de cada alumno. 
El proceso de lectura de datos terminará cuando se introduzca como nombre 
un asterisco (*) Al finalizar se mostrará los siguientes datos:

Todos lo alumnos mayores de edad.
Los alumnos mayores (los que tienen más edad) */

let nombre = "";
let vectorNombre = new Array();
let edad = 0;
let edades = new Array();
let cantidadAlumnos = 0;
let mayoresEdad = new Array();
let control = 0;

cantidadAlumnos = parseInt(prompt(`Ingrese la cantidad de alumnos que desea registrar.`));
while (isNaN(cantidadAlumnos) || cantidadAlumnos <= 0) {
    cantidadAlumnos = parseInt(prompt(`POR FAVOR ingrese la cantidad de alumnos que desea registrar.`));
}

let i = 0;

do {

    nombre = prompt(`Ingrese el nombre del estudiante # ${i + 1} \nPara terminar de ingresar datos ingrese un (*)`);

    if (nombre[nombre.length - 1] != "*") {
        edad = prompt(`Ingrese la edad del estudiante # ${i + 1}`);
        while (isNaN(edad) || edad <= 0 || edad > 90) {
            edad = prompt(`UPSS, no creo que ${nombre[i + 1]} tenga esa edad \n Ingrese una edad valida`);
        }
        vectorNombre[i] = nombre;
        edades[i] = edad;
    }

    i++;
    control ++;
} while ((nombre[nombre.length - 1] != "*") && (i != cantidadAlumnos))

for (let i = 0; i < edades.length; i++) {
    for (let j = 0; j < edades.length - 1; j++) {

        if (edades[j] < edades[j + 1]) {

            [edades[j], edades[j + 1]] = [edades[j + 1], edades[j]];
            [vectorNombre[j], vectorNombre[j + 1]] = [vectorNombre[j + 1], vectorNombre[j]];

        }
    }

}

i = 0;
while ((i != cantidadAlumnos)) {

    if (edades[i] >= 18) {
        mayoresEdad[i] = vectorNombre[i];
    }
    i++;

}

if (control <= cantidadAlumnos ) {
    alert(`El alumno con mayor edad es: ${vectorNombre[0]} `);
    alert(`Los estudiantes mayores de edad son:  ${mayoresEdad}`);
} else {
    alert(`El programa se cerro porque ingreso un (*). `)
}

