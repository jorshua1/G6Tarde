let blancos = Number(prompt("Cuantos conejos blancos se vendieron"));
let negros = Number(prompt("Cuantos conejos negros se vendieron"));
let precioBlanco = Number(prompt("Ingrese el precio de un conejo balnco"));
let precioNegro = Number(prompt("Ingrese el precio de un conejo negro"));
let conejosVendidos = blancos+negros;
let montoTotal = (negros*precioNegro) + (blancos*precioBlanco);


if (isNaN(blancos) || blancos === 0 || blancos < 0){
    console.log("ERROR");
}else if (isNaN(negros) || negros === 0 || negros < 0){
    console.log("ERROR");
}else if(isNaN(precioBlanco) || precioBlanco === 0 || precioBlancos < 0){
    console.log("ERROR");
}else if(isNaN(precioNegro) || precioNegro === 0 || precioNegro < 0){
    console.log("ERROR");
}else {
    console.log("Se vendieron: "+blancos+ " conejos blancos");
    console.log("Se vendieron: "+negros+ " conejos negros");
    console.log("Se vendieron un total de: "+conejosVendidos+ " conejos");
    console.log("El precio total de los conejos vendidos es de: "+montoTotal+ " pesos");
    if(blancos>negros){
        console.log("Se vendieron mas blancos");
    }else{
        console.log("Se vendieron mas negros");
    }
}



