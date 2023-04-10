let arreglo = new Array(100);
let numerosPositivos = 0;
let signo=0;
for (let i = 0; i<arreglo.length; i++){
    arreglo[i] = Math.floor(Math.random()*(100-(-100)))+(-100)
 
    if (arreglo[i]>=0){
        numerosPositivos++
    }
}
alert(`Hay ${numerosPositivos} numeros positivos en el arreglo`);
