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
  vector[index] = parseInt(prompt("Ingrese el numero " + (index + 1)));
  while (isNaN(vector[index])) {
    vector[index] = parseInt(prompt("Ingrese el numero " + (index + 1)));
  }
  sum = vector[index] + sum;
}

console.log("La sumatoria de los 10 numeros es: " + sum);

///////////////////////////////////////////////////////

var numeros = [];
var contador = 0;

for (let index = 0; index < 10; index++) {
  numeros[index] = parseInt(prompt("Ingrese el numero " + (index + 1)));
  while (isNaN(numeros[index])) {
    numeros[index] = parseInt(prompt("Ingrese el numero " + (index + 1)));
  }

  if (numeros[index] > 0) {
    contador = contador + 1;
  }
}

console.log("La cantidad de numeros positivos es: " + contador);

//////////////////////////////////////////////////////

var matrix = [];

for (let fila = 0; fila < 3; fila++) {
  matrix[fila] = [];
  for (let columna = 0; columna < 3; columna++) {
    matrix[fila][columna] = parseInt(
      prompt(
        "Ingrese el numero para la posicion: " +
          (fila + 1) +
          "." +
          (columna + 1)
      )
    );
  }
}

console.log(matrix);

////////////////////////////////////////////////////////////////

var notas = [];
promedio = 0;

for (let index = 0; index < 5; index++) {
  notas[index] = parseFloat(prompt("Ingrese la nota " + (index + 1)));
  while (isNaN(notas[index]) || notas[index] < 0 || notas[index] > 5) {
    notas[index] = parseFloat(prompt("Ingrese la nota " + (index + 1)));
  }

  promedio = notas[index] + promedio;
}

promedio = promedio / 5;

if (promedio >= 0 && promedio <= 2.9) {
  console.log("Su nota es de: " + promedio);
  console.log("Su nota es Deficiente para pasar");
} else {
  if (promedio >= 3 && promedio <= 3.9) {
    console.log("Su nota es de: " + promedio);
    console.log("Su nota es Aceptable para pasar");
  } else {
    if (promedio >= 4 && promedio <= 4.5) {
      console.log("Su nota es de: " + promedio);
      console.log("Su nota es Sobresaliente para pasar");
    } else {
      console.log("Su nota es de: " + promedio);
      console.log("Su nota es Excelente para pasar");
    }
  }
}

/////////////////////////////////////////////////////////////

var matriz = [];

for (let index = 0; index < 10; index++) {
  matriz[index] = parseInt(prompt("Ingrese el numero " + (index + 1)));
  while (isNaN(matriz[index])) {
    matriz[index] = parseInt(prompt("Ingrese el numero " + (index + 1)));
  }
}

console.log(matriz);

var adivineishon = parseInt(
  prompt("Ingrese el numero que desea buscar en el array")
);

for (let index = 0; index < 10; index++) {
  if (adivineishon === matriz[index]) {
    console.log(
      "El numero : " + adivineishon + " Se encuenta en la posicion: " + index
    );
  } else {
    console.log("El numero digitado no se encuentra en la matriz");
  }
}

/////////////////////////////////////////////

var aleatorios = [];
var numerito = 0;

d = parseInt(prompt("Digite la cantidad de numeros que quiere generar"));
while (isNaN(d)) {
  d = parseInt(prompt("Digite la cantidad de numeros que quiere generar"));
}

for (let i = 0; i < d; i++) {
  aleatorios[i] = Math.floor(Math.random() * 100 - 0);
}

console.log(aleatorios);

for (let j = 0; j < d; j++) {
  for (let i = 0; i < d; i++) {
    if (aleatorios[i] > aleatorios[i + 1]) {
      numerito = aleatorios[i];
      aleatorios[i] = aleatorios[i + 1];
      aleatorios[i + 1] = numerito;
    }
  }
}

console.log(aleatorios);

///////////////////////////////////////////////////////////

var vector_numeros = [];
var cuadrado = [];
var cubo = [];

for (let i = 0; i < 10; i++) {
  vector_numeros[i] = Math.floor(Math.random() * 10 - 1);

  cuadrado[i] = vector_numeros[i] * vector_numeros[i];

  cubo[i] = vector_numeros[i] ^ 3;
}
console.log("Array generado: " + vector_numeros);
console.log("Array con los cuadrados: " + cuadrado);
console.log("Array con los cubos: " + cubo);

////////////////////////////////////////////////////////77

var palabras = [];
var otrovector = [];
c = 0;

for (let i = 0; i < 5; i++) {
  palabras[i] = prompt("Ingrese la palabra o el caracter " + (i + 1));
  while (!isNaN(palabras[i])) {
    palabras[i] = prompt("Ingrese la palabra o el caracter " + (i + 1));
  }
}
console.log(palabras);

