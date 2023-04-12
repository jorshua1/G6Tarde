
//Ordenamiento usando Quick sort------------------------------------------------------------

let myArr = [];
let maximo = 0;

maximo = parseInt(prompt(`Ingrese un numero maximo para generar un vector de numeros aleatorios.`));
while (isNaN(maximo) || maximo <= 0) {
    maximo = parseInt(prompt(`POR FAVOR ingrese un numero maximo para generar un vector de numeros aleatorios.`));
}

for (let i = 0; i < maximo; i++) {
    myArr[i] = Math.floor(Math.random() * (100 - (-100))) + (-100);

}
console.log(myArr);

const quickSort = (arr) => {

    if (arr.length === 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftArray = [];
    let rightArray = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }
    if (leftArray.length > 0 && rightArray.length > 0) {
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    } else if (leftArray.length > 0) {
        return [...quickSort(leftArray), pivot]
    } else {
        return [pivot, ...quickSort(rightArray)]
    }
}
console.log(quickSort(myArr))

//-------------------------------------------------------------------------------------------------------------------

// Creamos el array a ordenar
const arr = [5, 3, 7, 1, 8, 4, 2, 6];

// Usamos un array para simular la pila de llamadas de la versión recursiva
const stack = [[0, arr.length - 1]];

// Mientras haya elementos en la pila de llamadas
while (stack.length) {
  // Desapilamos el siguiente intervalo de índices a ordenar
  const [start, end] = stack.pop();

  // Si el intervalo tiene menos de 2 elementos, no hay nada que ordenar
  if (start >= end) {
    continue;
  }
  
  // Elegimos el primer elemento como pivote
  const pivot = arr[start];
  let i = start + 1;
  let j = end;
  
  // Recorremos el intervalo, moviendo los elementos menores al pivote a la izquierda
  // y los mayores a la derecha
  while (i <= j) {
    while (i <= j && arr[i] < pivot) {
      i++;
    }
    while (i <= j && arr[j] >= pivot) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  // Colocamos el pivote en su posición final
  [arr[start], arr[j]] = [arr[j], arr[start]];
  
  // Apilamos los intervalos de los dos lados del pivote
  if (j - 1 > start) {
    stack.push([start, j - 1]);
  }
  if (j + 1 < end) {
    stack.push([j + 1, end]);
  }
}
// Imprimimos el array ordenado
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]

