/*"Realice un algoritmo que permita calcular el precio que tiene transportar un paquete de un lugar a otro,  
dependiendo de su peso y su lugar de destino, cumpliendo las siguientes condiciones: 
1. La empresa no transporta paquetes con un peso superior a los 5kg. 
2. Los precios por kilogramo varía dependiendo del lugar al que se diriga el paquete, 
los precios son los siguientes: 
América del Norte 24$ por cada 1kg -- 
América Central 20$ por cada 1kg --
América del Sur 21$ por cada 1kg -- 
Europa 10$ por cada 1kg
Asia 18$ por cada 1kg

El mensaje que debe recibir el usuario es el precio del transporte del paquete o dado el caso, 
que se ha rechazado por exceso de peso."*/

let lugar = (prompt("Ingrese el continente donde se enviará el pedido"));
let peso = Number(prompt("Ingrese el peso en kg"));
if(isNaN(peso)){
    console.log("¡ERROR!");
}else if(peso > 5){
    console.log("El peso excede las condiciones de la empresa");
}else if(lugar == "America del Norte"){
    let valor = peso*24
    console.log("Su valor a pagar es: "+valor);
}else if(lugar == "America del Central"){
    valor = peso*20
    console.log("Su valor a pagar es: "+valor);
}else if(lugar == "America del Sur"){
    valor = peso*21
    console.log("Su valor a pagar es: "+valor);
}else if(lugar == "Europa"){
    valor = peso*10
    console.log("Su valor a pagar es: "+valor);
}else if(lugar == "Asia"){
    valor = peso*18
    console.log("Su valor a pagar es: "+valor);
}
