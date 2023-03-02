let sueldoBase = parseInt(prompt("¿Cuál es el sueldo base del vendedor?"));

let comisionVenta1 = parseInt(prompt("¿Cuál fue el valor de la primera venta?"))*0.1;
let comisionVenta2 = parseInt(prompt("¿Cuál fue el valor de la segunda venta?"))*0.1;
let comisionVenta3 = parseInt(prompt("¿Cuál fue el valor de la tercera venta?"))*0.1;

let comisionTotal = comisionVenta1+comisionVenta2+comisionVenta3;

let sueldoTotal = sueldoBase+comisionTotal;

alert("El vendedor ganará " + comisionTotal + "$ de comisiones y un sueldo total de " + sueldoTotal + "$");