/*
determinar la cantidad total a pagar por una llamada telefonica, teniendo en cuenta lo
siguiente:
*Toda llamada que dure tres minutos o menos tiene un coste de  200 pesos
*Cada minuto adicional a partir de los tres primeros es un paso de contador y cuesta 100
pesos.
*/

let duracionLlamada = 5; /*parseFloat(prompt("Por favor ingrese tiempo de la llamada."));*/

if (isNaN(duracionLlamada) || duracionLlamada >= 0 && duracionLlamada <= 3) {
    costoBase = duracionLlamada * 200;
    console.log("el costo de la llamada es de " + costoBase);
} else {
    (duracionLlamada > 3)
    costoExtendido = (3 * 200) + ((duracionLlamada - 3) * 100);
    console.log("El costo de la llamada es de " + costoExtendido);
}