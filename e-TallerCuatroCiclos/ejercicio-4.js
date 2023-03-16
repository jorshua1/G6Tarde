/*
En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script 
imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.

Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0.
*/
multiplosTresResulDos = 0;

for (i = 0; i < 10; i++) {
    let entero = 6;/*parseInt(prompt("Por favor ingrese numero entero."));*/
    if (entero < 0) {
        console.log("Por favor ingrese numeros mayores de cero");
    } else {
        if (entero > 0) {
            (entero % 3 == 2);
        } else {
                multiplosTresResulDos++;
            }
        }
    }
/*alert*/console.log("La cantidad de numeros divisibles por 3 y resultado es 2 son: " + multiplosTresResulDos);