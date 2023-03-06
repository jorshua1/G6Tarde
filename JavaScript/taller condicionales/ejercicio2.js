//ejercicio 2 estacion del mes
let mes=Number(prompt("Ingrse numero del mes"));
if(mes == 12 || mes==1  || mes==2){
    estacion="Invierno"
}else if(mes==3 || mes==4 || mes==5){
    estacion="Primavera"
}else if(mes==6 || mes==7 || mes==8){
    estacion="Verano"
}else if(mes==9 || mes==10 || mes==11){
    estacion="Otoño"
}else{
    alert("Ingrese un numero valido")
}
if(mes>=1 && mes<=12){
    alert("La estacion es:"+estacion)
}