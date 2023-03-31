let num=Number(prompt("ingrese un valor"));
if(!BigInt(num || isNaN(num) || num<=0)){
    console.log("valor invalido")
}
else{
    switch(num){
        case 1:
            console.log("su numero es el uno")
            break;
        case 2:
            console.log("su numero es el dos")
            break;
        case 3:
            console.log("su numero es el tres")
            break;
        case 4:
            console.log("su numero es el cuatro")
            break;
        case 5:
            console.log("su numero es el cinco")
            break;
        case 6:
            console.log("su numero es el seis")
            break;
        case 7:
            console.log("su numero es el siete")
            break;
        case 8:
            console.log("su numero es el ocho")
            break;
        case 9:
            console.log("su numero es el nueve")
            break;
        case 10:
            console.log("su numero es el Diez")
            break;
        default:" su valor es invalido"
    }
}