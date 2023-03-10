let numero = parseInt(prompt("Ingrese un número entre 1 y 10"));

switch (true) {
  case (numero < 1 || numero > 10):
    console.log("El número ingresado no está en el rango válido.");
    break;
  case (numero % 2 === 0):
    console.log("El número es par.");
    break;
  default:
    console.log("El número es impar.");
    break;
}
