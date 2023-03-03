let valorCompra = Number(prompt("¿Cuál fue el valor de la compra?"));
let descuento = 0;
let valorTotal = 0;

if(isNaN(valorCompra)) || valorCompra<=0{
    alert("Ingrese un valor de compra válido");
}if(valorCompra>=500000){
    descuento = valorCompra*0.3;
    valorTotal = valorCompra-descuento;
    alert("El valor final de la compra fue: " + valorTotal + " - tuvo un descuento del 30%");
}else{
    descuento = valorCompra*0.15;
    valorTotal = valorCompra-descuento;
    alert("El valor final de la compra fue: " + valorTotal + " - tuvo un descuento del 15%");
}