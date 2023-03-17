let numero = parseInt(prompt("Ingrese un número"));
let invertido = 0;
let numTrabajo = numero;
while (numTrabajo > 0) {
  let digito = numTrabajo % 10;
  invertido = (invertido * 10) + digito;
  numTrabajo = Math.floor(numTrabajo / 10);
}
if (numero === invertido) {
  console.log("El número ingresado es un palíndromo");
} else {
  console.log("El número ingresado no es un palíndromo");
}
