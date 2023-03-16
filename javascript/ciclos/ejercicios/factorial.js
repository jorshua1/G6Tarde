let numero = parseInt(prompt("Ingrese un número natural para calcular su factorial. Las cifras decimales no se tendrán en cuenta."))
let resultado = 1;

while((isNaN(numero)) || (numero<=0)){
    numero = parseInt(prompt("Error. Por favor, ingrese un valor númerico válido. Las cifras decimales no se tendrán en cuenta."));
}
for(numero;numero>0;numero--){
    resultado = resultado*numero;
}
console.log("El factorial del numero ingresado es: " + resultado);