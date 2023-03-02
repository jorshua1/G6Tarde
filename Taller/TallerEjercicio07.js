//-------------------------EJERCICIO #7---------------------------

{
    let vCashBase = parseInt(prompt("Ingrese el sueldo base"));
    let vVentasMes = 3;
    let vSueldoTotal;

    let vComisionExtra = vVentasMes * 0.10;

    vSueldoTotal = vCashBase + vComisionExtra;

    alert("Su sueldo total mensual = " + vSueldoTotal);    
}