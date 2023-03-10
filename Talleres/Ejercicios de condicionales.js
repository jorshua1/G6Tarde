let diametro = Number(prompt("Ingrese el diametro de la rueda"));

if (isNaN(diametro)){
    console.log("ingrese un valor valido")
}else if (diametro > 1.4){
    console.log("la rueda es para un vehiculo grande")
}else if (diametro > 0.8 && diametro < 1.4){
    console.log("la rueda es para un vehiculo mediano");

}else {

}console.log("la rueda es para un vehiculo pequeño");

////////////////////////////////////////////////////



///////////////////////////////////////////////////////77

let calificación = Number(prompt("Ingrese la calificación"));
if (isNaN(calificación)){
    console.log("error, ingrese un numero")
}else if ( calificación < 2.0 && calificación >=  1.0){
    console.log("Calificacion Insuficiente");
}else if ( calificación === 3.0) {
    console.log("Calificacion Suficiente");
}else if ( calificación <=4.0){
    consolel.log("Calificación Bien")
}else if ( calificación === 5.0){
    console.log ("Calificacion Excelente")
}else {
    console.log ("Calificación Invalida")
} 