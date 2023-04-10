/*
Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y 
a través de condicionales if realice las siguientes operaciones:  

Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. 
Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. 
Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
*/
let diametroRueda = 2;/*parseFloat(prompt("Ingrese su diametro."));*/

if (isNaN(diametroRueda) || diametroRueda > 1.4) {
    console.log("La rueda es para vehiculo grande.");

} else if (diametroRueda > 0.8 && diametroRueda <= 1.4) {
    console.log("Larueda es para vehiculo mediano.");
    
} else {
    console.log("La rueda es para vehiculo pequeño.");
}