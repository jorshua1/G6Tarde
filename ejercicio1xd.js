//una empresa tiene una promocion donde por compras mayores o iguales a 250000 da un 30% de descuento a la compra, por compras mayores o iguales a 200000 da un 20 % de descuento a la compra, si la compra es menor a 200000 no hay descuento y toca notificarle al usuario, si la compra es menor a 50000 agregar 2000 por Parqueadero
let valorcompra = parseInt(prompt("digite el valor de su compra"));
let parker = parseInt(prompt("tienes carro? responder:", 1, "  =si ", 2, " = no "));
let descuento1 = 30/100;
let descuento2 = 20/100;
let parqueadero = 2000;
let n = valorcompra-(valorcompra*descuento1);
let n2 = valorcompra-(valorcompra*descuento2);
let n3 = valorcompra-parqueadero;
let n4 = valorcompra-0

if (valorcompra > 250000){
    console.log("el total es: ",n)
}else{
    if (valorcompra >=200000 && valorcompra < 250000){
    console.log("el total es: ", n2)
    
}else{
    if (valorcompra < 50000 && (parker = 1)){
    console.log("el total es: ", n3)
}else{
        console.log("el total es: ",valorcompra)

    if (valorcompra < 50000 && (parker = 2)){
        console.log("el total (sin parqueadero) es: ",n4)
}
}
}    
}
