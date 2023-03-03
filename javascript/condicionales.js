let edad = Number(prompt("Digite su edad"));

if (edad >= 0) {
  if (edad === 0) {
    console.log("0 no es una edad");
  } else {
    if (edad >= 18) {
      console.log("es mayor de edad");
    } else {
      console.log("es menor de edad");
    }
  }
} else {
  console.log("digite una edad valida");
}

//par o impar

let num = parseInt(prompt("Digite un numero para saber si es par o impar"));

if (num === 0 || isNaN(num)) {
  console.log("Digite un numero valido");
} else {
  if (num % 2 == 0) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }
}

//ejercicio inventado
//si es menor a 5000000 no declara
//si es mayor o igual a 5000000 y menor a 10000000 declara 10%
//si es mayor o igual a 10000000 declara 25%

let salario = parseInt(
  prompt("Digite su salario para saber cuanto debe declarar de renta")
);

if (salario === 0 || isNaN(salario) || salario < 0) {
  console.log("Digite un salario valido");
} else {
  if (salario < 5000000) {
    console.log("No debe declarar renta");
  } else {
    if (salario >= 5000000 && salario < 10000000) {
      console.log("Debe declarar 10% de su salario");
    } else {
      console.log("Debe declarar 25% de su salario");
    }
  }
}

//ejercicio de
let diametro = parseInt(prompt("Digite el diametro de la rueda en metros"));

if (isNaN(diametro) || diametro < 0) {
  console.log("Digite un diametro valido");
} else {
  if (diametro <= 1.4 && diametro > 0.8) {
    console.log("La rueda es para un vehiculo mediano ");
  } else {
    if (diametro > 1.4) {
      console.log("La rueda es para un vehiculo grande");
    } else {
      console.log("la rueda es para un vehiculo pequeño");
    }
  }
}

//ejercicio de santiago
let año = parseInt(prompt("Digite el año para saber si es bisiesto"));

if (isNaN(año) || año < 0) {
  console.log("Digite un año valido");
} else {
  if (año % 4 === 0 && año % 400 === 0 && año % 100 !== 0) {
    console.log("El año es bisiesto");
  } else {
    console.log("El año no es bisiesto");
  }
}

//ejercicio de calculadora
//añadir compra con descuento

let compra = parseInt(prompt("ingrese el valor de la compra"));

if (isNaN(compra) || compra < 0) {
  console.log("Digite un valor de compra valido");
} else {
  if (compra >= 500000) {
    let desc = compra * 0.3;
    console.log("el descuento es: " + desc);
  } else {
    if (compra < 500000) {
      let desc = compra * 0.15;
      console.log("el descuento es: " + desc);
    }
  }
}
