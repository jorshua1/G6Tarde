let genero = prompt("Ingrese su genero: 'F' -> para mujer, 'M' -> para hombre");
let estatura = Number(prompt("Ingrese su estatura"));
if (genero !== "F" && genero !== "M") {
    alert("ERROR. Ingrese un género válido")

} else if (isNaN(estatura)) {
    alert("Ingrese un dato válido");
} else if (genero === 'F' && estatura <= 1) {
    alert("Pertence a la categoria mujeres Junior");
} else if (genero === 'F' && estatura <= 1.6) {
    alert("Pertence a la categoria mujeres media");
} else if (genero === 'F' && estatura > 1.6) {
    alert("Pertenece a la categoria mujeres adultos");
} else if (genero === 'M' && estatura <= 1.2) {
    alert("Pertence a la categoria hombres Junior");
} else if (genero === 'M' && estatura <= 1.7) {
    alert("Pertence a la categoria hombres media");
} else {
    alert("Pertenece a la categoria hombres adultos");
}
