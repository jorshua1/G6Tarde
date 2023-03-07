/*Una compañía de seguros está abriendo un dpto de finanzas y estableció un programa para captar clientes,
que consiste en lo siguiente: Si el monto por el que se efectúa la fianza es menor que $50 000 la cuota a
pagar será por el 3% del monto, y si el monto es mayor que $50 000 la cuota a pagar será el 2% del monto,
si el monto es igual a $50.000 no se debe pagar cuota. La afianzadora desea determinar si se debe pagar
cuota y cuál será la cuota que debe pagar un cliente.*/

    let fianza=parseInt(prompt("ingrese el valor de su fianza"));
    if(!isNaN(fianza)){
        if(fianza>50000){
            let couta1=(fianza*0.03);
            console.log("el valor de su cuota es"+couta1)
        }
        else if(fianza=50000){
            console.log("no debe pagar cuota")
        }
        else{
            console.log("su cuota es"+(fianza*0.02))
        }
                }
else{
    console.log("ingrese un valor valido")
}