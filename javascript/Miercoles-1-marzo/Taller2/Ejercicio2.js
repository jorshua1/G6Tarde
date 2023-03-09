let x = Number(prompt("ingrese un numero"));
switch (x) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        alert("el numero es impar");
    break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        alert("el numero es par");
    break;
    default:
        alert("el numero no es valido");                                    
}
