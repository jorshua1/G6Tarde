/*Lo primero que haremos es crear la matriz vacía y luego crear el menú de opciones. El menú 
tendrá cuatro opciones: agregar un número a la matriz, mostrar la matriz completa, mostrar 
la suma de todos los números en la matriz y salir del programa.

Aquí está el código completo con comentarios explicativos en cada paso:

Una vez que ejecutes este código, aparecerá el menú con las opciones disponibles. Puedes 
seleccionar una opción ingresando el número correspondiente y luego presionando Enter. 
Dependiendo de la opción que selecciones, se ejecutará una función diferente.

Si seleccionas la opción "1", se te pedirá que ingreses un número que se agregará a la matriz. 
Si seleccionas la opción "2", se mostrará la matriz completa en la consola. Si seleccionas la 
opción "3", se mostrará la suma de todos los números en la matriz. Si seleccionas la opción 
"4", el programa se cerrará. Si seleccionas una opción inválida, se mostrará un mensaje de 
error y el menú se mostrará nuevamente.*/

// Creamos una matriz vacía
let matriz = [];

// Creamos una función para mostrar el menú
function mostrarMenu() {
    // Mostramos las opciones disponibles
    console.log("1. Agregar número a la matriz");
    console.log("2. Mostrar matriz completa");
    console.log("3. Mostrar suma de todos los números");
    console.log("4. Salir del programa");

    // Pedimos al usuario que seleccione una opción
    let opcion = prompt("Seleccione una opción:");

    // Evaluamos la opción seleccionada por el usuario
    switch (opcion) {
        case "1":
            agregarNumero();
            break;
        case "2":
            mostrarMatriz();
            break;
        case "3":
            mostrarSuma();
            break;
        case "4":
            // Salimos del programa
            console.log("¡Hasta luego!");
            return;
        default:
            // Si el usuario selecciona una opción inválida, mostramos un mensaje de error
            console.log("Opción inválida. Intente nuevamente.");
            break;
    }

    // Mostramos el menú nuevamente
    mostrarMenu();
}

// Creamos una función para agregar un número a la matriz
function agregarNumero() {
    // Pedimos al usuario que ingrese un número
    let numero = prompt("Ingrese un número:");

    // Convertimos el número a un valor numérico y lo agregamos a la matriz
    matriz.push(Number(numero));

    // Mostramos un mensaje de confirmación
    console.log("Número agregado a la matriz.");
}

// Creamos una función para mostrar la matriz completa
function mostrarMatriz() {
    // Mostramos la matriz
    console.log(matriz);
}

// Creamos una función para mostrar la suma de todos los números en la matriz
function mostrarSuma() {
    // Creamos una variable para almacenar la suma
    let suma = 0;

    // Recorremos la matriz y sumamos cada número
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i];
    }

    // Mostramos la suma
    console.log("La suma de todos los números en la matriz es: " + suma);
}

// Ejecutamos la función para mostrar el menú
mostrarMenu();