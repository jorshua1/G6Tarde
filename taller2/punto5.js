let conejosB = Number(prompt("¿Cuál es el número de conejos blancos?"));
let vendidosB = 0;
let precioB = 0;

let conejosN = Number(prompt("Cuál es el número de conejos negros?"));
let vendidosN = 0;
let precioN = 0;

let totalConejos = conejosB + conejosN;
let vendidosTotal = vendidosB + vendidosN;
let precioTotal = (vendidosB*precioB)+(vendidosN+precioN);

if((isNaN(conejosB)) || (isNaN(conejosN)) || (conejosB<=0) || (conejosN<=0)){
    alert("ERROR. Alguna de las dos cantidades de conejos es inválida.");
}else{
    vendidosB = Number(prompt("¿Cuál es el número total de conejos blancos vendidos?"));
    vendidosN = Number(prompt("¿Cuál es el número total de conejos negros vendidos?"));
    if((isNaN(vendidosB)) || (isNaN(vendidosN)) || (vendidosB<=0) || (vendidosN<=0)){
        alert("ERROR. Alguna de las dos cantidades vendidas de conejos es inválida.");
    }else{
        precioB = Number(prompt("¿Cuál es el precio por unidad de los conejos blancos?"));
        precioN = Number(prompt("¿Cuál es el precio por unidad de los conejos negros?"));
        if((isNaN(precioB)) || (isNaN(precioN)) || (precioB<=0) || (precioN<=0)){
        alert("ERROR. Alguno de los dos precios de conejos indicado es inválido.");
    }else{

    } 
}