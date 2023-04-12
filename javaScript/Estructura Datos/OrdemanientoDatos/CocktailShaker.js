
//Ordenamiento usando el metodo Cocktail Shaker--------------------------------------------------
let numeroMaximo = 0;
let arreglo = new Array();

numeroMaximo = parseInt(prompt(`Ingrese un numero maximo para generar un vector de numeros aleatorios.`));
while (isNaN(numeroMaximo) || numeroMaximo <= 0) {
  numeroMaximo = parseInt(prompt(`POR FAVOR ingrese un numero maximo para generar un vector de numeros aleatorios.`));
}

for (let i = 0; i < numeroMaximo; i++) {
  arreglo[i] = Math.floor(Math.random() * (100 - (-100))) + (-100);

}
console.log(arreglo);

const shakerSort = (arreglo) => {

  let max = arreglo.length - 1;
  let min = 0;

  while (min < max) {
    let biggest = min;
    let smallest = max;
    for (var i = min; i <= max; i++) if (arreglo[biggest] < arreglo[i]) biggest = i;
    if (max != biggest) { //swap the items
      let aux = arreglo[max]; arreglo[max] = arreglo[biggest]; arreglo[biggest] = aux;
    }

    max--;
    for (var j = max; j >= min; j--) if (arreglo[smallest] > arreglo[j]) smallest = j;
    if (min != smallest) { //swap the items

      let aux2 = arreglo[min]; arreglo[min] = arreglo[smallest]; arreglo[smallest] = aux2;
    }
    min++;
  }
  return arreglo;
}
console.log(shakerSort(arreglo));