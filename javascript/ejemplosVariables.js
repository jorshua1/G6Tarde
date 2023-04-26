var num1 = 1;
console.log(num1);
var num1 = 2;
console.log(num1);

let nombre = "Pedro";
console.log(nombre);
console.log(typeof nombre);

let numeroEntero = 5;
console.log(numeroEntero);
console.log(typeof numeroEntero);

let numeroDecimal = 3.1416;
console.log(numeroDecimal);
console.log(typeof numeroDecimal);

let verdadero = true;
console.log(verdadero);
console.log(typeof verdadero);

let falso = false;
console.log(falso);
console.log(typeof falso);

let miCarro = {
    marca: 'Ford',
    modelo: 'Mustang',
    año: 1969,
    Edad: 50 
    

};

console.log(miCarro);
console.log(typeof miCarro);

function suma(suma1, suma2){
    let resultado = 0;
    resultado = suma1*(3+suma2);
    return resultado;
}
console.log(suma(8,-9))
console.log(typeof suma)

let array = [1,2,3,4,5,"juan", false];

console.log(array);
console.log(typeof array);
console.log(array[4]);

let estaVariableTieneCamelCase = "CamelCase"

let EstaVariableTienePascalCase = "PascalCase"

let NUM=1;
let NUM2;


////////////////////////////////////////////////////////////////

let alto ;
let ancho;
let linea;
let cadena;
alto=parseInt(prompt("teclea un numero"))
for (linea=0;linea<alto;linea++){
    cadena=``
    for(ancho=0;ancho <=linea;ancho++){
        cadena+= "luis"
    }
    console.log(`${cadena}`)
}
