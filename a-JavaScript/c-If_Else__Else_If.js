/* Consicionales.

La palabra clave if seguida de unos paréntesis.
Una condición a probar, puesta dentro de los paréntesis (típicamente "¿es este valor mayor que este otro valor?", o "¿existe este valor?"). 
Esta condición usará los operadores de comparación que hemos hablado en el módulo anterior y retorna un valor true o false (verdadero o falso).
Un conjunto de llaves, en las cuales tenemos algún código — puede ser cualquier código que deseemos, 
código que se ejecutará sólamente si la condición retorna true.

La palabra clave else.
Otro conjunto de llaves, dentro de las cuales tendremos otro código — puede ser cualquier código que deseemos, y sólo se ejecutará si la condición no es true.
Este código es fácil de leer — está diciendo "si (if) la condición retorna verdadero (true), entonces ejecute el código A, sino (else) ejecute el código B"

if...esle(si...entonces).*/

let compraRealizada = false;

if (compraRealizada === true) {
    let subsidioAdicional = 10;
    console.log(subsidioAdicional);

} else {
    let subsidioAdicional = 5;
    console.log(subsidioAdicional);
}

let edadUno = 13;/*parseInt(prompt("Ingrese su edad: "));*/

if (edadUno >= 18) {
    console.log("Es mayor de edad.");

} else {
    console.log("Es menor de edad.");
}

let edadDos = 20 /*parseInt(prompt("Ingrese su edad: "));*/

if (edadDos >= 18) {
    console.log("Es mayor de edad.");

} else {
    console.log("Es menor de edad.");
}

/*
Notamos que no tenemos que incluir else y el segundo bloque de llaves — La siguiente declaración también es perfectmaente legal.
Sin embargo, hay que ser cuidadosos — en este caso, el segundo bloque no es controlado por una declaración condicional, 
así que siempre se ejecutará, sin importar si la condicional devuelve true o false. 
Esto no es necesariemente algo malo, pero puede ser algo que no quieras — a menudo desearás ejecutar un bloque de código u otro, no ambos.

if (Si).*/

let condicionUno = 10;

if (condicionUno > 0) {
    condicionUno++
    console.log(condicionUno);
}
console.log("xD");

/*
if anidado: un if anidado es una sentencia if que esta dentro de otro if o else. 
Anidado si sentencias significa una sentencia if dentro de una sentencia if. 
Sí, JavaScript nos permite anidar las sentencias if dentro de las sentencias if, 
es decir, podemos colocar una sentencia if dentro de otra sentencia if.

if anidado.*/

if (condicionUno > 5) {
    condicionUno++
    console.log(condicionUno);

    if (condicionUno < 15) {
        condicionUno--
        console.log(condicionUno);

    } else { }
} else { }

let condicionDos = "Hola"

if (condicionUno > 5) {
    condicionUno++
    console.log(condicionUno);

    if (condicionDos === "Hola") {
        console.log(condicionDos);

    } else { }
} else { }

//Tambien podemos usar el if anidando condiciones con operadores logicos

let condicionTres = 2;
let condicionCuatro = "Fabian";
let CondicionCinco = "Fabian";

if ((condicionUno > 5 ||
    condicionDos === "Hola" ||
    condicionTres <= 10) &&
    (condicionCuatro && CondicionCinco === "Fabian")) {
    console.log("Todo es true.");

} else {
    console.log("Uno de los valores es false.");
}
/*
Hay una forma de encadenar opciones / resultados adicionales extras a if...else — usando else if. 
Cada opción extra requiere un bloque adicional para poner en medio de bloque if() { ... } y else { ... } — 
en el siguiente ejemplo un poco más complicado, que podría ser parte de una aplicación para un simple pronóstico del tiempo:

esle if (entonces si.)*/

console.log(condicionUno);
console.log(condicionDos);
console.log(condicionTres);
console.log(condicionCuatro);
console.log(CondicionCinco);

if (condicionUno === 10) {
    console.log("Valor valido");

} else if (condicionDos === "Hol") {
    console.log("Valor valido");

} else if (condicionTres === 22) {
    console.log("Valor valido");

} else if (condicionCuatro === "Fabi") {
    console.log("Valor valido");

} else if (CondicionCinco === "Fabian") {
    console.log("Valor valido");

} else {
}

let edadCuatro = 35 /*parseInt(prompt("Ingrese su edad."));*/

if (isNaN(edadCuatro)) {
    console.log("Error");

} else if (edadCuatro >= 1 && edadCuatro >= 18) {
    console.log("Es mayor de edad.");

} else if (edadCuatro >= 1 && edadCuatro <= 17) {
    console.log("Es menor de edad");

} else {
    console.log("Ingrese una edad valida");
}

/*
Podemis implementar una estructura similar al Switch pero empleando If y else.
Hay momentos en JavaScript en los que podrías considerar usar una sentencia switch en lugar de una sentencia if else.
Las sentencias switch pueden tener una sintaxis más limpia que las sentencias if else complicadas.
Echale un vistazo al ejemplo a continuación: en lugar de usar esta sentencia larga if else, puedes optar por una sentencia switch más fácil de leer.

Switch-Case con if-esle*/

const mascota = "perro";

