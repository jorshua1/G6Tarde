let letra, veces, cont, x='';
letra = prompt("Escriba una letra");
veces= parseInt(prompt("Escriba un entero"));
for(cont = 0; cont < veces; cont++)
{
  x += letra;
}
alert(x);


//

let numeroUno=parseInt(prompt("ingrese el primer numero"))
let numeroDos=parseInt(prompt("ingrese el segundo numero"))
let numeroTres=parseInt(prompt("ingrese el tercer numero"))
let numeroCuatro=parseInt(prompt("ingrese el cuarto numero"))
let numeroCinco=parseInt(prompt("ingrese el quinto numrto"))
let numeroSeis=parseInt(prompt("ingrese el sexto numero"))
let numeroSiete=parseInt(prompt("ingrese el septimo numero"))
let numeroOcho=parseInt(prompt("ingrese el octavo numero"))
let numeroNueve=parseInt(prompt("ingrese el noveno numero"))
let numeroDiez=parseInt(prompt("ingrese el decimo numero"))


suma=numeroSeis+numeroSiete+numeroOcho+numeroNueve+numeroDiez


alert("la suma de los ultimos 5 numeros es de "+ numeroSeis + " + " + numeroSiete +  " + " + numeroOcho +  " + " + numeroNueve +  " + " + numeroDiez + " = " + suma)


////

let numeroMaximo, control;

numeroMaximo = parseInt(prompt("Ingrese un número de valor máximo "));

while(isNaN(numeroMaximo) || numeroMaximo <= 0){
    numeroMaximo = parseInt(prompt("Por favor ingrese datos validos  "));
}

for (control = 0; control < numeroMaximo; control++)
{
    if( control % 3 == 2){
        console.log(control);
    }
}

//

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

    ///


    let numero = parseInt(prompt("Ingrese un numero para saber si es palimdromo"));
let numeroOriginal = numero;
let numeroInvertido = 0;

while(isNaN(numero) || numero <= 0){
    numero = parseInt(prompt("Ingrese un numero valido"));
}

while (numero > 0){
    numeroInvertido = numeroInvertido * 10 + numero % 10;
    numero = parseInt(numero / 10);
}

if (numeroOriginal == numeroInvertido){
    alert("El numero es aplicua");
}else {
    alert("El numero no es aplicua");
}

////

