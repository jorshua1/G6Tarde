/*Ejercicio 4
Programa que declare un vector de diez elementos 
enteros y pida números para rellenarlo hasta que 
se llene el vector o se introduzca un número negativo. 
Entonces se debe imprimir el vector (sólo los elementos introducidos).*/

let vector = new Array();
let i=0;
let temp = 0;
do{

    temp = parseFloat(prompt(`Ingrese un numero entero`));

    while(isNaN(temp) || !Number.isInteger(temp)){

        temp = parseFloat(prompt(`Ingrese solo valores enteros`))
    }
    if(temp>0){vector[i] = temp}
    i++;

}while((vector[i-1] > 0) && (vector.length != 10));

alert(vector)