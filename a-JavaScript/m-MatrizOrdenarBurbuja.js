/*Primero, creamos un arreglo llamado vectorNumerosUno y lo llenamos con 10 números 
aleatorios entre 0 y 9. Luego, imprimimos el arreglo original en la consola.

A continuación, aplicamos el algoritmo de ordenamiento por burbuja. Usamos dos bucles 
for anidados para recorrer el arreglo. El primer bucle for se encarga de repetir el 
proceso de comparación y intercambio de elementos n-1 veces, donde n es la longitud 
del arreglo.

El segundo bucle for recorre el arreglo desde el primer elemento hasta el penúltimo 
elemento en cada iteración del primer bucle. En cada iteración del segundo bucle, 
comparamos el elemento actual con el siguiente elemento. Si están en el orden equivocado 
(el elemento actual es mayor que el siguiente elemento), intercambiamos los elementos 
adyacentes.

Para intercambiar los elementos adyacentes, usamos una variable temporal temp. 
Primero, guardamos el valor del elemento actual en temp. Luego, asignamos el valor del 
siguiente elemento al elemento actual y el valor de temp al siguiente elemento.

Una vez que hemos aplicado el algoritmo de ordenamiento por burbuja, imprimimos el 
arreglo ordenado en la consola..*/

let vectorNumerosUno = [];

// Llenamos el arreglo con números aleatorios
for (let i = 0; i < 10; i++) {
  vectorNumerosUno.push(Math.floor(Math.random() * 10));
}

console.log("Arreglo original: " + vectorNumerosUno);

// Aplicamos el algoritmo de ordenamiento por burbuja
for (let i = 0; i < vectorNumerosUno.length - 1; i++) {
  for (let j = 0; j < vectorNumerosUno.length - i - 1; j++) {
    if (vectorNumerosUno[j] > vectorNumerosUno[j + 1]) {
      // Intercambiamos los elementos adyacentes si están en el orden equivocado
      let temp = vectorNumerosUno[j];
      vectorNumerosUno[j] = vectorNumerosUno[j + 1];
      vectorNumerosUno[j + 1] = temp;
    }
  }
}

console.log("Arreglo ordenado por burbuja: " + vectorNumerosUno);