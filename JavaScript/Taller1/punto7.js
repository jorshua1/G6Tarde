var sueldoBase= parseInt(prompt("Ingrese su sueldo base"));
var venta1= parseInt(prompt("Ingrese valor venta 1"));
var venta2= parseInt(prompt("Ingrese valor venta 2"));
var venta3= parseInt(prompt("Ingrese valor venta 3"));
var comision=((venta1+venta2+venta3)*10)/100;
var salarioTotal=sueldoBase+comision;
alert("usted tiene una comision total de:"+comision);
alert("Su salario total del mes e de:"+salarioTotal);
