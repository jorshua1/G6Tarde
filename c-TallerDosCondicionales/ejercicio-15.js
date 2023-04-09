/*
Escribe un programa que responda a un usuario que quiere comprar un helado 
en una conocida marca de comida rápida cuanto le costará en función del helado que elija.

El helado sin topping cuesta 1.90$.
El topping de oreo cuesta 1$.
El topping de KitKat cuesta 1.50$.
El topping de brownie cuesta 0.75$.
El topping de lacasitos cuesta 0.95$.

En caso de no disponer del topping solicitado por el usuario el programa escribirá
por pantalla «no tenemos este topping, lo sentimos. » 
y a continuación informar del precio del helado sin ningún topping.
Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).
*/

let cantidadHelados = 0;
let saborAdicional = 2;
let adicionalHelado = 0;
let heladoFinal;

if (isNaN(cantidadHelados) || cantidadHelados > 0) {
    console.log(`
    Has comprado ${cantidadHelados} helado(s).
    
    Por favor selecciona el sabor adicional:
    1 (Sin topping cuesta 1.90$).
    2 (El topping de oreo cuesta 1$).
    3 (El topping de KitKat cuesta 1.50$).
    4 (El topping de brownie cuesta 0.75$).
    5 (El topping de lacasitos cuesta 0.95$).`);

    if (isNaN(saborAdicional) || saborAdicional >= 1 && saborAdicional <= 5) {

        if (saborAdicional == 1) {
            adicionalHelado = cantidadHelados * 1.90;
            heladoFinal = "Sin topping cuesta(n)"

        } else if (saborAdicional == 2) {
            adicionalHelado = cantidadHelados * (1.90 + 1);
            heladoFinal = "Con topping de oreo cuesta(n)"

        } else if (saborAdicional == 3) {
            adicionalHelado = cantidadHelados * (1.90 + 1.50);
            heladoFinal = "Con topping de KitKat cuesta(n)"

        } else if (saborAdicional == 4) {
            adicionalHelado = cantidadHelados * (1.90 + 0.75);
            heladoFinal = "Con topping de brownie cuesta(n)"

        } else if (saborAdicional == 5) {
            adicionalHelado = cantidadHelados * (1.90 + 95);
            heladoFinal = "Con topping de lacasitos cuesta(n)"

        }
    } else {
        console.log("No has comprado ningun helado.");
    }

} else {
    heladoFinal = 0;
    adicionalHelado = 0;
    console.log("No has comprado ningun helado.");
}
console.log(`
Has comprado ${cantidadHelados} Helado(s).
${heladoFinal} ${adicionalHelado}$`)