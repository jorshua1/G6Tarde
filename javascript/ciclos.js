let sumador = 0;
for (let index = 1; index <= 10; index++) {
  sumador = sumador + index;
  console.log("La suma es: " + sumador);
}

//..........
let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let sumatoria = 0;

while (isNaN(num1) || num1 <= 0 || isNaN(num2) || num2 <= 0) {
  num1 = parseInt(prompt("Ingrese el primer numero"));
  num2 = parseInt(prompt("Ingrese el segundo numero"));
}

do {
  sumatoria = sumatoria + num1 + num2;
  var respuesta = prompt("Desea seguir sumando los numeros? Escriba Si o No");
  console.log("La sumatoria va: " + sumatoria);
} while (respuesta === "Si" || respuesta === "si" || respuesta === "SI");

console.log("La sumatoria total es: " + sumatoria);

//.........

sumatoria = 0;

for (let index = 0; index <= 100; index++) {
  sumatoria = index * index + sumador;
}

console.log("La suma de todos los numeros es: " + sumador);

//...............

let numeroMaximo, control;

numeroMaximo = parseInt(prompt("Ingrese un número máximo "));

while (isNaN(numeroMaximo) || numeroMaximo <= 0) {
  numeroMaximo = parseInt(prompt("Por favor ingrese datos validos  "));
}

for (control = 0; control < numeroMaximo; control++) {
  if (control % 3 == 2) {
    console.log(control);
  }
}

//......................

num = parseInt(prompt("Ingrese un numero para calcular el factorial"));

while (isNaN(num) || num <= 0) {
  num = parseInt(prompt("Ingrese un numero valido para calcular el factorial"));
}

for (let index = num; index > 0; index--) {
  console.log(index);
}

//................

var num = Math.floor(Math.random() * 100);
console.log(num);

var contador = 0;
var resta = 0;

do {
  numUsu = parseInt(prompt("Ingrese el numero que cree que es:"));
  while (isNaN(numUsu) || numUsu <= 0) {
    numUsu = parseInt(prompt("Ingrese el numero que cree que es:"));
  }
  contador = contador + 1;
  resta = 10 - contador;
  console.log("Le quedan " + resta + " Intentos");

  if (numUsu > num) {
    console.log("El numero que ingreso esta por encima del que debe adivinar");
  } else {
    if (numUsu < num) {
      console.log(
        "El numero que ingreso esta por debajo del que debe adivinar"
      );
    } else {
      console.log("El numero que ingreso es igual al que debia adivinar!!");
      contador = 10;
    }
  }
} while (contador < 10);

//.......................

num = parseInt(prompt("Ingrese hasta que rango quiere ver los numeros primos"));

while (isNaN(numUsu) || numUsu <= 0) {
  num = parseInt(
    prompt(
      "Ingrese un numero valido hasta que rango quiere ver los numeros primos"
    )
  );
}

for (let index = 0; index < num; index++) {
  if (num % 2 == 0 || num % 3 == 0 || num % 7 == 0) {
  } else {
  }
}
