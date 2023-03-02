let sueldoB = parseInt(prompt("Ingrese su sueldo base:"));
let comision1 = parseInt(
  prompt("Ingrese el valor por comision de la primera venta")
);
let comision2 = parseInt(
  prompt("Ingrese el valor por comision de la segunda venta")
);
let comision3 = parseInt(
  prompt("Ingrese el valor por comision de la tercera venta")
);

let sumaVentas = (comision1 + comision2 + comision3) * 0.1;

console.log("El valor que gana por las comisiones es: " + sumaVentas);

sueldoT = sueldoB + sumaVentas;
console.log("El salario total con comisiones es: " + sueldoT);
