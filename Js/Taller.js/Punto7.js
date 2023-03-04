//-------------------------EJERCICIO #7---------------------------

let vSueldoBase = parseFloat(prompt("Ingrese valor de sueldo base"));
let vVentasMes = parseFloat(prompt("Ingrese valor ventas del mes"));
let vComision;
let vVentasTotal;

vComision = 10 * vVentasMes / 100
vVentasTotal = vSueldoBase + vComision

alert("El valor que obtendra por comisiones sera =" + vComision + '\n' + "El valor total de pago al mes sera =" + vVentasTotal)
