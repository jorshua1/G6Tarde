/*Una compañía de seguros está abriendo un dpto de finanzas y estableció un programa para captar clientes, que consiste en lo siguiente: Si el monto por el que se efectúa la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, y si el monto es mayor que $50 000 la cuota a pagar será el 2% del monto, si el monto es igual a $50.000 no se debe pagar cuota. La afianzadora desea determinar si se debe pagar cuota y cuál será la cuota que debe pagar un cliente.*/

/*if < 50000 pagar 3% del monto*/
/*if > 50000pagar 2%del monto */
/*if = 50000 pagar no paga */


let monto=Number(prompt("ingrese el monto "));


if(monto<50000){
    console.log("debe pagar ", monto*0.3 );

}else if(monto>50000){
    console.log("debe pagar", monto*0.2);

} else if(monto=50000){
    console.log("no debe pagar");
}