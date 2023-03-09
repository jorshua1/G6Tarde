//diseñar un algoritmo que lea por teclado un numero comprendido entre 1 y 10. se desea visualizar si el numero es par o impar.en primer lugar, se debe se debe detectar si el numero esta comprendido en el rango valido (1-10) y a continuacion si el numero es 1,3,5,7,9 escribir mensaje es "impar"; si es 2,4,6,8,10 escibir mensaje es "par"

var numero = Number (prompt("Ingrese numero"))

switch(numero){
     case 1 :
     case 3 :
     case 5 :
     case 7 :
     alert("Impar")
     break;
     case 2 :
     case 4 :
     case 8 :
     case 10 :
     alert("Par")
     break;
     default : 
     alert("Ingrese un valor valido")
     break;
}