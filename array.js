[] //!arreglo array
const a=[]; //declaracion basica de arreglos 
const b=[1,true,"Holaa",["A","B","C",[1,2,3]]]; //declaracion de arreglos 5 posiciones unidimensionales
console.log(a); 
console.log(b);
console.log(b.length); //todo impresion de cantidad de espacios vectores arreglos 
console.log(b[2]); //todo impresion del arreglo b , espacio 2 , vector
console.log(b[0]); 
console.log(b[3]); 
console.log(b[3][2]); //*impresion del arreglo b , arreglo 3 espacio 2
console.log(b[3][3][0]); //*impresion del arreglo b , arreglo 3 , arreglo 3 espacio 0

const c=Array.of("X","Y","Z",1,2,3); //Forma de declarar , funcion - Array.of("x","y","z")
console.log(c);

const d=Array(100).fill(false); //?Declaramos una variable d , con funciones especificas Array(n).fill(a) , donde n son las posiciones que queremos que se repitan las acciones en un arreglo a
console.log(d);

const e=new Array(); //!Forma ambigua de declarar arreglos
console.log(e);
const f=new Array(1,2,3,true,false);
console.log(f);

const colores=["Rojo","Verde","Azul"]; //Declaramos un arreglo
console.log(colores); 

colores.push("Negro");    //!Forma de añadir a un arreglo una posicion mas especifica
console.log(colores);

colores.pop();          //Forma de eliminar a un arreglo una posicion 
console.log(colores);

colores.forEach(function(el,index){
console.log(`<li id="${index}">${el}</li>`);
});
