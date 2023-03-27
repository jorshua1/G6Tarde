//punto 7
let sueldobase=parseInt(prompt("ingrese el sueldo base"));
let porcentaje=0.10;
let ventas=parseInt(prompt("ingrese la suma de las 3 ventas"));
let comisiones=ventas*porcentaje;
let pagototal=sueldobase+comisiones;
console.log(pagototal);