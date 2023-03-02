sueldo=parseInt(prompt("dijite el sueldo del trabajador"));
Venta1=parseInt(prompt("dijite el valor total de su primera venta"));
Venta2=parseInt(prompt("dijite el valor total de su segunda venta"));
Venta3=parseInt(prompt("dijite el valor total de su tercera venta"));
Ventas=Venta1+Venta2+Venta3;
sueldoComision=Ventas*(10/100)
sueldoTotal=sueldo+sueldoComision;

console.log("El valor sus comisiones es "+sueldoComision+"$");
console.log("El valor total de su sueldo es de "+sueldoTotal+"$");
