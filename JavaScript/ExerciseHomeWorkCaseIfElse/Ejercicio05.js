/* En una Granja existen N conejos, C1 blancos y C2 negros. Se venden X conejos negros
y Y conejos blancos. Hacer un algoritmo que:
a) Imprima la cantidad de conejos vendida
b) Si P1 es el precio de venta de los conejos blancos y P2 es el precio de venta de los
conejos negros, imprima el monto total de la venta.
c) Imprima el color de los conejos que se vendieron más. */

let vNumberSoldBunnyWhite = parseInt(prompt("Ingrese el numero de conejos blancos a comprar"));
let vCashSoldBunnyWhite = parseInt(prompt("Ingrese el importe por unidad de conejos blancos"));
let vNumberSoldBunnyBlack = parseInt(prompt("Ingrese el numero de conejos negros a comprar"));
let vCashSoldBunnyBlack = parseInt(prompt("Ingrese el importe por unidad de conejos negros"));

let vHowMachBunnyWhite = vNumberSoldBunnyWhite * vCashSoldBunnyWhite;
let vHowMachBunnyBlack = vNumberSoldBunnyBlack * vCashSoldBunnyBlack;
let vNumberSoldBunnyAll = vNumberSoldBunnyWhite + vNumberSoldBunnyBlack;
let vCashBunnyAll = vHowMachBunnyBlack + vHowMachBunnyWhite;


if (isNaN(vNumberSoldBunnyWhite) || isNaN(vCashSoldBunnyWhite) || isNaN(vNumberSoldBunnyBlack) || isNaN(vCashSoldBunnyBlack)) {
    alert("Error ingrese un dato valido");

}else if(vNumberSoldBunnyWhite < 0 || vCashSoldBunnyWhite < 0 || vNumberSoldBunnyBlack < 0 || vCashSoldBunnyBlack < 0){
    alert("ALERTA!!! \n \n Se ha encontrado un dato invalido no correspondiente");

}else if (vNumberSoldBunnyWhite > vNumberSoldBunnyBlack) {
    alert("Cantidad de conejos blancos vendidos: " + vNumberSoldBunnyWhite + "\n Cantidad de conejos negros vendidos: " + vNumberSoldBunnyBlack + "\n Cantidad total de conejos vendidos: " + vNumberSoldBunnyAll + "\n \n Cada conejo blanco tiene un precio de " + vCashSoldBunnyWhite + "\n En total de ganancia de conejos blancos es: " + vHowMachBunnyWhite + "\n \n Cada conejo negro tiene un precio de " + vCashSoldBunnyBlack + "\n En total de ganancias de conejos negros es: " + vHowMachBunnyBlack + "\n \n El total de venta de los conejos es: " + vCashBunnyAll + "\n \n La cantidad de conejos que mas se vendieron fueron los BLANCOS");

}else if (vNumberSoldBunnyBlack > vNumberSoldBunnyWhite) {
    alert("Cantidad de conejos negros vendidos: " + vNumberSoldBunnyBlack + "\n Cantidad de conejos blancos vendidos: " + vNumberSoldBunnyWhite + "\n Cantidad total de conejos vendidos: " + vNumberSoldBunnyAll + "\n \n Cada conejo negro tiene un precio de " + vCashSoldBunnyBlack + "\n En total de ganancia de conejos negros es: " + vHowMachBunnyBlack + "\n \n Cada conejo blanco tiene un precio de " + vCashSoldBunnyWhite + "\n En total de ganancias de conejos blancos es: " + vHowMachBunnyWhite + "\n \n El total de venta de los conejos es: " + vCashBunnyAll + "\n \n La cantidad de conejos que mas se vendieron fueron los NEGROS");
}else if (vNumberSoldBunnyBlack = vNumberSoldBunnyWhite) {
    alert("Cantidad de conejos negros vendidos: " + vNumberSoldBunnyBlack + "\n Cantidad de conejos blancos vendidos: " + vNumberSoldBunnyWhite + "\n Cantidad total de conejos vendidos: " + vNumberSoldBunnyAll + "\n \n Cada conejo negro tiene un precio de " + vCashSoldBunnyBlack + "\n En total de ganancia de conejos negros es: " + vHowMachBunnyBlack + "\n \n Cada conejo blanco tiene un precio de " + vCashSoldBunnyWhite + "\n En total de ganancias de conejos blancos es: " + vHowMachBunnyWhite + "\n \n El total de venta de los conejos es: " + vCashBunnyAll + "\n \n La cantidad de conejos son IGUALES");
}