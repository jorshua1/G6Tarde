var velocidad1=parseInt(prompt("ingrese la velocidad del vehículo mas rápido en km/h"));
var velocidad2=parseInt(prompt("ingrese la velocidad del vehículo que va adelante(es más lento) en km/h"));
var distancia1=parseInt(prompt("ingrese la distancia entre los dos vehículos en km "));

var tiempo= (distancia1/ (velocidad1-velocidad2));
tiempo = tiempo*60;

console.log("El carro que va atrás alcanzará al carro de adelante en "+tiempo+" minutos");