for (let i = 4; i >= 0; i--) {
  otrovector[c] = palabras[i];
  c = c + 1;
}

console.log(otrovector);

/////////////////////////////////////////////////////////

var notas = [];
var alta = 0;
var baja = 11;
var media = 0;

for (let i = 0; i < 5; i++) {
  notas[i] = parseFloat(prompt("Ingrese la nota " + (i + 1)));
  while (isNaN(notas[i]) || notas[i] < 0 || notas[i] > 10) {
    notas[i] = parseFloat(prompt("Ingrese la nota " + (i + 1)));
  }

  if (notas[i] > alta) {
    alta = notas[i];
  }

  if (notas[i] < baja) {
    baja = notas[i];
  }

  media = notas[i] + media;
}

media = media / 5;

alert("La nota mas alta es: " + alta);
alert("La nota mas baja es: " + baja);
alert("La nota media es: " + media);

////////////////////////////////////////////////////////////////////////

var bector = [];

contador = 0;

do {
  bector[contador] = parseInt(prompt("Ingrese el numero " + (contador + 1)));
  while (isNaN(bector[contador])) {
    bector[contador] = parseInt(prompt("Ingrese el numero " + (contador + 1)));
  }

  if (bector[contador] < 0) {
    contador = 10;
  }
  contador = contador + 1;
} while (contador < 10);

console.log(bector);

/////////////////////////////////////////////////////////////////////

var mes = [
  "ola",
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
var dur = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var numes = parseInt(prompt("Ingrese un numero del 1 al 12 solamente"));
while (isNaN(numes) || numes > 12 || numes < 1) {
  var numes = parseInt(prompt("Ingrese un numero del 1 al 12 solamente"));
}

alert(
  "El numero que digito es del mes: " +
    mes[numes] +
    " y tiene una duracion de: " +
    dur[numes] +
    " dias"
);

/////////////////////////////////////////////////////////////777

vertor1 = [];
vertor2 = [];
vertor3 = [];

for (let i = 0; i < 5; i++) {
  vertor1[i] = parseInt(prompt("Ingrese el valor" + (i + 1) + " del vector 1"));
  while (isNaN(vertor1[i])) {
    vertor1[i] = parseInt(
      prompt("Ingrese el valor " + (i + 1) + " del vector 1")
    );
  }
}

for (let i = 0; i < 5; i++) {
  vertor2[i] = parseInt(
    prompt("Ingrese el valor " + (i + 1) + " del vector 2")
  );
  while (isNaN(vertor2[i])) {
    vertor2[i] = parseInt(
      prompt("Ingrese el valor " + (i + 1) + " del vector 2")
    );
  }
}

for (let i = 0; i < 5; i++) {
  vertor3[i] = vertor1[i] + vertor2[i];
}

console.log(vertor3);

////////////////////////////////////////////////////////////////

var nombres = [];
var edad = [];
var mayores = [];
contador = 0;

do {
  nombres[contador] = prompt("Digite el nombre del estudiante");
  while (!isNaN(nombres[contador])) {
    nombres[contador] = prompt("Digite el nombre valido del estudiante");
  }

  edad[contador] = parseInt(prompt("Digite la edad del estudiante"));
  while (isNaN(edad[contador] || edad <= 0)) {
    edad[contador] = parseInt(prompt("Digite la edad valida del estudiante"));
  }

  if (edad[contador] >= 18) {
    mayores[contador] = nombres[contador];

    if (mayores[contador] > mayores[contador + 1]) {
      mayor = mayores[contador];
    }
  }

  contador = contador + 1;
} while (nombres[contador - 1] != "*");

alert("Los mayores de edad son: " + mayores);
alert("El mayor del grupo es: " + mayor);

///////////////////////////////////////////////////////////////////////////mamatriz

var nombrecitos = [];
c = 0;
bandera = true;

while (bandera == true) {
  nombrecitos[c] = prompt("Digite el nombre del estudiante");
  while (!isNaN(nombrecitos[c])) {
    nombrecitos[c] = prompt("Digite el nombre valido del estudiante");
  }

  if (nombrecitos[c] === "*") {
    bandera = false;
  } else {
    nombrecitos[c] = [];

    for (let i = 0; i < 1; i++) {
      nombrecitos[c][i] = parseInt(prompt("Digite la edad del estudiante"));
      while (isNaN(nombrecitos[c][i]) || nombrecitos[c][i] <= 0) {
        nombrecitos[c][i] = parseInt(
          prompt("Digite la edad valida del estudiante")
        );
      }
    }
  }

  c = c + 1;
}
console.log(nombrecitos);
