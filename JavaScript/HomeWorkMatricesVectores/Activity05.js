/* Hacer un programa que inicialice un vector de números con valores aleatorios, y posterior ordene los elementos de menor a mayor. */

/REPARAR

let vNumeroAzar = []
let vNumeroIngresado = parseInt(prompt("Ingrese un numero de rango al azar"));
for (let i = 0; i < vNumeroIngresado; i++) {
    vNumeroAzar[i] = Math.floor(Math.random() * 100);
}
console.log("Vector antes de ordenar:" + vNumeroAzar);

let vOrdenarMenorMayor = vNumeroAzar.length;
for (let i = 0; i < vOrdenarMenorMayor; i++) {

    for (let j = 0; j < vOrdenarMenorMayor; j++) {
        if (vOrdenarMayorMenor[j] > vOrdenarMayorMenor[j+i]) {
        let vNum = vOrdenarMayorMenor[j];
        vOrdenarMayorMenor[j] = vOrdenarMayorMenor[j+i];
        vOrdenarMayorMenor[j+i] = vNum;
        }
    }
}
console.log("Ordenamiento realizado: " + vOrdenarMayorMenor);


//======================================================================================================================

const vector = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

console.log('Vector antes de ordenar:', vector);

for (let i = 0; i < vector.length; i++) {
  let min = i;
  for (let j = i + 1; j < vector.length; j++) {
    if (vector[j] < vector[min]) {
      min = j;
    }
  }
  if (min !== i) {
    [vector[i], vector[min]] = [vector[min], vector[i]];
  }
}

console.log('Vector después de ordenar:', vector);

















//======================================================================================================================
let vVector = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

console.log('Vector antes de ordenar:', vVector);

vVector.sort((a, b) => a - b);

console.log('Vector después de ordenar:', vVector);
