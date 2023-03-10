/* diseñar un algoritmo que especifique si un numero es par o impar*/

let num = parseInt(prompt("por favor ingresar un numero entre 1 y 10"));

switch (num){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        alert("El numero es impar");
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10: 
        lert("El numero es par");
        break;
    default:
        alert("El numero no esta entre 1 y 10 o no se esta escribiendo un numero");
}