let numero=Number(prompt("Ingrese un numero"));
let factorial=1;
while(numero>0){
    factorial=factorial*numero;
    numero-=1;
}console.log(factorial);