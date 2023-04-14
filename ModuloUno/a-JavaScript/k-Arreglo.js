/*
Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos 
para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de
los elementos de un array son variables. Dado que la longitud de un array puede cambiar 
en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía
de que los arrays de JavaScript sean densos; esto depende de cómo el programador elija usarlos.
En general estas características son cómodas, pero si, en su caso particular, no resultan deseables,
puede considerar el uso de arrays con tipo.

https://www.freecodecamp.org/espanol/news/el-manual-de-arreglos-en-javascript/

*/

//Crear un arreglo.
// variable                      Literal
let arregloAnimales = ["Aves", "Reptiles", "Mamiferos", "Peces", "Anfibios", "Insectos"]
console.log(arregloAnimales);
console.log(typeof arregloAnimales);

let arregloDos = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arregloDos);
console.log(typeof arregloDos);

let arregloDosCubico = []
for (let i = 0; i < arregloDos.length; i++) {
    arregloDosCubico[i] = arregloDos[i] ** 3;
    console.log(`el numeo cubico de ${arregloDos[i]} es ${arregloDosCubico[i]}`);
}
console.log(arregloDosCubico);

let arregloTres = [arregloAnimales, arregloDos]
console.log(arregloTres);
console.log(typeof arregloTres);

let arregloCuatro = new Array(arregloAnimales, arregloDos);
console.log(arregloCuatro);
console.log(typeof arregloCuatro);

let contadorDatos = 10/*parseInt(prompt("Por favor ingrese numero de valores"));*/
let arregloCinco = []
for (let i = 1; i < contadorDatos; i++) {
    i= arregloCinco.push(i);
}
console.log(arregloCinco);

let arregloSeis = []
for (let i = 0; i < 10; i++) {
    arregloSeis[i] = 1/*prompt("Por favor ingrese un numero.");*/
    console.log(`Acaba de ingresar el ${arregloSeis[i]}`);
}
console.log(arregloSeis);

//Ver cantidad de objetos de el areglo.
console.log(arregloTres.length);

//Acceder a un primer elemento de Array mediante su índice.
let primerElemento = arregloAnimales[0]
console.log(primerElemento);

//Acceder a un ultimo elemento de Array mediante su índice.
let ultimoElemento = arregloAnimales[arregloAnimales.length - 1]
console.log(ultimoElemento);

//Recorrer un arreglo
arregloAnimales.forEach(function (elemento, indice, array) { console.log(elemento, indice); })

//Añadir un elemento al final de un Array.
let nuevoAnimalFinal = arregloAnimales.push("Artropodos");
console.log(arregloAnimales);

//Eliminar el último elemento de un Array
let eliminarAnimalFinal = arregloAnimales.pop();
console.log(arregloAnimales);

//Añadir un elemento al principio de un Array.
let nuevoAninalInicio = arregloAnimales.unshift("Moluscos");
console.log(arregloAnimales);

//Eliminar el primer elemento de un Array.
let eliminarAnimalInicio = arregloAnimales.shift();
console.log(arregloAnimales);

//Encontrar el índice de un elemento del Array.
let indiceArregloAnimales = arregloAnimales.indexOf("Peces");
console.log(indiceArregloAnimales);

/*Eliminar un único elemento mediante su posición.
Eliminamos "Peces" del array pasándole dos parámetros: 
la posición del primer elemento que se elimina y el número de elementos que queremos eliminar. 
De esta forma, .splice(pos, 3) empieza en la posición que nos indica el valor de la variable pos y elimina 1 elemento.
En este caso, como pos vale 3, elimina un elemento comenzando en la posición 3 del array, es decir "Peces".
*/
let posicionAnimal = 3;
let cantidadAnimalesEliminar = 1;
let eliminarAnimal = arregloAnimales.splice(posicionAnimal, cantidadAnimalesEliminar);
console.log(eliminarAnimal);
console.log(arregloAnimales);

//Copiar un Array.
let copiarArregloAnimales = arregloAnimales.slice();
console.log(copiarArregloAnimales);

/*
Acceso a elementos de un array
Los índices de los arrays de JavaScript comienzan en cero, es decir:
el índice del primer elemento de un array es 0, y el del último elemento es igual
al valor de la propiedad length del array restándole 1.

Si se utiliza un número de índice no válido, se obtendrá undefined.
*/
console.log(arregloAnimales[0]);
console.log(arregloAnimales[1]);
console.log(arregloAnimales[2]);
console.log(arregloAnimales[arregloAnimales.length - 2]);
console.log(arregloAnimales[arregloAnimales.length - 1]);

console.log(Object.keys(arregloAnimales));
console.log(arregloAnimales.length);
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

let objetoJefphunter = {
    nombre: "Jefphunter",
    cedula: 1234567890,
    acceso: true
};
console.log(objetoJefphunter);
console.log(objetoJefphunter.nombre);
console.log(objetoJefphunter["nombre"]);
console.log(typeof objetoJefphunter);
console.log(objetoJefphunter);

let arreglo = [1, "hola", { nombre: objetoJefphunter.nombre }, false, null];
arreglo[1] = "rivality"
console.log(arreglo[1]);
objetoJefphunter.nombre = "Fabian"
console.log(objetoJefphunter);
console.log(arreglo);