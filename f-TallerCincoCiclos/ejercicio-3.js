/*
Una persona debe realizar un muestreo con 20 personas para determinar el promedio de
peso de los niños, jóvenes, adultos y viejos que existen en su zona habitacional. Se determinan las categorías con base en la sig., tabla:


CATEGORIA          EDAD
Niños             0 - 12
Jóvenes          13 - 29
Adultos          30 - 59
Viejos           60 - en adelante
*/
let numeroPersonas = 2;
personaNiño = 0;
personaJovenes = 0;
personaAdultos = 0;
personaViejos = 0;

for (i = 0; i < numeroPersonas; i++) {
    let edadPersona = 15;/*parseInt(prompt("Por favor ingrese edad de la persona."));*/
    if (edadPersona >= 0 || edadPersona <= 12) {
        promNiño = personaNiño / numeroPersonas;
        personaNiño++;
    } else {
        if (edadPersona >= 13 || edadPersona <= 29) {
            promJovenes = personaJovenes / numeroPersonas;
            personaJovenes++;
        } else {

            if (edadPersona >= 30 || edadPersona <= 59) {
                promAdultos = personaAdultos / numeroPersonas;
                personaAdultos++;
            } else {
                if (edadPersona >= 60) {
                    promViejos = personaViejos / numeroPersonas;
                    personaViejos++;
                } else {
                }
            }
        }
    }
}
/*alert*/console.log("El promedio de niños es " + promNiño + " con una cantidad de " + personaNiño + " personas");
/*alert*/console.log("El promedio de jovenes es " + promJovenes + " con una cantidad de " + personaJovenes + " personas");
/*alert*/console.log("El promedio de adultos es " + promAdultos + " con una cantidad de " + personaAdultos + " personas");
/*alert*/console.log("El promedio de viejos es " + promViejos + " con una cantidad de " + personaViejos + " personas");
