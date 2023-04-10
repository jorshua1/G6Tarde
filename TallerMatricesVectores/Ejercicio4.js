let notas = [];
let promedio = 0;
for(i=0; i<5; i++){
    let numero = parseFloat(prompt("Ingrese su nota"+ i));
    while(isNaN(numero)||numero<0 || numero>5){
        numero = parseFloat(prompt("ERROR, Ingrese su numero "+ i));
    }
    notas[i]=numero
}
for(x=0;x<notas.length;x++){
    promedio+=notas[x]/5
}
console.log(notas)
if(promedio>=0 && promedio<3){
    console.log("Su promedio es "+promedio+", es DEFICIENTE, NO pasa el año")
}
else if(promedio>=3 && promedio<4){
    console.log("Su promedio es "+promedio+", es ACEPTABLE, SI pasa el año")
}
else if(promedio>=4 && promedio<4.5){
    console.log("Su promedio es "+promedio+", es SOBRESALIENTE, SI pasa el año")
}
else{
    console.log("Su promedio es "+promedio+", es EXCELENTE, SI pasa el año")
}

