//Calcular el factorial de un número x.
let numero = Number(prompt("INGRESE UN NUMERO"));
while(isNaN(numero) || numero < 0){
    numero = Number(prompt("INGRESE UN NUMERO"));
}
let fac = 0;
for(i = numero; i > 0; i--){
    console.log(i);
}
