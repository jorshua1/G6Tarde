/*una empresa tiene una promocion donde por compras mayores o iguales a 250,000 da un 30% de descuento a la 
compra, por compras mayores o iguales a 200,000 da un 20 % de descuento a la compra, si la compra es menor a 
200,000 no hay descuento y toca notificarle al usuario, si la compra es menor a 50,000 agregar 2,000 por 
Parqueadero*/

let vBuy = Number(prompt("Ingrese el importe que se ha gastado"));
var vImporte, vDescuento;

if (isNaN(vBuy) || vBuy < 50000 ) {
    let vImporte = vBuy + 2000;
    alert("Sr@ debido a que su compra es, " + vBuy + " se le hara un cargo adicional de estacionamiento, lo cual tendra un importe de 2000 \n su importe total de cobre es = " + vImporte);
}
else if (vBuy < 200000) {
    alert("Sr@ como su compra es igual " + vBuy + " \n no tendra ningun descuento y se le cobrara el importe correspondiente");
}
else if (vBuy >= 200000 & vBuy <= 249000) {
    let vDescuento = vBuy * 0.20;
    let vImporte = vBuy - vDescuento;
    alert("Sr@ cliente por su compra obtendra un 20% de descuento en su importe  de " + vBuy + "\n su importe total sera = " + vImporte);
}
else if (vBuy >= 250000) {
    let vDescuento = vBuy * 0.30;
    let vImporte = vBuy - vDescuento;
    alert("Sr@ cliente GRACIAS!! por su gran compra tendra un 30% en su importe de " + vBuy + "\n el pago total sera = " + vImporte);
}