let nombre = prompt("ingrese su nombre");
let sueldo = parseInt(prompt("Ingrese el valor de su sueldo"));
let extracomisiones = 0.1;
let venta1 = parseInt(prompt("Ingrese el valor de la venta 1"));
let venta2 = parseInt(prompt("Ingrese el valor de la venta 2"));
let venta3 = parseInt(prompt("Ingrese el valor de la venta 3"));
comision=(venta1+venta2+venta3)*extracomisiones;

neto= (sueldo+comision);
alert("sus comisiones son: " + comision + " y la cantidad de su sueldo es de: " + sueldo + " y el total de sueldo con comisiones es de:"+neto);