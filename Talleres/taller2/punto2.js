let num = Number(prompt("Escriba un número del 1 al 10"));

switch (num){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        alert("El numero " + num + " está entre 1 y 10");
        alert("El número indicado es impar")
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        alert("El numero " + num + " está entre 1 y 10");
        alert("El número indicado es par")
        break;
    default:
        alert("Por favor, ingrese un número válido (Número entre 1 y 10)");
        break;
}