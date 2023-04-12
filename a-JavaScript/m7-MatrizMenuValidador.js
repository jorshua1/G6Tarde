/*Para este ejemplo, vamos a crear una matriz de 3x3 donde el usuario podrá ingresar valores 
numéricos. Además, vamos a validar que los valores ingresados sean números y que estén 
dentro de un rango específico.

En la primera línea, definimos una matriz vacía matriz donde vamos a almacenar los 
valores ingresados por el usuario.

Luego, creamos dos funciones de validación. esNumero(valor) valida que el valor 
ingresado sea un número, y estaEnRango(valor, min, max) valida que el valor esté 
dentro de un rango específico (en este caso, entre 0 y 100 para los valores de la matriz).

A continuación, creamos*/

// Definimos la matriz
let matriz = [];

// Creamos una función para validar que el valor ingresado sea un número
function esNumero(valor) {
    return !isNaN(valor) && isFinite(valor);
}

// Creamos una función para validar que el valor ingresado esté dentro de un rango específico
function estaEnRango(valor, min, max) {
    return valor >= min && valor <= max;
}

// Creamos una función para mostrar el menú y recibir la opción elegida por el usuario
function mostrarMenu() {
    console.log("1. Ingresar valor");
    console.log("2. Mostrar matriz");
    console.log("3. Salir");
    let opcion = prompt("Elija una opción:");
    return opcion;
}

// Creamos un bucle para mostrar el menú y realizar las acciones correspondientes hasta que el usuario decida salir
while (true) {
    let opcion = mostrarMenu();

    switch (opcion) {
        case "1":
            // Pedimos al usuario que ingrese la posición y el valor
            let fila = prompt("Ingrese la fila (entre 1 y 3):");
            let columna = prompt("Ingrese la columna (entre 1 y 3):");
            let valor = prompt("Ingrese el valor:");

            // Validamos que los valores ingresados sean números y que estén dentro del rango permitido
            if (esNumero(fila) && esNumero(columna) && esNumero(valor) &&
                estaEnRango(fila, 1, 3) && estaEnRango(columna, 1, 3) && estaEnRango(valor, 0, 100)) {

                // Convertimos los valores ingresados a números enteros y los almacenamos en la matriz
                fila = parseInt(fila) - 1;
                columna = parseInt(columna) - 1;
                valor = parseInt(valor);
                matriz[fila] = matriz[fila] || [];
                matriz[fila][columna] = valor;

                console.log(`Valor ${valor} almacenado en la posición [${fila + 1}, ${columna + 1}]`);
            } else {
                console.log("Los valores ingresados no son válidos.");
            }
            break;

        case "2":
            // Mostramos la matriz en la consola
            console.log(matriz);
            break;

        case "3":
            // Salimos del bucle
            console.log("Programa finalizado.");
            return;

        default:
            console.log("Opción no válida.");
            break;
    }
}