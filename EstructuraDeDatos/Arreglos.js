/** 
let arreglo= []-> declaración literal, no obliga tener un tamaño definido.

let conejos = new Array(); -> declarar arrays vacíos.

objetos -> algo que tiene que ver con la vida real
cada propiedad de un objeto se le denomina como clave valor. 
*/

//hay diferentes formas para crear arrays.

 let chimpance=[];
let conejos = new Array();

//llenar un array

for (let i=0;i<=10;i++){
    conejos[i]=i+1;
}
for (let i=0;i<=10;i++){
    console.log(conejos[i]);
}

//crear objetos
let camello={}; 
let vacas= new Object();
let producto={
    123: 'caramelo',
    categoria: 'frutas',
    precio:{                 //obejtos anidados. 
        moneda: 'colombiana',
        valor: 1200
    }
} 
console.log(producto.precio.moneda)

console.log(producto.categoria);

producto.categoria='dulces';

//las claves tambien pueden ser numeros, pero no podemos llamarla por medio del punto, solo con corchetes. 
console.log(producto[123]); 
 

let saludo="HOLA"
saludo[0]="k"; //valores inmutables, no se pueden cambiar su valor. 
console.log(saludo)

let arreglo=[1,2,"x",4];
console.log(typeof(arreglo));