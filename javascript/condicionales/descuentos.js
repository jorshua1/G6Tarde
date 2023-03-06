//Ejercicio de Daniel Jay

let valorCompra = Number(prompt("¿Cuál es el valor de la compra realizada?"))
let descuento = 0
let costoTotal = 0
let parqueadero = 2000

if(isNaN(valorCompra)||valorCompra<=0){
    alert("Ingrese un valor de compra válido");
}else if(valorCompra>=250000){
    descuento = valorCompra*0.3
    costoTotal = valorCompra-descuento
    alert("El precio original de la compra era: " + valorCompra + "$, pero tuvo un descuento de " + descuento + "$, teniendo un valor final de: " + costoTotal + "$")
}else if((valorCompra>=200000) && (valorCompra<250000)){
    descuento = valorCompra*0.2
    costoTotal = valorCompra-descuento
    alert("El precio original de la compra era: " + valorCompra + "$, pero tuvo un descuento de " + descuento + "$, teniendo un valor final de: " + costoTotal + "$")
}else if((valorCompra<200000) && (valorCompra>=50000)){
    costoTotal = valorCompra
    alert("El precio de la compra es: " + costoTotal + "$, no hubo ningún descuento")
}else if(valorCompra<50000){
    costoTotal = valorCompra+parqueadero
    alert("El precio de la compra es de: " + costoTotal + "$, al cobro se le han añadido " + parqueadero + "$ de parqueadero.")
}
