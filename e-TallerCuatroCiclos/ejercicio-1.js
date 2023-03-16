/*
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares.
*/

negativosIngresados = 0;
positivosIngresados = 0;
multiplosQuince = 0;
acumuladoSumaPares = 0;

for (i = 0; i < 10; i++) {
    let entero = -15;/*parseInt(prompt("Por favor ingrese numero entero."));*/
    if (entero < 0) {
        negativosIngresados++;
    } else {
        if (entero > 0) {
            positivosIngresados++;
        }
    }
    if (entero % 15 == 0) {
        multiplosQuince++;
    }
    if (entero % 2 == 0) {
        acumuladoSumaPares = acumuladoSumaPares + entero;
    }
}
/*alert*/console.log("La cantidad de valores negativos ingresados es: " + negativosIngresados + "\nLa cantidad de valores positivos ingresados es: " + positivosIngresados + "\nLa cantidad de múltiplos de 15 es: " + multiplosQuince + "\nEl valor acumulado de los números ingresados que son pares: " + acumuladoSumaPares);