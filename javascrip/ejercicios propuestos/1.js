/*una empresa tiene una promocion donde por compras mayores o iguales a 250000 da un 30% de descuento a la compra, por compras mayores o iguales a 200000 da un 20 % de descuento a la compra, si la compra es menor a 200000 no hay descuento y toca notificarle al usuario, si la compra es menor a 50000 agregar 2000 por Parqueadero*/


let compras = Number(prompt("ingrese el valor de la compra"));


if (compras>=250000){
    console.log("su descuento es de 30%, para un total:", + (compras*0.3)+compras);

}else if(compras>=200000){
    console.log("Su descuento es de 20% para un total :", + (compras*0.2)+compras);
    
}else if(compras<200000 && compras>=50000){
    console.log("No tiene descuento");

}else if(compras<50000){
    
    console.log("Debe pagar 200 adicional por parqueo para un total:", + (compras+2000));
}
