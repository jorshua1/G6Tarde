//Diametro de las ruedas

let diametro = Number(prompt("Ingrese el diametro de la rueda"));
if (diametro>1.4){
    console.log("La rueda es para un vehiculo grande");
} else if (diametro<=1.4 && diametro>0.8){
    console.log("La rueda es para unu vehiculo mediano");
}else{
    console.log("La rueda es para un vehiculo pequeño");
}