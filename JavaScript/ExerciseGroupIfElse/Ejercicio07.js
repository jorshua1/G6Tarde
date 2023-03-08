/* Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales, 
donde el precio supere los 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar
sabiendo el número de artículos y el precio de un articulo. 
 */


//------------------------------------EJERCICIO INCOMPLETO--------------------------------------------------



let vProducto = String(prompt("Ingrese el producto a comprar solo son validos: \n leche, arroz, huevos y panela"));
let vUnidades = Number(prompt("Cuantas unidades de este articulo desea llevar"));
let vTotaltotal;

vProducto === ("leche" || "arroz" || "huevos" || "panela");

/*
leche = 2400
arroz =  1800
huevos =  600
panela = 2000
*/

if (isNaN(vUnidades)) {
    if (vProducto == "leche") {

    }
}

//---------------------------------------------------------------
if (isNaN(vUnidades) || vUnidades >= 10) {
    let vPorcentaje = vUnidades * 0.15;
    vTotaltotal = vUnidades - vPorcentaje;

    alert("El producto es: " + vProducto + "\n Llevaras estas " + vUnidades + " unidades el cual tendra un descuento del 15% en este articulo");
}
else {
    alert("El producto es: " + vProducto + "\n Llevaras estas " + vUnidades + " unidades");
}
