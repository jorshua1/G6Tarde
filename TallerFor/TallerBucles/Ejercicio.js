var numero = parseInt(prompt("Ingrese un numero entero positivo"));
while (isNaN(numero) || numero < 0) {
    numero = parseInt(prompt("Error, Ingrese un numero entero positivo"));
}
for (i = 0; i <= numero; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}
