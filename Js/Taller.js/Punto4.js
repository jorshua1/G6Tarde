//-------------------------EJERCICIO #4---------------------------

let vSalario = 980000;
let vComicion = 170000;
let vValorVenta = 0.05;
let vNcarVendido = parseInt(prompt("Ingrese el numero de autos vendidos"));
let vPreCar = parseInt(prompt("Ingrese monto total vendido"));
let vValorVentaExtra = vComicion * vNcarVendido;
let vSalarioTotal;
let vPorVenta = (vValorVenta * vPreCar);

vSalarioTotal = vSalario + vValorVentaExtra + vPorVenta;

               alert("Salario total del comercial =" + vSalarioTotal);