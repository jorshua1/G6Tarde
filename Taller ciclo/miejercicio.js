// Solicitamos la cantidad a invertir, tasa de interés anual y el número de años
let capitalInicial = parseFloat(prompt("Ingrese la cantidad a invertir:"));
let tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (en porcentaje):"));
let aniosInversion = parseInt(prompt("Ingrese el número de años de la inversión:"));

// Convertimos la tasa de interés a su equivalente decimal
tasaInteres /= 100;

// Calculamos el capital obtenido en la inversión cada año utilizando un bucle while
let capitalActual = capitalInicial;
let anioActual = 1;

while (anioActual <= aniosInversion) {
  capitalActual += capitalActual * tasaInteres;
  console.log("Capital obtenido en el año " + anioActual + ": $" + capitalActual.toFixed(2));
  anioActual++;
}