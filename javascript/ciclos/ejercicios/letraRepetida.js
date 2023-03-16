let letra = prompt("Por favor, ingrese una letra")
let numero = 0;
let cadena = "";

while((!isNaN(letra))){
    letra = prompt("Error. Por favor, ingrese una letra");
}
while(letra[1] != null){
    letra = prompt("Error. Por favor, ingrese una SOLA letra");
}
numero = parseInt(prompt("Por favor, ingrese el número de la cantidad de veces que se repetirá la letra (Las cifras decimales no se tomarán en cuenta)."));
while((isNaN(numero))||(numero<=0)){
    numero = parseInt(prompt("Por favor, ingrese un valor númerico válido (Las cifras decimales no se tomarán en cuenta)."));
}
for(numero;numero>0;numero--){
    cadena = cadena+letra;
}
alert(cadena)