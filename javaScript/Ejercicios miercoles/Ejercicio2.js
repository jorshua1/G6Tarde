/*Ejercicio que pida la distancias de dos vehiculos y su valocidad y calcular 
en que tiempo alcanzara el otro vehiculo en minutos */

var d = parseInt(prompt("Ingrese la distancia (Km)entre los dos vehiculos "));
var v1 =  parseInt(prompt("Ingrese la velocidad (Km)del primer vehiculo"));
var v2 =  parseInt(prompt("Ingrese la velocidad (Km)del segundo vehiculo (la velocidad debe ser mayor al vehiculo 1)"));

var T = (d/(v2-v1))*60;
alert("El tiempo que demora el vehiculo 2 en alcanzar al vehiculo 1 es: "+ T + "m")
