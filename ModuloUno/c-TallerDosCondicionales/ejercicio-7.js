/*
Una compañía de seguros está abriendo un departamento de finanzas y estableció un programa para captar clientes, 
que consiste en lo siguiente: 
Si el monto por el que se efectúa la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, 
Si el monto es mayor que $50 000 la cuota a pagar será el 2% del monto
Si el monto es igual a $50.000 no se debe pagar cuota.

La afianzadora desea determinar si se debe pagar cuota y cuál será la cuota que debe pagar un cliente.
*/

let montoFianza = 50000;/*parseFloat(prompt("Por favor ingresarvalor de compra."));*/

if (isNaN(montoFianza) || montoFianza > 50000) {
    let pagoUno = ((montoFianza / 100) * 2);
    console.log("La cuota es del 2%, debe pagar : $" + pagoUno);

} else if (montoFianza < 50000) {
    let pagoDos = ((montoFianza / 100) * 3);
    console.log("La cuota es del 2%, debe pagar :" + pagoDos);

} else {
    console.log("La cuota es del 0%, no debe pagar");
}