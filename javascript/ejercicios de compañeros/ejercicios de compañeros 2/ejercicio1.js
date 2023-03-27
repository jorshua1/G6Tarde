/* crea una aplicaion que permita adivinar un numero. La aplicaion genera un 
numero random del 1 al 100. a continuacion va pidiendo numeros y va respondiendo si el numero 
a adivinar es mayor o menor que el introducido, ademas de mostrar los intentos que quedan 
(tienes 10 intentos para acertarlo) si se llega al limite de intentos se muestra el 
numero que habia generado*/


let numero=Math.floor(Math.random()*100);
let contador=0;

do {
    let hola=parseInt(prompt("Adivine un numero del 1 al 100"))
    contador ++;
    if(numero===hola){
        console.log("felicidades el numero si es "+numero)
        break;
    }
    else if(hola!==numero){
        if(hola<numero){
            console.log("intente de nuevo le quedan "+(10-contador)+" intentos, el numero es mayor");
        }
        else if(hola>numero){
            console.log("intente de nuevo le quedan "+(10-contador)+" intentos, el numero es menor");
        }
    }
    }
while(contador<10){
if (contador===10){
        console.log("supero el numero maximo de intentos el numero era "+numero);
}else{
    console.log("Se terminó el juego");
}
}
