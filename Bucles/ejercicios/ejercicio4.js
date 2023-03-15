//En este ejercicio mezclamos bucles on condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2. Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0

let numero, suma = 0 , contador, media;
for (contador = 0; contador < 4; contador++)
{
    numero = parseInt(prompt("Teclear numero"));
    suma += numero;
}
media = suma/4;
alert("La media es " + media);