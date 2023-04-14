/*Un vendedor recibe un sueldo base, más un 10% extra por comision de sus ventas, el
vendedor desea saber cuanto dinero obtendra por concepto de comisiones por las tres 
(3) ventas que realiza en el mes y el total que recibirá en el mes tomando en cuenta su
sueldo base y comisiones.*/

let ventasRealizadas = 5; /*parseInt(prompt("Por favor ingresar numero de ventas:"));*/
let valorVentas = 1000000; /*parseInt(prompt("por favor ingrese el valor total de las ventas"));*/
let salarioBase = 980000; /*parseInt(prompt("Por favor ingresar sueldo base del vendedor:"));*/
let extraComision = 10;/*10 % del valor de la venta*/

totalMontoVenta = ventasRealizadas * valorVentas;
comisionVendedor = totalMontoVenta * (extraComision / 100);
salarioVendedor = salarioBase + comisionVendedor;

console.log("El vendedor obtendra por concepto de venta una comision de: $" + comisionVendedor + " , por lo tanto recibirá un total de salario de :" + salarioVendedor);
console.log(`
El vendedor obtendra por concepto de venta una comision de: 
$${comisionVendedor}.
por lo tanto recibirá un total de salario de: 
$${salarioVendedor}`);