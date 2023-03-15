/*
tabla de multiplicar
*/
let numeroMultiplicando = 3;/*parseInt(prompt(" Por favor ingrese numero de la tabla que necesita visualizar"));*/
let numeroMultiplicador = 0;

if (isNaN(numeroMultiplicando)) {
    while (isNaN(numeroMultiplicando));
    console.log("Por favor ingrese un valor valido");
} else {
    for (i = 0; i < 10; i++) {
        numeroMultiplicador++
        let resultado = numeroMultiplicando * numeroMultiplicador;
        console.log(numeroMultiplicando + " x " + numeroMultiplicador + " = " + resultado);
    }
}