var numeroAutos= parseInt(prompt("Ingrese la cantidad de autos vendidos"));

var totalVentas= parseInt(prompt("Ingrese el monto total de ventas"));

let promedioVenta = (totalVentas*0.05);

let comision = numeroAutos*170000;

let sueldoBase=980000;
let sueldo = sueldoBase+comision+promedioVenta;
console.log("El salario que se ganará este mes es de "+sueldo);
