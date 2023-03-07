/*La política de cobro de una compañía telefónica es:
Cuando se realiza una llamada, el cobro es por el tiempo 
que esta dura, de tal forma que los primeros cinco minutos 
cuestan 1 euro, los siguientes tres, 80 céntimos, los siguientes 
dos minutos a 70 céntimos y a partir del décimo minuto, 50 céntimos.
Además, se carga un impuesto de 3% cuando es domingo, y si es otro 
día 15%.Realiza un algoritmo para determinar cuánto debe pagar por 
cada concepto una persona que realiza una llamada. */

let tiempoLlamada = parseFloat(prompt("¿cuantos minutos duro la llamada?"))
let cobro = 0;
let domingo = prompt("Realizo la llamada un domingo? (S) Si -- (N) No")
let impuesto = 0;

if (domingo === "s" || domingo ==="S"){
    impuesto = 0.03;
}else if (domingo === "N" || domingo === "n"){
    impuesto = 0.15;
}else{
    alert("Por favor ingrese datos validos")
}

if (isNaN(tiempoLlamada) || tiempoLlamada <= 0){
    alert("Por favor ingrese datos validos")
}else if(tiempoLlamada < 5){
    cobro = impuesto * 1 + 1;
    alert("el cobro de la llamada esta por " + cobro + " euro")
}else if(tiempoLlamada >= 5 && tiempoLlamada < 8){
    cobro = impuesto * 1.80 + 1.80;
    alert("el cobro de la llamada esta por " + cobro + " euros")
}else if(tiempoLlamada >= 8 && tiempoLlamada < 10){
    cobro = impuesto * 2.5 + 2.5;
    alert("el cobro de la llamada esta por " + cobro + " euros")
}else if(tiempoLlamada > 10){
    cobro = impuesto * 3 + 3;
    alert("el cobro de la llamada esta por " + cobro + " euros")
}
