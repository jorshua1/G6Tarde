nota1 = parseInt(prompt("Ingrese la primera nota del promedio de 40% "));
nota2 = parseInt(prompt("Ingrese la segunda nota del promedio de 40% "));
nota3 = parseInt(prompt("Ingrese la primera nota del promedio de 60% "));
nota4 = parseInt(prompt("Ingrese la segunda nota del promedio de 60% "));
let resultado1
let resultado2
let resu
let resu2
let promedio

resultado1 = (nota1 + nota2)/2;
resultado2 = (nota3 + nota4)/2;

resu = resultado1 * 0.4;
resu2 = resultado2 * 0.6;

promedio = resu + resu2;

console.log("El promedio del estudiante es de: " +promedio);
