let minutos=Number(prompt("Ingrese minutos que ha usado el telefono"));
if(minutos<=3){
    alert("Su costo a pagar es 200 pesos")
}else{
    pago=200+((minutos-3)*100)
    alert("Su costo a pagar es " + pago + " pesos")
}