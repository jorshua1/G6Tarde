/**Crea una aplicación que permita adivinar un número. 
La aplicación genera un número aleatorio del 1 al 100. 
A continuación va pidiendo números y va respondiendo si 
el número a adivinar es mayor o menor que el introducido, 
a demás de los intentos que te quedan (tienes 10 intentos para acertarlo). 
El programa termina cuando se acierta el número (además te dice en cuantos 
intentos lo has acertado), si se llega al limite de intentos te muestra 
el número que había generado. */
let Aleatorio = parseInt((Math.random() * 100) + 1);
let numero = 0;
let intentos = 10;
alert("Por favor, ingrese numeros entre 1 y 100. El juego termina cuando acerte el número aleatorio o sus intentos llegen a cero. Tienes 10 intentos")

do {
    numero = parseInt(prompt("Ingrese un número entre 1 y 100"));

    while ((isNaN(numero)) || (numero < 1) || (numero > 100)) {
        numero = parseInt(prompt("Ingrese un numero valido. \nEntre 1 y 100"));
    }
    if ((numero > Aleatorio) && (intentos > 0)) {
        intentos--
        alert(("El numero es menor a " + numero + ".\nTe quedan " + intentos + " intentos."));
    } else if ((numero < Aleatorio) && (intentos > 0)) {
        intentos--
        alert(("El numero es mayor a " + numero + ".\nTe quedan " + intentos + " intentos."));
    } else if ((numero === Aleatorio) && (intentos > 0)) {
        alert("Has adivinado el número (" + numero + ") con un total de " + (10 - intentos) + " intentos.");
    }

} while ((numero != Aleatorio) && (intentos > 0));

if ((numero !== Aleatorio) && (intentos == 0)) {
    alert("Te has quedado sin intentos. El número era: " + Aleatorio);
}