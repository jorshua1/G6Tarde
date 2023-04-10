let numeroAleatorio = parseInt((Math.random() * 100) + 1);
let eleccion = 0;
let intentos = 7;
alert("Por favor, ingrese numeros entre 1 y 100. El juego termina cuando encuentre el número aleatorio o sus intentos se agoten. Tienes 7 intentos. \n\n(Si ingresa un número decimal, solo se tendrán en cuenta los dígitos de su parte entera. Ej: 5.9 = 5) ")

do{
    eleccion = parseInt(prompt("Por favor, ingrese un número entre 1 y 100"));
    while ((isNaN(eleccion)) || (eleccion < 1) || (eleccion > 100)) {
        eleccion = parseInt(prompt("Error. Por favor, ingrese un valor entre 1 y 100"));
    }
    if ((eleccion > numeroAleatorio) && (intentos > 0)) {
        intentos --
        alert(("El numero a adivinar es menor a " + eleccion + ".\nTe quedan " + intentos + " intentos."));
    } else if ((eleccion < numeroAleatorio) && (intentos > 0)) {
        intentos --
        alert(("El numero a adivinar es mayor a " + eleccion + ".\nTe quedan " + intentos + " intentos."));
    } else if ((eleccion === numeroAleatorio) && (intentos > 0)) {
        alert("Has adivinado el número (" + eleccion + ") con un total de " + (7-intentos) + " intentos. Felicitaciones");
    }
    }while((eleccion!=numeroAleatorio)&&(intentos>0));
if ((eleccion !== numeroAleatorio) && (intentos == 0)){
    alert("Te has quedado sin intentos. El número era: " + numeroAleatorio + ".\nFin del juego.");
    }