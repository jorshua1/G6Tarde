// programa de juegos

let edad = Number(prompt("ingrese la edad del cliente"));
if (isNaN(edad)){
    console.log("error, ingrese un numero")
}
else if(edad <= 4){
    console.log("el cliente puede entrar gratis")
} else if( edad > 4 && edad < 18){
    console.log("el cliente debe pagar 5€")
} else if(edad > 18){
    console.log("el cliente debe pagar 10€")
}
