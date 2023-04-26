let valorCompras = parseInt(prompt("ingrese el monto total de la compra"))
if (isNaN(valorCompras)){alert("error")
}else if(valorCompras>=500000){
    descuentoCompras = valorCompras*0.3
    total1= valorCompras-descuentoCompras
    alert("su descuento es de "+descuentoCompras+ " total a pagar con el descuento "+total1)
}else if(valorCompras<500000){
    descuentoCompras2 = valorCompras*0.15
    total2= valorCompras-descuentoCompras2
    alert("su descuento es de "+descuentoCompras2+ " total a pagar con el descuento "+total2)
}
else if(valorCompras<0) 
{alert('error')}

