/*Realizar un programa que defina un vector llamado “vector_numeros” de 10 enteros, 
a continuación lo inicialice con valores aleatorios (del 1 al 10) y posteriormente 
muestre en pantalla cada elemento del vector junto con su cuadrado y su cubo. */

let vector_numeros = new Array(10);
for(let i=0; i<10; i++){
    vector_numeros[i]= Math.floor(Math.random() * (10-1+1) + 1);

}
console.log(vector_numeros);

