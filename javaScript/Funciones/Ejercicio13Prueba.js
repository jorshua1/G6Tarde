/*13. Escribir una función en JavaScript que tome 
como parámetro un número y muestre
por consola los números del 1 al número ingresado. */

function numerosMax(numero) {

    console.log(isNaN(numero) ? " Ingrese un dato valido " : numero < 0 ? "Numero negativo" : numero > 0 ? "numero positivo" : "Numero es cero");
    if (numero > 0) {
        for (i = 1; i <= numero; i++) {
            console.log(i)
        }
    }else{
        for (i = 1; i >= numero; i--) {
            console.log(i)
        }
    }

}

let numero = parseFloat(prompt(`Ingrese un numero`))
console.log(numerosMax(numero))

