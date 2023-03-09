let Previos1 = parseFloat(prompt("Digite la nota que saco en la primera previa "));
let Previos2 = parseFloat(prompt("Digite la nota que saco en la segunda previa "));
let Previos3 = parseFloat(prompt("Digite la nota que saco en la tercera previa "));
let Trabajo1 = parseFloat(prompt("Digite la nota que saco en el primer trabajo "));
let Trabajo2 = parseFloat(prompt("Digite la nota que saco en el segundo trabajo "));

if ((isNaN(Previos1) || isNaN(Previos2) || isNaN(Previos3)) || (Previos1 < 1 ) || (Previos1 > 5) || (Previos2 < 1) || (Previos2 > 5) || (Previos3 < 1) || (Previos3 > 5)) {
    alert("Ingrese datos validos \n Tenga en cuenta que la nota minima es 1.0 y la nota maxima 5.0");
} else if ((isNaN(Trabajo1) || isNaN(Trabajo2)) || ((Trabajo1 < 1) || (Trabajo1 > 5) || (Trabajo1 < 1) || (Trabajo1 > 5))) {
    alert("Ingrese datos validos \nTenga en cuenta que la nota minima es 1.0 y la nota maxima 5.0");
} else {
    let notaPrevios = ((Previos1 + Previos2 + Previos3) / 3) * 0.6;
    let notaTrabajos = ((Trabajo1 + Trabajo2) / 2) * 0.4;
    let notaFinal = notaPrevios + notaTrabajos;
        alert("La nota definitiva es: " + notaFinal)
}