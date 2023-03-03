let diametro = Number(prompt("Ingrese el diametro de la rueda"));
if (isNaN(diametro)|| diametro <=0 ){
    console.log("Ingrese un valor valido")
}else if (diametro > 1.4){
    console.log("La rueda es para un vehiculo grande");
}else if (diametro <=1.4 && diametro > 0.8){
    console.log("La rueda es para un vehiculo mediano");
}else{
    console.log("La rueda es para un vehiculo pequeño");
}