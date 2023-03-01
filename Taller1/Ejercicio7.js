let venta1= parseInt(prompt("Ingrese el valor de la primera venta"));
let venta2= parseInt(prompt("Ingrese el valor de la segunda venta"));
let venta3= parseInt(prompt("Ingrese el valor de la tercera venta"));

let sueldoBase=980000;

let comisiones= (venta1+venta2+venta3)*0.1;
let sueldoFinal= sueldoBase+comisiones;

alert("Por comisiones recibirá "+comisiones);

alert("Su sueldo final con comisiones será "+sueldoFinal);