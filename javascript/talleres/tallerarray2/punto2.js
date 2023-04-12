let array=[];
let yarra=[];
let cant=5;
for(let i=0;i<5;i++){
    array[i]=Number(prompt("ingrese un numero(fatan "+cant+")"));
    cant--;
}
console.log(array);
for(let i=0;i<array.length;i++){
    yarra=array.reverse();
}
console.log(yarra);


// sin metodos 

let cadena=[];
let anedac=[];
let a=5;
let n=0;
for(let i=0; i<5;i++){
    cadena[i]=Number(prompt("ingrese un numero( fatan "+a+")"));
    a--;
}
console.log(cadena);
for(let i=4;i>=0;i--){
    anedac[i]=cadena[n];
    n++
}
console.log(anedac);