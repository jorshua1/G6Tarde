/*
Una persona debe realizar un muestreo con 20 personas para determinar el promedio de
peso de los niños, jóvenes, adultos y viejos que existen en su zona habitacional. Se determinan las categorías con base en la sig., tabla:


CATEGORIA          EDAD
Niños             0 - 12
Jóvenes          13 - 29
Adultos          30 - 59
Viejos           60 - en adelante
*/
let numeroPersonas = 20;

let personaNiño=0;
let pesoNiño=0;
let promNiño=0;

let personaJovenes=0;
let pesoJovenes = 0;
let promJovenes = 0;

let personaAdultos=0;
let pesoAdultos = 0;
let promAdultos = 0;

let personaViejos=0;
let pesoViejos = 0;
let promViejos = 0;

for (i = 0; i < numeroPersonas; i++) {

    let edadPersona = 1;/*parseInt(prompt("Por favor ingrese edad de la persona."));*/
    let pesoPersona = 10;/*parseInt(prompt("Por favor ingrese el peso de la persona en kg."));*/

    if (edadPersona > 0 && edadPersona <= 12) {
        personaNiño++;
        pesoNiño=pesoNiño+pesoPersona;
    } else if (edadPersona >= 13 && edadPersona <= 29) {
        personaJovenes++;
    } else if (edadPersona >= 30 && edadPersona <= 59) {
        personaAdultos++;
    } else if (edadPersona >= 60 && edadPersona <=200) {
        pesoViejos++;
    } else {
        console.log("Por favor escriba una valor valido");
    }
}

promNiño=pesoNiño/personaNiño;
promJovenes=pesoJovenes/personaJovenes;
promAdultos=pesoAdultos/personaAdultos;
promViejos=pesoViejos/personaViejos;

/*alert*/console.log("El promedio de niños es " + promNiño + "% con una cantidad de " + personaNiño + " personas");
/*alert*/console.log("El promedio de jovenes es " + promJovenes + "% con una cantidad de " + personaJovenes + " personas");
/*alert*/console.log("El promedio de adultos es " + promAdultos + "% con una cantidad de " + personaAdultos + " personas");
/*alert*/console.log("El promedio de viejos es " + promViejos + "% con una cantidad de " + personaViejos + " personas");
