let salario = parseInt(prompt("Ingrese su sueldo"));
let venta1 = parseInt(prompt("Valor de la primera venta"));
let venta2 = parseInt(prompt("Valor de la segunda venta"));
let venta3 = parseInt(prompt("Valor de la tercera venta"));
let totalventas = venta1 + venta2 + venta3;
let comision = (totalventas*0.1);
console.log ("Su comision por mes es " + "", comision);
let totalsalario = comision + salario;
console.log ("Su salio por mes es de" + "", totalsalario);



