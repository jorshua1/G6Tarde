/*Ejercicio 1 
Realizar un programa que defina un vector llamado “vector_numeros” 
de 10 enteros, a continuación lo inicialice con valores aleatorios 
(del 1 al 10) y posteriormente muestre en pantalla cada elemento del 
vector junto con su cuadrado y su cubo. */

let vector_numeros = new Array();

for (let i = 0; i < 10; i++){
    vector_numeros[i] = Math.floor(Math.random()* (10)+1);
    console.log(`Posicion ${i} es: ${vector_numeros[i]}  su cuadrado: ${vector_numeros[i]**2} su cubo: ${vector_numeros[i]**3}`)
}
