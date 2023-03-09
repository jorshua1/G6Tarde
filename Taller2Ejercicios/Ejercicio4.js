let num = parseInt(prompt("Ingrese los minutos que duró la llamada"));
let num1;
let valor1;
if(isNaN(num)||num<0){
    console.log("Ingrese un valor valido")
}
else if(num<=3){
    console.log("El valor a pagar es de 200 pesos")
}
else{
    num1 = (num - 3);
    valor = (num1 * 100)+200
    console.log("El valor que debe pagar es de ", valor, "pesos")
}