/*
Crear un algoritmo que compruebe la estación en la que se encuentra un mes, para saber si el mes esta en verano, otoño, primavera, invierno.
Primavera: Marzo, abril, mayo.
Verano: Junio, julio, agosto.
Otoño: septiembre, octubre, noviembre
Invierno: Diciembre, enero y febrero.
*/

let estacion = 12; /*parseInt(prompt("Por favor ingrese mes del año que desea consultar estacion teniendo en cuenta su orden en el calendario de  1 al 12: "))*/

if (estacion > 12) {
    console.log("ingrese numero de mes valido.");

} else if (estacion == 12 || estacion == 1 || estacion == 2) {
    console.log("El mes " + estacion + " esta en invierno.");

} else if (estacion == 3 || estacion == 4 || estacion == 5) {
    console.log("El mes " + estacion + " esta en primavera.");

} else if (estacion == 6 || estacion == 7 || estacion == 8) {
    console.log("El mes " + estacion + " esta en verano.");
    
} else if (estacion == 9 || estacion == 10 || estacion == 11) {
    console.log("El mes " + estacion + " esta en otoño.");
}
