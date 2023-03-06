/*Para tributar un determinado impuesto se debe ser mayor de 16 edads y tener unos ingresos iguales o superiores a 1000 € mensuales. 
Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no.*/

edad = prompt("¿Cuál es tu edad? ");
ingresos = prompt("¿Cuales son tus ingresos mensuales?");

if (edad > 16 && ingresos >= 1000){
    alert("Tienes que cotizar");
}else{
    alert("No tienes que cotizar");
}

