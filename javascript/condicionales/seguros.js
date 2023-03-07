let finanza = Number(prompt("¿Cuál es el monto por el que se efectua la finanza?"))
let cuota = 0

if(finanza<=0){
    alert("Por favor, ingrese un valor de finanza válido")
}else if((finanza<50000) && (finanza>=1)){
    cuota = finanza*0.03
    alert("La cuota a pagar del usuario es de: " + cuota + "$")
}else if(finanza>50000){
    cuota = finanza*0.02
    alert("La cuota a pagar del usuario es de: " + cuota + "$")
}else if(finanza==50000){
    alert("El usuario no debe pagar cuota")
}else{
    alert("Por favor, ingrese un valor de finanza válido")
}