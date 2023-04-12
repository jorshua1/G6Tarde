let numeros = [];
let i = 0;
do{
    numeros[i] = Number(prompt(`Ingrese el valor Nº${i+1} del array.`));
    while((isNaN(numeros[i]))||!Number.isInteger(numeros[i])){
        alert("Por favor, ingrese un valor válido.");
        numeros[i] = Number(prompt(`Ingrese el valor Nº${i+1} del array.`));
    }
    i++
}while((numeros.length < 10)&&(numeros[i-1]>0));
if(numeros[i-1]<0){
    numeros.splice(i-1,1);
}

alert(`Los números dentro del array son: \n${numeros}`)