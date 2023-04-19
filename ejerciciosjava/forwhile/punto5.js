/*Crea una aplicación que permita adivinar un número. La aplicación genera un número aleatorio del 1 al 100. 
A continuación va pidiendo números y va respondiendo si el número a adivinar es mayor o menor que el introducido,
a demás de los intentos que te quedan (tienes 10 intentos para acertarlo). 
El programa termina cuando se acierta el número (además te dice en cuantos intentos lo has acertado), 
si se llega al limite de intentos te muestra el número que había generado.*/
aleatorio = Math.floor(Math.random()* 101);
console.log(aleatorio);
intentos = 1;

numero = Number(prompt("ADIVINE EL NUMERO"));
while (isNaN(numero) || numero < 0 || numero > 100) {
numero = Number(prompt("INGRESE UN NUMERO ENTRE 1 - 100"));
}



while (intentos < 10){

    if(aleatorio > numero){
        console.log("El numero que debe adivinar es mayor");
        numero = Number(prompt("ADIVINE EL NUMERO"));

        while((isNaN(numero) || numero < 0 || numero > 100)){
            numero = Number(prompt("DIGITE UN VALOR VALIDO"));
        }

    }else if(aleatorio < numero){
        console.log("El numero que debe adivinar es menor");
        numero = Number(prompt("ADIVINE EL NUMERO"));
        while((isNaN(numero) || numero < 0 || numero > 100)){
            numero = Number(prompt("DIGITE UN VALOR VALIDO"));
        }

    }else if(numero === aleatorio){
        console.log("Ha Ganado EM EL INTENTO: "+intentos);
        intentos = 10;
    }

    intentos++;
    
}

console.log("TERMINO");