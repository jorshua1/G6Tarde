/*Diseñar el algoritmo correspondiente a un programa, que:

Crea una tabla bidimensional de longitud 5x5 y nombre ‘diagonal’.
Carga la tabla de forma que los componentes pertenecientes a la 
diagonal de la matriz tomen el valor 1 y el resto el valor 0.
Muestra el contenido de la tabla en pantalla. */

let diagonal = new Array();

for (var i = 0; i < 5; i++) {
  diagonal[i] = new Array();
  for (var j = 0; j < 5; j++) {
    diagonal[i][j] = 0;
    diagonal[i][i] = 1;
  }
}

console.log(diagonal)
