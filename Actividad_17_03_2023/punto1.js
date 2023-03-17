/*Pedir un numero y que por medio de un algoritmo, me imprima los numeros impares hasta ese numero*/

let numero = parseInt(prompt("por favor ingresar un numero limite"));
if (numero%2){
for(let i = 1;i<=numero;i++){
    if(i%2 !=0){
        console.log(i);
    }
}
}else{
    console.log("lo siento, el numero ingresado no es positivo");
}
