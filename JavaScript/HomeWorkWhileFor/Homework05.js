/* 5. Hacer un algoritmo que imprima el nombre de 4 artículos, precio original y su precio con descuento. El descuento lo hace en base a la forma de pago, si es a contado sera (1), y su descuento es del 10% y si la forma de pago es a crédito sera (2) y su descuento es del 20% */
let vArticulo01 = String(prompt("Ingrese el primer articulo"));
while (!isNaN(vArticulo01)) {
    vArticulo01 = String(prompt("ERROR \n Ingrese el primer articulo"));
}let vPrecio01 = parseInt(prompt("Ingrese el precio del primer articulo en COP"));
while (isNaN(vPrecio01) || vPrecio01 <= 0) {
    vPrecio01 = parseInt(prompt("ERROR \n Ingrese el precio del primer articulo en COP"));
    
}let vArticulo02 = String(prompt("Ingrese el segundo articulo"));
while (!isNaN(vArticulo02)) {
    vArticulo02 = String(prompt("ERROR \n Ingrese el segundo articulo"));
}let vPrecio02 = parseInt(prompt("Ingrese el precio del segundo articulo en COP"));
while (isNaN(vPrecio02) || vPrecio02 <= 0) {
    vPrecio02 = parseInt(prompt("ERROR \n Ingrese el precio del segundo articulo en COP"));
    
}let vArticulo03 = String(prompt("Ingrese el tercer articulo"));
while (!isNaN(vArticulo03)) {
    vArticulo03 = String(prompt("ERROR \n Ingrese el tercer articulo"));
}let vPrecio03 = parseInt(prompt("Ingrese el precio del tercer articulo en COP"));
while (isNaN(vPrecio03) || vPrecio03 <= 0) {
    vPrecio03 = parseInt(prompt("ERROR \n Ingrese el precio del tercer articulo en COP"));
    
}let vArticulo04 = String(prompt("Ingrese el cuarto articulo"));
while (!isNaN(vArticulo04)) {
    vArticulo04 = String(prompt("ERROR \n Ingrese el cuarto articulo"));
}let vPrecio04 = parseInt(prompt("Ingrese el precio del cuarto articulo en COP"));
while (isNaN(vPrecio04) || vPrecio04 <= 0) {
    vPrecio04 = parseInt(prompt("ERROR \n Ingrese el precio del cuarto articulo en COP"));
    
}var vFormaPago = String(prompt("Ingrese una forma de pago \n \n Las unicas formas de pago aceptadas son: \n contado o credito"));
while (vFormaPago !== "contado" || vFormaPago !== "credito") {
    vFormaPago = String(prompt("ERROR DE INGRESO \n \n Ingrese una forma de pago \n \n Las unicas formas de pago aceptadas son: \n contado o credito"));

}var vPrecioTotal = vPrecio01 + vPrecio02 + vPrecio03 + vPrecio04;
var vDescuento10 = vPrecioTotal * 0.10;
var vDescuento20 = vPrecioTotal * 0.20;
var vDescuentoCompra;
vDescuentoCompra = vPrecioTotal - vDescuento10;

if (vFormaPago == "contado") {    
    alert("Sus articulos a comprar son: \n" + vArticulo01 + "$" + vPrecio01 + "\n" + vArticulo02 + "$" + vPrecio02 + "\n" + vArticulo03 + + "$" + vPrecio03 + "\n" + vArticulo04 + "$" + vPrecio04 + "\n \n Precio de su compra: " + vPrecioTotal + "\n Precio total de su compra con descuento es: " + vDescuentoCompra);
}else if (vFormaPago == "credito") {
    vDescuentoCompra = vPrecioTotal - vDescuento20;
    alert("Sus articulos a comprar son: \n" + vArticulo01 + "$" + vPrecio01 + "\n" + vArticulo02 + "$" + vPrecio02 + "\n" + vArticulo03 + + "$" + vPrecio03 + "\n" + vArticulo04 + "$" + vPrecio04 + "\n \n Precio de su compra: " + vPrecioTotal + "\n Precio total de su compra con descuento es: " + vDescuentoCompra);
}else {
    alert("ERROR DE DATO INGRESADO!!! \n \n Intente ejecutar de nuevo");
}


