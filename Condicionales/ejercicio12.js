/**Una compañía de seguros está abriendo un dpto de finanzas y estableció un programa para captar clientes, que consiste en lo siguiente: Si el monto por el que se efectúa la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, y si el monto es mayor que $50 000 la cuota a pagar será el 2% del monto, si el monto es igual a $50.000 no se debe pagar cuota. La afianzadora desea determinar si se debe pagar cuota y cuál será la cuota que debe pagar un cliente. */

let valorFinanza=Number(prompt("Ingrese el monto de la finanza"));
let monto;

if (isNaN(valorFinanza)|| valorFinanza<0){
    alert("Ingrese un valor válido");
}else if (valorFinanza<50000){
    monto= valorFinanza*0.03;
    alert("SI debe pagar cuota, y será el 3% de su monto, en total una cuota de "+monto);
}else if (valorFinanza>50000){
    monto=valorFinanza*0.02;
    alert("Si debe pagar cuota, y será el 2% de su monto, en total una cuota de "+monto);
}else{
    alert("No debe pagar cuota");
}