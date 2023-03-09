//operador ternario

let nombre = prompt("ingrese su nombre");

let saludo = nombre==="" ? "ingrese un nombre valido" : "hola "+nombre;
console.log(saludo);

//*ejercicio

let numero = Number(prompt("Ingrese un numero"));

alert(isNaN(numero) ? "ingrese un dato valido" :  numero%2===0 ? "el numero es par" : "el numero es impar");