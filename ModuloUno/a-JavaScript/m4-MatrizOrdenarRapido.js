/*Generamos un vector de números aleatorios de longitud 10 usando un ciclo for y el 
método push() para agregar cada número generado aleatoriamente.

Imprimimos el vector desordenado usando console.log().

Definimos la función ordenarPorQuicksort() que es recursiva y toma como 
argumento el vector que queremos ordenar.

Si el vector tiene un solo elemento, se devuelve el vector, ya que está ordenado.

En caso contrario, elegimos un pivote al azar del vector.

Dividimos el vector en tres partes: los elementos menores al pivote, los iguales al pivote y 
los mayores al pivote, utilizando un ciclo for y tres arreglos vacíos.

Ordenamos recursivamente las dos partes menores y mayores del vector, llamando a la 
función ordenarPorQuicksort() en cada una de ellas.

Combinamos los tres arreglos ordenados (menores, iguales y mayores) en uno solo 
utilizando el método concat().

Devolvemos el vector ordenado.

Finalmente, llamamos a la función ordenarPorQuicksort() con nuestro vector 
desordenado vectorNumerosUno y almacenamos el resultado en la variable 
vectorOrdenado.

Imprimimos el vector ordenado.*/

// Generar un vector de números aleatorios
let vectorNumerosUno = [];
for (let i = 0; i < 10; i++) {
    vectorNumerosUno.push(Math.floor(Math.random() * 10));
}

// Imprimir el vector desordenado
console.log('Vector desordenado: ', vectorNumerosUno);

// Función recursiva para ordenar el vector por Quicksort
function ordenarPorQuicksort(vector) {
    
    // Si el vector tiene un solo elemento, ya está ordenado
    if (vector.length <= 1) {
        return vector;
    }

    // Elegir un pivote al azar
    const pivote = vector[Math.floor(Math.random() * vector.length)];

    // Dividir el vector en dos partes: los elementos menores al pivote y los mayores al pivote
    const menores = [];
    const iguales = [];
    const mayores = [];
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] < pivote) {
            menores.push(vector[i]);
        } else if (vector[i] === pivote) {
            iguales.push(vector[i]);
        } else {
            mayores.push(vector[i]);
        }
    }

    // Ordenar recursivamente las dos partes menores y mayores del vector
    const vectorOrdenado = ordenarPorQuicksort(menores).concat(iguales).concat(ordenarPorQuicksort(mayores));
    return vectorOrdenado;
}

// Ordenar el vector por Quicksort
const vectorOrdenado = ordenarPorQuicksort(vectorNumerosUno);

// Imprimir el vector ordenado
console.log('Vector ordenado: ', vectorOrdenado);