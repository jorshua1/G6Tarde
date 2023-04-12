/*Programa que declare tres vectores ‘vector1’, ‘vector2’ y ‘vector3’ de cinco enteros cada uno, 
pida valores para ‘vector1’ y ‘vector2’ y calcule vector3=vector1+vector2.*/

let vector1 = [];
let vector2 = [];
let vector3 = [];

for (a = 0; a < 5; a++) {
    vector1[a] = parseInt(prompt("Ingrese los 5 numero enteros " + "\n # " + (a + 1)));
    while (isNaN(vector1[a]) || vector1[a] < 0) {
        vector1[a] = parseInt(prompt("Ingrese un valor valido " + "\n # " + (a + 1)));
    }
}
for (a = 0; a < 5; a++) {
    vector2[a] = parseInt(prompt("Ingrese los 5 numero enteros para el segundo vector " + "\n # " + (a + 1)));
    while (isNaN(vector2[a]) || vector2[a] < 0) {
        vector2[a] = parseInt(prompt("Ingrese un valor valido " + "\n # " + (a + 1)));
    }
}
for (a = 0; a < 5; a++) {
vector3[a] = vector1[a] + vector2[a];
}
console.log(vector3);