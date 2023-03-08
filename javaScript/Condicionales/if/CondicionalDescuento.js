let valor = parseFloat(prompt("Ingrese el valor de la compra"));
let descuento = valor * 0.3;
if (isNaN(valor)){
    alert("Ingrese un valor valido")
}else if(valor >= 500000){
    valor = valor - descuento;
    alert("El valor del descuento es de: " + descuento)
    alert("El valor con el descuento aplicado es de: " + valor)
}else {
    descuento = valor * 0.15;
    valor = valor - descuento;
    alert("El valor del descuento es de: " + descuento)
    alert("El valor con el descuento aplicado es de: " + valor)
}