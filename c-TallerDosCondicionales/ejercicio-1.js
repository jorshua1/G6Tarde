/*
Una empresa tiene una promoción donde por compras mayores o iguales a 250000 da un 30% de descuento a la compra,
por compras mayores o iguales a 200000 da un 20 % de descuento a la compra, 
si la compra es menor a 200000 no hay descuento 
y toca notificarle al usuario, si la compra es menor a 50000 agregar 2000 por Parqueadero.
*/

let totalCompras = 190000;/*parseFloat(prompt("Por favor ingresarvalor de compra."));*/

if (isNaN(totalCompras) || totalCompras >= 250000) {
    descuentoUno = totalCompras - ((totalCompras / 100) * 30);
    console.log("Aplica descuento del 30%, debe pagar : " + descuentoUno);

} else if (totalCompras >= 200000 && totalCompras < 250000) {
    descuentoDos = totalCompras - ((totalCompras / 100) * 20);
    console.log("Aplica descuento del 20%, debe pagar :" + descuentoDos);

} else if (totalCompras < 50000) {
    costoParqueo = totalCompras + 2000;
    console.log("La compra es menor a 50000, se agregaran 2000 de paqueadero, total a pagar de :" + costoParqueo);

} else {
    console.log("No aplica descuento.");
}