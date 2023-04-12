let vector_numeros=[];
let cuadrados=[];
let cubo=[]
for(let i=0;i<10;i++){
    vector_numeros[i]=Math.floor(Math.random()*10 ) + 1
}
console.log(vector_numeros);
for(let i=0;i<vector_numeros.length;i++){
    cuadrados[i]=vector_numeros[i]**2;
}
console.log(cuadrados);
for(let i=0; i<vector_numeros.length; i++){
    cubo[i]=vector_numeros[i]**3;
}
console.log(cubo);

