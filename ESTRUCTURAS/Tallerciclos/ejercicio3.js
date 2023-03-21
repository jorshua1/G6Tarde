/*
Una persona debe realizar un muestreo con 20 personas para determinar el promedio de
peso de los niños, jóvenes, adultos y viejos que existen en su zona habitacional. Se determinan las categorías con base en la sig., tabla:
CATEGORIA          EDAD
Niños             0 - 12
Jóvenes          13 - 29
Adultos          30 - 59
Viejos           60 - en adelante
*/
var contadorniños = 0;
var contadorjovenes = 0;
var contadoradultos = 0;
var contadorviejos = 0;
var pesoniños = 0;
var pesojovenes = 0;
var pesoadultos = 0;
var pesoviejos = 0;

for(i = 1; i<=20 ; i++){
    let edad = parseInt(prompt("ingrese la edad de la persona"));
    while(isNaN(edad) || edad < 0){
        edad = parseInt(prompt("ingrese la edad de la persona"))
    }
}
if(edad >= 0 && edad <= 12){
    contadorniños+=1;
    let peso = parseInt(prompt("ingrese el peso del niño en kg"));
    while(isNaN(peso) || peso < 0){
        peso = parseInt(prompt("ingrese el peso del niño en kg"))
    }
}
