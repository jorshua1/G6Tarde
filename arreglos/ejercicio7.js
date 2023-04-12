/*Realizar un programa que defina un vector llamado “vector_numeros” de 10 enteros, 
a continuación lo inicialice con valores aleatorios (del 1 al 10) y posteriormente muestre en pantalla 
cada elemento del vector junto con su cuadrado y su cubo.*/

let vector_numeros = [];
let cuadrado = [];
let cubos = [];

for(let a = 0; a < 10; a++){
    vector_numeros [a] = Math.floor(Math.random() * 11 - 0);
    
}
console.log(vector_numeros);

for(let a = 0; a < 10; a++){
    cuadrado [a] = vector_numeros[a] ** 2;
}

for(let a = 0; a < 10; a++){
    cubos [a] = vector_numeros [a] ** 3
}

console.log( "\n Elementos aleatorios" + vector_numeros + "\n Cuadrados" + cuadrado + "\n Cubos" + cubos);

