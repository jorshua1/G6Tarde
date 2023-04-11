/*let aleatorios = [];
let cantidadNumeros = 0;
let datoMaximo = 0;

cantidadNumeros = Number(prompt("¿Cuántos números desea generar?"));
while((cantidadNumeros<=0)||(isNaN(cantidadNumeros))||(!Number.isInteger(cantidadNumeros))){
    alert("Ingrese una cantidad válida.");
    cantidadNumeros = Number(prompt("¿Cuántos números desea generar?"));
}
datoMaximo = Number(prompt("Indique el mayor número posible.(Solo se aceptan positivos)."));
while((datoMaximo<=0)||(isNaN(datoMaximo))||(!Number.isInteger(datoMaximo))){
    alert("Ingrese un valor válido.");
    datoMaximo = Number(prompt("Indique el mayor número posible.(Solo se aceptan positivos)."));
}

for(let i = 0;i<cantidadNumeros;i++){
    aleatorios[i] = parseInt((Math.random()*datoMaximo)+1)
}
console.log(aleatorios);

for(let i = 1;i<aleatorios.length;i++){
    for(let j = 0;j<aleatorios.length;j++){
        if(aleatorios[j]>aleatorios[j+1]){
            let temp = 0;
            temp = aleatorios[j];
            aleatorios[j] = aleatorios[j+1];
            aleatorios[j+1] = temp;
        }
    }
}
console.log(aleatorios);*/

//--------------------------------------------------------
//Ordenamiento Quicksort

let aleatorios = [];
let cantidadNumeros = 0;
let datoMaximo = 0;

cantidadNumeros = Number(prompt("¿Cuántos números desea generar?"));
while ((cantidadNumeros <= 0) || (isNaN(cantidadNumeros)) || (!Number.isInteger(cantidadNumeros))) {
    alert("Ingrese una cantidad válida.");
    cantidadNumeros = Number(prompt("¿Cuántos números desea generar?"));
}
datoMaximo = Number(prompt("Indique el mayor número posible.(Solo se aceptan positivos)."));
while ((datoMaximo <= 0) || (isNaN(datoMaximo)) || (!Number.isInteger(datoMaximo))) {
    alert("Ingrese un valor válido.");
    datoMaximo = Number(prompt("Indique el mayor número posible.(Solo se aceptan positivos)."));
}

for (let i = 0; i < cantidadNumeros; i++) {
    aleatorios[i] = parseInt((Math.random() * datoMaximo) + 1)
}
console.log(aleatorios);

let ordenamiento = aleatorios 
    if (aleatorios.length == 0) ordenamiento = [];
    if (aleatorios.length == 1) ordenamiento = aleatorios;

    let i = Math.floor(aleatorios.length / 2);
    let pivot = aleatorios[i];
    aleatorios.splice(i, 1);
    let menoresPivot = [aleatorios.filter(numeros < pivot),pivot]
    let mayoresPivot = [aleatorios.filter(numeros >= pivot)]

    ordenamiento = menoresPivot.concat(mayoresPivot)

console.log(ordenamiento);


//--------------------------------------------------------
//Ordenamiento por seleccion

var numeros = [20, 30, 24, 10, 5, 40, 34, 27];

console.log(numeros);

let min = 0;

while (min < numeros.length) {

    for (let i = min + 1; i < numeros.length; i++) {

        if (numeros[min] > numeros[i]) {

            let aux = numeros[min];

            numeros[min] = numeros[i];

            numeros[i] = aux;

        }

    }

    min++;

}



console.log((numeros));

//---------------------------------
//Inserción
var numeros = [20, 30, 24, 10, 5, 40, 34, 27];
console.log(numeros);

for (let i = 1; i < numeros.length; i++) {
    let temp = numeros[i];
    let j = i - 1;
    while (j >= 0 && numeros[j] > temp) {

        numeros[j + 1] = numeros[j];

        j--;

    }
    numeros[j + 1] = temp;
}

console.log((numeros));


//-------------
//Cocktail Shaker

const shakerSort = (arr) => {

    let max = arr.length - 1;
  
    let min = 0;
  
    while(min < max){
  
        let biggest = min;
  
      let smallest = max;
  
      //
  
        for (var i = min; i <= max; i++) if(arr[biggest] < arr[i]) biggest = i;
  
      if(max != biggest){ //swap the items
  
          let aux = arr[max]; arr[max] = arr[biggest]; arr[biggest] = aux;
  
      }
  
      max--;
  
      for (var j = max; j >= min; j--) if(arr[smallest] > arr[j]) smallest = j;
  
      if(min != smallest){ //swap the items
  
          let aux2 = arr[min]; arr[min] = arr[smallest]; arr[smallest] = aux2;
  
      }
  
      min++;
  
    }  
  
    return arr;
  
  }