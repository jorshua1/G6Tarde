/*Hallar promedio de calificaciones, teniendo en cuenta que el estudiante tiene 4 notas decimales,
dos notas vales  40% y las otras dos vales 60%*/

let notaUno = 4.5; /*parseFloat(prompt("Por favor ingrese nota uno dontro del  40% :"));*/
let notaDos = 4;/*parseFloat(prompt("Por favor ingrese nota dos dentro del 40% :"));*/
let notaTres = 4.6;/*parseFloat(prompt("Por favor ingrese nota tres dentro del 60% :"));*/
let notaCuarto = 5;/*parseFloat(prompt("Por favor ingrese nota cuatro dentro del 60%:"));*/

notasCuarenta = ((notaUno + notaDos) / 100) * 40;
notasSesenta = ((notaTres + notaCuarto) / 100) * 60;

promedioCalificacion = (notasCuarenta + notasSesenta) / 2;

console.log("El promedio de calificacion del estudiante es de : " + promedioCalificacion);