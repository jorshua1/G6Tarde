//Una compañía de seguros está abriendo un dpto de finanzas y estableció un programa para captar clientes, que consiste en lo siguiente: Si el monto por el que se efectúa la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, y si el monto es mayor que $50 000 la cuota a pagar será el 2% del monto, si el monto es igual a $50.000 no se debe pagar cuota. La afianzadora desea determinar si se debe pagar cuota y cuál será la cuota que debe pagar un cliente.
 let monto= Number(prompt("Ingrese el monto de fianza"));
 if(monto<50000){
    let cuota= monto*0.03;
    alert("La cuota a pagar será por el 3% del monto")
    alert("La cuota a pagar será "+cuota)
  }else if(monto>50000){
    let cuota= monto*0.02;
    alert("La cuota a pagar será el 2% del monto")
    alert("La cuota a pagar será "+cuota)
  }else{
    alert("No debe pagar cuota")
  }