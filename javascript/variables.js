import prompt from 'prompt';
import { parse } from 'url';

var nombre = "Juan Felipe";
console.log(nombre);
console.log(typeof (nombre));

var entero = 10;
var pi = 3.1415;
console.log(entero);
console.log(typeof (entero));
console.log(pi);
console.log(typeof (pi));


var a = 2
var b = 3

var c = a || b
console.log(c)

var d = a && b
console.log(d)

var prueba = 10.5

if (prueba >= 10 && prueba <= 11) {

    console.log("el numero esta entre 10 y 11")
} else {

    console.log("el numero no esta entre 10 y 11");
}

var prueba2 = 12

if (prueba2 < 10 || prueba2 < 11) {

    console.log("el numero mrnor a 10");
} else {

    console.log("el numero es mayor a 11");
}

var objeto = { nombre: "juan felipe", cc: 123456, accseso: false, mascotas: "si" }

console.log(objeto);
console.log(objeto.nombre);
console.log(objeto["nombre"]);

var array = [1, "juan felipe", 23, { mascotas: objeto.mascotas }]
console.log(array[0]);
console.log(array[2]);
console.log(array[3]);
console.log(array[1]);
console.log(a || b);
console.log(a && b);

//ejercicio numero 1

var num1 = parseInt(prompt("digite el numero 1: "));
var num2 = parseInt(prompt("digite el numero 1: "));

var c = num1 + num2;
console.log("El resultado es: " + c);

// ejercicio numero 2

var distancia = parseInt(prompt("digite la distancia entre los 2 autos: "));
var carro1Velocidad = parseInt(prompt("digite la velocidad para el carro 1 que va vas rapido: "));
var carro2Velocidad = parseInt(prompt("digite la velocidad para el carro 2 qe va mas lento: "));


velocidad=carro1Velocidad-carro2Velocidad;;

var tiempo = (distancia/velocidad)*60;
 console.log("el tiepo en que el carro 1 alcanzara al carro 2 es de : " + tiempo+" minutos"); 

