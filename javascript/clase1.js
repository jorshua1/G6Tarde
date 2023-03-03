//apuntes de variables

let uno=1;
let dos=2;
let cadena="esto es un string";
let entero= 155;
var hola= "hola";
let multiplicar=uno*dos;
console.log(multiplicar);
let h= "hola";
let m= "mundo";
let hm= h + m;
console.log(hm);
let decimal=152.54;
console.log(typeof(decimal));
let verdad = true;
let indefinido;
let objeto={nombre:"brayan", cedula:1001000111, acceso:true};
let arreglo =["hola ","tengo ","hambre " ,"que","va","a","gastar"];//la posicion de los arreglos empieza desde 0
let mensaje1=arreglo[0]+=arreglo[1]+=arreglo[2];
console.log(mensaje1);
let n=1;

//ejercicio 1
let numero1= parseInt(prompt("ingrese el primer numero"));
let numero2= parseInt(prompt("ingrese el segundo numero"));
let resultado= numero1+numero2;
console.log(resultado);

// ejercicio 2
let distancia= parseInt(prompt("ingrese la distancia entre los vehiculos"));
let velocidaprimervehiculo=parseInt(prompt("ingrese la veocidad en km/h del vehiculo mas lento"));
let velocidasegundovehiculo=parseInt(prompt("ingrese la velocidad en km/h del vehiculo mas rapido"));
let tiempo=distancia/(velocidasegundovehiculo-velocidaprimervehiculo);
let resultado=tiempo*60;
console.log(resultado);

//prueba desde la casa para ver si el archivo se sube bien 

