let meses = Number(prompt("Ingrese de 1 a 12 el es del año en orden calendario ejm (Enero 1, Diciembre 12)"));

if(isNaN(meses)){
alert("ERROR, alguno de los dos datos no es un número");
}
else if(meses==1){
    alert("El me de Enero esta en la estacion Invierno");
}else if(meses==2){
    alert("El me de Febrero esta en la estacion Invierno");
}else if(meses==3){
    alert("El me de Marzo esta en la estacion Primavera");
}else if(meses==4){
    alert("El me de Abril esta en la estacion Primavera");
}else if(meses==5){
    alert("El me de Mayo esta en la estacion Primavera");
}else if(meses==6){
    alert("El me de Junio esta en la estacion Verano");
}else if(meses==7){
    alert("El me de Julio esta en la estacion Verano");
}else if(meses==8){
    alert("El me de Agosto esta en la estacion Verano");
}else if(meses==9){
    alert("El me de Septiembre esta en la estacion Otoño");
}else if(meses==10){
    alert("El me de Octubre esta en la estacion Otoño");
}else if(meses==11){
    alert("El me de Noviembre esta en la estacion Otoño");
}else if(meses==12){
    alert("El me de Diciembre esta en la estacion Invierno");
}