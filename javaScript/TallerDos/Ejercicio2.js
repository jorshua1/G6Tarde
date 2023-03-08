let numero = parseInt(prompt("Ingrese un numero"));

switch (numero) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        alert("El numero " + numero + " esta entre el rango de 1 a 10");
        alert("El numero es impar");
        break;

    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        alert("El numero " + numero + " esta entre el rango de 1 a 10");
        alert("El numero es par");
        break;
    default:
        alert("En valor ingresado no corresponde a un numer entre 1 y 10");
        break;
}