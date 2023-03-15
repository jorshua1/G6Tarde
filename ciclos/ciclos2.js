let num = parseInt(prompt("Ingrese un número del 1 al 10:"));

while (num < 1 || num > 10 || isNaN(num)) {
  num = parseInt(prompt("Por favor ingrese un número válido del 1 al 10:"));
}

for (let i = 1; i <= 10; i++) {
  let resultado = num * i;
  console.log(num + " x " + i + " = " + resultado);
}
