/*Ejercicio 5
Hacer un programa que inicialice un vector de números 
con valores aleatorios, y posterior ordene los elementos 
de menor a mayor. */

let numero = 0;
let vector = new Array();

numero = parseInt(prompt(`Ingrese un numero maximo para generar un vector de numeros aleatorios.`));
while (isNaN(numero) || numero <= 0) {
    numero = parseInt(prompt(`POR FAVOR ingrese un numero maximo para generar un vector de numeros aleatorios.`));
}

for (let i = 0; i < numero; i++) {
    vector[i] = Math.floor(Math.random() * 10 + 1);

}
console.log(vector);

for (let i = 0; i < numero; i++) {
    for (let j = 0; j < vector.length - 1; j++) {

        if (vector[j] > vector[j + 1]) {

            [vector[j], vector[j + 1]] = [vector[j + 1], vector[j]];
        }
    }
}
console.log(vector);