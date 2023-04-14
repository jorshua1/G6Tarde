
let x = Number(prompt("Ingrese un numero"))

function par_impar(numero) {

    if (isNaN(numero)) {
        return "Error"
    } else if (numero % 2 == 0) {
        return "Es par"
    } else {
        return "Es impar"
    }

}
console.log(par_impar(x));

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//flecha
let nombre_de_la_funcion = () => "";
////////////////////////////////////////////////////////////////////////////////////////////////////////////

let num = Number(prompt("Ingrese un numero"));

function mayor_menor(numero1){
    console.log( numero1 > 0 ? "El numero es mayor que cero" : numero1 < 0 ? "El numero es menor que cero" : "El numero es cero" );
}
console.log(mayor_menor(num));
///////////////////////////////////////////////////////////////////////////////////////////////////////////
let numero = Number(prompt("Ingrese un numero"));

function contador(A) {
    console.log(numero > 0 ? "El numero es creciente" : numero < 0 ? "El numero es decreciente" : "El numero es cero");


    if (A < 0) {
        for (let i = 1; i >= A; i--) {
            console.log(i);
        }
    } else if (A > 0) {
        for (let i = 1; i <= A; i++) {
            console.log(i);
        }

    }
}
console.log(contador(numero));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function fizz_Buzz(A) {
    if (A <= 0) {
        console.log("Error numero negativo o cero");
    } else {
        for (let i = 1; i <= A; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }
}

var numero = parseInt(prompt("numero"));
console.log(fizz_Buzz(numero));