/*Ejercicio 12
Diseñar el algoritmo correspondiente a un programa, que:

Crea una marco bidimensional de longitud 5x15 y nombre ‘marco’.
Carga la marco con dos únicos valores 0 y 1, donde el valor uno 
ocupará las posiciones o elementos que delimitan la marco, es decir, 
las más externas, mientras que el resto de los elementos contendrán el valor 0.

  111111111111111
  100000000000001
  100000000000001
  100000000000001
  111111111111111

Visualiza el contenido de la matriz en pantalla. */

let marco = new Array(5);

for (let i = 0; i < marco.length; i++) {
  marco[i] = new Array(15);
}

for (let i = 0; i < marco.length; i++) {
    
  for (let j = 0; j < marco[i].length; j++) {

    if (i === 0 || i === marco.length - 1 || j === 0 || j === marco[i].length - 1) {
      marco[i][j] = 1;
    } else {
      marco[i][j] = 0;
    }
  }
}
console.log(marco)
