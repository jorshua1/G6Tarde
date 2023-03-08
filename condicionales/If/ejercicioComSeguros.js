//Una compañía de seguros está abriendo un dpto de finanzas y estableció un programa para captar clientes, que consiste en lo siguiente: Si el monto por el que se efectúa la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, y si el monto es mayor que $50 000 la cuota a pagar será el 2% del monto, si el monto es igual a $50.000 no se debe pagar cuota. La afianzadora desea determinar si se debe pagar cuota y cuál será la cuota que debe pagar un cliente.

    alert("Este programa determinas si cliente debe pagar cuota y el valor de la misma")

var fianza = Number(prompt("Ingrese monto de fianza"));
var porcientp3 = fianza * 0.03;
var porcientp2 = fianza * 0.02;

if (isNaN(fianza) || fianza <= 0){
    alert("Ingrese un valor valido")
}if (fianza <= 49.999){
    alert("La cuota que debe pagar es = " + porcientp3)
}else if (fianza >= 50.0001){
    alert("La cuota que debe pagar es = " + porcientp2)
}else {
    alert("No debe pagar cuota ")
}