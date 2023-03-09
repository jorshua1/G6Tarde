let compra=Number(prompt("Ingrese el valor de su compra para saber si tiene un descuento"));
let valorTotal;

if(isNaN(compra)){
    alert("Ingrese un dato válido");
}else if(compra<50000){
    valorTotal=compra+2000;
    alert(valorTotal);
}else if(compra <200000){
    alert("No tiene descuento");
}else if(compra>=250000){
    valorTotal=compra-(compra*0.3);
    alert("Su compra con el descuento del 30% le queda en "+valorTotal);
}else if(compra>=200000){
    valorTotal=compra-(compra*0.2);
    alert("Su compra con el descuento del 20% le queda en "+valorTotal);
}