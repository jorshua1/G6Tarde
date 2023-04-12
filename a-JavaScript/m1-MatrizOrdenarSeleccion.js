/*Primero, creamos un vector vacío llamado vectorNumerosUno.

A continuación, usamos un ciclo for para llenar el vector con números aleatorios 
mediante el método push() y la función Math.random(). Este ciclo se ejecutará 10 
veces, generando números aleatorios entre 0 y 9.

Luego, imprimimos en la consola el vector original usando console.log().

Comenzamos con el algoritmo de ordenamiento por selección. Usamos un ciclo for 
para iterar sobre cada elemento del vector, excepto el último.

En cada iteración del ciclo for, inicializamos una variable min con el índice del 
elemento actual. Esto se debe a que asumimos que el elemento actual es el mínimo valor 
en el subvector restante.

Luego, usamos otro ciclo for para buscar el valor mínimo en el subvector restante. 
Este subvector comienza desde el elemento siguiente al actual y termina en el último 
elemento del vector.

Para encontrar el valor mínimo, comparamos el valor del elemento actual con el valor del 
elemento siguiente. Si el valor del elemento siguiente es menor, entonces actualizamos el 
índice de min con el índice del elemento siguiente.

Después de recorrer todo el subvector restante, tenemos el índice del elemento mínimo 
en el subvector restante. Ahora intercambiamos el elemento actual con el elemento 
mínimo encontrado.

Para intercambiar los elementos, usamos una variable temporal temp que almacena el 
valor del elemento actual. Luego, asignamos el valor del elemento mínimo encontrado a 
la posición del elemento actual y asignamos el valor de temp a la posición del elemento 
mínimo encontrado.

Después de cada iteración del primer ciclo for, imprimimos en la consola el vector 
actualizado.

Cuando el primer ciclo for ha terminado de recorrer todo el vector, el vector estará 
ordenado de menor a mayor.

Finalmente, imprimimos en la consola*/

let vectorNumerosUno = [];

// Llenar el vector con números aleatorios
for (let i = 0; i < 10; i++) {
  vectorNumerosUno.push(Math.floor(Math.random() * 10));
}

console.log("Vector original: " + vectorNumerosUno);

// Algoritmo de ordenamiento por selección
for (let i = 0; i < vectorNumerosUno.length - 1; i++) {
  let min = i; // Índice del elemento mínimo

  // Encontrar el elemento mínimo en el subvector restante
  for (let j = i + 1; j < vectorNumerosUno.length; j++) {
    if (vectorNumerosUno[j] < vectorNumerosUno[min]) {
      min = j;
    }
  }

  // Intercambiar el elemento actual con el elemento mínimo encontrado
  let temp = vectorNumerosUno[i];
  vectorNumerosUno[i] = vectorNumerosUno[min];
  vectorNumerosUno[min] = temp;

  console.log("Vector después de la iteración " + (i + 1) + ": " + vectorNumerosUno);
}

console.log("Vector ordenado: " + vectorNumerosUno);