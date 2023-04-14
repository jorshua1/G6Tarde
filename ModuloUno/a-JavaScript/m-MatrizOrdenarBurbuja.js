/*Primero, creamos un vector vacío llamado vectorNumerosUno.

A continuación, usamos un ciclo for para llenar el vector con números aleatorios 
mediante el método push() y la función Math.random(). Este ciclo se ejecutará 10 
veces, generando números aleatorios entre 0 y 9.

Luego, imprimimos en la consola el vector original usando console.log().

Comenzamos con el algoritmo de ordenamiento de burbuja. Usamos dos ciclos for. El 
primer ciclo for se encarga de iterar sobre cada elemento del vector.

El segundo ciclo for se encarga de comparar los elementos adyacentes y de 
intercambiarlos si están en el orden incorrecto.

Para comparar los elementos adyacentes, usamos la condición if 
(vectorNumerosUno[j] > vectorNumerosUno[j + 1]). Si el elemento en la posición 
j es mayor que el elemento en la posición j + 1, entonces los intercambiamos. Para 
hacer esto, creamos una variable temporal temp que almacena el valor de 
vectorNumerosUno[j]. Luego, asignamos el valor de vectorNumerosUno[j + 1] 
a vectorNumerosUno[j] y asignamos el valor de temp a vectorNumerosUno[j + 1].

Después de cada iteración del segundo ciclo for, imprimimos en la consola el vector 
actualizado.

Cuando el segundo ciclo for ha terminado de recorrer todo el vector, el primer ciclo 
for avanza a la siguiente iteración y repite el proceso.

Después de que el primer ciclo for ha terminado de recorrer todo el vector, el vector 
estará ordenado de menor a mayor.

Finalmente, imprimimos en la consola el vector ordenado usando console.log().*/

let vectorNumerosUno = [];

// Llenar el vector con números aleatorios
for (let i = 0; i < 10; i++) {
  vectorNumerosUno.push(Math.floor(Math.random() * 10));
}

console.log("Vector original: " + vectorNumerosUno);

// Algoritmo de ordenamiento de burbuja
for (let i = 0; i < vectorNumerosUno.length; i++) {
  for (let j = 0; j < vectorNumerosUno.length - 1; j++) {
    if (vectorNumerosUno[j] > vectorNumerosUno[j + 1]) {
      // Intercambiar los valores de las posiciones j y j+1
      let temp = vectorNumerosUno[j];
      vectorNumerosUno[j] = vectorNumerosUno[j + 1];
      vectorNumerosUno[j + 1] = temp;
    }
  }
  console.log("Vector después de la iteración " + (i + 1) + ": " + vectorNumerosUno);
}

console.log("Vector ordenado: " + vectorNumerosUno);