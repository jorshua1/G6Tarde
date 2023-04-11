/*Hacer un programa que inicialice un vector de numeros con valores aleatorios 
y posteriormente ordene los elementos de menor a mayor*/

//Ordemaniento de datos usando el metodo Burbuja ---------------------

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

for (let i = 0; i < numeroMaximo; i++) {
    for (let j = 0; j < vector.length-1; j++) {

        if (vector[j] > vector[j + 1]) {

            [vector[j], vector[j + 1]] = [vector[j + 1], vector[j]];
        }
    }
}
console.log(vector);

//Ordenamiento usando Quick sort ---------------------------------------------

let myArr = [];

maximo = parseInt(prompt(`Ingrese un numero maximo para generar un vector de numeros aleatorios.`));
while(isNaN(maximo) || maximo <= 0){
    maximo = parseInt(prompt(`POR FAVOR ingrese un numero maximo para generar un vector de numeros aleatorios.`));
}

for (let i = 0; i < maximo; i++) {
    myArr[i] = Math.floor(Math.random() * (100 - (-100))) + (-100);

}
console.log(myArr);
 
const quickSort = (arr) => {    
    
    if(arr.length === 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftArray = [];
    let rightArray = [];
    for(let i = 0; i < arr.length - 1; i++) {
       if(arr[i] <= pivot) {
           leftArray.push(arr[i]);
       } else {
           rightArray.push(arr[i]);
       }
    }
    if(leftArray.length > 0 && rightArray.length > 0) {
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    } else if (leftArray.length > 0) {
        return [...quickSort(leftArray), pivot]
    } else {
        return [pivot, ...quickSort(rightArray)]
    }
}
console.log(quickSort(myArr))



//--------------------------
/**
 
let myArr = [];

maximo = parseInt(prompt(`Ingrese un numero maximo para generar un vector de numeros aleatorios.`));
while(isNaN(maximo) || maximo <= 0){
    maximo = parseInt(prompt(`POR FAVOR ingrese un numero maximo para generar un vector de numeros aleatorios.`));
}

for (let i = 0; i < maximo; i++) {
    myArr[i] = Math.floor(Math.random() * (100 - (-100))) + (-100);

}
console.log(myArr);
 myArr = [1, 1, 2, 5, 0, -5];
const quickSort = (arr) => {    
    
    if(arr.length === 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftArray = [];
    let rightArray = [];
    for(let i = 0; i < arr.length - 1; i++) {
       if(arr[i] <= pivot) {
           leftArray.push(arr[i]);
       } else {
           rightArray.push(arr[i]);
       }
    }
    if(leftArray.length > 0 && rightArray.length > 0) {
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    } else if (leftArray.length > 0) {
        return [...quickSort(leftArray), pivot]
    } else {
        return [pivot, ...quickSort(rightArray)]
    }
}
console.log(quickSort(myArr))
 */
