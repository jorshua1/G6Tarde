let numero=Number(prompt("ingrese el numero del 1 al 10 "))

switch(numero){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        console.log("es impar");
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        console.log("es par");
        break;
    default:
        console.log("no hay dato");
}
