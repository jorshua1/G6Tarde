// Valor de una compra
let compra = parseInt(prompt("Ingrese el valor de la compra"));
if(isNaN(compra || compra<0)){
    console.log("Ingrese el valor de lac compra correcto");
}else if (compra>=500000){
    descuento=compra*0.3
    valor=compra-descuento
    console.log("Su descuento es: "+descuento +"y su valor total de compra es de: " +valor);
}else if(compra<500000){
    descuento=compra*0.15
    valor=compra-descuento
    console.log("Su descuento es de: "+descuento+ "y su valor total de compra es de: " +valor);

}