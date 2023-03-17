let numero=Number(prompt("Ingrese un numero"));
let mod=0;
while(isNaN(numero)){
    numero=Number(prompt("Ingrese un dato válido"));
}
while(numero>1){
    mod=numero%3;
    if (mod==2){
        console.log(numero);
    }
    numero-=1;
}