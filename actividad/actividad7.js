let sueldo= 1500000
let venta1= parseInt(prompt("ingrese su primera venta"))
let venta2= parseInt(prompt("ingrese su segunda venta"))
let venta3= parseInt(prompt("ingrese su tercera venta"))

valorVentas= (venta1+ venta2+ venta3)*0.1

pagoMes=valorVentas+sueldo

alert("su pago del mes es de"+pagoMes)