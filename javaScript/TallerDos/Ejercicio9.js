let estancia = parseInt(prompt("Ingrese la cantidad de dias de estancia "));
let distancia = parseFloat(prompt("Por favor ingrese la distancias (en Km) del punto de partida al punto de destino"));
let tiquete = 0;
if (isNaN(distancia) || isNaN(estancia) || estancia <=0 || distancia <= 0){
    alert("Por favor resvise los datos e ingrese valores validos ")
}else if(estancia >= 7 && distancia > 400 ){
    tiquete = (distancia * 2.5) * 2;
    let descuento = tiquete - (tiquete*0.30);
    alert("El valor del tiquete con el descuento del 30% es de: " + descuento);
}else{
    tiquete = (distancia * 2) * 2.5;
    alert("El valor del tiquete es: " + tiquete);
}