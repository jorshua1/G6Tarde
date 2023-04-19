let salario = 980000;
let numerdeautosvendidos = parseInt(prompt("Ingrese el numero de autos vendidos"));
let comision = 170000 * numerdeautosvendidos;
let valortotaldelaventa = parseInt(prompt("Ingrese el valor total de la venta"));
let comision2 = 0.05 * valortotaldelaventa;
let ganaciatotal = salario + comision + comision2;
console.log(ganaciatotal);

