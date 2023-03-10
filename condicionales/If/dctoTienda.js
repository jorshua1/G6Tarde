//"Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales, donde el precio supere los 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de un articulo."

      alert"Este programa determina si tiene dcto"

let producto = String(prompt("Ingrese nombre del articulo"));
let precioUnidad = parseFloat(prompt("Ingrese precio del articulo"));
let Unidades = Number(prompt("ingrese numero de unidades"));

let Total = precioUnidad * Unidades;
let Porcentaje = Total * 0.15;

if (isNaN(precioUnidad) || isNaN(Unidades) || !isNaN(producto)) {
    alert("Ingrese un valor valido")
}else if (Total > 40 && Unidades >= 10) {
    alert("Aplica a dcto" + '\n' + "Valor sin dcto = " + Total + '\n' + "Valor con dcto = " + (Total - Porcentaje) );
}else {
      alert ("No aplica dcto" + '\n' + "total a pagar = " + Total)
}

