let numeroVendidos=parseInt(prompt("Ingrese la cantidad de autos que vendio el trabajador :"))
let totalVentas=parseFloat(prompt("Ingrese el monto total de ventas: "))
let salario=(980000+(170000*numeroVendidos)+(totalVentas*0.05))
console.log("El salario del vendedor es:",salario);