let numero=Number(prompt("Ingrese un numero entero positvo. "));
while(isNaN(numero)|| numero<=0){
    numero=Number(prompt("Dato inválido. Ingrese nuevamente el número. "));
}
for (i=1;i<=numero;i++){
    if (i%2!=0){
        console.log(i);
    }
}