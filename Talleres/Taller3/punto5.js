/*Calcular el factorial de un número x */

let acumulador = 1;
let numero = parseInt(prompt("Por favor digitar e numero al cual se desea sacar factorial"));

for(let i = numero;i>0;i--){
        acumulador *= i
}

console.log("la suma factorial da:"+acumulador);
