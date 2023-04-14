function validador(numeros) {

    if (isNaN(numeros)) {
        return "Error Dato Invalido"
    } else {
        return numeros
    }
}

let x = ("222222");

console.log(validador(x));
//////////////////////////////////////////////////////////////

var pedirnumeros = Number(prompt("Ingrese el numero a calcular si es par o impar"));
function pareimpar(numero) {
    if (isNaN(numero) || numero<0) {
        return "ERROR, el dato ingresado no es número"
    } else if (numero % 2 === 1) {
        return numero + " Es un número impar"
    } else {
        return numero + " Es un número par"
    }
}
alert(pareimpar(pedirnumeros));


