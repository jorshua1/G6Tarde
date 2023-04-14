let vector_numeros= new Array(10);
let vector_cuadrados= new Array(vector_numeros.length);
let vector_cubos= new Array(vector_numeros.length);

for (let i=0;i<vector_numeros.length;i++){
    vector_numeros[i]=Math.floor(Math.random()*(10-1+1)+1);
}console.log(vector_numeros);

for (let i=0;i<vector_numeros.length;i++){
    vector_cuadrados[i]=vector_numeros[i]**2;
}console.log(vector_cuadrados);

for (let i=0;i<vector_numeros.length;i++){
    vector_cubos[i]=vector_numeros[i]**3;
}console.log(vector_cubos);