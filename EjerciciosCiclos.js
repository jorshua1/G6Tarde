let adivinar = parseInt((Math.random()* 100)+1);
let numingresado = 0;
let intentos = 10;

do{
    numingresado = parseInt(prompt("Ingrese su numero del 1 al 100"));
    while((isNaN(numingresado)|| numingresado<=0)){
        numingresado = parseInt(prompt("ERROR, Ingrese su numero del 1 al 100"));
    }
    if(numingresado < adivinar && intentos>0){
        intentos --
        console.log("Su numero ingresado ", numingresado ,"es menor, y le quedan ", intentos , "intentos")
    }
    else if(numingresado > adivinar && intentos>0){
        intentos --
        console.log("Su numero ingresado ", numingresado ,"es mayor, y le quedan ", intentos , "intentos")
    }
    else{
        console.log("Has adivinado el numero")
    }
    }while(numingresado!=adivinar && intentos>0);
if(numingresado!==adivinar && intentos==0){
    console.log("Te has quedado sin intentos, el numero era ", adivinar)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////


let suma = 0;
let cuadrado;

    
for(i = 0; i<=100; i++){
cuadrado = i**2;
suma = suma + cuadrado;
}
console.log("La suma es ", suma)

///////////////////////////////////////////////////////////////////////////////////////////////////////////


/*Ingresar su edad y la forma en la que se desplaza, validar si se desplaza a pie o trasporte(moto, carro, pie,
bicicleta) y con la edad que sea mayor o igual a +16 años lo cual si cumple dar la información de su trasporte
(forma de desplazarse) y la edad, sino dar un aviso (“no tiene edad para conducir”, esto en caso de que maneja 
siendo menor, a la edad correspondiente). Añadido a ese, validar si tiene el carnet de conducción sino lo 
tiene dar  el mensaje, lo mismo ocurre si lo tiene renovado o vencido “Lo van a multar XD”.Recuerde que debe 
rectificar datos de error, en ese caso se debe dar un mensaje “PELIGRO DATOS INCORRECTOS, NO SABE LEER NI 
ESCRIBIR”, y se vuelve a ejecutar o colocar la información de manera correcta.*/

//cumple : imprimir edad y medio de transporte
//si es menor y conduce imprimir 
//validar si tiene carnet de conduccion, si no tiene o si no esta renovado o vencido imprimir multa  
//datos erroneos intentar de nuevo
// moto o carro o pie o bicicleta
// si es mayor de edad y tiene transporte cumple condicion

let edad = parseInt(prompt("Ingrese su edad"));
if(isNaN(edad)|| edad<0){
    console.log("Error, Ingrese un dato valido");
    }if(edad>=16){
    let transporte = prompt("Ingrese su medio de transporte (a pie, moto, carro, bicicleta)");
    while(transporte != "a pie" && transporte != "moto" && transporte != "carro" && transporte != "bicicleta"){
        transporte = prompt("¡¡ERROR!! /c Ingrese su medio de transporte (a pie, moto, carro, bicicleta)");
    }if(transporte == "moto" || transporte == "carro" || transporte == "bicicleta"){
        let validacion = prompt("¿Usted tiene carnet de conduccion? /c si /c no");
        while(validacion != "si" && validacion != "no"){
            validacion = prompt("¡¡ERROR!! /c ¿Usted tiene carnet de conduccion? /c si /c no");
        }if(validacion=="no"){
            console.log("Lo van a multar")
        }else if(validacion=="si"){
            var estadocarnet = prompt("¿Su carnet está renovado o vencido?");
            while(estadocarnet != "renovado" && estadocarnet != "vencido"){
                estadocarnet = prompt("¡¡ERROR!! /c ¿Su carnet está renovado o vencido?");
            }if(estadocarnet=="vencido"){
                console.log("Lo van a multar")
            }else if(estadocarnet=="renovado"){
                console.log("Esta al dia, TODO BIEN")
            }}}
        }else if(edad>=0 && edad<16){
                console.log("No puede conducir")
            }
        



