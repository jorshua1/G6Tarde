/*
Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre.
El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N y el grupo B por el resto. 
Escribir un programa que pregunte al usuario su nombre y sexo, y muestre por pantalla el grupo que le corresponde. 
*/

let nombrePersona = "Camila";/*prompt("Por favor ingrese nombre de la persona")*/
let sexoPersona = "M";/*prompt("Por favor ingrese sexo de la persona M Para mujer y H para hombre")*/
let grupo;

if (sexoPersona == 'M') {
    if (nombrePersona.toLowerCase() < 'm') {
        grupo = 'A';
        console.log("Grupo A");
    } else {
        grupo = 'B';
        console.log("Grupo B")
    }
} else {
    if (sexoPersona == 'H') {
        if (nombrePersona.toLowerCase() > 'n') {
            grupo = 'A';
            console.log("Grupo A");
        } else {
            grupo = 'B';
            console.log("Grupo B");
        }
    }
}
console.log(`Tu grupo es el ${grupo}`);


if (sexoPersona == 'M' && nombrePersona.toLowerCase() < 'm') {
    grupo = 'A';
    console.log("Grupo A");
} else {
    if (sexoPersona == 'H' && nombrePersona.toLowerCase() > 'n') {
        grupo = 'A';
        console.log("Grupo A");
    } else {
        grupo = 'B';
        console.log("Grupo B");
    }
}
console.log(`Tu grupo es el ${grupo}`);