/* 
El ussuario ingresa un numero entero positivo y el programa muestra 
por pantalla todos los numeros impares desde 1 hasta ese numero  */
let numero =parseInt(prompt("Introduce un numero entero positivo. "))
let suma = 0;

while (isNaN(numero) || numero <0 ){
    numero =parseInt(prompt("ERROR. Introduce un numero entero positivo valido. "))
}

for(let i = 0; i <= numero; i ++){
    if(i%2 !=0){
        console.log(i)
    }
}
