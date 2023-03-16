import prompt from "prompt";
var nombre = "Diego";
console.log(nombre);
console.log(typeof nombre);

var numero = 5;
var pi = 3.141592;
console.log(pi);
console.log(typeof pi);

const edad = 22;

//edad = "hola";

console.log(edad); //no

/* si */

let indefinido;
console.log(indefinido);

var x = 10;
var y = 2;

var rta = 0;

rta = x % y;

console.log(rta);

++x;
console.log(x);

--x;
console.log(x);

rta = x - y;
console.log(rta);

rta = y ** 3;
console.log(rta);

rta = x && y;
console.log(rta);

rta = x || y;
console.log(rta);

let obj = { nombre: "Veneco", cedula: 123456, acceso: false };

console.log(obj);

console.log(obj.nombre);

let arreglo = [
  1,
  "Venezuela es un estado de negros",
  { nombre: obj.nombre },
  false,
  null,
];

arreglo[1] = "Negros de estado es un Venezuela";
console.log(arreglo[1]);

5 !== "6";

console.log(false || true);
console.log(x >= y);

//ejercicio 1

var numero = parseInt(prompt("ingrese un numero"));

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

var rt = num1 + num2;
console.log("El resultado de la suma es:" + rt);

//ejercicio 2

let dis1 = parseInt(prompt("Ingrese la distancia de los carros"));
let vel1 = parseInt(prompt("Ingrese la velocidad del carro mas rapido"));
let vel2 = parseInt(prompt("Ingrese la velocidad del carro que va adelante"));

let t = dis1 / (vel1 - vel2);

t = t * 60;

console.log("el tiempo que demora en alcanzar al otro auto es: " + t);
