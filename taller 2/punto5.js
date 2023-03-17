// Pedimos al usuario que ingrese las notas y las almacenamos en variables
let nota1 = parseFloat(prompt("Ingrese la nota 1 (0-5):"));
if (nota1 > 5) {
  alert("La nota no puede ser mayor a 5. Programa terminado.");
  throw new Error("Nota mayor a 5.");
}
let nota2 = parseFloat(prompt("Ingrese la nota 2 (0-5):"));
if (nota2 > 5) {
  alert("La nota no puede ser mayor a 5. Programa terminado.");
  throw new Error("Nota mayor a 5.");
}
let nota3 = parseFloat(prompt("Ingrese la nota 3 (0-5):"));
if (nota3 > 5) {
  alert("La nota no puede ser mayor a 5. Programa terminado.");
  throw new Error("Nota mayor a 5.");
}
let nota4 = parseFloat(prompt("Ingrese la nota 4 (0-5):"));
if (nota4 > 5) {
  alert("La nota no puede ser mayor a 5. Programa terminado.");
  throw new Error("Nota mayor a 5.");
}
let nota5 = parseFloat(prompt("Ingrese la nota 5 (0-5):"));
if (nota5 > 5) {
  alert("La nota no puede ser mayor a 5. Programa terminado.");
  throw new Error("Nota mayor a 5.");
}


// Verificamos si las notas ingresadas están dentro del rango permitido (0-5)
if (nota1 < 0 || nota1 > 5 || nota2 < 0 || nota2 > 5 || nota3 < 0 || nota3 > 5 || nota4 < 0 || nota4 > 5 || nota5 < 0 || nota5 > 5) {
  // Mostramos un mensaje de error si alguna nota está fuera del rango
  console.log("Error: las notas deben estar en un rango de 0 a 5.");
} else {
  // Si las notas son válidas, calculamos la nota definitiva
  let notaDefinitiva = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
  console.log("La nota definitiva es:", notaDefinitiva.toFixed(2));

  // Verificamos en qué nivel se encuentra el estudiante según su nota definitiva
  if (notaDefinitiva >= 4.7 && notaDefinitiva <= 5.0) {
    console.log("Nivel: Superior");
  } else if (notaDefinitiva >= 4.0 && notaDefinitiva <= 4.6) {
    console.log("Nivel: Alto");
  } else if (notaDefinitiva >= 3.0 && notaDefinitiva <= 3.9) {
    console.log("Nivel: Básico");
  } else if (notaDefinitiva >= 2.0 && notaDefinitiva <= 2.9) {
    console.log("Nivel: Bajo");
  } else {
    console.log("Nivel: Muy bajo");
  }

  // Verificamos si el estudiante aprobó o no según su nota definitiva
  if (notaDefinitiva >= 3.0) {
    console.log("El estudiante aprobó el curso.");
  } else {
    console.log("El estudiante no aprobó el curso.");
  }
}
