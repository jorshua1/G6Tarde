/*Ejercicio 6
Crea un programa que pida un número al usuario 
un número de mes (por ejemplo, el 4) y diga cuántos días 
tiene (por ejemplo, 30) y el nombre del mes. Debes usar 
un vector. Para simplificarlo vamos a suponer que febrero 
tiene 28 días. */

let numero = 0;
let mes = ["enero", "febreo", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre" ] 
let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

numero = parseInt(prompt(`Ingrese un numero de mes`));
while (isNaN(numero) || numero < 1 || numero > 12) {
    numero = parseInt(prompt(`Tiene que ser entre 1 y 12`));
}

alert(`El mes es ${mes[numero-1]} y los dias que tiene el mes son ${dias[numero-1]}`);