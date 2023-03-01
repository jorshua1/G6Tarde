let sueldoBase=parseFloat(prompt("Ingrese el sueldo base del trabajador:"))
let venta1=parseFloat(prompt("Ingrese el valor de la primera venta:"))
let venta2=parseFloat(prompt("Ingrese el valor de la segunda venta:"))
let venta3=parseFloat(prompt("Ingrese el valor de la tercera venta:"))

let comision=((venta1+venta2+venta3)*0.10)
let total=(sueldoBase+comision)
console.log("La comision que recibe por las tres ventas es:",comision," y el sueldo total es:",total);