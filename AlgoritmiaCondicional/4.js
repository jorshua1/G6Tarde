let duracion = Number(prompt("ingrese la duracion de la llamada en minutos"))
let minutos = (duracion - 3)
let valor = (minutos *100)
if (isNaN(duracion)) {
    alert("ingrese una duracion valida")}
    else if (duracion <= 3){
    alert("tiene que pagar 200 pesos")
}else if (duracion > 3 ){
    (valor + 200)
    alert("tiene que pagar" + (valor + 200))
}


