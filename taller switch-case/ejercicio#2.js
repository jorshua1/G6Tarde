let numero = parseInt(prompt("Ingrese un numero del 1-10"));
switch (numero) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        alert("Es impar");
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        alert("Es par");
        break;
    default:
        alert("el numero ingresado no esta dentro del rango indicado, recuerde que es del 1-10")
}   