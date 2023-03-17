/*Mostrar en pantalla los N primero número primos. 
Se pide por teclado la cantidad de números primos que queremos mostrar.*/

numero = Number(prompt("INGRESE EL NUMERO"));
while (isNaN(numero) || numero < 0) {
    numero = Number(prompt("INGRESE EL NUMERO"));
}
for (i = 1; i <= numero; i++){
    if (numero % 2 == 0) {
        console.log(" NO es primo");
    }else if(numero % 3 == 0){
        console.log(" NO es primo");

    }else if(numero % 5 == 0){
        console.log(" NO es primo");

    }else if(numero % 7 == 0){
        console.log(" NO es primo");

    }else if(numero % 11 == 0){
        console.log("NO es primo");

    }else{
        console.log("ES PRIMO" + i);
        
    }
}
//////////////////////////////////////////////////////////////////////////////////
numero = parseInt(prompt("INGRESE EL RANGO"));

while (isNaN(numero) || numero <= 0) {
numero = parseInt(prompt("INGRESE UN RANGO CORRECTO"));}

for (let conta = 1; conta <= numero; conta++) {
if (conta % 2 == 0 || conta % 3 == 0 || conta % 5 == 0 || conta % 7 == 0 || conta % 11 == 0) {
    if(conta === 2 || conta === 3 || conta === 5 || conta === 7 || conta === 11){
    console.log("Estos son primos: " + conta);
    }
} else {
    console.log("Estos son primos: " + conta);
}
}