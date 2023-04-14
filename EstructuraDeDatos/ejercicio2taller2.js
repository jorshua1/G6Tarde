let vectorCaracteres = new Array(5);
let inversoVectorCaracteres = new Array(5);
for (let i=0; i<vectorCaracteres.length;i++){
    vectorCaracteres[i]=prompt("Ingrese un dato ");
}console.log(vectorCaracteres);
let i=0;
for (let j=vectorCaracteres.length-1;j>=0;j--){
    inversoVectorCaracteres[i]=vectorCaracteres[j];
    i+=1;
}
console.log(inversoVectorCaracteres);