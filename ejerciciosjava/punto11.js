/*Una compañía de seguros está abriendo un dpto de finanzas y estableció un programa para captar clientes,
que consiste en lo siguiente: Si el monto por el que se efectúa la fianza es menor que $50 000 
la cuota a pagar será por el 3% del monto, y si el monto es mayor que $50 000 la cuota a pagar será 
el 2% del monto, si el monto es igual a $50.000 no se debe pagar cuota. 
La afianzadora desea determinar si se debe pagar cuota y cuál será la cuota que debe pagar un cliente.*/

let monto = Number(prompt("Ingrese el monto"));
if (isNaN(monto)){
    console.log("¡ERROR!");
}else if(monto < 50000){
    let descuento = monto*0.03
    console.log("Su cuota a pagar es de: "+descuento);
}else if(monto === 50000){
    console.log("No debe pagar cuota");
}else if(monto > 50000){
    descuento = monto*0.02
    console.log("Su cuota a pagar es de: "+descuento);
}