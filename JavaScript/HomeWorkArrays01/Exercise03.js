/* Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno (comprendidas entre 0 y 10). A continuación debe mostrar todas las notas, la nota media, la nota más alta que ha sacado y la menor. */

let vNotas = [];

for (let vi = 0; vi <= 4; vi++) {
    let vNota = parseInt(prompt(`Ingrese la nota ${vi+1} de 1 a 10`));
    while (isNaN(vNota) || vNota < 0 || vNota > 10) {
        vNota = parseInt(prompt("ERROR \n" `Ingrese la nota ${vi+1} de 1 a 10`));
    }
    vNotas.push(vNota);
}console.log("Total de notas: " + vNotas);

let vSuma = 0;
for (let vi = 0; vi < vNotas.length; vi++) {
        vSuma += vNotas[vi];

}   let vNotaMedia = vSuma / vNotas.length;
    console.log("Nota media: " + vNotaMedia);

let vNotaMaxima = Math.max(...vNotas);
let vNotaMinima = Math.min(...vNotas);
console.log("Nota más alta: " + vNotaMaxima);
console.log("Nota más baja: " + vNotaMinima);

//============================================================================================================
let notas = [];

for (let i = 1; i <= 5; i++) {
  let nota = parseFloat(prompt(`Introduce la nota ${i} (entre 0 y 10):`));
  while (isNaN(nota) || nota < 0 || nota > 10) {
    nota = parseFloat(prompt(`Valor incorrecto. Introduce la nota ${i} (entre 0 y 10):`));
  }
  notas.push(nota);
}
console.log("Notas del alumno: " + notas);

let suma = 0;
for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}
let media = suma / notas.length;
console.log("Nota media: " + media);

let notaMaxima = Math.max(...notas);
let notaMinima = Math.min(...notas);
console.log("Nota más alta: " + notaMaxima);
console.log("Nota más baja: " + notaMinima);
