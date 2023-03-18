let numero = parseInt(prompt("Ingrese un número entero positivo. (Si ingresa un valor con cifras decimales, dichas cifras no serán tenidas en cuenta)."));
let contador = 1;
let numerosImpares = "";

while((isNaN(numero))||(numero<=0)){
    numero =  parseInt(prompt("Error. Por favor, ingrese un NÚMERO ENTERO POSITIVO. (Si ingresa un valor con cifras decimales, dichas cifras no serán tenidas en cuenta)."));
}
for(contador;contador<=numero;contador++){
    if((contador%2)==1){
        numerosImpares = numerosImpares+""+contador + "   ";
    }
}
alert(numerosImpares);
console.log(numerosImpares);
