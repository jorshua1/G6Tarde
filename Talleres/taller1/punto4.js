let autosVendidos = parseInt(prompt("¿Cuántos autos vendió el trabajador?"));
let comisionAutosVendidos = autosVendidos*170000;
let valorDeVenta = parseInt(prompt("¿Cuál es el valor de venta total de los autos vendidos?"));
let comisiónValorVenta = valorDeVenta*0.05;

let salario = 980000+comisionAutosVendidos+comisiónValorVenta;

alert("El trabajador tiene un salario de " + salario + "$");