if (mascota === "lagarto") {
    console.log("Tengo un lagarto");

} else if (mascota === "perro") {
    console.log("Tego un perro");

} else if (mascota === "gato") {
    console.log("Tengo un gato");

} else if (mascota === "serpiente") {
    console.log("Tengo una serpiente");

} else if (mascota === "Loro") {
    console.log("Tengo un loro");

} else {
    console.log("No tengo mascota");
}

/*
El operador lógico Y ( && ) y sentencias if...else en JavaScript
En el operador lógico Y (&&), si ambas condiciones son true, se ejecutará el bloque if.
Si una o ambas condiciones son falsas, se ejecutará el bloque else.

En este ejemplo, dado que edad es mayor que 16 y la variable poseeCoche es true, se ejecutará el bloque if. 
El mensaje impreso en la consola será "Jerry es lo suficiente mayor para conducir y tiene su propio coche."
*/
const edad = 17;
const tieneCarro = true;

if (edad >= 16 && tieneCarro) {
    console.log("Fabian es lo suficiente mayor para conducir y tiene su propio carro.");

} else {
    console.log("Fabian no conduce.");
}

let edadTres = 35 /*parseInt(prompt("Ingrese su edad."));*/

if (edadTres > 0 && edadTres >= 18) {
    console.log("Es mayor de edad");

} else if (edadTres <= 0) {
    console.log("Error, ingrese valor valido");

} else {
    console.log("Es menor de edad");
}

/*
El operador lógico O (||) y sentencias if...else en JavaScript
En el operador lógico O (||), si una o ambas condiciones son verdaderas true, 
entonces se ejecutará el código dentro de la sentencia if.

En este ejemplo, aunque la variable estaEnVenta esté establecida en false, el código dentro del bloque if 
se ejecutará porque la variable elNovioEstaPagando está establecida en true.
*/
const elNovioEstaPagando = true;
const estaEnVenta = false;

if (elNovioEstaPagando || estaEnVenta) {
    console.log("Maria ira de compras.");

} else {
    console.log("Maria no ira de compras.");
}

/*
El NO lógico (!) operador y sentancias if...else en JavaScript
El NO lógico ( !) el operador tomará algo que es true y lo hará false. 
También tomará algo que es falso y lo hará verdadero.

Podemos modificar el ejemplo anterior para usar el ! operador para hacer la variable elNovioEstaPangando false. 
Dado que ambas condiciones son false, se ejecutaría el bloque else.
*/
const elNovioEstaPangando = true;
const EnVenta = false;

if (!elNovioEstaPangando || EnVenta) {
    console.log("Maria ira de compras.");

} else {
    console.log("Maria no ira de compras.");
}

/*
Operador condicional (ternario) en JavaScript
Si tienes una sentencia corta if else, entonces puedes optar por ir con el operador ternario.
La palabra ternario significa algo compuesto de tres partes.

Esta es la sintaxis básica para un operador ternario:
La condición va antes de la ? marca y si es true, entonces el código entre el ? marca y : ejecutaría.
Si la condición es false, se ejecutará el código después de :.

condicion ? if condicion es verdadera : if condicion es falsa*/

const edadMia = 32;
const ciudadano = edadMia >= 18 ? "Puede votar" : "No puede votar";
console.log(ciudadano);

//Comparando con  if-else seria:

const edadSuya = 32;
let ciudadanoDos;

if (edadSuya >= 18) {
    ciudadanoDos = "Puede votar";

} else {
    ciudadanoDos = "No puede votar";
}
console.log(ciudadanoDos);

/*
Conclusion
las sentencias if else ejecutarán un bloque de código cuando la condición de la sentencia if sea veraz truthy.
Si la condición es falsa falsy, se ejecutará el bloque else.

Habrá momentos en los que desees probar múltiples condiciones y puedes usar una sentencia if...else if...else.

Si sientes que la sentencia if else es larga y complicada, entonces una sentencia switch podría ser una opción alternativa.

El uso de operadores lógicos para probar varias condiciones puede reemplazar sentencias if else anidadas.

El operador ternario se puede usar para escribir código más corto para una sentencia if else simple.
*/
let edadCinco = 50 /*parseInt(prompt("Ingrese su edad."));*/

if (isNaN(edadCinco) || edadCinco < 0) {
    console.log("ingrese valor valido");

} else if (edadCinco > 0 && edadCinco >= 18) {
    console.log("Es mayor de edad.");

} else {
    console.log("Es menor de edad.");
}

let numero = 13;/*parseInt(prompt("Ingrese su numero."));*/

if (isNaN(numero) || numero % 2 == 0) {
    console.log("Es numero par");

} else {
    console.log("Es numero impar.");
}


/*control de temperaturas de galpones de engorde*/

let temperatura = 32/*parseInt(prompt("Ingrese su lectura."));*/

if (isNaN(temperatura) || temperatura >= 32) {
    console.log("Apagar calefactor del galpon.");

} else if (temperatura <= 27) {
    console.log("Encender calefactor del galpon.");

} else {
    console.log("Temperatura estable, tomar registro de termometros fisicos");
}

let diametroRueda = 2;/*parseFloat(prompt("Ingrese su diametro."));*/

if (isNaN(diametroRueda) || diametroRueda > 1.4) {
    console.log("La rueda es para vehiculo grande.");

} else if (diametroRueda > 0.8 && diametroRueda <= 1.4) {
    console.log("Larueda es para vehiculo mediano.");
    
} else {
    console.log("La rueda es para vehiculo pequeño.");
}