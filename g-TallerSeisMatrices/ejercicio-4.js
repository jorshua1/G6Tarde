/*
Hacer el cálculo promedio de 5 notas en un algoritmo y definir si saca Excelente, 
sobresaliente, aceptable y deficiente para pasar el año con una sola variable tipo vector o array.
*/

let notasEstudiante = [];  // se define un array vacío
let rangoEstudiante = "";
let calificacionEstudiante = 0;
let promedioEstudiante = 0;

for (let i = 0; i < 5; i++) {
    calificacionEstudiante = 5; /*parseFloat(prompt(`Ingrese la calificacionEstudiante ${i+1}:`));*/
    notasEstudiante.push(calificacionEstudiante);
    promedioEstudiante += notasEstudiante[i];
}
/*promedioEstudiante = notasEstudiante.reduce((a, b) => a + b, 0) / notasEstudiante.length;*/
promedioEstudiante = promedioEstudiante / notasEstudiante.length;

if (promedioEstudiante >= 5) {
    rangoEstudiante = "Excelente";

} else if (promedioEstudiante >= 4) {
    rangoEstudiante = "Sobresaliente";

} else if (promedioEstudiante >= 3) {
    rangoEstudiante = "Aceptable";

} else {
    rangoEstudiante = "Deficiente";
}

console.log(`
El promedio de las notas es ${promedioEstudiante.toFixed(2)}
La categoría es ${rangoEstudiante}`);


let notasEstudianteDos = []; // Definir un array vacío
let rangoEstudianteDos = '';
let calificacionEstudianteDos = 0;
let promedioEstudianteDos = 0;

for (let i = 0; i < 5; i++) {
    calificacionEstudianteDos = 5; /*parseFloat(prompt(`Ingrese la calificacionEstudianteDos ${i + 1}:`));*/
    notasEstudianteDos.push(calificacionEstudianteDos); //Agregar calificacionEstudianteDos al array
    promedioEstudianteDos += notasEstudianteDos[i];

}
/*promedio = notasEstudianteDos.reduce((a, b) => a + b, 0) / notasEstudianteDos.length;*/
promedioEstudianteDos = promedioEstudianteDos / notasEstudianteDos.length;

if (promedioEstudianteDos >= 5) {
    rangoEstudianteDos = 'Excelente';

} else if (promedioEstudianteDos >= 4) {
    rangoEstudianteDos = 'Sobresaliente';

} else if (promedioEstudianteDos >= 3) {
    rangoEstudianteDos = 'Aceptable';

} else {
    rangoEstudianteDos = 'Deficiente';
}

console.log(`
El promedioEstudianteDos de las notas es ${promedioEstudianteDos.toFixed(2)}
La categoría es ${rangoEstudianteDos}.`);