var nombre ="Any Gomez";
console.log (nombre);

console.log(typeof (nombre));

var  edad = 18;
console.log (edad);

console.log(typeof (edad));

var PI = 3.141592;
var PI = 3.15;
console.log(PI);

console.log(typeof (PI));

var estacion = "verano";

if (estacion === "invierno"){
    console.log("por fin inviernooo")
}else{
    console.log("ya quiero que llegue el invierno")
}

let clase;
let duracionClase;


//los objetos inician con corchetes
let dog = { name: 'spot', breed : 'Dalmatian'};

console.log(dog.name);
console.log(dog.breed);
// const es la declaración de una variable que no se le puede cambiar el tipo de dato. 
const daysInWeek = 7;

let myName;
myName = "Any";
myName = "Andrea";
let myAge=18;

console.log(myAge);
console.log(myName);
/*
hola esto es un comentario 
de muchas lineas
*/

let indefinido;

console.log(indefinido);


let num1 = 20;

console.log(num1%3);

let num2 = 6;
num2 --;

console.log(num2);

let misDatos= {nombre : "Any" , cedula : 1096700198, acceso : true};

misDatos.acceso= false; //los objetos se pueden modificar. 


let arreglo = [1,"hola", {cedula: misDatos.cedula},false, null];
// en los arreglos las comas indican una posicion, arrancan desde posición 0.

arreglo[2]="nuevo hola";//se le pueden cambiar tambien los datos en los arreglos. 
console.log(arreglo[2]);

console.log();

let h=6;
let m = 7;

console.log(h+=m)

//operador logico de OR ó O
console.log(true||false)

//operador logico de Y
console.log(true&&false);

