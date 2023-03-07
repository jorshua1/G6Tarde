/*Realice un algoritmo que permita calcular el precio que tiene transportar un paquete de
un lugar a otro, dependiendo de su peso y su lugar de destino, cumpliendo las
siguientes condiciones:
1. La empresa no transporta paquetes con un peso superior a los 5kg.
2. Los precios por kilogramo varía dependiendo del lugar al que se diriga el paquete,
los precios son los siguientes:
América del Norte 24$ por cada Ikg
América Central 20$ por cada Ikg
América del Sur 21$ por cada Ikg --
Europa 10$ por cada Ikg
Asia 18$ por cada Ikg
EI mensaje que debe recibir el usuario es el precio del transporte del paquete o dado el
caso, que se ha rechazado por exceso de peso. */

let peso = Number(prompt("Ingrese el peso del paquete en kg"));
let destino = 0;
let valorEntrega = 0;

if(isNaN(peso)|| peso<=0){
    alert("Ingresevalores validos para un correcto proceso");
}else if(peso>5){
    alert("Lo sentimos, no se pueden transportar paquetes de más de 5kg");
}else{
    alert("El peso del paquete que desea transportar es de: " + peso + "kg")
    destino = Number(prompt("Digite un numero según su solicitud: 1. América del Norte 2. América Central 3. America del Sur 4. Europa 5. Asia"))
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