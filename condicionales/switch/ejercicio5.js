//en una granja existen N conejos, C1 blancos y C2 negros. se venden X conejos negros y Y conejos blancos. hacer un algoritmo que: 
//imprima cantidad de conejos vendida
// si P1 es el precio de venta de los conejos blancos y P2 es el precio de venta de los conejos negros, imprima el monto total de la venta .
//imprima el color de los conejos que se vendieron mas 

var numeroConejos = Number (prompt("Ingrese numero de conejos"))
var conejosNegros = Number (prompt("Ingrese numero de conejos negros"))
var conejosBlancos = numeroConejos - conejosNegros
var numeroConejosNVendidos = Number (prompt("Ingrese numero de conejos negros vendidos"))
var numeroConejosBVendidos = Number (prompt("Ingrese numero de conejos blancos vendidos"))
var precioCB = parseFloat (prompt("Ingrese precio de conejo blanco"))
var precioCN = parseFloat (prompt("ingrese precio de conejo negro"))


var conejosVentidos = numeroConejosBVendidos + numeroConejosNVendidos
    alert ("Se han vendido = " + conejosVentidos + '\n' +"conejos")
var totalVenta = parseFloat ((numeroConejosNVendidos * precioCN) + (numeroConejosBVendidos * precioCB))
    alert ("El precio total de los conejos vendidos es = " + totalVenta)
if (numeroConejosBVendidos > numeroConejosNVendidos){
    alert("Se vendieron mas conejos blancos")
}else {
    alert("Se vendieron mas conejos negros")
}