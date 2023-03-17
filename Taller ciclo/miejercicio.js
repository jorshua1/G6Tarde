
let capitalInicial = parseFloat(prompt("Ingrese la cantidad a invertir:"));
let tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (en porcentaje):"));
let aniosInversion = parseInt(prompt("Ingrese el número de años de la inversión:"));
tasaInteres /= 100;
let capitalActual = capitalInicial;
let anioActual = 1;

while (anioActual <= aniosInversion) {
  capitalActual += capitalActual * tasaInteres;
  console.log("Capital obtenido en el año " + anioActual + ": $" + capitalActual.toFixed(2));
  anioActual++;
}