const numero = prompt("Ingresa un número");
//let numero = 65;
let numeroInvertido = 0;
let tempNumero = numero;

if (isNaN(numero) || numero <= 0)
    alert("La informacion que ingreso no es Numerica o es un numero Negativo, por favor intentelo de nuevo.");
while (tempNumero > 0) {
    const ultimoDigito = tempNumero % 10;
    numeroInvertido = (numeroInvertido * 10) + ultimoDigito;
    tempNumero = Math.floor(tempNumero / 10);
}
if (numero == numeroInvertido) {
    alert(numero + " es un numero palíndromo");
} else {
    alert(numero + " NO es un numero palíndromo");
}