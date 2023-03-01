let sueldoBase = 1500000;
//let ventas = parseInt(prompt("ingrese el valor total de las ventas en el mes"));
let precioVentas = parseInt(prompt("ingrese el precio total de las ventas"));
let ventasTotal = precioVentas * 0.1;
alert("valor total por comisiones" + ventasTotal);
let sueldoTotal = sueldoBase + ventasTotal;
alert("el sueldo total es " + sueldoTotal);