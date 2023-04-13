/* EJERCICIO 4: Programa que declare un vector de diez elementos enteros y 
pida números para rellenarlo hasta que se llene el vector o se introduzca un número negativo. 
Entonces se debe imprimir el vector (sólo los elementos introducidos). */
let vector = new Array();
let numero = true;
let i = 0;

while(numero===true && vector.length!=10){
    let elemento = Number(prompt(`Ingrese un elemento entero`));
    while(isNaN(elemento)){
        elemento = Number(prompt(`Ingrese un elemento entero`));
    }if(elemento>=0 ){
        vector[i]=elemento;
    }else{
        numero=false;
    }
    i++;
}console.log(vector);


