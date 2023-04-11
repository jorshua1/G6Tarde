/* Hacer el calculo promedio de 5 notas en un algoritmo y definir si saca excelente, sobresaliente, aceptable y deficiente para pasar el año con una sola variable tipo vector o array
vPromedio.toFixed(2) */

let vNotas = [];
for (let vI = 0; vI < 5; vI++) {
    let vNota = parseFloat(prompt("Ingrese la nota " + (vI+1) + ":"));
    vNotas.push(vNota);
}
let vPromedio = vNotas.reduce((a, b) => a + b, 0) / vNotas.length;
console.log("Promedio: " + vPromedio);

if (vPromedio >= 5.0) {
    console.log("Excelente");
} else if (vPromedio >= 4.0) {
    console.log("Sobresaliente");
} else if (vPromedio >= 3.0) {
    console.log("Aceptable");
} else {
    console.log("Deficiente");
}
