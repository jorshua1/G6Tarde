// Pedimos al usuario los datos necesarios
var peso = parseFloat(prompt("Ingresa tu peso en kilogramos: "));
if(isNaN(peso)){
    alert("Ingreso un valor erroneo")
}else{

var altura = parseFloat(prompt("Ingresa tu altura en centímetros: "));
var edad = parseInt(prompt("Ingresa tu edad en años: "));
var tiempo = parseFloat(prompt("Ingresa el tiempo en minutos que tardarías en caminar 45 km: "));

// Convertimos la altura a metros
altura = altura / 100;

// Calculamos el gasto calórico utilizando la fórmula de Harris-Benedict
// para calcular el metabolismo basal y la fórmula de METS para calcular
// el gasto calórico por actividad física
var mb = 88.362 + (13.397 * peso) + (4.799 * altura * 100) - (5.677 * edad);
var mets = 6.0;
var gasto_calorico = mb * (mets * tiempo / 1440);

// Mostramos el resultado al usuario
alert("Tu gasto calórico al caminar 45 km es de: " + Math.round(gasto_calorico * 100) / 100 + " calorías.");
}
