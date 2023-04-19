let numero = Number(prompt("Ingrese un numero"));
switch (numero) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:  
    console.log("El numero es impar");  
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    console.log("El numero es par");
        break;
    default:
        console.log("Ingrese un numero valido");
        break;
}