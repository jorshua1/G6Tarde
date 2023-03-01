//primer ejercicio
let num1= parseInt(prompt("numero 1"))
let num2= parseInt(prompt("numero 2"))
suma=num1+num2
console.log(suma);

//segundo ejercicio
let distancia=parseFloat(prompt("ingrese la distancia entre los vehiculos en Km"))
let velocidadCarro1= parseFloat(prompt("ingrese la velocidad del primer carro en Km/h"))
let velocidadCarro2= parseFloat(prompt("ingrese la velocidad del segundo carro en Km/h"))
tiempo=((distancia/(velocidadCarro2-velocidadCarro1))*60)
console.log("El tiempo que se demora el segundo carro en alcanzar al primero es ",tiempo," s");

