let numero = parseInt(prompt("Escriba un número (No se tienen en cuenta valores decimales)."))
let restoNumero = 0;
while(isNaN(numero)){
    numero = parseInt(prompt("Por favor, indique un valor numérico válido (No se tienen en cuenta valores decimales)."))
}
if(numero>0){
    for(numero;numero!=1;numero--){
        restoNumero = numero%3
        if((restoNumero === 2)){
        console.log(numero);
        }
    }
}else if(numero<0){
    for(numero;numero!=1;numero++){
        restoNumero = numero%3
        if((restoNumero === -2)){
        console.log(numero);
        }
    }
}
