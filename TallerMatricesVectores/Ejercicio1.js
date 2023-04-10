let numerosAlmacenados = [];
let sumatoria= 0;
for(i=0; i<10; i++){
    let numero = parseFloat(prompt("Ingrese su numero"+ i));
    while(isNaN(numero)){
        numero = parseFloat(prompt("ERROR, Ingrese su numero "+ i));
    }
    numerosAlmacenados[i]=numero
}
for(x=0;x<numerosAlmacenados.length;x++){
    sumatoria+=numerosAlmacenados[x]
}
console.log(numerosAlmacenados)
console.log("La sumatoria es "+sumatoria)