let monto = parseFloat(prompt("Ingrese un monto")) 
let cuota = 0;

if (isNaN(monto) || monto <=0){
    alert("Digite un valor valido")
}else if (monto < 50000){
    cuota = monto * 0.03
    alert("Debe pagar una cuota del 3% la cual tiene un monto de: " + cuota)
}else if (monto > 50000){
    cuota = monto * 0.02
    alert("Debe pagar una cuota del 2% la cual tiene un monto de: " + cuota)
}else {
    alert("No debe pagar cuota")
}