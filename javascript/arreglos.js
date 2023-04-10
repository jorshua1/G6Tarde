var num = [1, 2, 3, 4, 5];

var letra = ["jirafa", "perro", "sapo"];

console.log(letra[0]);

var mixto = ["perro", 56, "Jose"];

/////////////////////////////////////////////////////////////////////////////

var perro = { raza: "doberman", color: "negro", edad: 5 };

console.log(perro.raza);

var anidado = { anidado1: { anidado2: { anidado3: "perro" } } };

console.log(anidado.anidado1.anidado2.anidado3);

var cubica = [];

for (let index = 0; index < num.length; index++) {
  cubica[index] = num[index] ** 3;

  console.log("El numero cubico de " + num[i] + " es " + cubico[i]);
}

console.log(cubica);

var sapo = [];

for (let index = 0; index < 10; index++) {
  sapo[index] = parseInt(prompt("Ingrese el numero " + (index + 1)));
}

console.log(sapo);

////////matrices//////////////////

var tabla = [];

for (let fila = 0; fila < 4; fila++) {
  console.log("Creando fila " + (fila + 1));
  tabla[fila] = [];
  for (let columna = 0; columna < 2; columna++) {
    console.log(
      "Esta insertando datos en la fila " +
        (fila + 1) +
        " y columna " +
        (columna + 1)
    );
    tabla[fila][columna] = prompt("Ingrese algo");
    console.log(
      "Se ingresaron los datos de la fila " +
        (fila + 1) +
        " y columna " +
        (columna + 1)
    );
  }
}
console.log(tabla);



///////////////////////////////taller///////////////////////////////////

var vector = [];
var sum = 0;

for (let index = 0; index < 10; index++) {
  vector[index] = parseInt(prompt("Ingrese el numero " + (index+1)));
  while (isNaN(vector[index])) {
    vector[index] = parseInt(prompt("Ingrese el numero " + (index+1)));
  }
  sum = vector[index] + sum;
}

console.log("La sumatoria de los 10 numeros es: " + sum);

///////////////////////////////////////////////////////

var numeros = [];
var contador = 0;

for (let index = 0; index < 10; index++) {
  numeros[index] = parseInt(prompt("Ingrese el numero " + (index+1)));
  while (isNaN(numeros[index])) {
    numeros[index] = parseInt(prompt("Ingrese el numero " + (index+1)));
  }
  
  if (numeros[index] > 0) {
    contador= contador+1;
  }
}

console.log("La cantidad de numeros positivos es: " +contador);

//////////////////////////////////////////////////////

var matrix = [];

for (let fila = 0; fila < 3; fila++) {
  matrix[fila]= [];
  for (let columna = 0; columna < 3; columna++) {
    
    matrix[fila][columna] = parseInt(prompt("Ingrese el numero para la posicion: " +(fila+1)+ "." +(columna+1)));
    
  }
  
}

console.log(matrix);

////////////////////////////////////////////////////////////////

var notas = [];
promedio = 0;

for (let index = 0; index < 5; index++) {
  notas[index] = parseFloat(prompt("Ingrese la nota " + (index+1)));
  while (isNaN(notas[index]) || notas[index] < 0 || notas[index] > 5) {
    notas[index] = parseFloat(prompt("Ingrese la nota " + (index+1)));
  }

  promedio=notas[index]+promedio;
}

promedio=promedio/5;

if (promedio >= 0 && promedio <=2.9) {
    console.log("Su nota es de: " +promedio);
    console.log("Su nota es Deficiente para pasar");
} else {
  if (promedio >= 3 && promedio <= 3.9) {
    console.log("Su nota es de: " +promedio);
    console.log("Su nota es Aceptable para pasar");
  } else {
    if (promedio >= 4 && promedio <= 4.5) {
      console.log("Su nota es de: " +promedio);
      console.log("Su nota es Sobresaliente para pasar");
    } else {
      console.log("Su nota es de: " +promedio);
      console.log("Su nota es Excelente para pasar");
    }
  }
}


/////////////////////////////////////////////////////////////

var matriz = [];

for (let index = 0; index < 10; index++) {
  matriz[index] = parseInt(prompt("Ingrese el numero " +(index+1)));
  while (isNaN(matriz[index])) {
    matriz[index] = parseInt(prompt("Ingrese el numero " +(index+1)));
  }
  
}

console.log(matriz);

var adivineishon = parseInt(prompt("Ingrese el numero que desea buscar en el array"))

for (let index = 0; index < 10; index++) {
  
  if (adivineishon === matriz[index]) {
    console.log("El numero : " +adivineishon+ " Se encuenta en la posicion: " +index);
  } else {
    console.log("El numero digitado no se encuentra en la matriz");
  }
  
}