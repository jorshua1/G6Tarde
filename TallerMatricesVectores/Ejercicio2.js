let datos = [];
let numero;
let negativos = 0;
let positivos = 0;
for(i=0; i<100; i++){
    numero = Math.floor(Math.random()* (101 - (-101)))+(-100);
    if(numero<0){
        negativos++
        datos.push(numero)
    }
    else{
        positivos++
        datos.push(numero)
    }
}
console.log(datos);
console.log(positivos);
console.log(negativos);
