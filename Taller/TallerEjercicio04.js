//-------------------------EJERCICIO #4---------------------------

{
    let vSalario = 980000;
    let vComicion = 170000;
    let vValorVenta = 0.05;
    let vNcarVendido = parseInt(prompt("Ingrese el numero de autos vendidos"));
    let vSalarioTotal, vValorVentaExtra;
    
    vValorVentaExtra = (vNcarVendido * vComicion) * vValorVenta;
    vSalarioTotal = vSalario + vComicion + vNcarVendido;

    alert("Salario mensual = " + vSalario + '\n'+ "Numero de autos vendidos = " + vNcarVendido + '\n' + "Saldo total del comercial = " + vSalarioTotal );
    
}