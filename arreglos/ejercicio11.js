/*Crea un programa que pida un número al usuario un número de mes (por ejemplo, el 4) 
y diga cuántos días tiene (por ejemplo, 30) y el nombre del mes. Debes usar un vector. 
Para simplificarlo vamos a suponer que febrero tiene 28 días.*/

let vector_meses = [".", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let dias = [0, 31, 28, 31, 30, 31, 30, 31, 31 ,30, 31, 30, 31]
let numero = Number(prompt("Ingrese un numero para identificar el mes"));
while(isNaN(numero) || numero < 1 || numero > 12){
    numero = Number(prompt("Ingrese un numero de mes valido"));
}
console.log("El mes que usted ingreso es " + vector_meses[numero] + " Y los dias que tiene su mes eees " + dias[numero]);