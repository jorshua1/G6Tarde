//Rueda

let diametroRueda = Number(prompt("Ingrese el diametro de la rueda"));


if (isNaN(diametroRueda)){
    console.log("Por favor, ingrese un valor válido");
}else if(diametroRueda>1.4){
    console.log("La rueda es para un vehículo grande");
}else if(diametroRueda<=1.4 && diametroRueda>0.8){
    console.log("La rueda es para un vehículo mediano");
}else{
    console.log("La rueda es para un vehículo pequeño");
}