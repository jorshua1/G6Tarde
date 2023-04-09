/*
realice un algoritmo con el que segun su edad y su indice de masa corporal 
indique si su peso es normal, tiene sobre peso, tiene obesidad  
*/

let edadPersona = 35;
let estaturaPersona = 1.71;
let masaPersona = 81;
let indiceMasaCorporal = 0;
let rango;
let imcEdad;

if (isNaN(edadPersona) || isNaN(estaturaPersona) || isNaN(masaPersona) || edadPersona > 0) {
    indiceMasaCorporal = (masaPersona / (estaturaPersona) ** 2);
    console.log(indiceMasaCorporal);

    if (indiceMasaCorporal < 18.5) {
        let rango = "Bajo Peso";

    } else if (indiceMasaCorporal >= 18.5 && indiceMasaCorporal < 24.9) {
        rango = "Normal"

    } else if (indiceMasaCorporal >= 24.9 && indiceMasaCorporal < 29.9) {
        rango = "Sobrepeso";

    } else if (indiceMasaCorporal >= 29.9) {
        rango = "Obesidad";

    } else {
        console.log("Error");
    }

    if (edadPersona >= 19 && edadPersona <= 24) {
        imcEdad = "Segun su edad, su gango de IMC debe estar entre 19-24";

    } else if (edadPersona >= 25 && edadPersona <= 34) {
        imcEdad = "Segun su edad, su rango de IMC debe estar entre 20-25";

    } else if (edadPersona >= 35 && edadPersona <= 44) {
        imcEdad = "Segun su edad, su rango de IMC debe estar entre 21-26";

    } else if (edadPersona >= 45 && edadPersona <= 54) {
        imcEdad = "Segun su edad, su rango de IMC debe estar entre 22-27";

    } else if (edadPersona >= 55 && edadPersona <= 64) {
        imcEdad = "Segun su edad, su rango de IMC debe estar entre 23-28";

    } else if (edadPersona >= 65) {
        imcEdad = "Segun su edad, su rango de IMC debe estar entre 24-29";

    } else {
        console.log("Error");
    }

} else {
    console.log("Error");
}
console.log(`
Su IMC es de ${indiceMasaCorporal}
Su rango de peso es ${rango}
${imcEdad}`)
