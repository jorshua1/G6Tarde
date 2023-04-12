/* Generamos un vector de números aleatorios de longitud 10 usando un ciclo for y el 
método push() para agregar cada número generado aleatoriamente.

Imprimimos el vector desordenado usando console.log().

Definimos la función ordenarPorMezcla() que es recursiva y toma como argumento el 
vector que queremos ordenar.

Si el vector tiene un solo elemento, se devuelve el vector, ya que está ordenado.

En caso contrario, dividimos el vector en dos mitades iguales usando el operador 
slice().

Llamamos recursivamente a la función ordenarPorMezcla() en cada una de las 
mitades del vector para obtener dos mitades ordenadas.

Combinamos las dos mitades del vector ya ordenadas utilizando el método concat() y 
un ciclo while que va comparando los elementos de ambas mitades y agregándolos al 
vector ordenado según su valor.

Devolvemos el vector ordenado.

Finalmente, llamamos a la función ordenarPorMezcla() con nuestro vector 
desordenado vectorNumerosUno y almacenamos el resultado en la variable 
vectorOrdenado.

Imprimimos el vector orden*/

// Generar un vector de números aleatorios
let vectorNumerosUno = [];
for (let i = 0; i < 10; i++) { 
  vectorNumerosUno.push(Math.floor(Math.random() * 10));
}

// Imprimir el vector desordenado
console.log('Vector desordenado: ', vectorNumerosUno);

// Función recursiva para ordenar el vector por mezcla
function ordenarPorMezcla(vector) {
  // Si el vector tiene un solo elemento, ya está ordenado
  if (vector.length <= 1) {
    return vector;
  }

  // Dividir el vector en dos partes iguales
  const mitad = Math.floor(vector.length / 2);
  const izquierda = vector.slice(0, mitad);
  const derecha = vector.slice(mitad);

  // Ordenar cada mitad del vector por separado (llamando recursivamente a la función)
  const izquierdaOrdenada = ordenarPorMezcla(izquierda);
  const derechaOrdenada = ordenarPorMezcla(derecha);

  // Combinar las dos mitades del vector ya ordenadas
  const vectorOrdenado = [];
  let i = 0;
  let j = 0;
  while (i < izquierdaOrdenada.length && j < derechaOrdenada.length) {
    if (izquierdaOrdenada[i] < derechaOrdenada[j]) {
      vectorOrdenado.push(izquierdaOrdenada[i]);
      i++;
    } else {
      vectorOrdenado.push(derechaOrdenada[j]);
      j++;
    }
  }
  return vectorOrdenado.concat(izquierdaOrdenada.slice(i)).concat(derechaOrdenada.slice(j));
}

// Ordenar el vector por mezcla
const vectorOrdenado = ordenarPorMezcla(vectorNumerosUno);

// Imprimir el vector ordenado
console.log('Vector ordenado: ', vectorOrdenado);