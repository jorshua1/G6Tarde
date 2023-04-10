let vector = [];
let numero = 0;
let suma = 0;

for(i = 0; i <= 9; i++){
    numero = Number(prompt("INGRESE UN NUMERO"));
    while(isNaN(numero)){
        numero = Number(prompt("INGRESE UN NUMERO VALIDO"));
    }
    vector [i] = numero;
    suma = suma + numero;

    console.log(suma);
}