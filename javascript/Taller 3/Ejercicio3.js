let niños = 0;
let jovenes = 0;
let adultos = 0;
let viejos = 0;
let pesoniños = 0;
let pesojovenes = 0;
let pesoadultos = 0;
let pesoviejos = 0;

for (let i = 1; i <= 2; i++) {
    let edad = parseFloat(prompt("Ingrese la edad del sujeto " + i));
    while (isNaN(edad) || edad === "" || edad === null || edad <= 0) {
        edad = parseInt(prompt("ingrese algo valido pirobo"));
    }
    let peso = parseFloat(prompt("Ingrese el peso del sujeto " + i));
    if (edad > 0 && edad <= 12) {
        niños++;
        pesoniños += peso;
    } else if (edad > 12 && edad <= 29) {
        jovenes++;
        pesojovenes += peso;
    } else if (edad > 29 && edad <= 59) {
        adultos++;
        pesoadultos += peso;
    } else if (edad > 59) {
        viejos++;
        pesoviejos += peso;
    }
}
alert("el promedio de peso de niños es: " + (pesoniños / niños));
alert("el promedio de peso de jovenes es: " + (pesojovenes / jovenes));
alert("el promedio de peso de adultos es: " + (pesoadultos / adultos));
alert("el promedio de peso de viejos es: " + (pesoviejos / viejos));