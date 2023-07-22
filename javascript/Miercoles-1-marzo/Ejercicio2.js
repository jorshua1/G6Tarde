/*Escriba un algoritmo para ingresar la distancia entre 2 vehiculos (km) y sus respectivas velocidades (km/h).
con esto determinar y mostrar en que tiempo (minutos) alcanzara el vehiculo mas rápido al otro, teniendo en cuenta que
los 2 vehiculos viajan a diferentes velocidades  y estan distanciados por una distancia d. el que está detras viaja a una veloicidad mayor
Formula V= d/t   */  /*t=(d+d2)/v1   t=d2/v2
                         (d+d2)/v1=d2/V2      
                         d=((d2*v1)/v2)-d2
                         d= d2((v1/v2)-1)
                         d2= d/((v1/v2)-1)*/ 

let km
let km2
let v1
let v2
let t
km = parseInt(prompt("Ingrese la distancia entre 2 vehiculos (km)"))
v1 = parseInt(prompt("Ingrese la velocidad del vehiculo que viaja mas rapido(km/h)"))
v2 = parseInt(prompt("Ingrese la velocidad del vehiculo que viaja mas lento(km/h)"))
km2 = km/((v1/v2)-1)
t = ((km+km2)/v1)*(3600/1)
alert("el tiempo que se demora en alcanzar el vehiculo mas rápido al otro es de "+t+" minutos")


