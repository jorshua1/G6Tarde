/* Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales, 
donde el precio supere los 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar
sabiendo el número de artículos y el precio de un articulo. 
 */


let vProducto = String(prompt("Ingrese el producto a comprar"));
let vCashUnidad = parseFloat(prompt("Cuanto sera el importe por unidad del articulo escogido"));
let vUnidades = Number(prompt("Cuantas unidades de este articulo desea llevar"));

let vTotal = vCashUnidad * vUnidades;
let vPorcentaje = vTotal * 0.15;
let vTotaltotal = vTotal - vPorcentaje;

if (isNaN(vUnidades) || isNaN(vCashUnidad)) {
    alert("ERROR!!! \n Ingrese un valor valido");

}else if ((vCashUnidad > 4000) && (vUnidades >= 10)) {
    alert("Sr@ cliente su articulo " + vProducto + " tiene un precio de " + vCashUnidad + " por unidad, y usted ha comprado " + vUnidades + " unidades. \n El importe total de su compra es: " + vTotal + "\n Ademas como su compra es: " + vTotal + " se le obsequiara un 15% de su compra lo cual es total de su compra es: \n " + vTotaltotal);

}else if (vUnidades >= 10) {
    alert("Sr@ cliente su articulo " + vProducto + " tiene un precio de " + vCashUnidad + " por unidad, y usted ha comprado " + vUnidades + " unidades. \n El importe total de su compra es: " + vTotal);

}else if ((vCashUnidad > 0) && (vUnidades > 0)){
    alert("Sr@ cliente su articulo " + vProducto + " tiene un precio de " + vCashUnidad + " por unidad, y usted ha comprado " + vUnidades + " unidades. \n El importe total de su compra es: " + vTotal);

}


