let numero = Number(prompt("INGRESE UN NUMERO"));
while (isNaN(numero) || numero < 0) {
    numero = Number(prompt("INGRESE UN NUMERO"));
}
for(contador = 0; contador <=10; contador++){
    let multiplicaion = numero*contador;
    console.log(numero + "*" + contador + "=" + multiplicaion);
}