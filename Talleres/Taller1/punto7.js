let sueldo = parseInt(prompt("por favor digite el sueldo que recibiras en este mes ")); 
let venta1 = parseInt(prompt("por favor digitar el valor de la venta 1 ")); 
let venta2 = parseInt(prompt("por favor digitar el valor de la venta 2 ")); 
let venta3 = parseInt(prompt("por favor digitar el valor de la venta 3 ")); 
let prom1
let prom2 
let prom3
let total

prom1 = venta1 * 0.1;
prom2 = venta2 * 0.1;
prom3 = venta3 * 0.1;

total = sueldo + prom1 + prom2 + prom3;

console.log("El total que vas a ganas es de :"+total);
