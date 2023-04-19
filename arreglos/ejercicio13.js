/*Queremos guardar los nombres y la edades de los alumnos de un curso. 
Realiza un programa que introduzca el nombre y la edad de cada alumno. 
El proceso de lectura de datos terminará cuando se introduzca como nombre un asterisco (*) 
Al finalizar se mostrará los siguientes datos:

-Todos los alumnos mayores de edad.
-Los alumnos mayores (los que tienen más edad)*/
/*
let nombresAlumnos = [];
let edadAlumnos = [];
let a = 0;

do {
    nombresAlumnos[a] = prompt("Ingrese el nombre del alumno (* para salir del programa)");
    while (!isNaN(nombresAlumnos[a])) {
        nombresAlumnos[a] = prompt("Ingrese el nombre valido");
    }

    edadAlumnos[a] = prompt("Ingrese la edad del alumno");
    while (isNaN(edadAlumnos[a]) || edadAlumnos[a] < 0 || edadAlumnos[a] > 100) {
        edadAlumnos[a] = prompt("Ingrese una edad valida");
    }
    
    a = a + 1;
} while (nombresAlumnos[a - 1] !== "*");
console.log("\n" + nombresAlumnos + "\n" + edadAlumnos);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let matrizAlumnos = [];
let contador = 0;
let control = true;

while (control) {
    matrizAlumnos[contador] = prompt("Introduce el nombre del alumno (escriba * para salir del programa)");
    while(!isNaN(matrizAlumnos[contador])){
        matrizAlumnos[contador] = prompt("Introduce el nombre correcto");

    }
    if(matrizAlumnos [contador] === "*"){
        control = false;
    }
    matrizAlumnos [contador] = [];

    for(a = 0; a < 1; a++){
        matrizAlumnos [contador] [a] = parseInt(prompt("Ingresa la edad de " + matrizAlumnos[contador]));
        while(isNaN(matrizAlumnos[contador][a]) || matrizAlumnos[contador][a] < 0 ){
            matrizAlumnos [contador] [a] = parseInt(prompt("Ingresa una edad valida"));
        }
    }

contador = contador + 1;
}
console.log();
/*
let matriz = [];

for(fila = 0; fila <=2; fila++){
    console.log(`creando fila ${ fila + 1 }`);
    matriz [fila] = [];
    for(columna = 0; columna < 2; columna++){
        console.log(`creando columnas ${ columna + 1 }`);
        matriz [fila] [columna] = prompt("Ingrese un numero");
    }
}
console.log(matriz);


