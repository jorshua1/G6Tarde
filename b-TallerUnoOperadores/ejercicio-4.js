/*Una agencia de venta de autos paga asu personal de ventas un salario de $ 980.000,
más una comisión de $170.000 por auto vendido, más un 5% del valor de la venta. Diseñar
un algoritmo para calcular el salario de un vendedor en un determinado mes, conociendo
el n° de automoviles vendidos y el total del monto  de ventas.*/

let autosVendidos = 2; /*parseInt(prompt("Por favor ingresar numero de autos vendidos:"));*/
let valorVehiculos = 100000000; /*parseInt(prompt("por favor ingrese el valor de cada vehiculo:"));*/
let salarioBase = 980000;
let comision = 170000;
let extraComision = 5;/*5 % del valor de la venta*/

totalMontoVenta = autosVendidos * valorVehiculos;

salarioVendedor = (salarioBase + (autosVendidos * comision)) + (totalMontoVenta * (extraComision / 100));

console.log("El salario del vendedor es de : $" + salarioVendedor + " , a razón de " + autosVendidos + " autos vendidos y un monto total de venta de $" + totalMontoVenta);
console.log(`
El salario del vendedor es de : $${salarioVendedor}
A razón de ${autosVendidos} autos vendidos
Un monto total de venta de $${totalMontoVenta}`);