/**Escribir un script para determinar si el numero 
 * introducido por el usuario es un palindromo, es decir, un 
 * numero que se lee igual del derecho que del revés. Para 
 * invertir el número puedes hacer sucesivas divisiones 
 * entre 10; el resto lo añades al inverso multiplicado 
 * por 10. Y repites con el valor entero del numero dividido por 10 */
let numero = parseInt(prompt("Ingrese un numero para saber si es palimdromo"));
let numeroOriginal = numero;
let numeroInvertido = 0;

while(isNaN(numero) || numero <= 0){
    numero = parseInt(prompt("Ingrese un numero valido"));
}

while (numero > 0){
    numeroInvertido = numeroInvertido * 10 + numero % 10;
    numero = parseInt(numero / 10);
}

if (numeroOriginal == numeroInvertido){
    alert("El numero es capicua");
}else {
    alert("El numero no es capicua");
}
