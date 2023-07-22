let distancia = Number(prompt("cual es la distancia del viaje en KM?"));
let dias = Number(prompt("cual es la cantidad de dias del viaje?"));
let total = distancia * 2.5;
if (distancia>800 && dias>=7){
    total = total - (total * 0.3);
    alert ("el total a pagar es de: " + total);
} else {
    alert ("el total a pagar es de: " + total);
}