/*Realizar un programa que defina un vector llamado “vector_numeros” de 10 enteros, a continuación lo inicialice con 
valores aleatorios (del 1 al 10) y posteriormente muestre en pantalla cada elemento del vector junto con su cuadrado 
y su cubo.*/

let vectorNumeros = new Array(10);
let vectorCuadrado = []
let vectorCubico = []

for (let i = 0; i < vectorNumeros.length; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    vectorNumeros[i] = numeroAleatorio;
    console.log(vectorNumeros);

    for (let i = 0; i < vectorNumeros.length; i++) {
        vectorCuadrado[i] = vectorNumeros[i] ** 2;
        console.log(`el cuadrado de ${vectorNumeros[i]} es ${vectorCuadrado[i]}`);

        for (let i = 0; i < vectorNumeros.length; i++) {
            vectorCubico[i] = vectorNumeros[i] ** 3;
            console.log(`el cubico de ${vectorNumeros[i]} es ${vectorCubico[i]}`);
        }
    }
}
console.log(`
El vector inicial es:      ${vectorNumeros}
El cuadrado del vector es: ${vectorCuadrado}
El cubico del vector es:   ${vectorCubico}`)