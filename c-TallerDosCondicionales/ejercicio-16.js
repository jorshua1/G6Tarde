/*
La política de cobro de una compañía telefónica es:

Cuando se realiza una llamada, el cobro es por el tiempo que esta dura, de tal forma que 
los primeros cinco minutos cuestan 1 euro, 
los siguientes tres, 80 céntimos, 
los siguientes dos minutos a 70 céntimos y 
a partir del décimo minuto, 50 céntimos.

Además, se carga un impuesto de 3% cuando es domingo, y si es otro día 15%.

Realiza un algoritmo para determinar cuánto debe pagar por cada concepto una persona que realiza una llamada.
*/

let tiempoLlamada = 5;
let costoLlamada = 0;
let datoImpuesto;
const fechaActual = new Date()
const diaSemana = new Date(fechaActual).getDay();

if (isNaN(tiempoLlamada) || tiempoLlamada > 0 && tiempoLlamada <= 5) {
    costoLlamada = 1;
    console.log(costoLlamada);

} else if (tiempoLlamada > 5 && tiempoLlamada <= 8) {
    costoLlamada = 1 + ((tiempoLlamada - 5) * 0.80);
    console.log(costoLlamada);

} else if (tiempoLlamada >= 9 && tiempoLlamada <= 10) {
    costoLlamada = 3.4 + ((tiempoLlamada - 8) * 0.70);
    console.log(costoLlamada);

} else if (tiempoLlamada > 10) {
    costoLlamada = 4.8 + ((tiempoLlamada - 10) * 0.50);
    console.log(costoLlamada);

} else {
    console.log("No has realizado la llamada.")
}
if (diaSemana != 0) {
    impuestoCostoLlamada = costoLlamada + ((costoLlamada / 100) * 15);
    console.log(impuestoCostoLlamada);
    datoImpuesto = "15% por ser dia entre Lunes y Sabado";

} else {
    impuestoCostoLlamada = costoLlamada + ((costoLlamada / 100) * 3);
    console.log(impuestoCostoLlamada);
    datoImpuesto = "3% por ser dia Domingo";
}
console.log(`
El valor a pagar de su llamada es de:
${impuestoCostoLlamada} euros.
Total minutos ${tiempoLlamada}
Se aplica impuesto de ${datoImpuesto}`)


