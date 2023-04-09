/*
Realice un programa que me indique en que estacion del año se encuentra, 
teniendo en cuenta el número del mes ingresado por consola
*/

let numeroMes = 1;

if (numeroMes == 12 || numeroMes == 1 || numeroMes == 2) {
    console.log("Es la estacion del mes " + numeroMes + ", es invierno.");

} else if (numeroMes == 3 || numeroMes == 4 || numeroMes == 5) {
    console.log("Es la estacion del mes " + numeroMes + ", es Primavera.");

} else if (numeroMes == 6 || numeroMes == 7 || numeroMes == 8) {
    console.log("Es la estacion del mes " + numeroMes + ", es Verano.");

} else if (numeroMes == 9 || numeroMes == 10 || numeroMes == 11) {
    console.log("Es la estacion del mes " + numeroMes + ", es Otoño.");

} else {
    console.log("El año solo tiene 12 meses")
}