/*Declaración de variables
Puedes declarar una variable de dos formas:

Con la palabra clave var.
Por ejemplo, var x = 42.
Esta sintaxis se puede utilizar para declarar variables locales y globales, dependiendo del contexto de ejecución.

Con la palabra clave const o let.
Por ejemplo, let y = 13. 
Esta sintaxis se puede utilizar para declarar una variable local con ámbito de bloque.

También puedes simplemente asignar un valor a una variable.
Por ejemplo, x = 42.
Este formulario crea una variable global no declarada.
También genera una advertencia estricta de JavaScript. 
Las variables globales no declaradas a menudo pueden provocar un comportamiento inesperado.
Por lo tanto, se desaconseja utilizar variables globales no declaradas.

Una variable declarada usando la instrucción var o let sin un valor asignado especificado tiene el valor de undefined

Al declarar una variable, se debe ser claro con el nombre del dato, ya que al no ser especifico se considera mala practica.*/

let caracterUno = 'a'; //Este es un caracter, el cual se declara en comilla sensilla.
console.log(caracterUno);
console.log(typeof caracterUno);
var caracterDos = 'b'; //Este es un caracter de ambito global, teniendo en cuenta su declaración.
console.log(caracterDos);
console.log(typeof caracterUno);

let cadenaUno = "cadena";//esta es una cadena, la cual es una secuencia de caracteres, se declara en comillas dobles.
console.log(cadenaUno);
console.log(typeof caracterUno);
var cadenaDos = "Secuencia de caracteres";//esta es una cadena, la cual es una secuencia de caracteres, se declara en comillas dobles.
console.log(cadenaDos);
console.log(typeof caracterDos);
let mensaje = "Hola. \nQué facil es incluir \'comillas simples\' \ny \"comillas dobles.\" ";
console.log(mensaje);

let numeroEntero = 155;//este es un numero entero cuyo indicador es Int (integer).
console.log(numeroEntero);
console.log(typeof numeroEntero);
var numeroDecimal = 152.34;//este es un numero decimal cuyo indicador es Float (numero flotante o de coma flotante).
console.log(numeroDecimal);
console.log(typeof numeroDecimal);

let booleanoVerdad = true;//Los booleanos son valores verdadero/falso, pueden tener dos valores, true o false.
console.log(booleanoVerdad);
console.log(typeof booleanoVerdad);
var booleanoFalso = false;//Estos, generalmente se utilizan para probar una condición.
console.log(booleanoFalso);
console.log(typeof booleanoFalso);
let booleanoPruebaUno = numeroEntero > numeroDecimal
console.log(booleanoPruebaUno);
var booleanoPruebaDos = numeroEntero < numeroDecimal
console.log(booleanoPruebaDos);

/*
Los valores Undefined y Null
Aunque no se defina dentro de los 5 grupos de tipos de variable, 
hay que destacar que undefined es un valor válido para cualquier variable.
De hecho, en Javascript: Variables, si declaramos una variable y no le asignamos ningún valor, 
javascript por defecto le asignará el valor undefined. 
Esto tiene su lógica, ya que una variable sin valor asignado (definido) es una variable indefinida; 
Es decir una variable undefined.
*/
let datoIndefinido = undefined;
console.log(datoIndefinido);
console.log(typeof datoIndefinido);
let a;
console.log('El valor de a es ' + a); // El valor de a es undefined
console.log(typeof a);
console.log('El valor de b es ' + b); // El valor de b es undefined
console.log(typeof b);
var b;// Esto puede desconcertarte hasta que leas 'Elevación de variable' a continuación
/*console.log('El valor de c es ' + c); // Error de referencia no detectado: c no está definida*/

/*
null
El valor null es un literal de Javascript que representa intencionalmente un valor nulo o "vacío".
Es uno de los valores primitivos de Javascript.
Por último tenemos a Null. El valor Null representa «ningún valor conocido» y 
sí, aunque suene extraño se le puede dar el valor Null a una variable.
*/
let datoNulo = null;
console.log(datoNulo);
console.log(typeof datoNulo);

/*
JavaScript está diseñado en un paradigma simple basado en objetos.
Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método.
Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.
Este describe cómo usar objetos, propiedades, funciones y métodos; y cómo crear tus propios objectos.

Visión general sobre Objetos
Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real.
El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real.

En JavaScript, un objeto es un entidad independiente con propiedades y tipos.
Compáralo con una taza, por ejemplo. Una taza es un objeto con propiedades.
Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc.
Del mismo modo, los objetos de JavaScript pueden tener propiedades que definan sus características.

Objetos y propiedades
Un objeto de JavaScript tiene propiedades asociadas a él.
Una propiedad de un objeto se puede explicar como una variable adjunta al objeto.
Las propiedades de un objeto básicamente son lo mismo que las variables comunes de JavaScript, 
excepto por el nexo con el objeto. Las propiedades de un objeto definen las características del objeto.
Accedes a las propiedades de un objeto con una simple notación de puntos:
*/
let objetoJefphunter = {
    nombre: "Jefphunter",
    cedula: 1234567890,
    acceso: true
};
console.log(objetoJefphunter);
console.log(objetoJefphunter.nombre);
console.log(objetoJefphunter["nombre"]);
console.log(typeof objetoJefphunter);

