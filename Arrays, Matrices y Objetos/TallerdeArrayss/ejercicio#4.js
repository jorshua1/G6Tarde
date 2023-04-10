let nombre = prompt("Ingrese el Nombre del estudiante");
let notas = new Array(5);
let promedioNotas = 0;

while (!isNaN(nombre) || (nombre === null) || (nombre === "")) {
    nombre = prompt("Ingrese un nombre de estudiante válido.");
}
for (let i = 0; i < notas.length; i++) {
    notas[i] = Number(prompt(`Ingrese la nota N°${(i + 1)}. \nNota mínima: 1.0.\n Nota máxima: 10.0`))
    while ((isNaN(notas[i])) || (notas[i] < 1) || (notas[i] > 10)) {
        alert("Por favor, ingrese una nota válida de acuerdo al límite.");
        notas[i] = Number(prompt(`Ingrese la nota N°${(i + 1)}. \nNota mínima: 1.0.\nNota máxima: 10.0`));
    }
    promedioNotas += notas[i];
}
promedioNotas /= notas.length;

if (promedioNotas >= 9) {
    alert(`El estudiante ${nombre} tiene un promedio Excelente. Ha sido promovido.\nPromedio: ${promedioNotas}`);
} else if ((promedioNotas < 9) && (promedioNotas >= 8)) {
    alert(`El estudiante ${nombre} tiene un promedio Sobresaliente. Ha sido promovido.\nPromedio: ${promedioNotas}`);
} else if ((promedioNotas < 8) && (promedioNotas >= 6.5)) {
    alert(`El estudiante ${nombre} tiene un promedio Aceptable. Ha sido promovido.\nPromedio: ${promedioNotas}`);
} else {
    alert(`El estudiante ${nombre} tiene un promedio Deficiente. No ha sido promovido.\nPromedio: ${promedioNotas}`);
}
