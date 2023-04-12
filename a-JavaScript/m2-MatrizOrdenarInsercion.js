/*Primero, creamos un vector vacío llamado vectorNumerosUno.

A continuación, usamos un ciclo for para llenar el vector con números aleatorios 
mediante el método push() y la función Math.random(). Este ciclo se ejecutará 10 
veces, generando números aleatorios entre 0 y 9.

Luego, imprimimos en la consola el vector original usando console.log().

Comenzamos con el algoritmo de ordenamiento por inserción. Usamos un ciclo for 
para iterar sobre cada elemento del vector, excepto el primer elemento.

En cada iteración del ciclo for, inicializamos una variable j con el índice del 
elemento anterior al actual. Esto se debe a que asumimos que todos los elementos 
anteriores al actual ya están ordenados.

También almacenamos el valor del elemento actual en una variable llamada 
valorActual.

Luego, usamos un ciclo while para desplazar los elementos mayores hacia la derecha, 
mientras que la posición j es mayor o igual a 0 y el valor del elemento en la posición 
j es mayor que valorActual.

Dentro del ciclo while, movemos el elemento en la posición j hacia la derecha en 
una posición para abrir espacio para el elemento valorActual. Esto lo hacemos 
asignando el valor del elemento en la posición j a la posición j + 1.

Después de cada iteración del ciclo while, reducimos el valor de j en 1 para 
continuar comparando el elemento actual con los elementos anteriores.

Cuando termina el ciclo while, tenemos un espacio libre en la posición j + 1, donde 
podemos insertar el elemento valorActual. Esto lo hacemos asignando el valor de 
valorActual a la posición j + 1.

Después de cada iteración del ciclo for, imprimimos en la consola el vector 
actualizado.

Cuando el ciclo for ha terminado de recorrer todo el vector, el vector estará ordenado 
de menor a mayor.

Finalmente, imprimimos en la consola el vector ordenado.*/

let vectorNumerosUno = [];

// Llenar el vector con números aleatorios
for (let i = 0; i < 10; i++) {
  vectorNumerosUno.push(Math.floor(Math.random() * 10));
}

console.log("Vector original: " + vectorNumerosUno);

// Algoritmo de ordenamiento por inserción
for (let i = 1; i < vectorNumerosUno.length; i++) {
  let j = i - 1;
  let valorActual = vectorNumerosUno[i];

  // Desplazar los elementos mayores hacia la derecha
  while (j >= 0 && vectorNumerosUno[j] > valorActual) {
    vectorNumerosUno[j + 1] = vectorNumerosUno[j];
    j--;
  }

  // Insertar el valor actual en la posición correcta
  vectorNumerosUno[j + 1] = valorActual;

  console.log("Vector después de la iteración " + i + ": " + vectorNumerosUno);
}

console.log("Vector ordenado: " + vectorNumerosUno);