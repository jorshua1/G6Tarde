/*
Realizar un ejercicio en el cual se definan las siguientes variables “precio_kilometro”, “vehiculo”, 
“kms_recorridos”, “litros_consumidos”. 
A continuación, defina y realice los cálculos para obtener el total a pagar, 
teniendo en cuenta las siguientes consideraciones.

Si el vehículo es “coche”, el precio kilometro ha de ser 0.10.
si es “moto” ha de ser 0.20.
si es “autobús” 0.5.

si los litros consumidos están entre 0 y 100 se ha de añadir 1 al total
si es mayor la cantidad de litros consumidos se ha de añadir 2 al total.
*/
let vehiculo = "Autobus";
let litrosConsumidos = 110;
let precioKilometro = 0;
let kmsRecorridos = 100;


if (vehiculo === "Coche") {
    precioKilometro = 0.10 * kmsRecorridos;
    console.log(`El precio del Km es 0.10 ${precioKilometro}`);

} else if (vehiculo === "Moto") {
    precioKilometro = 0.20 * kmsRecorridos;
    console.log(`El precio del Km es 0.20 ${precioKilometro}`);

} else if (vehiculo === "Autobus") {
    precioKilometro = 0.50 * kmsRecorridos;
    console.log(`El precio del Km es 0.50 ${precioKilometro}`);

} else {
    console.log("No es un vehiculo");
}

if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
    precioKilometro = precioKilometro + 1;
    console.log(`se ha de añadir 1 litro ${precioKilometro}`);

} else if (litrosConsumidos > 100) {
    precioKilometro = precioKilometro + 2;
    console.log(`se ha de añadir 2 litro ${precioKilometro}`);

} else {
    console.log("Litros consumidos no validos")
}
