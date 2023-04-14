/*
Elabore un programa que le diga si paso la materia, 
solicitando las notas que saco en las 3 evaluaciones 
y teniendo en cuenta que la primera y la segunda evaluacion valen el 30% y la tercera el 40%
*/
let evaluacionUno = 5;
let evaluacionDos = 5;
let evaluacionTres = 5;
let calculoMateria = 0;
let calificacion;

if (isNaN(evaluacionUno) || isNaN(evaluacionDos || isNaN(evaluacionTres))) {
    console.log("Por favor ingrese un valor correcto");

} else if (
    evaluacionUno < 0 ||
    evaluacionDos < 0 ||
    evaluacionTres < 0 ||
    evaluacionUno > 5 ||
    evaluacionDos > 5 ||
    evaluacionTres > 5) {
    console.log("Por favor ingrese un valor correcto.");

} else if (
    evaluacionUno >= 0 ||
    evaluacionDos >= 0 ||
    evaluacionTres >= 0 ||
    evaluacionUno <= 5 ||
    evaluacionDos <= 5 ||
    evaluacionTres <= 5) {
    calculoMateria = (((((evaluacionUno + evaluacionDos) / 2) / 100) * 30) + ((evaluacionTres / 100) * 40)) + 1.5;
    console.log(calculoMateria);

} else {
    console.log("Error")
}

if (calculoMateria >= 3 || calculoMateria <=5) {
    calificacion = "Aprobó"

} else {
    calificacion = "No Aprobó"
    
}
console.log(`
Su calificacion es de: ${calculoMateria}
Su estado es ${calificacion}`)
