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

//--------------------------------------------------------------------------------

num = parseInt(prompt("Ingrese hasta que rango quiere ver los numeros primos"));

while (isNaN(num) || num <= 0) {
  num = parseInt(
    prompt(
      "Ingrese un numero valido hasta que rango quiere ver los numeros primos"
    )
  );
}

for (let index = 1; index <= num; index++) {
  if (
    index % 2 == 0 ||
    index % 3 == 0 ||
    index % 5 == 0 ||
    index % 7 == 0 ||
    index % 11 == 0
  ) {
    if (
      index === 2 ||
      index === 3 ||
      index === 5 ||
      index === 7 ||
      index === 11
    ) {
      console.log("Estos son primos: " + index);
    }
  } else {
    console.log("Estos son primos: " + index);
  }
}

//--------------------------------------------------------------------------------

num = parseInt(prompt("Ingrese un numero"));
while (isNaN(num) || num < 0) {
  num = parseInt(prompt("Ingrese un numero valido"));
}

for (let index = 1; index <= num; index++) {
  if (index % 2 != 0) {
    console.log(index);
  }
}

//--------------------------------------------------------------------------------

articulo1 = prompt("Ingrese el primer articulo");
articulo2 = prompt("Ingrese el segundo articulo");
articulo3 = prompt("Ingrese el tercer articulo");
articulo4 = prompt("Ingrese el segundo articulo");

precioO1 = parseInt(prompt("Ingrese el precio del primer articulo"));
while (isNaN(precioO1) || precioO1 <= 0) {
  precioO1 = parseInt(prompt("Ingrese el precio valido del primer articulo"));
}

precioO2 = parseInt(prompt("Ingrese el precio del segundo articulo"));
while (isNaN(precioO2) || precioO2 <= 0) {
  precioO2 = parseInt(prompt("Ingrese el precio valido del segundo articulo"));
}

precioO3 = parseInt(prompt("Ingrese el precio del tercer articulo"));
while (isNaN(precioO3) || precioO3 <= 0) {
  precioO3 = parseInt(prompt("Ingrese el precio valido del tercer articulo"));
}

precioO4 = parseInt(prompt("Ingrese el precio del cuarto articulo"));
while (isNaN(precioO4) || precioO4 <= 0) {
  precioO4 = parseInt(prompt("Ingrese el precio valido del cuarto articulo"));
}

clave = parseInt(
  prompt("Si paga a contado ingrese 1, Si paga a credito ingrese 2")
);
while (isNaN(clave) || clave <= 0) {
  precioO4 = parseInt(prompt("Ingrese el precio valido del cuarto articulo"));
}

switch (clave) {
  case 1:
    descuento1 = precioO1 * 0.1;
    descuento1 = precioO1 - descuento1;
    console.log(
      "El precio con descuento de " + articulo1 + " es de: " + descuento1
    );

    descuento2 = precioO2 * 0.1;
    descuento2 = precioO2 - descuento2;
    console.log(
      "El precio con descuento de " + articulo2 + " es de: " + descuento2
    );

    descuento3 = precioO3 * 0.1;
    descuento3 = precioO3 - descuento3;
    console.log(
      "El precio con descuento de " + articulo3 + " es de: " + descuento3
    );

    descuento4 = precioO4 * 0.1;
    descuento4 = precioO4 - descuento4;
    console.log(
      "El precio con descuento de " + articulo4 + " es de: " + descuento4
    );
    console.log("Se realizo un descuento de 10% a cada articulo");
    break;
  case 2:
    descuento1 = precioO1 * 0.2;
    descuento1 = precioO1 - descuento1;
    console.log(
      "El precio con descuento de " + articulo1 + " es de: " + descuento1
    );

    descuento2 = precioO2 * 0.2;
    descuento2 = precioO2 - descuento2;
    console.log(
      "El precio con descuento de " + articulo2 + " es de: " + descuento2
    );

    descuento3 = precioO3 * 0.2;
    descuento3 = precioO3 - descuento3;
    console.log(
      "El precio con descuento de " + articulo3 + " es de: " + descuento3
    );

    descuento4 = precioO4 * 0.2;
    descuento4 = precioO4 - descuento4;
    console.log(
      "El precio con descuento de " + articulo4 + " es de: " + descuento4
    );
    console.log("Se realizo un descuento de 20% a cada articulo");
    break;

  default:
    console.log("Ingrese un valor de clave valido");
    break;
}

//-------------------------------------------------------------------

pesoN = 0;
pesoJ = 0;
pesoA = 0;
pesoV = 0;
contadorN = 0;
contadorJ = 0;
contadorA = 0;
contadorV = 0;

for (let index = 0; index < 20; index++) {
  edad = parseInt(prompt("Ingrese su edad"));
  while (isNaN(edad) || edad <= 0) {
    edad = parseInt(prompt("Ingrese su edad valida"));
  }

  if (edad >= 0 && edad <= 12) {
    peso = parseInt(prompt("Ingrese su peso"));
    while (isNaN(peso) || peso <= 0) {
      peso = parseInt(prompt("Ingrese su peso valido"));
    }
    pesoN = pesoN + peso;
    contadorN = contadorN + 1;
  } else {
    if (edad >= 13 && edad <= 29) {
      peso = parseInt(prompt("Ingrese su peso"));
      while (isNaN(peso) || peso <= 0) {
        peso = parseInt(prompt("Ingrese su peso valido"));
      }
      pesoJ = pesoJ + peso;
      contadorJ = contadorJ + 1;
    } else {
      if (edad >= 30 && edad <= 59) {
        peso = parseInt(prompt("Ingrese su peso"));
        while (isNaN(peso) || peso <= 0) {
          peso = parseInt(prompt("Ingrese su peso valido"));
        }
        pesoA = pesoA + peso;
        contadorA = contadorA + 1;
      } else {
        if (edad >= 60) {
          peso = parseInt(prompt("Ingrese su peso"));
          while (isNaN(peso) || peso <= 0) {
            peso = parseInt(prompt("Ingrese su peso valido"));
          }
          pesoV = pesoV + peso;
          contadorV = contadorV + 1;
        }
      }
    }
  }
}

console.log(
  "El promedio del peso de los niños es; " + (promedioN = pesoN / contadorN)
);
console.log(
  "El promedio del peso de los jovenes es; " + (promedioJ = pesoJ / contadorJ)
);
console.log(
  "El promedio del peso de los adultos es; " + (promedioA = pesoA / contadorA)
);
console.log(
  "El promedio del peso de los awelos es; " + (promedioV = pesoV / contadorV)
);

//------------------------------------------------------

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j < 2; j++) {
    console.log(
      "1." +
        i +
        "." +
        j +
        "  " +
        "1." +
        i +
        "." +
        (j + 1) +
        "  " +
        "1." +
        i +
        "." +
        (j + 2) +
        "  " +
        "1." +
        i +
        "." +
        (j + 3)
    );
  }
}

//---------------------------------------------------------


let alto;
let ancho;
let linea;
let cadena;
alto = parseInt(prompt("Teclea un numero"));
for (linea = 0; linea < alto; linea++) {
  cadena='';
  for (ancho = 0; ancho <= linea; ancho++) {
    cadena += "*"
  }
  console.log(cadena);
  
}
