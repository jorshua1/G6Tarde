let cantauto = parseInt(prompt("ingrese la cantidad de autos vendidos en el mes"));
let totaldeventas = parseInt(prompt("ingrese el valor total en ventas de autos en el mes"));

salariobase = 980000;
comision= 170000;
porcentajeventa = 0.05;


neto= (salariobase+(comision*cantauto)+totaldeventas*porcentajeventa);
alert("el sueldo del trabajador es: "+neto);
