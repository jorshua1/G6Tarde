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
    alert("El numero es capicua");
}else {
    alert("El numero no es capicua");
}
