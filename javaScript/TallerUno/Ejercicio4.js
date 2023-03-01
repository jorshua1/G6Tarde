var salario = 980000;
var comision = 170000;
var numeroVentas = parseInt(prompt("Ingrese la cantidad de ventas que tuvo este mes "));
var TotalValorVentas = parseInt(prompt("Ingrese el valor total en ventas que tuvo este mes "));
var salarioVendedor = (salario + (comision * numeroVentas) + TotalValorVentas * 0.05); 

alert("El salario total del vendedor este mes fue de: " + salarioVendedor);