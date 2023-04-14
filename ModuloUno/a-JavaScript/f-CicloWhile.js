/*
while
Resumen
Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. 
Dicha condición es evaluada antes de ejecutar la sentencia

Sintaxis
while (condicion)
sentencia

condicion
Una expresión que se evalúa antes de cada paso del bucle. 
Si esta condición se evalúa como verdadera, se ejecuta sentencia. 
Cuando la condición se evalúa como false, la ejecución continúa con la sentencia posterior al bucle while.

sentencia
Una sentecia que se ejecuta mientras la condición se evalúa como verdadera.
Para ejecutar múltiples sentencias dentro de un bucle, utiliza una sentencia block ({ ... }) para agrupar esas sentencias.

Ejemplos
El siguiente bucle while itera mientras n es menor que tres.
Cada interación, el bucle incrementa n y la añade a x. Por lo tanto, x y n toman los siguientes valores:

Después del primer pase: n = 1 y x = 1
Después del segundo pase: n = 2 y x = 3
Después del tercer pase: n = 3 y x = 6
Después de completar el tercer pase, la condición n < 3 no será verdadera más tiempo, por lo que el bucle terminará.*/

n = 0;
x = 0;

while (n < 3) {

    n++;

    x += n;
}
console.log("n es igual a: " + n + " \nx es igual a: " + x);

let numero = 8;

while (numero <= 10) {

    console.log(numero);

    numero++
    /*break;*/
}
console.log("XD");

var i = 1;

while (i < 10) {

    console.log(i);
    
    i++; // i=i+1 esto sería lo mismo 
}
