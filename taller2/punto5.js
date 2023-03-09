let conejosB = Number(prompt("¿Cuál es el número de conejos blancos?"));
let vendidosB = 0;
let precioB = 0;

let conejosN = Number(prompt("Cuál es el número de conejos negros?"));
let vendidosN = 0;
let precioN = 0;

let totalConejos = 0;
let vendidosTotal = 0;
let precioTotal = 0;

if((isNaN(conejosB)) || (isNaN(conejosN)) || (conejosB<=0) || (conejosN<=0)){
    alert("ERROR. Alguna de las dos cantidades de conejos es inválida.");
}else{
    totalConejos = conejosB + conejosN;
    alert("Conejos blancos: " + conejosB + " \nConejos negros: " + conejosN + " \nEl total de conejos es de: " + totalConejos);
    vendidosB = Number(prompt("¿Cuál es el número total de conejos blancos vendidos?"));
    vendidosN = Number(prompt("¿Cuál es el número total de conejos negros vendidos?"));

    if((isNaN(vendidosB)) || (isNaN(vendidosN)) || (vendidosB<=0) || (vendidosN<=0)){
        alert("ERROR. Alguna de las dos cantidades vendidas de conejos es inválida.");
    }else if((vendidosB>conejosB) || (vendidosN>conejosN)){
        alert("ERROR. No se pueden vender más conejos de los que hay disponibles")
    }else{
        vendidosTotal = vendidosB + vendidosN;
        alert("Conejos blancos vendidos: " + vendidosB + " \nConejos negros vendidos: " + vendidosN + " \nEl total de conejos vendidos es de: " + vendidosTotal);
        precioB = Number(prompt("¿Cuál es el precio por unidad de los conejos blancos?"));
        precioN = Number(prompt("¿Cuál es el precio por unidad de los conejos negros?"));
        if((isNaN(precioB)) || (isNaN(precioN)) || (precioB<=0) || (precioN<=0)){
        alert("ERROR. Alguno de los dos precios de conejos indicados es inválido.");
    }else{
        precioTotal = (vendidosB*precioB)+(vendidosN*precioN);
        alert("Precio total conejos blancos : " + (precioB*vendidosB) + "\nPrecio total conejos negros: " + (precioN*vendidosN) + "\nEl precio total de todos los conejos es de: " + precioTotal);
        alert("La cantidad de conejos blancos no vendida es: " + (conejosB-vendidosB) + "\nLa cantidad de conejos negros no vendida es: " + (conejosN-vendidosN))
        if(vendidosB>vendidosN){
            alert("Se vendieron más conejos blancos (" + vendidosB + ")")
        }else if(vendidosN>vendidosB){
            alert("Se vendieron más conejos negros (" + vendidosN + ")")
        }else if(vendidosB===vendidosN){
            alert("Se vendieron la misma cantidad de conejos blancos como negros (" + vendidosB + ")")
        }
    } 
    }
}