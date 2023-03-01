let salario = 980000;
let comision = 170000;
let valor_v = 0.05;
let cant_auto = parseInt(prompt("ingrese la cantidad de autos vendidos al mes"));
let montoventa = parseInt(prompt("ingrese el valor que acumulan todos loa autos vendidos al mes"));
let valortotal
let x
let y

x = montoventa * valor_v;
y = cant_auto * comision;
valortotal = salario + x + y;

console.log("El valor a pagarle al empleado es de: "+valortotal);
