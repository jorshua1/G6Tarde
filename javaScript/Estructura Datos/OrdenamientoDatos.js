/*Hacer un programa que inicialice un vector de numeros con valores aleatorios 
y posteriormente ordene los elementos de menor a mayor*/

let numeroMaximo = 0;
let vector = new Array();

numeroMaximo = parseInt(prompt(`Ingrese un numero maximo para generar un vector de numeros aleatorios.`));
while(isNaN(numeroMaximo) || numeroMaximo <= 0){
    numeroMaximo = parseInt(prompt(`POR FAVOR ingrese un numero maximo para generar un vector de numeros aleatorios.`));
}

for (let i = 0; i < numeroMaximo; i++) {
    vector[i] = Math.floor(Math.random() * (100 - (-100))) + (-100);

}
console.log(vector);

//Ordemaniento de datos usando el metodo Burbuja 

for (let i = 0; i < numeroMaximo; i++) {
    for (let j = 0; j < vector.length-1; j++) {

        if (vector[j] > vector[j + 1]) {

            [vector[j], vector[j + 1]] = [vector[j + 1], vector[j]];
        }
    }
}
console.log(vector);

//Ordenamiento usando Quick sort


