/* Una compañía de seguros está abriendo un dpto de finanzas y estableció un programa para captar clientes, que consiste en lo siguiente: Si el monto por el que se efectúa la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, y si el monto es mayor que $50 000 la cuota a pagar será el 2% del monto, si el monto es igual a $50.000 no se debe pagar cuota. La afianzadora desea determinar si se debe pagar cuota y cuál será la cuota que debe pagar un cliente.
 */

let vMoney = parseFloat(prompt("Cuanto dinero desea solicitar"));
let vTotaltotal;

if (isNaN(vMoney) || vMoney == 50000) {
    alert("Estimad@ debido a que su importe a solicitar es " + Math.trunc(vMoney) + "\n Su importe total a pagar sera = 50000");
}
else if (vMoney > 50000) {
    let vPocentajeUp = vMoney * 0.2;
    vTotaltotal = vMoney + vPocentajeUp;

    alert("Usuario el importe a pagar de su solicitud de \n prestamo es = $" + vTotaltotal);
}
else if (vMoney < 50000) {
    let vPocentajeDown = vMoney * 0.3;
    vTotaltotal = vMoney + vPocentajeDown;

    alert("Usuario el importe a pagar de su solicitud de \n prestamo es = $" + vTotaltotal);
}