let numero = parseInt(prompt("Ingrese un número entero positivo: "));
for (let i = 1; i <= numero; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo && i >= 1) {
        console.log(i);
    }
}
