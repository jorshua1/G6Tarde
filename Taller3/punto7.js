/*Mostrar en pantalla los N primero número primos. Se pide por teclado la cantidad de números primos que queremos mostrar.*/

let sum = 0;

for(let i = 1;i<=100;i++){
    if(i%2 !=0){
        sum=sum+i;
    }
    console.log(sum);
}

