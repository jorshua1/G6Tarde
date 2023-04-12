/*En este ejemplo, primero definimos una matriz vacía. Luego creamos dos funciones: 
agregarElemento() que permite al usuario agregar un elemento a la matriz y 
mostrarMatriz() que muestra la matriz actual en una ventana emergente.

Después, creamos un bucle que muestra un menú con tres opciones: agregar un elemento a 
la matriz, mostrar la matriz actual y salir del programa. Dependiendo de la opción 
seleccionada por el usuario, se llama a la función correspondiente.*/

// Definimos una matriz vacía
let matriz = [];

// Creamos una función para agregar un elemento a la matriz
function agregarElemento() {
  let elemento = prompt("Ingrese un elemento para agregar a la matriz:");
  matriz.push(elemento);
  alert("El elemento " + elemento + " ha sido agregado a la matriz.");
}

// Creamos una función para mostrar la matriz actual
function mostrarMatriz() {
  if (matriz.length === 0) {
    alert("La matriz está vacía.");
  } else {
    alert("La matriz actual es: " + matriz);
  }
}

// Creamos un bucle que muestre un menú de opciones hasta que el usuario decida salir
let opcion;
while (opcion !== "3") {
  opcion = prompt("Seleccione una opción:\n\n1. Agregar un elemento a la matriz.\n2. Mostrar la matriz actual.\n3. Salir.");
  
  switch(opcion) {
    case "1":
      agregarElemento();
      break;
    case "2":
      mostrarMatriz();
      break;
    case "3":
      alert("Gracias por utilizar la matriz. ¡Hasta luego!");
      break;
    default:
      alert("Opción inválida. Por favor seleccione una opción válida.");
  }
}