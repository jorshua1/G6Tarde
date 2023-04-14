/*Ejercicio 10
Diseñar el algoritmo correspondiente a un programa, que:

Crea una tabla bidimensional de longitud 5x5 y nombre ‘matriz’.
Carga la tabla con valores numéricos enteros.
Suma todos los elementos de cada fila y todos los elementos 
de cada columna visualizando los resultados en pantalla. */

let matriz = new Array(5);
let sumaFilas = 0;
let sumaColumnas = 0;

for(let i = 0; i< matriz.length; i++){
    matriz[i] = new Array(5);
}

for( let i= 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        matriz[i][j] = Math.floor(Math.random() * 10+1);
        
    }
}

//Suma de filas------------------------------
for (let i = 0; i < matriz.length; i++){
    sumaFilas= 0;
    for (let j = 0; j < matriz.length; j++){
        sumaFilas += matriz[i][j]; 
    }
    console.log(sumaFilas)
}
//Suma columnas-----------------------------
for (let j = 0; j < matriz.length; j++){
    sumaColumnas = 0;
    for (let i = 0; i < matriz.length; i++){
        sumaColumnas += matriz[i][j]; 
    }
    console.log(sumaColumnas)
} 
console.table(matriz)
console.log(sumaFilas);
console.log(sumaColumnas);
console.log(matriz);

