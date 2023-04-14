/*
Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales, 
donde el precio supere los 40 euros. 
Tu programa debe comprobar y calcular la cantidad a pagar
sabiendo el número de artículos y el precio de un articulo.
*/

let cantidadArticulos = 11;
let precioUnitarioArticulos = 5;
let valorCompra = cantidadArticulos * precioUnitarioArticulos;

if (cantidadArticulos >= 10 && valorCompra > 40) {
    let valorPago = valorCompra-((valorCompra/100)* 15);
    console.log(`
    Tu compra aplica descuento del 15%
    debes pagar $${valorPago} euros`);
} else {
    console.log(`
    Tu compra no aplica descuento del 15%
    debes pagar $${valorCompra} euros`);
}