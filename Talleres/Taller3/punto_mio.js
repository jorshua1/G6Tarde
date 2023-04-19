/* 1. Imprime la suma de todos los números impares entre 1-100 */

    let sum = 0;

    for(let i = 1;i<=100;i++){
        if(i%2 !=0){
            sum=sum+i;
        }
    }

    console.log("La suma de todos los números impares entre 1-100 es:"+sum);
