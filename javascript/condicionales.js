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
    let compraT = compra - desc;
    console.log("La compra con el descuento es: " + compraT);
  } else {
    if (compra < 500000) {
      let desc = compra * 0.15;
      console.log("el descuento es: " + desc);
      let compraT = compra - desc;
      console.log("La compra con el descuento es: " + compraT);
    }
  }
}

//ejercicio Daniel Jay 
let compras = parseInt(prompt("Ingrese el valor de su compra"))

if (isNaN(compras) || compras < 0) {
  console.log("Digite un valor de compra valido");
} else {
  if (compras >= 250000) {
    let descuento = compras * 0.3;
    let total = compras - descuento;
    console.log("El valor a pagar es: " + total);
  } else {
    if (compras >= 200000) {
      let descuento = compras * 0.2;
      let total = compras - descuento;
      console.log("El valor a pagar es: " + total);
    } else {
      if (compras < 200000 && compras >= 50000) {
        console.log("Su compra no aplica para descuento bruto")
      } else {
        let total = compras + 2000;
        console.log("El valor a pagar es: " +total);
      }
    }
  }
}

//ejercicio de Nicolas Ruiz

let lado1 = parseInt(prompt("Ingrese el primer lado"))
let lado2 = parseInt(prompt("Ingrese el segundo lado"))
let lado3 = parseInt(prompt("Ingrese el tercer lado"))
if (isNaN(lado1) || lado1 < 0 || isNaN(lado2) || lado2 < 0 || isNaN(lado3) || lado3 < 0) {
  console.log("Ingrese un valor de lados validos bizco");
} else {
  if (lado1 == lado2 && lado1 == lado3) {
    console.log("Es un triangulo Equilatero");
  } else {
    if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
      console.log("El triangulo es Isosceles");
    } else {
      console.log("El triangulo es Escaleno");
    }
  }
}

//ejercicio estacion de año

let mes = parseInt(prompt("Ingrese el numero del mes en el que se encuentra"))
if (isNaN(mes) || mes < 0 || mes >= 13) {
  console.log("Escriba un numero de mes valido");
} else {
  if (mes == 12 || mes == 1 || mes == 2) {
    console.log("La estacion del mes que digito es Invierno");
  } else {
    if (mes == 3 || mes == 4 || mes == 5) {
      console.log("La estacion del mes que digito es Primavera");
    } else {
      if (mes == 6 || mes == 7 || mes == 8) {
        console.log("La estacion del mes que digito es Verano");
      } else {
        console.log("La estacion del mes que esta es Otoño");
      }
    }
  }
}

//EJERCICIO DE TRIBUTAR

let años = parseInt(prompt("Digite su edad"));
let sueldo = parseInt(prompt("Digite su ingreso mensual en euros"));

if (isNaN(años) || años < 0) {
  console.log("Ingrese una edad valida");
} else {
  if (años > 16 && sueldo >= 1000) {
    console.log("Debe tributar por feo");
  } else {
    console.log("No debe tributar");
  }
}

//ejercicio sin sentido de genero

let genero = prompt("Ingrese su genero");
if (genero === "Hombre" || genero === "HOMBRE" || genero === "hombre") {
  console.log("Su genero es: " + genero);
} else {
  if (genero === "Mujer" || genero === "MUJER" || genero === "mujer") {
    console.log("Su genero es: " + genero);
  } else {
    if (genero === "Indefinido" || genero === "INDEFINIDO" || genero === "indefinido") {
      console.log("Su genero es: " + genero);
    } else {
      console.log("Digite un valor de genero valido");
    }
  }
}

//ejercicio de andres rueda
let sexo = prompt("Digite su genero, Mujer o Hombre");
let name = prompt("Digite su nombre");

if (sexo === "Mujer") {
  if (name[0] === "A" || name[0] === "B" || name[0] === "C" || name[0] === "D" || name[0] === "E" || name[0] === "F" || name[0] === "G" || name[0] === "H" || name[0] === "I" || name[0] === "J" || name[0] === "K" || name[0] === "L") {
    console.log("Ud pertenece al grupo A");
  } else {
    if (name[0] === "M" || name[0] === "N" || name[0] === "Ñ" || name[0] === "O" || name[0] === "P" || name[0] === "Q" || name[0] === "R" || name[0] === "S" || name[0] === "T" || name[0] === "U" || name[0] === "V" || name[0] === "W" || name[0] === "X" || name[0] === "Y" || name[0] === "Z") {
      console.log("Ud pertenece al grupo B");
    } else {
      console.log("Escriba bien sirilo");
    }
  }
} else {
  console.log("Digite un genero valido");
}

if (sexo === "Hombre") {
  if (name[0] === "A" || name[0] === "B" || name[0] === "C" || name[0] === "D" || name[0] === "E" || name[0] === "F" || name[0] === "G" || name[0] === "H" || name[0] === "I" || name[0] === "J" || name[0] === "K" || name[0] === "L") {
    console.log("Ud pertenece al grupo B");
  } else {
    if (name[0] === "M" || name[0] === "N" || name[0] === "Ñ" || name[0] === "O" || name[0] === "P" || name[0] === "Q" || name[0] === "R" || name[0] === "S" || name[0] === "T" || name[0] === "U" || name[0] === "V" || name[0] === "W" || name[0] === "X" || name[0] === "Y" || name[0] === "Z") {
      console.log("Ud pertenece al grupo A");
    } else {
      console.log("Escriba bien sirilo");
    }
  }
} else {
  console.log("Digite un genero valido");
}

//ejercicio finanzas

let monto = parseInt(prompt("Ingrese el valor del monto de la finanza"))

if (isNaN(monto) || monto < 0) {
  console.log("Digite un valor de monto valido");
} else {
  if (monto < 50000) {
    let montoT = monto * 0.3;
    console.log("La cuota a pagar es de: " +montoT);
  } else {
    if (monto > 50000) {
      let montoT = monto * 0.2;
      console.log("La cuota a pagar es de: " +montoT);
    } else {
      console.log("No debe pagar cuota");
    }
  }
}

//