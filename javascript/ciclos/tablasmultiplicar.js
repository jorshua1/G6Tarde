let numero = Number(prompt("Por favor, ingrese un número mayor a cero."));
let multiplicador = 1;
let resultado = 0;

while((isNaN(numero)) || (numero < 1)) {
    numero = Number(prompt("Error. Por favor, ingrese un valor válido."));
}
for (multiplicador; multiplicador <= 10; multiplicador++) {
    resultado = numero * multiplicador;
    alert(numero + " x " + multiplicador + " = " + resultado);
    console.log(numero + " x " + multiplicador + " = " + resultado);
}
