/*
Hacer un algoritmo que imprima el nombre de 4 artículos, precio original y su precio condescuento. 
El descuento lo hace en base a la forma de pago, 
si es a contado será (1), y su descuento es del 10%
si la forma de pago es a crédito será dos (2) y su descuento es del 20% (solo existen dos claves).
*/


let nombreArticuloUno = "A";/*prompt("Por favor ingrese nombre del articulo");*/
let precioOriginalUno = 1000;/*parseFloat(prompt("Por favor ingrese precio original del articulo"));*/
let nombreArticuloDos = "B";/*prompt("Por favor ingrese nombre del articulo");*/
let precioOriginalDos = 2000;/*parseFloat(prompt("Por favor ingrese precio original del articulo"));*/
let nombreArticuloTres = "C";/*prompt("Por favor ingrese nombre del articulo");*/
let precioOriginalTres = 3000;/*parseFloat(prompt("Por favor ingrese precio original del articulo"));*/
let nombreArticuloCuatro = "D";/*prompt("Por favor ingrese nombre del articulo");*/
let precioOriginalCuatro = 4000;/*parseFloat(prompt("Por favor ingrese precio original del articulo"));*/
let formaPago = "2";/*(prompt("Por favor ingrese clave de forma de pago: \n(1)contado será su descuento es del 10% \n(2)crédito será su descuento es del 20%"));*/

if (formaPago == "1" || formaPago == "2") {
    if (formaPago == "1") {
        precioDescuentoUno = precioOriginalUno - (precioOriginalUno * 0.10);
        precioDescuentoDos = precioOriginalDos - (precioOriginalDos * 0.10);
        precioDescuentoTres = precioOriginalTres - (precioOriginalTres * 0.10);
        precioDescuentoCuatro = precioOriginalCuatro - (precioOriginalCuatro * 0.10);
    } else {
        precioDescuentoUno = precioOriginalUno - (precioOriginalUno * 0.20);
        precioDescuentoDos = precioOriginalDos - (precioOriginalDos * 0.20);
        precioDescuentoTres = precioOriginalTres - (precioOriginalTres * 0.20);
        precioDescuentoCuatro = precioOriginalCuatro - (precioOriginalCuatro * 0.20);
    }
    console.log("La forma de pago es: " + formaPago + "\n\nEl articulo uno es: " + nombreArticuloUno + "\nEl precio original es: " + precioOriginalUno + "\nEl precio con descuento es: " + precioDescuentoUno + "\n\nEl articulo dos es: " + nombreArticuloDos + "\nEl precio original es: " + precioOriginalDos + "\nEl precio con descuento es: " + precioDescuentoDos + "\n\nEl articulo tres es: " + nombreArticuloTres + "\nEl precio original es: " + precioOriginalTres + "\nEl precio con descuento es: " + precioDescuentoTres + "\n\nEl articulo cuatro es: " + nombreArticuloCuatro + "\nEl precio original es: " + precioOriginalCuatro + "\nEl precio con descuento es: " + precioDescuentoCuatro);
} else {
    console.log("Por favor ingrese una forma de pago valida");
}