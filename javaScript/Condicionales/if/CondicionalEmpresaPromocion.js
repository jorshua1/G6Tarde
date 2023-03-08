/*una empresa tiene una promocion donde por compras mayores o 
iguales a 250000 da un 30% a la compra, por compras mayores o 
iguales a 200000 da un 20 % a la compra, si la compra es menor
a 200000 no hay descuento y toca notificarle al usuario, si la
compra es menor a 50000 agregar 2000 por Parqueadero */
 
let compra = parseFloat(prompt("Ingrese el valor de la compra"));
//let parking  = prompt("Hizo uso del parqueadero ?")
if (isNaN(compra)){
    alert("Ingrese un valor valido")    
 }else if (compra >= 250000 ){
    compra = compra - (compra *=0.30)
    alert("El valor de la compra con el descuento aplicado es de: " + compra)
 }else if (compra >= 200000 && compra < 250000){
    compra = compra - (compra *=0.20)
    alert("El valor de la compra con el descuento aplicado es de: " + compra)
 }else if(compra < 200000 && compra >= 50000){
    alert("Por comprar inferiores a 200.000 no se aplica descuento " + compra)
 }else if(compra < 50000) {
    compra = compra + 2000
    alert("Se agregaron 2000 de porqueadero por comprar inferiores a 50.000 " + compra)
 }
