/*
Realice un algoritmo que permita calcular el precio que tiene transportar un paquete de un lugar a otro,  
dependiendo de su peso y su lugar de destino, cumpliendo las siguientes condiciones:

1. La empresa no transporta paquetes con un peso superior a los 5kg. 
2. Los precios por kilogramo varía dependiendo del lugar al que se diriga el paquete, los precios son los siguientes:

América del Norte 24$ por cada 1kg -- 
América Central 20$ por cada 1kg --
América del Sur 21$ por cada 1kg -- 
Europa 10$ por cada 1kg
Asia 18$ por cada 1kg

El mensaje que debe recibir el usuario es el precio del transporte del paquete o dado el caso, 
que se ha rechazado por exceso de peso.
*/

console.log(`Por favor indique el destino segun la siguinete tabla:
1 (America Central 20$ por Kg)
2 (America del Norte 24$ por Kg)
3 (America del Sur 21$ pot Kg)
4 (Asia 18$ por Kg)
5 (Europa 10$ pot Kg)`);

let destinoPaquete = 1;
let pesoPaquete = 1;
let valorTransporte = 0;
let entregaPaquete;

if (isNaN(pesoPaquete) || pesoPaquete > 0 && pesoPaquete <= 5) {
    console.log("Peso paquete aceptado.");

    if (isNaN(destinoPaquete) || destinoPaquete > 0 && destinoPaquete <= 5) {
        console.log("Destino paquete aceptado.");

        if (destinoPaquete == 1) {
            valorTransporte = pesoPaquete * 20;
            entregaPaquete = "Su entrega será en America Central.";

        } else if (destinoPaquete == 2) {
            valorTransporte = pesoPaquete * 24;
            entregaPaquete = "Su entrega será en America del Norte.";

        } else if (destinoPaquete == 3) {
            valorTransporte = pesoPaquete * 21;
            entregaPaquete = "Su entrega será en America del Sur.";
            console.log(`${valorTransporte} ${entregaPaquete}`);

        } else if (destinoPaquete == 4) {
            valorTransporte = pesoPaquete * 18;
            entregaPaquete = "Su entrega será en Asia.";
            console.log(`${valorTransporte} ${entregaPaquete}`);

        } else if (destinoPaquete == 5) {
            valorTransporte = pesoPaquete * 10;
            entregaPaquete = "Su entrega será en Europa.";
            console.log(`${valorTransporte} ${entregaPaquete}`);

        } else {
            console.log("Rechazado por destino no valido.");
        }

    } else {
        console.log("Rechazado por destino no valido.");
    }

} else {
    console.log("Rechazado por exceso de peso");
}
console.log(`
El precio del transporte es por ${valorTransporte} dolares
${entregaPaquete}`)