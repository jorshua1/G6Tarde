/* Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno (comprendidas entre 0 y 10). 
A continuación debe mostrar todas las notas, la nota media, la nota más alta que ha sacado y la menor. */
let notas = new Array(5);
for (i = 0; i < notas.length; i++) {
    notas[i] = prompt(`ingrese la nota ${i + 1}`)
} console.log(notas);
let mayor = 0;
LET MENOR;
LET MEDIA = 0;
IF(NOTAS[I] > MAYOR)
{
    MAYOR = NOTAS[I]
}
IF(I === 0){
    MENOR = NOTAS[I]
}ELSE IF(NOTAS[I] < MENOR){
    MENOR = NOTAS[I]
}
MEDIA += NOTAS[I]
}
MEDIA = MEDIA / 5

/*EJERCICIO 4: Programa que declare un vector de diez elementos enteros y
 pida números para rellenarlo hasta que se llene el vector o se introduzca un número negativo.
Entonces se debe imprimir el vector (sólo los elementos introducidos).*/
const tam = 10; // declaramos el tamaño del vector
let vector = new Array(tam); // declaramos el vector

// Pedimos al usuario que ingrese los números para llenar el vector
let i = 0;
while (i < tam) {
    let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    if (num < 0) {
        break; // Si el número es negativo, salimos del ciclo
    }
    vector[i] = num;
    i++;
}

// Imprimimos el vector
console.log("El vector es: ");
for (let j = 0; j < i; j++) {
    console.log(vector[j]);
}
/*EJERCICIO 5: Hacer un programa que inicialice un vector de números con valores aleatorios,
 y posterior ordene los elementos de menor a mayor.*/

const tam = 10; // Tamaño del vector
let vector = new Array(tam); // Declaramos el vector

// Llenamos el vector con números aleatorios
for (let i = 0; i < tam; i++) {
    vector[i] = Math.floor(Math.random() * 100); // Números aleatorios entre 0 y 99
}

// Imprimimos el vector original
console.log("Vector original: " + vector);

// Ordenamos el vector de menor a mayor sin usar sort
for (let i = 0; i < tam - 1; i++) {
    for (let j = i + 1; j < tam; j++) {
        if (vector[i] > vector[j]) {
            // Intercambiamos los elementos i y j
            let aux = vector[i];
            vector[i] = vector[j];
            vector[j] = aux;
        }
    }
}

// Imprimimos el vector ordenado
console.log("Vector ordenado: " + vector);

/*EJERCICIO 6: Crea un programa que pida un número al usuario un número de mes (por ejemplo, el 4)
 y diga cuántos días tiene (por ejemplo, 30) y el nombre del mes. Debes usar un vector. 
 Para simplificarlo vamos a suponer que febrero tiene 28 días.*/
// Declaramos un vector con los días de cada mes (febrero tiene 28 días)
const diasDelMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Pedimos al usuario que ingrese el número de mes
let mes = prompt("Ingrese el número de mes (1-12): ");

// Convertimos la entrada a un número entero y validamos que sea un valor válido
mes = parseInt(mes);
if (mes < 1 || mes > 12 || isNaN(mes)) {
    console.log("Número de mes inválido.");
} else {
    // Obtenemos el número de días del mes ingresado
    let dias = diasDelMes[mes];

    // Imprimimos el número de días y el nombre del mes correspondiente
    switch (mes) {
        case 1:
            console.log("Enero tiene " + dias + " días.");
            break;
        case 2:
            console.log("Febrero tiene " + dias + " días.");
            break;
        case 3:
            console.log("Marzo tiene " + dias + " días.");
            break;
        case 4:
            console.log("Abril tiene " + dias + " días.");
            break;
        case 5:
            console.log("Mayo tiene " + dias + " días.");
            break;
        case 6:
            console.log("Junio tiene " + dias + " días.");
            break;
        case 7:
            console.log("Julio tiene " + dias + " días.");
            break;
        case 8:
            console.log("Agosto tiene " + dias + " días.");
            break;
        case 9:
            console.log("Septiembre tiene " + dias + " días.");
            break;
        case 10:
            console.log("Octubre tiene " + dias + " días.");
            break;
        case 11:
            console.log("Noviembre tiene " + dias + " días.");
            break;
        case 12:
            console.log("Diciembre tiene " + dias + " días.");
            break;
    }
}

/*EJERCICIO 7: Programa que declare tres vectores ‘vector1’, ‘vector2’ y ‘vector3’ de cinco enteros cada uno,
 pida valores para ‘vector1’ y ‘vector2’ y calcule vector3=vector1+vector2.*/
// Declaramos los vectores vector1, vector2 y vector3
const vector1 = new Array(5);
const vector2 = new Array(5);
const vector3 = new Array(5);

// Pedimos al usuario que ingrese los valores para vector1 y vector2
console.log("Ingrese los valores para vector1:");
for (let i = 0; i < 5; i++) {
    let valor = prompt("Ingrese el valor " + (i + 1) + ": ");
    valor = parseInt(valor);
    vector1[i] = valor;
}

console.log("Ingrese los valores para vector2:");
for (let i = 0; i < 5; i++) {
    let valor = prompt("Ingrese el valor " + (i + 1) + ": ");
    valor = parseInt(valor);
    vector2[i] = valor;
}

// Calculamos el vector3 sumando los valores de vector1 y vector2
for (let i = 0; i < 5; i++) {
    vector3[i] = vector1[i] + vector2[i];
}

// Imprimimos los vectores
console.log("vector1: " + vector1.toString());
console.log("vector2: " + vector2.toString());
console.log("vector3: " + vector3.toString());

/*EJERCICIO 8: Queremos guardar los nombres y la edades de los alumnos de un curso. Realiza un programa que introduzca 
el nombre y la edad de cada alumno. El proceso de lectura de datos terminará cuando se introduzca como nombre 
un asterisco (*) Al finalizar se mostrará los siguientes datos:
 
Todos lo alumnos mayores de edad.
Los alumnos mayores (los que tienen más edad)*/
// Creamos un objeto Alumno con dos propiedades: nombre y edad
class Alumno {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

// Creamos un array vacío para almacenar los alumnos
let alumnos = [];

// Creamos un bucle para que el usuario introduzca los datos de los alumnos
while (true) {
    let nombre = prompt("Introduce el nombre del alumno (para terminar introduce un asterisco):");
    if (nombre === "*") break;
    let edad = prompt("Introduce la edad del alumno:");
    let alumno = new Alumno(nombre, edad);
    alumnos.push(alumno);
}

// Filtramos los alumnos mayores de edad
let mayoresEdad = alumnos.filter(alumno => alumno.edad >= 18);

// Buscamos los alumnos con mayor edad
let maxEdad = 0;
let alumnosMaxEdad = [];

for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].edad > maxEdad) {
        maxEdad = alumnos[i].edad;
        alumnosMaxEdad = [alumnos[i]];
    } else if (alumnos[i].edad === maxEdad) {
        alumnosMaxEdad.push(alumnos[i]);
    }
}

// Mostramos los resultados por consola
console.log("Alumnos mayores de edad:");
mayoresEdad.forEach(alumno => console.log(alumno.nombre));

console.log("Alumnos con mayor edad:");
alumnosMaxEdad.forEach(alumno => console.log(alumno.nombre));