//Ejercicio 2

let distancia = parseInt(prompt("Cuál es la distancia entre los vehículos"))

let vehículo1 = parseInt(prompt("Indique la velocidad (en km/h) del vehículo que va adelante"))

let vehículo2 = parseInt(prompt("Indique la velocidad (en km/h) del vehículo que va atrás (Debe ser superior a la del vehículo1)"))

let tiempo = distancia/(vehículo2 - vehículo1)

tiempo = tiempo*60

if (vehículo1>=vehículo2){
    alert("El vehículo2 nunca alcanzará al vehículo1")
} else {
    alert("Los vehículos se encuentran en: " + tiempo + " minutos") 
}
