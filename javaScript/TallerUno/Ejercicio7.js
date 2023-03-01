var sueldoBase = 1000000;
var venta1 = parseFloat(prompt("Ingrese el valor de la primer venta"));
var venta2 = parseFloat(prompt("Ingrese el valor de la segunda venta"));
var venta3 = parseFloat(prompt("Ingrese el valor de la tercer venta"));

var sueldoTotal = sueldoBase + (venta1+venta2+venta3)*0.1;
var comision = (venta1+venta2+venta3)*0.1;
alert("El valor por comision de las tres ventas es de: " + comision);
alert("El sueldo total del vendedor es de: " + sueldoTotal);