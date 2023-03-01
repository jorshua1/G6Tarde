let sueldo = parseInt(prompt("ingrese el sueldo base del vendedor"));
let venta1 = parseInt(prompt("ingrese las ventas del vendedor"));
let venta2 = parseInt(prompt("ingrese las ventas del vendedor"));
let venta3 = parseInt(prompt("ingrese las ventas del vendedor"));
alert("Las ganancias por comision son de:"+ ((venta1+venta2+venta3)*0.1));
alert("el sueldo total es de: "+ (sueldo+((venta1+venta2+venta3)*0.1)));