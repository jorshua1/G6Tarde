/*(sentencia switch) Diseñar un algoritmo que lea por teclado un número comprendido
entre 1 y 10. Se desea visualizar si el número es par o impar. En primer lugar, se
deberá detectar si el número está comprendido en el rango válido (1 a 10) y a
continuación si el número es 1, 3, 5, 7, 9, escribir un mensaje de “impar”; si es 2, 4,
6, 8, 10, escribir un mensaje de “par”.*/

let vNumber = parseInt(prompt("Dijite los números para saber si es PAR o IMPAR"));

alert(confirm("Debes tener encuenta que solo leera los números del 1 hasta el 10"));

    switch (vNumber) {
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
            alert("Es un número PAR ");
        break;

        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            alert("Es un número IMPAR");
        break;

        default:
            alert("Ingrese un valor valido");
        break;
    }
