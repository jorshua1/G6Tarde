let Diametro= parseInt(prompt("ingrese el diametro de la rueda"))
if (isNaN(Diametro)) {
    alert("error")
}else if(Diametro>=1.4){
    alert("la rueda es para un vehiculo grande")
}else if(Diametro<1.4 && Diametro>0.8){
    alert("la rueda es para un vehiculo mediano")
}else if(Diametro<0.8&&Diametro>0){
    alert("la rueda es para un vehiculo pequeño")
}else if(Diametro<=0){
    alert("error")
}