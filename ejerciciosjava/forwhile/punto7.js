let numero = parseInt(prompt("Escriba un numero positivo"))
while(isNaN(numero) || numero < 0){
    numero = parseInt(prompt("Escriba un numero positivo"))
}
for(i = 1; i <= numero; i++){
    if( i % 2 !== 0){
        console.log(i);
    }
}
