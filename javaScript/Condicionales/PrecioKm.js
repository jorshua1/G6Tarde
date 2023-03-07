/*Realizar un ejercicio en el cual se definan las siguientes variables 
“precio_kilometro”, “vehiculo”, “kms_recorridos”, “litros_consumidos”. 
A continuación, defina y realice los cálculos para obtener el total a 
pagar, teniendo en cuenta las siguientes consideraciones.
Si el vehículo es “coche”, el precio kilometro ha de ser 0.10, si es 
“moto” ha de ser 0.20 y si es “autobús” 0.5. si los litros consumidos 
están entre 0 y 100 se ha de añadir 1 al total, si es mayor la cantidad 
de litros consumidos se ha de añadir 2 al total. */

let vehiculo = prompt("Ingrese el tipo de vehiculo: \n 1. coche \n 2. moto \n 3. autobus")
let kilometrosRecorridos = parseFloat(prompt("Ingrese la cantidad de km recorridos "))
let litrosConsumidos = parseFloat(prompt("Ingrese la cantidad de litros consumidos "))
let precioKilometro = 0;
let total = 0;

if (isNaN(litrosConsumidos) || litrosConsumidos <0){
    alert("Ingrese datos validos ")
}else if (litrosConsumidos >= 0 && litrosConsumidos <= 100){
    total = total + 1; 
}else if(litrosConsumidos >100 ){
    total = total + 2; 
}
 if (precioKilometro<0 || kilometrosRecorridos<0 ){
    alert("Ingrese datos validos ")
 }else if (vehiculo === "coche"){
    precioKilometro = kilometrosRecorridos * 0.10
    total = total + precioKilometro + kilometrosRecorridos
    alert("El precio de kilometro es de: " + total)
}else if (vehiculo === "moto"){
    precioKilometro = kilometrosRecorridos * 0.20
    total = total + precioKilometro + kilometrosRecorridos
    alert("El precio de kilometro es de: " + total)
}else if (vehiculo === "autobus"){
    precioKilometro = kilometrosRecorridos * 0.50
    total = total + precioKilometro + kilometrosRecorridos
    alert("El precio de kilometro es de: " + total)
}else {
    alert("Ingrese datos validos por favor")
}