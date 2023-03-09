let num = parseInt(prompt("Ingrese un numero del 1 al 10"));
switch(num){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    console.log("Impar")
    break;
    case 2:
    case 4:
    case 6:
    case 8:
    console.log("Par") 
    break;
    default:
        console.log("El numero ingresado esta fuera del rango")
}