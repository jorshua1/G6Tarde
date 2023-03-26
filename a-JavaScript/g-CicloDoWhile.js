/*
Ciclo while
*/

let numero = 9;

do {
    console.log(numero);
    numero++
}
while (numero <= 10) {
}
console.log("XD");

/*
tabla de multiplicar
*/
let numeroMultiplicando = 1;/*parseInt(prompt(" por favor ingrese numero de la tabla que necesita visualizar"));*/
let numeroMultiplicador = 1;

if (isNaN(numeroMultiplicando)){
    console.log("Por favor ingrese un valor valido");
}else{
do {
    let resultado = numeroMultiplicando * numeroMultiplicador
    console.log(numeroMultiplicando + " x " + numeroMultiplicador + " = " + resultado);
    numeroMultiplicador++;
} while (numeroMultiplicador <= 10)
numeroMultiplicador = 1;
numeroMultiplicando++
}
