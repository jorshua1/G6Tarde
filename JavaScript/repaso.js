/*2- DISEÑAR UN ALGORITMO QUE LEA POR TECLADO UN NÚMERO COMPRENDIDO ENTRE 1 Y 10. SE DESEA VISUALIZAR SI EL NÚMERO 
ES PAR O IMPAR. EN PRIMER LUGAR, SE DEBERÁ DETECTAR SI EL NÚMERO ESTA COMRENDIDO EN EL RANGO VALIDO (1 A 10) Y A 
CONTINUACIÓN SI EL NÚMERO ES 1, 3, 5, 7, 9, ESCRIBIR UN MENSAJE DE 2IMPAR"; SI ES 2, 4, 6, 8, 10, ESCRIBIR UN MENSAJE 
DE "PAR"*/

let numero = Number(prompt("ingresa un numero"));
switch (numero){
    case (1):
    case (3):
    case (5):
    case (7):
    case (9):
        console.log("es un número impar");
        break;
    case (2):
    case (4):
    case (6):
    case (8):
    case (10):
        console.log("es un número par");
        break;
}

/*3-DISEÑAR UN ALGORITMO QUE LEA UN NÚMERO ENTERO ENTRE 1 Y 10, Y NOS MUESTRE POR PANTALLA EL NÚMERO INGRESADO EN 
LETRA (1=UNO). SI EL NÚMERO LEÍDO NO ESTÁ COMPRENDIDO ENTRE 1 Y10 MOSTRAR UN MENSAJE DE ERROR.*/

let numero = Number(prompt("ingrese un numero"));
switch (numero){
    case (1):
        console.log("uno");
        break;
    case (2):
        console.log("dos");
        break;
    case (3):
        console.log("tres");
        break;
    case (4):
        console.log("cuatro");
        break;
    case (5):
        console.log("quinto");
        break;
    case (6):
        console.log("sexto");
        break;
    case (7):
        console.log("septimo");
        break;
    case (8):
        console.log("ocho");
        break;
    case (9):
        console.log("nueve");
        break;
    case (10):
        console.log("diez");
        break;
    default ("Error")
}

/*4 DETERMINAR LA CANTIDAD TOTL A PAGAR POR UNA LLAMADA TELEFONICA, TENIENDO EN CUENTA LO SIGUIENTE: 
TODA LLAMADA QUE DURE TRES MINUTOS O MENOS TIENE UN COSTO DE 200 PESOS.
CADA MINUTO ADICIONAL A PARTIR DE LOS TRES PRIMEROS ES UN PASO DE CONTADOR CUESTA 100 PESOS.*/

let minllamada = Number (prompt("ingrese tiempo  de llamada"));
if (isNaN(llamada)){
    console.log ("error")
}else if (minllamada <= 3,"miutos" ){
    console.log ("el precio de la llamada es", 200 "pesos");
}else if (minllamada >3){
    console.log ("el precio de la llamada es", 200 + 100*minllamada, "pesos");    
}

/*5- EN UNA GRANJA N CONEJOS, C1 BLANCOS Y C2 NEGROS SE VENDEN X CONEJOS NEGROS Y Y CONEJOS BLANCOS, 
HACER UN ALGORITMO QUE:
IMPRIMA LA CANTIDAD DE CONEJOS VENDIDA.
SI P1 ES EL PRECIO DE VENTA DE LOS CONEJOS BLANCOS Y P2 ES EL PRECIO DE VENTA DE LOS CONEJOS NEGROS, 
IMPRIMA EL MONTO TOTAL DE LA VENTA.
IMPRIMA EL COLOR DE LOS CONEJOS QUE SE VENDIERON MÁS.*/

let conejos = Number(prompt("ingrese la cantidad de conejos en la granja"));
let conejosblancos = Number(prompt("cantidad de conejos blancos"));
let conejosnegros = Number(prompt("cantidad de conejos negros")); 
let precioCblancos = Number(prompt("precio de cada conejo blanco"));
let precioCnegros = Number(prompt("precio de cada conejo negro"));
let ventatotal = ((conejosblancos*precioCblancos)+(conejosnegros*precioCnegros));
    console.log ("la venta total es", ventatotal);


