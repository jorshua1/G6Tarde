//una empresa tiene una promocion donde por compras mayores o iguales a 250000 da un 30% de descuento a la compra, por compras mayores o iguales a 200000 da un 20 % de descuento a la compra, si la compra es menor a 200000 no hay descuento y toca notificarle al usuario, si la compra es menor a 50000 agregar 2000 por Parqueadero
   alert("Este programa determina de aplica dcto")

var valorCompra = Number(prompt("Ingrese valor de compra"))
var dcto30 = valorCompra * 0.30
var dcto20 = valorCompra * 0.20
const parqueadero = 2000

if (isNaN(valorCompra)|| valorCompra <=0){
    console.log("Ingrese un valor valido")
}else if(valorCompra >= 250000){
    alert("Tendra 30% dcto, pagara = "+ (valorCompra - dcto30))
}else if (valorCompra >= 200000){
    alert("Tendra 20% dcto, pagara = " + (valorCompra - dcto20))
}else if (valorCompra <= 200000){
    alert("No tendra dcto")
}if (valorCompra <= 50000){
    alert("Se cobrara parqueadero, 2000 extra")
}