/* EJERCICIO 5: Hacer un programa que inicialice un vector de números con valores aleatorios, y posterior ordene los elementos de menor a mayor.*/
let vector = new Array();
let tamañoVector = parseInt(prompt("ingrese la cantidad de valores que quiere en el vector"));
for (i = 0; i < tamañoVector; i++) {
    vector[i] = Math.floor(Math.random() * (100 - (-100) + 1) + (-100));
} console.log(vector);
for (h = 1; h < vector.length; h++) {
let j= h-1
let temp = vector[h];
while (j >= 0 && vector[j] > temp) {
    vector[j + h] = vector[j];
    j--;
}
vector[j + 1] = temp;
}console.log("Arreglo ordenado de menor a mayor: " + vector);