//Algoritmo para determinar el costo del transporte de un paquete dependiendo de su lugar de destino y su peso

let pesoPaquete = Number(prompt("¿Cuánto pesa en kg el paquete a transportar?"));
let zonaDestino = 0;
let cobroEntrega = 0;

if(isNaN(pesoPaquete)|| pesoPaquete<=0){
    alert("Por favor, ingrese un valor de peso válido");
}else if(pesoPaquete>5){
    alert("Lo sentimos, por medidas de seguridad, no podemos transportar paquetes de más de 5kg");
}else{
    alert("El peso del paquete a transportar es de: " + pesoPaquete + "kg")
    zonaDestino = Number(prompt("¿A qué zona es el envío? Seleccione el número de la opción: \n 1. América del Norte \n 2. América Central \n 3. America del Sur \n 4. Europa \n 5. Asia"))
    if(isNaN(zonaDestino) ||zonaDestino<=0 || zonaDestino>=6){
        alert("Por favor, ingrese una zona de destino válida (Un número del 1 al 5)");
    }else if(zonaDestino === 1){
        cobroEntrega = pesoPaquete*24
        alert("El costo del transporte del paquete a América del Norte es de " + cobroEntrega + "$");
    }else if(zonaDestino === 2){
        cobroEntrega = pesoPaquete*20
        alert("El costo del transporte del paquete a América Central es de " + cobroEntrega + "$");
    }else if(zonaDestino === 3){
        cobroEntrega = pesoPaquete*21
        alert("El costo del transporte del paquete a América del Sur es de " + cobroEntrega + "$");
    }else if(zonaDestino === 4){
        cobroEntrega = pesoPaquete*10
        alert("El costo del transporte del paquete a Europa es de " + cobroEntrega + "$");
    }else if(zonaDestino === 5){
        cobroEntrega = pesoPaquete*18
        alert("El costo del transporte del paquete a Asia es de " + cobroEntrega + "$");
    }
}