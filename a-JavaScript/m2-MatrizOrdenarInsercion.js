/*En el código anterior, se utiliza un bucle for para recorrer el array e implementar el 
algoritmo de ordenamiento por inserción. En cada iteración del bucle, se guarda el valor 
actual en una variable valorActual y se utiliza otro bucle while para comparar dicho 
valor con los elementos anteriores del array, desplazando los elementos mayores hacia la 
derecha hasta encontrar la posición correcta del valorActual. Finalmente, se inserta 
el valorActual en su posición correspondiente.

Es importante mencionar que este algoritmo es muy eficiente para arreglos pequeños, pero 
puede resultar ineficiente para arreglos grandes debido a su complejidad cuadrática O(n^2).*/

// Generar un array con 10 números aleatorios
let vectorNumerosUno = [];
for (let i = 0; i < 10; i++) {
  vectorNumerosUno[i] = Math.floor(Math.random() * 10);
}
console.log('Array original: ', vectorNumerosUno);

// Implementación del algoritmo de ordenamiento por inserción
for (let i = 1; i < vectorNumerosUno.length; i++) {
  let valorActual = vectorNumerosUno[i];
  let j = i - 1;
  while (j >= 0 && vectorNumerosUno[j] > valorActual) {
    vectorNumerosUno[j + 1] = vectorNumerosUno[j];
    j--;
    console.log(vectorNumerosUno)
  }
  vectorNumerosUno[j + 1] = valorActual;
  console.log(vectorNumerosUno);
}
console.log('Array ordenado: ', vectorNumerosUno);