/*
Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos 
para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de
los elementos de un array son variables. Dado que la longitud de un array puede cambiar 
en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía
de que los arrays de JavaScript sean densos; esto depende de cómo el programador elija usarlos.
En general estas características son cómodas, pero si, en su caso particular, no resultan deseables,
puede considerar el uso de arrays con tipo.
*/

//Crear un arreglo.
let arregloAnimales = ["Aves", "Reptiles", "Mamiferos", "Peces", "Anfibios", "Insectos"]//crear un arreglo.
console.log(arregloAnimales);
console.log(typeof arregloAnimales);

//Ver cantidad de objetos de el areglo.
console.log(arregloAnimales.length);

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

console.log(objetoJefphunter);
let arreglo = [1, "hola", { nombre: objetoJefphunter.nombre }, false, null];
arreglo[1] = "rivality"
console.log(arreglo[1]);
objetoJefphunter.nombre = "Fabian"
console.log(objetoJefphunter);
console.log(arreglo);

//Operadores
let numeroUno = 1;
let numeroDos = 2;
let numeroTres = 3;
let numeroCuatro = 4;
let numeroCinco = 5;

numeroSeis = numeroUno + 5;//asignacion.
console.log(numeroSeis);
numeroSiete = numeroUno + 6;
console.log(numeroSiete);
numeroOcho = numeroUno + 7;
console.log(numeroOcho);
numeroNueve = numeroUno + 8;
console.log(numeroNueve);
numeroDiez = numeroUno + 9;
console.log(numeroDiez);

console.log(numeroUno);
numeroUno += numeroUno;//Asignación de adición.
console.log(numeroUno);

console.log(numeroUno);
console.log(numeroTres);
numeroTres -= numeroUno;//Asignación de resta.
console.log(numeroTres);

console.log(numeroUno);
console.log(numeroCinco);
numeroCinco *= numeroUno;//Asignación de multiplicación.
console.log(numeroCinco);

console.log(numeroUno);
console.log(numeroSiete);
numeroSiete /= numeroUno;//Asignación de división.
console.log(numeroSiete);

console.log(numeroUno);
console.log(numeroNueve);
numeroNueve %= numeroUno;//Asignación de residuo.
console.log(numeroNueve);

console.log(numeroUno);
numeroUno **= numeroUno;//Asignación de exponenciación.
console.log(numeroUno);

console.log(numeroUno);//Asignacion de incremento.
numeroUno++
console.log(numeroUno);
++numeroUno
console.log(numeroUno);
numeroUno = numeroUno + 1
console.log(numeroUno);
numeroUno = numeroUno++ + 1
console.log(numeroUno);
numeroUno = ++numeroUno + 1
console.log(numeroUno);

console.log(numeroUno);//Asignacion de Decremento.
numeroUno--
console.log(numeroUno);
--numeroUno
console.log(numeroUno);
numeroUno = numeroUno - 1
console.log(numeroUno);
numeroUno = numeroUno-- - 1
console.log(numeroUno);
numeroUno = --numeroUno - 1
console.log(numeroUno);

console.log(numeroUno);
console.log(numeroDos);
numeroDos = numeroDos + numeroUno;//Aritmetico de adición.
console.log(numeroDos);

console.log(numeroUno);
console.log(numeroCuatro);
numeroCuatro = numeroCuatro - numeroUno;//Aritmetico de resta
console.log(numeroCuatro);

console.log(numeroUno);
console.log(numeroSeis);
numeroSeis = numeroSeis * numeroUno;//Aritmetico de multiplicación
console.log(numeroSeis);

console.log(numeroUno);
console.log(numeroOcho);
numeroOcho = numeroOcho / numeroUno;//Aritmetico de division.
console.log(numeroOcho);

console.log(numeroUno);
console.log(numeroDiez);
numeroDiez = numeroDiez % numeroUno;//Aritmetico de residuo.
console.log(numeroDiez);

console.log(numeroUno);
console.log(numeroDos);
numeroDos = numeroDos ** numeroUno;//Aritmetico de exponenciación
console.log(numeroDos);


//Comparación.
let comparacion = numeroUno == numeroDos;
console.log(comparacion);

console.log(numeroTres == numeroCuatro);
console.log(numeroCinco != numeroSeis);
console.log(numeroSiete < numeroOcho);
console.log(numeroNueve > numeroDiez);
console.log(numeroUno <= numeroDos);
console.log(numeroTres >= numeroCuatro);
console.log(numeroCinco === numeroSeis);
console.log(numeroSiete !== numeroOcho);

//Logicos
console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!true);
console.log(!false);

console.log(numeroUno);
console.log(numeroDos);
console.log(numeroTres);
console.log(numeroCuatro);
console.log(numeroCinco);
console.log(numeroSeis);
console.log(numeroSiete);
console.log(numeroOcho);
console.log(numeroNueve);
console.log(numeroDiez);

//Operadores especiales.
console.log("El numero uno es " + numeroUno);

let comparacionNumeros = (numeroUno > numeroDos) ? "si" : "No";
console.log(comparacionNumeros);

console.log(typeof comparacionNumeros);

console.log(`
Hola
Este
es
un
string
`);