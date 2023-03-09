let llamada=Number(prompt("ingrese la duracion de la llamada en minutos"));
if(isNaN(llamada) || llamada<=0){
    console.log("valor invalido")
}
else{
    if(llamada<=3){
        console.log("el coste de su llamada es 200 pesos")
    }
    else{
        let valorextra=((llamada-3)*100)+200
        console.log("su valor a pagar es "+valorextra)
    }
}