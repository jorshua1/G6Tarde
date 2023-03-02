// ejercicio 4
let SalarioBase = 980000
let Comisión = 170000
let ValorDeVenta = parseFloat(prompt ("Valor de Venta"));
let Comisión2 = (ValorDeVenta*0.05)
let NumeroDeAutos = parseFloat(prompt ("Autos Vendidos"));

let SalarioTotal = (SalarioBase+(Comisión*NumeroDeAutos)+Comisión2)
console.log (SalarioTotal)