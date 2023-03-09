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

if (isNaN(niggas1) || niggas1 <= 0 || isNaN(blanco1) || blanco1 <= 0) {
  console.log("Digite un valor valido de conejos");
} else {
  let conojos = niggas1 + blanco1;
  console.log("La cantidad de conejos vendidas es: " + conojos);
  if (blanco1 > niggas1) {
    console.log("Los conejos que mas se vendieron son los blancos");
  } else {
    console.log("los conejos que mas se vendieron son los negros");
  }
}

if (isNaN(p1) || p1 <= 0 || isNaN(p2) || p2 <= 0) {
  console.log("Digite un valor valido de precio");
} else {
  let precioConojos = p1 * blanco1 + p2 * niggas1;
  console.log(
    "El precio total de los conejos negros y blancos es de: " + precioConojos
  );
}

//6
let nota1 = parseInt(prompt("Ingrese la evaluacion 1 mamawebo"));
let nota2 = parseInt(prompt("Ingrese la evaluacion 2 mamawebo"));
let nota3 = parseInt(prompt("Ingrese la evaluacion 3 mamawebo"));
let traba1 = parseInt(prompt("Ingrese el trabajo 1 mamawebo"));
let traba2 = parseInt(prompt("Ingrese el trabajo 2 mamawebo"));

if (
  isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1<0 || nota2<0 || nota3<0 || nota1>5 || nota2 >5 || nota3 > 5 || isNaN(traba1) || isNaN(traba2) || traba1 <0 ||traba2 < 0 || traba1 >5 ||traba2 > 5)
 {
  console.log("Digite un valor de notas o trabajos valido");
} else {
  let notaE = (nota1 + nota2 + nota3) / 3;
  notaE = notaE * 0.6;
  let notaT = (traba1 + traba2) / 2;
  notaT = notaT * 0.4;
  let notaF = notaE + notaT;

  if (notaF <= 1) {
    console.log("La nota final es 1");
  } else {
    console.log("La nota final es: " + notaF);
  }
}

//7
let articulo = prompt("Ingrese el nombre del articulo ");
let clave = parseInt(prompt("Ingrese la clave del articulo"));
let cantidad = parseInt(prompt("Digite la cantidad del articulo"));
let prezio = parseInt(prompt("Digite el precio del articulo"));
let descuento = 0;
let descuentot = 0;
let total = 0;

if (isNaN(prezio) || prezio <= 0 || isNaN(cantidad) || cantidad <= 0) {
  console.log("Digite valores validos mamawebero");
} else {
  switch (clave) {
    case 1:
      descuento = prezio*cantidad;
      descuentot = descuento*0.1; 
      total = descuento-descuentot;
      console.log("El nombre del articulo es: " +articulo);
      console.log("El precio original es: " +prezio);
      console.log("La clave del producto es 1");
      console.log("La cantidad del producto es: " +cantidad);
      console.log("El precio con descuento es: " +total);
      break;
    case 2:
      descuento = prezio*cantidad;
      descuentot = descuento*0.2; 
      total = descuento-descuentot;
      console.log("El nombre del articulo es: " +articulo);
      console.log("El precio original es: " +prezio);
      console.log("La clave del producto es 2");
      console.log("La cantidad del producto es: " +cantidad);
      console.log("El precio con descuento es: " +total);
      break;
  
    default:
      console.log("Digite valores validos pendejo");
      break;
  }
}

//8

let presupuestoano = parseInt(prompt("Ingrese el presupuesto anual: "));
let siq = parseInt(prompt("Ingrese el porcentaje de Psiquiatria: "));
let ped = parseInt(prompt("Ingrese el porcentaje de Pediatria: "));
let trau = parseInt(prompt("Ingrese el porcentaje de Traumatologia: "));

if (isNaN(presupuestoano) || presupuestoano < 0 || siq+ped+trau != 100 || isNaN(siq) || isNaN(ped) || isNaN(trau)) {
  console.log("Digite valores validos ");
} else {
   let presiq = (presupuestoano)*(siq/100);
   console.log("El presupuesto para Psiquiatria es: " +presiq);
   let preped = (presupuestoano)*(ped/100);
   console.log("El presupuesto para Pediatria es:" +preped);
   let pretrau = (presupuestoano)*(trau/100);
   console.log("El presupuesto para Traumatologia es: " +pretrau);
}

//9
let distancia = parseInt(prompt("Digite la distancia de su viaje en kilometros"));
let dias = parseInt(prompt("Digite los dias de estancia"));


if (isNaN(distancia) || distancia <= 0 || isNaN(dias) || dias <=0 ) {
  console.log("Digite datos validos");
} else {
  let precio = distancia*2.5;
  if (dias >=7 && distancia > 800) {
    let desT = precio*0.3;
    let pagazion = precio-desT;
    console.log("El precio del tiquete es: " +pagazion);
  } else {
    console.log("El precio del tiquete es: " +precio);
  }
}
