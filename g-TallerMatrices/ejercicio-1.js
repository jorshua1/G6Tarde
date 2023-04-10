/*
Desarrolle un algoritmo que realice la sumatoria de 1O números almacenados en un vector.
*/

let arregloNumeros = new Array(10)
let sumatoriaVector = 0;

for (let i = 0; i < arregloNumeros.length; i++) {

    arregloNumeros[i] = 1;/*parseInt(prompt());*/

    while (isNaN(arregloNumeros[i])) {

        arregloNumeros[i] = 0;/*parseInt(prompt());*/
    }
    sumatoriaVector += arregloNumeros[i]
}
console.log(`
El vector contiene los siguientes numeros ${arregloNumeros}
y la sumatoria es ${sumatoriaVector}`);


let arregloNumerosDos = []
let sumatoriaVectorDos = 0;

for (let i = 0; i < 10; i++) {

    arregloNumerosDos[i] = 1;/*parseInt(prompt());*/

    while (isNaN(arregloNumerosDos[i])) {

        arregloNumerosDos[i] = 0;/*parseInt(prompt());*/
    }
    sumatoriaVectorDos += arregloNumerosDos[i]
}

console.log(`
El vector contiene los siguientes numeros ${arregloNumerosDos}
y la sumatoria es ${sumatoriaVectorDos}`);