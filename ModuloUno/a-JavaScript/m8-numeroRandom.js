/*El método Math.random() devuelve un número aleatorio entre 0 (incluido) y 1 (excluido), 
por lo que para obtener un número aleatorio positivo o negativo, puedes multiplicar el 
resultado por un número mayor que 1 y restar o sumar un valor constante.

Aquí hay un ejemplo de cómo generar un número aleatorio positivo o negativo en 
JavaScript:*/

// Generar un número aleatorio positivo o negativo entre -10 y 10
let num = Math.floor(Math.random() * 21) - 10;
console.log(num);

// Generar un número aleatorio positivo entre 0 y 10
let num_pos = Math.floor(Math.random() * 11);
console.log(num_pos);

// Generar un número aleatorio negativo entre -10 y 0
let num_neg = Math.floor(Math.random() * 11) - 10;
console.log(num_neg);

// Generar 10 números aleatorio positivo o negativo entre -10 y 10
for (var i = 0; i < 10; i++) {
    var numeroAleatorio = Math.floor(Math.random() * 21) - 10;
    console.log(numeroAleatorio);
}

// Generar un número aleatorio positivo entre 0 y 10
for (var i = 0; i < 10; i++) {
    var numeroAleatorio = Math.floor(Math.random() * 21) - 10;
    if (numeroAleatorio < 0) {
        numeroAleatorio = Math.abs(numeroAleatorio);
    }
    console.log(numeroAleatorio);
}

// Generar un número aleatorio positivo entre -10 y 0
for (var i = 0; i < 10; i++) {
    var numeroAleatorio = Math.floor(Math.random() * 11) - 10;
    if (numeroAleatorio >= 0) {
        numeroAleatorio = -numeroAleatorio;
    }
    console.log(numeroAleatorio);
}

// Generar 10 números aleatorio positivo o negativo entre -100 y 100
for (var i = 0; i < 10; i++) {
    var numeroAleatorio = Math.floor(Math.random() * 201) - 100;
    console.log(numeroAleatorio);
}

var min = -100;
var max = 100;
var x = Math.floor(Math.random() * (max - min + 1) + min);
console.log(x);

var minimum = -100;
var maximun = 100;
for (var i = 0; i < 10; i++) {
    var x = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(x);
}