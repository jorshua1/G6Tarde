let numero=Number(prompt("Ingrese el numero que desea saber el factorial"));
var suma=1;

while (isNaN(numero)){
    numero=Number(prompt("Ingrese un numero válido"));
}
while (numero>=1){
    suma=suma*numero;
    numero-=1;
}
console.log(suma);