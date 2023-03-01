const salarioBase = 980000;
let autosVendidos = parseInt(prompt("ingrese la cantidad de autos vendidos en el mes"));
let totalVentas = parseInt(prompt("ingrese el valor total de las ventas del mes"));
let comision = (170000*autosVendidos) + (totalVentas*(5/100));
let salarioTotal = salarioBase+comision;
alert("el salario total es " + salarioTotal);
