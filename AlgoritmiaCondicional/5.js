
P1 = 1000
P2 = 1500

let ventaB = Number(prompt("ingrese la cantidad de conejos blancos que se vendio"))
let ventaN = Number(prompt("ingrese la cantidad de conejos negros que se vendio"))

if (ventaB > ventaN) {
    alert("la cantidad de conejos blancos que se vendio es mayor que la cantidad de conejos negros que se vendio")
}
else if (ventaB < ventaN) {
    alert("la cantidad de conejos blancos que se vendio es menor que la cantidad de conejos negros que se vendio")
}

let total = ventaB + ventaN
let operacionPrecio = (P1 * ventaB + P2 * ventaN)
alert ("el numero de conejos vendidos es de  " + total)
alert ("el valor total de la venta es de " + operacionPrecio)
