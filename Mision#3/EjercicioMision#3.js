//////////////////////////////////////////////////////////////

//Punto 11
let pedirnumeros = Number(prompt("Ingrese el numero a calcular si es par o impar"));
function pareimpar(numero) {
    if (isNaN(numero) || numero < 0) {
        return "ERROR, el dato ingresado no es número"
    } else if (numero % 2 === 1) {
        return numero + " Es un número impar"
    } else {
        return numero + " Es un número par"
    }
}
alert(pareimpar(pedirnumeros));
//////////////////////////////////////////////////

// Punto 12. Escribir una función en JavaScript que tome como parámetro un número y devuelva "Positivo" si el número es mayor que cero, "Negativo" si el número es menor que cero y "Cero" si el número es cero.

let ingresarNumero = (-1);
function positivosNegativos(valor) {
    if (isNaN(ingresarNumero)) {
        return "ERROR, el dato ingresado no es número";
    } else {
        return ingresarNumero < 0 ? " El numero es Negativo" : "El numero es Positivo"
    }
}
console.log(positivosNegativos(ingresarNumero));

// Punto 13. 13.	Escribir una función en JavaScript que tome como parámetro un número y muestre por consola los números del 1 al número ingresado.

let ingresarvalores = parseInt(prompt(`Ingrese un numero positivo`));

function calculadoraNumeros(ingresarvalores) {
    console.log(isNaN(ingresarvalores) ? " Ingrese un numero valido! " : ingresarvalores < 0 ? "El numero es Negativo" : ingresarvalores > 0 ? "El numero positivo" : "El Numero es cero")
    if (ingresarvalores > 0) {
        for (let i = 0; i < ingresarvalores; i++) {
            console.log(i);
        }
    } else {
        for (i = 1; i >= ingresarvalores; i--) {
            console.log(i);
        }
    }
}
console.log(calculadoraNumeros(ingresarvalores));


// Punto 14. Escribir una función en JavaScript que tome como parámetro un número y muestre por consola los números del 1 al número ingresado, pero si el número es múltiplo de 3 mostrar "Fizz" en lugar del número y si el número es múltiplo de 5 mostrar "Buzz" en lugar del número..

let numerosMultiplos = parseInt(prompt(`Ingrese un numero positivo`));

function calculadoraNumerosMultiplos(numerosMultiplos) {
    while (isNaN(numerosMultiplos) || (numerosMultiplos < 0)) {
        alert("El dato que esta ingresando no es correcto, debe ser un numero positivo, por favor intentelo de nuevo!")
        numerosMultiplos = parseInt(prompt(`Ingrese un numero positivo`));
    }
    for (let i = 0; i < numerosMultiplos; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

}
console.log(calculadoraNumerosMultiplos(numerosMultiplos));
