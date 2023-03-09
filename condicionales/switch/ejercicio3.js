// diseñar algoritmo que lea numero entre 1 y 10, y nos muestre en pantalla el numero ingresado en letra (1=uno). si el numero leido no esta comprendido entre 1 y 10 mostar un mensaje de error.

var numero = Number(prompt("Ingrese numero"))

switch(numero){
    case 1 :
       alert("Uno")
       break;
    case 2 :
       alert("Dos")
       break;
    case 3 :
        alert("Tres")
        break;
    case 4 :
        alert("Cuatro")
        break;
    case 5 : 
        alert("Cinco")
        break;
    case 6 : 
        alert("Seis")
        break;
    case 7 : 
        alert("Siete")
        break;
    case 8 : 
        alert("Ocho")
        break;
    case 9 :
        alert("Nueve")
        break;
    case 10 :
        alert("Diez")
        break;
    default :  
        alert("Ingrese un valor valido")
        break;
}