/*En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script imprimirá
todos los números menores que al dividirlos por 3 den como resto 2.
Recuerda: un número es múltiplo de N cuando el dividirlo por N el resto es 0.*/

let numero = Number(prompt("INGRESE UN NUMERO"));
while (isNaN(numero) || numero < 0) {
numero = Number(prompt("INGRESE UN NUMERO"))
break;
}
for(let i=0; i<numero; i++){
    if(i % 3 == 2){
        console.log(i);
    }else{
        break;
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let numeroMaximo, control;

numeroMaximo = parseInt(prompt("Ingrese un número máximo "));

while(isNaN(numeroMaximo) || numeroMaximo <= 0){
    numeroMaximo = parseInt(prompt("Por favor ingrese datos validos  "));
}

for (control = 0; control < numeroMaximo; control++)
{
    if( control % 3 == 2){
        console.log(control);
    }
}
