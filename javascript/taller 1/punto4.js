// punto 4
let salario=980000;
let comision=170000;
let vporventa=0.05;
let autosvendidos=parseInt(prompt("ingrese el numero de autos que vendio"));
let montoventas=parseInt(prompt("ingrese el monto total de ventas en el mes"));
let comisionesporauto=comision*autosvendidos;
let comsiondeventa=vporventa*montoventas;
let totalmes=salario+comisionesporauto+comsiondeventa;
console.log(totalmes);
