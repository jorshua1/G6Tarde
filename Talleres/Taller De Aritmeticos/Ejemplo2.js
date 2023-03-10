    let distancia = parseInt(prompt("Ingrese la distancia entre los dos vehiculos en Km"))
    let vehiculo1 = parseInt(prompt("Ingrese la velocidad del primer vehiculo en K/h"));
    let vehiculo2 = parseInt(prompt("Ingrese la velocidad del segundo vehiculo en K/h"));

    let tiempo = distancia / (vehiculo1 - vehiculo2);
    
    let tiempo2 = tiempo * 60

    console.log ("el tiempo en minutos es", tiempo2)

