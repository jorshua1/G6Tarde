let tiempoLlamada = Number(prompt("Por favor, indique cuántos minutos duró la llamada"))
let minutosAdicionales = tiempoLlamada-3
let costo = 200

if((isNaN(tiempoLlamada)) || (tiempoLlamada<=0)){
    alert("Por favor, ingrese una cantidad de minutos válida")
}else{
    if(tiempoLlamada<=3){
        alert("El costo de su llamada es de " + costo + "$ pesos")
    }else{
        costo = costo + (minutosAdicionales*100)
        alert("El costo de su llamada es de " + costo + "$ pesos")
    }
}