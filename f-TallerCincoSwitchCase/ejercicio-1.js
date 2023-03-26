/*
Leer dos (2) números y los imprima en forma acsendente.
*/

let numeroUno = 1; /*parseFloat(prompt("Por favor ingrese primer numero."));*/
let numeroDos = 1;/*parseFloat(prompt("Por favor ingrese segundo numero."));*/

if (isNaN(numeroUno) || isNaN(numeroDos) || numeroUno < numeroDos) {
    console.log(numeroUno + ", " + numeroDos);
} else if (numeroDos < numeroUno) {
    console.log(numeroDos + ", " + numeroUno);
} else {
    console.log(numeroDos + " y " + numeroUno + " son numero iguales.");
}