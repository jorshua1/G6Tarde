//ejercicio1
let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Escriba bien mamawebo");
} else {
  if (num1 > num2) {
    console.log(num1);
    console.log(num2);
  } else {
    console.log(num2);
    console.log(num1);
  }
}

//2
let num = parseInt(prompt("Digite un numero del 1 al 10"));

switch (num) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 9:
    break;
  case 2:
  case 4:
  case 6:
  case 8:
  case 10:
    break;
  default:
    console.log("Digite un numero valido bizco");
    break;
}

//3

let numerito = parseInt(prompt("Digite un numero del 1 al 10"));

switch (numerito) {
  case 1:
    console.log("El numero es 1");
    break;
  case 2:
    console.log("El numero es 2");
    break;
  case 3:
    console.log("El numero es 3");
    break;
  case 4:
    console.log("El numero es 4");
    break;
  case 5:
    console.log("El numero es 5");
    break;
  case 6:
    console.log("El numero es 6");
    break;
  case 7:
    console.log("El numero es 7");
    break;
  case 8:
    console.log("El numero es 8");
    break;
  case 9:
    console.log("El numero es 9");
    break;
  case 10:
    console.log("El numero es 10");
    break;

  default:
    break;
}

//4

let shamada = parseInt(prompt("Digite la duracion de la llamada en minutos"));

if (isNaN(shamada) || shamada < 0) {
  console.log("Digite una duracion valida mamawebo");
} else {
  if (shamada <= 3) {
    let pagacion = 200;
    console.log("El valor de la llamada es: " + pagacion);
  } else {
    pagacion = (shamada - 3) * 100;
    pagacion = pagacion + 200;
    console.log("El valor de la llamada es: " + pagacion);
  }
}

//5

let niggas1 = parseInt(
  prompt("Ingrese la cantidad de conejos negros vendidos")
);
let blanco1 = parseInt(
  prompt("Ingrese la cantidad de conejos blancos vendidos")
);
let p1 = parseInt(prompt("Ingrese el valor por conejo blanco vendido"));
let p2 = parseInt(prompt("Ingrese el valor por conejo negro vendido"));

if (isNaN(niggas1) || niggas1 < 0 || isNaN(blanco1) || blanco1 < 0) {
  console.log("Digite un valor valido de conejos");
} else {
  let conojos = niggas1 + blanco1;
  console.log("La cantidad de conejos vendidas es: " + conojos);
  if (isNaN(p1) || p1 < 0 || isNaN(p2) || p2 < 0) {
    console.log("Digite un valor valido");
  } else {
  }
}
