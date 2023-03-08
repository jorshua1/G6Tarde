/*Programa que le dira para que vahiculo es una llanta segun el diametro de esta */
let diam= parseFloat(prompt("Digite el diametro de la rueda"))

if (isNaN(diam)){
    alert("Ingrese un valor valido")
}else if (diam <= 1.4 && diam >0.8){
    alert("La rueda es para un vehiculo meadiano ")
}else if (diam > 1.4){
    alert("La rueda es para un vehiculo grnade")
}else {
    alert("La rueda es para un vehiculo pequeño ")
}