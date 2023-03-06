/*una empresa tiene una promocion donde por compras mayores o iguales a 250000 da un 30% de descuento a la compra, 
por compras mayores o iguales a 200000 da un 20 % de descuento a la compra, si la compra es menor a 200000 no hay descuento 
y toca notificarle al usuario, si la compra es menor a 50000 agregar 2000 por Parqueadero*/

let Vcompra = parseInt(prompt("Por favor digite el valor de su compra"));
let preciot;

if (!isnNaN(Vcompra) >= 250000){

    preciot = Vcompra - (Vcompra * 0.3);
    alert("al valor de la compra se le aplica un descuento del 30% y estará valiendo: "+preciot);

}else if(Vcompra >= 200000){

    preciot = Vcompra - (Vcompra * 0.2);
    alert("al valor de la compra se le aplica un descuento del 20% y estará valiendo: "+preciot);

}else if(Vcompra < 200000){

    
    alert("No se aplica ningun descuento y  el valor de la compra sigue siendo : "+Vcompra);

}else if(Vcompra < 50000){

    preciot = Vcompra + 2000;
    alert("la compra no tiene ningun descuento y debera pagar un adicional de 2000 por parqueadero, el valor total es: "+preciot);

}else{

    alert("este valor es invalido");

}
