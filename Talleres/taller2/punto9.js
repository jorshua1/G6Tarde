let distancia = Number(prompt("¿Cuántos km de distancia en TOTAL (de ida y vuelta) va a recorrer en avión?"));
let diasEstancia = 0;
let descuento = 0;
let precio = 0;

if((isNaN(distancia)) || (distancia<=0)){
    alert("Por favor, indique una distancia válida");
}else{
    diasEstancia = Number(prompt("¿Cuántos días va a estar en su lugar de destino?"));
    if((isNaN(diasEstancia)) || (diasEstancia<=0)){
        alert("Por favor, indique una cantidad de días válida");
    }else{
        if((distancia>800) && (diasEstancia>=7)){
            precio = distancia*2.5;
            descuento = precio*0.3;
            precio = precio-descuento;
            alert("El tiquete de ida y vuelta tiene un descuento de: " + descuento + "$ dólares. \nDe esta forma, el costo total es de " + precio + "$ dólares");
        }else{
            precio = distancia*2.5;
            alert("El tiquete de ida y vuelta no tiene descuento\nDe esta forma, el costo total es de " + precio + "$ dólares");
        }
    }
}