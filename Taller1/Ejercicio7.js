// ejercicio 7
let SueldoBase = 1500000
let Venta1 = parseFloat(prompt ("Valor venta 1"));
let Venta2 = parseFloat(prompt ("Valor venta 2"));
let Venta3 = parseFloat(prompt ("Valor venta 3"));
let ComisionT = ((Venta1+Venta2+Venta3)*0.1)
let SueldoTotal = (SueldoBase+ComisionT)
console.log ("Su sueldo Total es",SueldoTotal)