var numeroAutos=parseInt(prompt("ingrese la cantidad de autos vendidos"));
var totalVentas=parseInt(prompt("ingrese el monto total de ventas"));

let sueldoBase=980000;
let comision=(numeroAutos*170000);
let promedioVenta=(totalVentas*0.05);
let sueldo=(sueldoBase+comision+promedioVenta);
console.log("el salario que se ganara este mes es de"+sueldo);
