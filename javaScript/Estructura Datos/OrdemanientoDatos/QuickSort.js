
//Ordenamiento usando Quick sort------------------------------------------------------------

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