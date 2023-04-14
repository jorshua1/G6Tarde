/*
Crear un programa que me identifique a cual categoría de natación pertenece una persona según su estatura, 
teniendo en cuenta que:

para las mujeres estaría representado de la siguiente manera: 
Hasta 1m de altura pertenece a la categoría Junior.
Hasta 1,60m su categoría es Media.
Mas de 1.60 pertenece a Adultos.

Para los hombres esta representada de la siguiente manera: 
Hasta 1,2m de altura pertenece a la categoría Junior.
Hasta 1,70m su categoría es Media.
Mas de 1.70m pertenece a Adultos. 
*/

let estaturaPersona = 1.6;
let sexoPersona = "F"
let categoriaNatacion;

if (sexoPersona == "F") {

    if (estaturaPersona <= 1) {
        categoriaNatacion = "Junior";
        console.log(categoriaNatacion);

    } else if (estaturaPersona > 1 && estaturaPersona < 1.60) {
        categoriaNatacion = "Media";
        console.log(categoriaNatacion);

    } else {
        categoriaNatacion = "Adultos";
        console.log(categoriaNatacion);
    }
} else {

    if (sexoPersona == "M") {

        if (estaturaPersona < 1.2) {
            categoriaNatacion = "Junior";
            console.log(categoriaNatacion);

        } else if (estaturaPersona >= 1.2 && estaturaPersona < 1.70) {
            categoriaNatacion = "Media";
            console.log(categoriaNatacion);

        } else {
            categoriaNatacion = "Adultos";
            console.log(categoriaNatacion);
        }

    }
}
console.log(`Su categoria de natación es ${categoriaNatacion}`);