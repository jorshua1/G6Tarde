let vector = [];
let numero = 0;
let numeroPositivo = 0;

for(i = 0; i <= 99; i++){
    numero = Number(prompt("INGRESE UN NUMERO"))
        while(isNaN(numero)){
            numero = Number(prompt("INGRESE UN NUMERO VALIDO"))
        }
        if(numero > 0){
            numeroPositivo = numeroPositivo + 1;
        }
}
console.log(numeroPositivo);