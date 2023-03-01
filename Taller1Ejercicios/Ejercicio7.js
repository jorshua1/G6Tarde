let SueldoBase = parseInt(prompt("Ingrese su sueldo base"));
let ValTotCom = parseInt(prompt("Ingrese su valor total de ventas en el mes"));
let porVent = (ValTotCom * 0.1);
let total = (porVent + SueldoBase);
console.log("Su comision por ventas es "+porVent);
console.log("Su sueldo total es "+total);