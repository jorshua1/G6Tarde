/*Ejercicio 7Permalink
Programa que declare tres vectores ‘vector1’, ‘vector2’ 
y ‘vector3’ de cinco enteros cada uno, pida valores para 
‘vector1’ y ‘vector2’ y calcule vector3=vector1+vector2. */

let vector1 = new Array(5);
let vector2 = new Array(5);
let vector3 = new Array(5);

for (let i = 0; i < 5; i++) {

    vector1[i] = parseFloat(prompt(`Ingrese un numero en el vector 1 posicion ${i}`))

    while (isNaN(vector1[i]) || vector1[i]<0){
        vector1[i] = parseFloat(prompt(`Ingrese un numero en el vector 1 posicion ${i}`))
    }

    vector2[i] = parseFloat(prompt(`Ingrese un numero en el vector 2 posicion ${i}`))

    while (isNaN(vector2[i]) || vector2[i]<0){
        vector2[i] = parseFloat(prompt(`Ingrese un numero en el vector 1 posicion ${i}`))
    }

    vector3[i] = vector1[i]+vector2[i];
}
console.log(vector1);
console.log(vector2);
console.log(vector3);