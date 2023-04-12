/*Programa que declare un vector de diez elementos enteros y pida números para rellenarlo 
hasta que se llene el vector o se introduzca un número negativo. 
Entonces se debe imprimir el vector (sólo los elementos introducidos).*/

let vector = [];

for(a = 0; a < 10; a++){
    vector[a] = parseInt(prompt("Ingrese 10 numero " + "\n # " + (a+1) ));
    while(isNaN(vector[a] || vector[a] < 0)){
        vector[a] = parseInt(prompt("Ingrese un numero valido " + "\n # " + (a+1) ));
    }
    if(vector[a] < 0){
        a = 9;
    }
}
console.log(vector);