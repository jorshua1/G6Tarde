/*Primero, creamos un arreglo llamado vectorNumerosUno y lo llenamos con 10 números 
aleatorios entre 0 y 9. Luego, imprimimos el arreglo original en la consola.

A continuación, aplicamos el algoritmo de ordenamiento por selección. Usamos un bucle 
for para recorrer el arreglo desde el primer elemento hasta el penúltimo elemento. En 
cada iteración, buscamos el elemento más pequeño en el resto del arreglo (desde i+1 
hasta el final) y lo intercambiamos con el elemento en la posición i si es necesario.

Para encontrar el elemento más pequeño, usamos otro bucle for que comienza en i+1 
y recorre el resto del arreglo. En cada iteración, comparamos el elemento actual con el 
elemento en la posición indiceMenor. Si el elemento actual es más pequeño, 
actualizamos indiceMenor para que apunte al nuevo elemento más pequeño.

Finalmente, intercambiamos el elemento más pequeño encontrado con el elemento en la 
posición i usando una variable temporal temp.

Una vez que hemos aplicado el algoritmo de ordenamiento por selección, imprimimos el 
arreglo ordenado en la consola.*/

let vectorNumerosUno = [];

// Llenamos el arreglo con números aleatorios
for (let i = 0; i < 10; i++) {
  vectorNumerosUno.push(Math.floor(Math.random() * 10));
}

console.log("Arreglo original: " + vectorNumerosUno);

// Aplicamos el algoritmo de ordenamiento por selección
for (let i = 0; i < vectorNumerosUno.length - 1; i++) {
  let indiceMenor = i;
  
  // Buscamos el elemento más pequeño desde i+1 hasta el final del arreglo
  for (let j = i + 1; j < vectorNumerosUno.length; j++) {
    if (vectorNumerosUno[j] < vectorNumerosUno[indiceMenor]) {
      indiceMenor = j;
    }
  }
  
  // Intercambiamos el elemento más pequeño con el elemento en la posición i
  let temp = vectorNumerosUno[i];
  vectorNumerosUno[i] = vectorNumerosUno[indiceMenor];
  vectorNumerosUno[indiceMenor] = temp;
}

console.log("Arreglo ordenado por selección: " + vectorNumerosUno);