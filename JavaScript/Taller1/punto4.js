var nAuto=parseInt(prompt("Ingrese numero de autos vendidos"));
var mVentas=parseInt(prompt("Ingrese monto total de la venta"));
var comisionNautos=170000*nAuto;
var comisionMventas=(mVentas*5)/100;
var salariototal=980000+comisionNautos+comisionMventas;
alert("Su salario total es de:"+salariototal);