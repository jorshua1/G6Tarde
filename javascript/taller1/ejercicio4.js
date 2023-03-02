let salario = 980000;

let autos = parseInt(prompt("Ingrese la cantidad de autos vendidas"));
let monto = parseInt(
  prompt("Ingrese el valor del monto total de los autos vendidos:")
);

let comision = 170000 * autos;

let total = monto * 0.05 + salario + comision;
console.log("El salario del empleado es: " + total);
