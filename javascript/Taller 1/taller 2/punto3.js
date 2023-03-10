// Leer el número entero n
const n = parseInt(prompt("Ingrese un número entre 1 y 10:"));

// Verificar que n esté dentro del rango permitido
if (n >= 1 && n <= 10) {
  // Utilizar switch para convertir n a su correspondiente letra en español
  let numeroEnLetra;
  switch (n) {
    case 1:
      numeroEnLetra = "uno";
      break;
    case 2:
      numeroEnLetra = "dos";
      break;
    case 3:
      numeroEnLetra = "tres";
      break;
    case 4:
      numeroEnLetra = "cuatro";
      break;
    case 5:
      numeroEnLetra = "cinco";
      break;
    case 6:
      numeroEnLetra = "seis";
      break;
    case 7:
      numeroEnLetra = "siete";
      break;
    case 8:
      numeroEnLetra = "ocho";
      break;
    case 9:
      numeroEnLetra = "nueve";
      break;
    case 10:
      numeroEnLetra = "diez";
      break;
    default:
      numeroEnLetra = "desconocido";
      break;
  }

  // Mostrar por pantalla el resultado obtenido
  console.log(`El número ${n} se escribe como "${numeroEnLetra}" en español.`);
} else {
  // Mostrar un mensaje de error indicando que el número ingresado no está dentro del rango permitido
  console.error("Error: el número ingresado no está dentro del rango permitido.");
}
