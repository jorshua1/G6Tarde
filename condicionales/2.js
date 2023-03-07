let valor = Number(prompt("ingrese el valor de la compra"))
let total
let parqueadero = 2000 
if(isNaN(valor)){
    console.log("error, ingrese un numero")
}else if (valor >= 250000){
total = valor - (valor * 0.3)
alert("se realiza un descuento de 30%")
alert("el valor total de la compra es de" + total)
}else if (valor >= 200000 && valor < 250000 ){
    total = valor - (  valor * 0.2)
    alert("se realiza un descuento del 20%")
    alert (" el valor total de la compra es de " + total)
}else if ( valor  < 200000){
    alert("no se realiza ningun descuento")
    alert("el valor total de la compra es de" + valor)
}else if ( valor < 50000){
    total = valor + parqueadero
    alert("se le agregan 2000 del parqueadero")
alert( "el valor total de la compra es de" + total)
}
