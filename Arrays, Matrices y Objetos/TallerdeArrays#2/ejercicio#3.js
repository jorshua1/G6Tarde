let nombre = prompt("Ingrese el Nombre del estudiante");
let notas = new Array(5);
let promedioNotas = 0;
let notaMax = 0;
let notaMin = 0;

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
notaMax = Math.max(...notas);
notaMin = Math.min(...notas);
alert(`El estudiante ${nombre} y su nota media es de: ${promedioNotas} y su nota Maxima es de: ${notaMax} y su nota Minima es de: ${notaMin}`);
