/*una empresa tiene una promocion donde por compras mayores o iguales a 250000 da un 30% a la compra,
por compras mayores o iguales a 200000 da un 20 % a la compra,
si la compra es menor a 200000 no hay descuento y toca notificarle al usuario, 
si la compra es menor a 50000 agregar 2000 por Parqueadero*/

let valorcompra = Number(prompt("Ingrese el valor de su compra"));
if(isNaN(valorcompra)){
    console.log("¡ERROR!");
}
else if(valorcompra>=250000){
    let descuento = valorcompra*0.3;
    console.log("Su descuento es de: " + descuento);
}else if(valorcompra>=200000){
    descuento = valorcompra*0.2
    console.log("Su descuentoi es de: "+ descuento);
}else if(valorcompra<200000 && valorcompra>=50000){
    console.log("Su compra no tiene ningún descuento");
}else if(valorcompra<50000){
    let total = valorcompra + 2000
    console.log("Su valor a pagr es de: "+total +"Se cobra parqueadero por el valor de su compra");
}