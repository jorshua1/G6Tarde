/*una empresa tiene una promocion donde por compras mayores o iguales a 250000 da un 30% de descuento a la compra, por compras mayores o 
iguales a 200000 da un 20 % de descuento a la compra, si la compra es menor a 200000 no hay descuento y toca notificarle al usuario, 
si la compra es menor a 50000 agregar 2000 por Parqueadero*/

let compra = parseInt(prompt("Ingrese el valor de la compra"));
let total;
if(isNaN(compra)){
    alert("error, ingrese un numero")
}
else if (compra >= 250000){
    total = compra - ( compra * 0.3)   
    alert("A la compra se le dara un descuento del 30%" )
    alert("El total es de :" + total )
}else if (compra >= 200000){
    total = compra - ( compra * 0.2);
    alert("A la compra se le dara un descuento de 20%")
    alert("El total es de :" + total);
}else if (compra <= 200000 && compra > 50000){
    alert("No se aplicara ningun descuento");
}else if ( compra <= 50000){
    console.log(operacion = compra + 2000);
    alert("Se agregaran 2000 por parqueadero")
    alert("El total es de :" + operacion)
}   