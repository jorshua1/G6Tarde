/** Conociendo que los días de la semana son 7; diseñe un algoritmo que a partir del número del día,
indique a cual día corresponde, 1 es lunes, 7 domingo; cualquier numero por fuera de este rango
es “error”.*/

let numero=Number(prompt("Ingrese un numero"));

if (isNaN(numero)|| numero>7){
    alert("Ingrese un número válido.")
}else if (numero ==1){
    alert ("Es lunes");
}else if (numero ==2){
    alert("Es martes");
}else if(numero==3){
    alert("Es miercoles");
}else if (numero==4){
    alert("Es jueves");
}else if (numero ==5){
    alert("Es viernes");
}else if (numero==6){
    alert("Es sabado");
}else{
    alert("Es domingo");
}