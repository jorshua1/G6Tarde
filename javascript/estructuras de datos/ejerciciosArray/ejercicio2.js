let vector = new Array(5);
let vectorInvertido = new Array(5);

for(var i = 0;i<vector.length;i++){
    vector[i] = prompt(`Ingrese un caracter (Posición ${i}).`);
    while(vector[i]===""){
        vector[i] = prompt(`Ingrese un caracter (Posición ${i}).`);
    }
}
i = (vector.length-1);
for(let j = 0;j<vector.length;j++){
    vectorInvertido[j] = vector[i];
    i--;
}

console.log(vector);
console.log(vectorInvertido);