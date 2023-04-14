/*
13. Escribir una función en JavaScript que tome como parámetro un número y muestre
por consola los números del 1 al número ingresado.*/

function contadorNumerosTres(numeroTres) {


    if (isNaN(numeroTres)) {
        return ("No es un numero")

    } else if (numeroTres > 0) {

        for (let i = 1; i <= numeroTres; i++) {
            console.log(i);
        }

    } else {

        for (let i = 1; i >= numeroTres; i--) {
            console.log(i);
        }
    }
}

let numeroTres = 10;

console.log(contadorNumerosTres(numeroTres));