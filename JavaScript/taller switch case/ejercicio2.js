let numero= Number(prompt("Ingrese un numero (1 a 10)"));
switch(numero) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    alert("Es impar")
    break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
    alert("Es par")
    break;
    default:
        alert("No es un numero valido")
}