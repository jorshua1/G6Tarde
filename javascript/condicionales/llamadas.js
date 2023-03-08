let tiempoLlamada = Number(prompt("¿Cuántos minutos duró la llamada?"));

let dia = 0;
let impuesto = 0;
let costo = 0;

if((isNaN(tiempoLlamada)) || (tiempoLlamada<=0)){
    alert("Por favor, ingrese un tiempo válido");
}else{
    dia = Number(prompt("¿Qué día realizó la llamada? \n 1 si es Domingo \n 2 si es cualquier otro día"));
    if(dia === 1){
        impuesto = 0.03;
    }else if(dia === 2){
        impuesto = 0.15;
    }else{
        alert("Por favor ingrese un valor válido")
    }
    if((tiempoLlamada<=5) && ((dia === 1) || (dia === 2))){
        costo = (impuesto*1)+1;
        alert("El costo de la llamada es de: " + costo + " euros");
    }else if((tiempoLlamada>=6) && (tiempoLlamada<=8) && ((dia === 1) || (dia === 2))){
        costo = (impuesto * 1.8)+1.8;
        alert("El costo de la llamada es de: " + costo + " euros");
    }else if((tiempoLlamada>=9) && (tiempoLlamada<=10) && ((dia === 1) || (dia === 2))){
        costo = (impuesto * 2.5)+2.5;
        alert("El costo de la llamada es de: " + costo + " euros");
    }else if((tiempoLlamada>10) && ((dia === 1) || (dia === 2))){
        costo = (impuesto * 3)+3;
        alert("El costo de la llamada es de: " + costo + " euros");
    }
}
