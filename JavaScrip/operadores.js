let cadena = "Esto es un string";
let entero = 155;
let decimal = 152.54;
console.log(typeof (decimal));
let verdad = true;
let nulo = null;
let indefinido = undefined;
console.log(indefinido);
let objeto = {nombre : "miguel",cedula : 1234567890,acceso : true};
console.log(objeto["nombre"]);
let arreglo = [1, "hola", {nombre: objeto.nombre}, false, null];
arreglo[1]= "usted me cae mal";
console.log(arreglo[1]);
objeto.nombre="sergio";
console.log(objeto.nombre);

let num1 = 3;
let num2 = 4;

let suma = num1 + num2;

console.log(suma);
console.log(--num1);

