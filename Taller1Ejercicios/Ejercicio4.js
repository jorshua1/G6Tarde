let NumAutos = parseInt(prompt("Ingrese el numero de autos vendidos en el mes"));
let VaVentas = parseInt(prompt("Ingrese su monto total de ventas en el mes"));
let ComAutos = (NumAutos * 170000);
let ComVentas = (VaVentas * 0.05);
let Total = (980000 + ComAutos + ComVentas);
console.log(Total)