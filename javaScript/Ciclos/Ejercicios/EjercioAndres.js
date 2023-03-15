/* 1. Imprime la suma de todos los números impares entre 1-100 */

let suma = 0;

for(let i = 0; i <= 100; i ++){
    if(i%2 !=0){
        suma=suma+i;
    }
}

console.log("La suma de todos los números impares entre 1-100 es:"+suma);