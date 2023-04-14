// se declara de la siguiente manera.

//function validador ("aqui va valores que recibe la funcion"{
    //palabra clave y nombre de la funcion
//})

function validador(numero){

    if (isNaN(numero)){
        return "Error Dato Invalido"
    }else{
        return numero
    }
}

let x = ("222222");

console.log(validador(x));

////////////////PAR E IMPAR CON FUNCIONES/////////////////


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