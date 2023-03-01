let distancia = parseInt(prompt("ingrese la distancia entre los vehiculos en Kilometros"));
let vehiculo1 = parseInt(prompt("ingrese la velocidad del primer vehiculo en K/H"));
let vehiculo2 = parseInt(prompt("ingrese la velocidad del segundo vehiculo en K/H"));
let tiempo

tiempo = distancia / (vehiculo1 - vehiculo2);
tiempo = tiempo * 60;

console.log("el auto alcanza al otro en "+tiempo+" minutos");

/*
if (tiempo > 60){

    tiempo = tiempo/60
    console.log("el auto alcanza al otro en "+tiempo+" horas");

}else if (tiempo < 60){

    console.log("el auto alcanza al otro en "+tiempo+" minutos");

}*/