let arreglo = [];
let numerosPositivos = 0;

for (let i = 0; i<100; i++){
    arreglo[i]=parseInt(prompt("Ingrese un numero"));
    if (arreglo[i]>=0){
        numerosPositivos++
    }
}
alert(`Hay ${numerosPositivos} numeros positivos en el arreglo`);
