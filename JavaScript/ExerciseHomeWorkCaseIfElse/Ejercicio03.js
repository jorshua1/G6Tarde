/*(sentencia switch) Diseñar un algoritmo que lea un número entero entre 1 y 10, y nos
muestre por pantalla el número ingresado en letra (1 = uno). Si el número leído no está
comprendido entre 1 y 10 mostrar un mensaje de error.*/

let vNumber = parseInt(prompt("Ingresar el número que desea saber en letra"));

alert(confirm("Recuerda que solo le leera del 1 hasta el 10"));

switch (vNumber) {
    case 1:
        alert("ONE - UNO");
    break;
    case 2:
        alert("TWO - DOS");
    break;
    case 3:
        alert("THREE - TRES");
    break;
    case 4:
        alert("FOUR - CUATRO");
    break;
    case 5:
        alert("FIVE - CINCO");
    break;
    case 6:
        alert("SIX - SEIS");
    break;
    case 7:
        alert("SEVEN - SIETE")
    break;
    case 8:
        alert("EIGTH - OCHO");
    break;
    case 9:
        alert("NINE - NUEVE");
    break;
    case 10:
        alert("TEN - DIEZ");
    break;

    default:
        alert("Ingrese un digito correcto");
    break;
}