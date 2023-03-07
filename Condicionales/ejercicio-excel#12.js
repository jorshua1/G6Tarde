let peso = Number(prompt("Ingrese el peso del paquete en kg"));
let destino = 0;
let valorEntrega = 0;

if(isNaN(peso)|| peso<=0){
    alert("Ingresevalores validos para un correcto proceso");
}else if(peso>5){
    alert("Lo sentimos, no se pueden transportar paquetes de más de 5kg");
}else{
    alert("El peso del paquete que desea transportar es de: " + peso + "kg")
    destino = Number(prompt("Digite un numero según su solicitud: \n 1. América del Norte  \n 2. América Central  \n 3. America del Sur \n 4. Europa \n 5. Asia"))
    if(isNaN(destino) ||destino<=0 || destino>=6){
        alert("Por favor, ingrese una zona de destino válida (Un número del 1 al 5)");
    }else if(destino === 1){
        valorEntrega = peso*24
        alert("El costo de transporte del paquete a América del Norte es de " + valorEntrega + "$");
    }else if(destino === 2){
        valorEntrega = peso*20
        alert("El costo de transporte del paquete a América Central es de " + valorEntrega + "$");
    }else if(destino === 3){
        valorEntrega = peso*21
        alert("El costo de transporte del paquete a América del Sur es de " + valorEntrega + "$");
    }else if(destino === 4){
        valorEntrega = peso*10
        alert("El costo de transporte del paquete a Europa es de " + valorEntrega + "$");
    }else if(destino === 5){
        valorEntrega = peso*18
        alert("El costo de transporte del paquete a Asia es de " + valorEntrega + "$");
    }
}