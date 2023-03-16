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
let compras = parseInt(prompt("Ingrese el valor de su compra"));

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
        console.log("Su compra no aplica para descuento bruto");
      } else {
        let total = compras + 2000;
        console.log("El valor a pagar es: " + total);
      }
    }
  }
}

//ejercicio de Nicolas Ruiz

let lado1 = parseInt(prompt("Ingrese el primer lado"));
let lado2 = parseInt(prompt("Ingrese el segundo lado"));
let lado3 = parseInt(prompt("Ingrese el tercer lado"));
if (
  isNaN(lado1) ||
  lado1 < 0 ||
  isNaN(lado2) ||
  lado2 < 0 ||
  isNaN(lado3) ||
  lado3 < 0
) {
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

let mes = parseInt(prompt("Ingrese el numero del mes en el que se encuentra"));
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
    if (
      genero === "Indefinido" ||
      genero === "INDEFINIDO" ||
      genero === "indefinido"
    ) {
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
  if (
    name[0] === "A" ||
    name[0] === "B" ||
    name[0] === "C" ||
    name[0] === "D" ||
    name[0] === "E" ||
    name[0] === "F" ||
    name[0] === "G" ||
    name[0] === "H" ||
    name[0] === "I" ||
    name[0] === "J" ||
    name[0] === "K" ||
    name[0] === "L"
  ) {
    console.log("Ud pertenece al grupo A");
  } else {
    if (
      name[0] === "M" ||
      name[0] === "N" ||
      name[0] === "Ñ" ||
      name[0] === "O" ||
      name[0] === "P" ||
      name[0] === "Q" ||
      name[0] === "R" ||
      name[0] === "S" ||
      name[0] === "T" ||
      name[0] === "U" ||
      name[0] === "V" ||
      name[0] === "W" ||
      name[0] === "X" ||
      name[0] === "Y" ||
      name[0] === "Z"
    ) {
      console.log("Ud pertenece al grupo B");
    } else {
      console.log("Escriba bien sirilo");
    }
  }
} else {
  console.log("Digite un genero valido");
}

if (sexo === "Hombre") {
  if (
    name[0] === "A" ||
    name[0] === "B" ||
    name[0] === "C" ||
    name[0] === "D" ||
    name[0] === "E" ||
    name[0] === "F" ||
    name[0] === "G" ||
    name[0] === "H" ||
    name[0] === "I" ||
    name[0] === "J" ||
    name[0] === "K" ||
    name[0] === "L"
  ) {
    console.log("Ud pertenece al grupo B");
  } else {
    if (
      name[0] === "M" ||
      name[0] === "N" ||
      name[0] === "Ñ" ||
      name[0] === "O" ||
      name[0] === "P" ||
      name[0] === "Q" ||
      name[0] === "R" ||
      name[0] === "S" ||
      name[0] === "T" ||
      name[0] === "U" ||
      name[0] === "V" ||
      name[0] === "W" ||
      name[0] === "X" ||
      name[0] === "Y" ||
      name[0] === "Z"
    ) {
      console.log("Ud pertenece al grupo A");
    } else {
      console.log("Escriba bien sirilo");
    }
  }
} else {
  console.log("Digite un genero valido");
}

//ejercicio finanzas

let monto = parseInt(prompt("Ingrese el valor del monto de la finanza"));

if (isNaN(monto) || monto < 0) {
  console.log("Digite un valor de monto valido");
} else {
  if (monto < 50000) {
    let montoT = monto * 0.3;
    console.log("La cuota a pagar es de: " + montoT);
  } else {
    if (monto > 50000) {
      let montoT = monto * 0.2;
      console.log("La cuota a pagar es de: " + montoT);
    } else {
      console.log("No debe pagar cuota");
    }
  }
}

//ejercicio 10

let cant = parseInt(prompt("Ingrese la cantidad de articulos comprados"))
let esternocleidomastoideo = parseInt(prompt("Ingrese el precio de un articulo"))

if (isNaN(cant) || cant < 0 || isNaN(esternocleidomastoideo) || esternocleidomastoideo < 0) {
  console.log("Escriba un valor valido :V");
} else {
  let tot = esternocleidomastoideo * cant;
  if (tot > 40 && cant > 10) {
    let des = tot * 0.15;
    let pagar = tot - des;
    console.log("El total a pagar es: " + pagar);
  } else {
    console.log("La cantidad de articulos es insuficiente o no supera el valor minimo de descuento");
  }
}

//ejercicio 11



//ejercicio 12
let viejez = parseInt(prompt("Ingrese su edad para saber el precio de la entrada"));

if (isNaN(viejez) || viejez < 0) {
  console.log("Digite una edad valida");
} else {
  if (viejez < 4) {
    console.log("Puede ingresar gratis");
  } else {
    if (viejez >= 4 && viejez <= 18) {
      console.log("Debe pagar 5 Euros");
    } else {
      console.log("Debe pagar 10 Euros");
    }
  }
}

//ejercicio 13
let estatura = parseInt(prompt("Ingrese su estatura en metros"));
let setso = prompt("Ingrese su sexo: Masculino o Femenino")

if (isNaN(estatura) || estatura < 0 || setso === "Femenino") {
  console.log("Digite una estatura valida");
} else {
  if (estatura > 0 && estatura <= 1) {
    console.log("Pertenece a la categoria Junior");
  } else {
    if (estatura > 1 && estatura <= 1.6) {
      console.log("Pertenece a la categoria Media");
    } else {
      console.log("Pertenece a la categoria Adultos");
    }
  }
}

if (isNaN(estatura) || estatura < 0 || setso === "Masculino") {
  console.log("Digite una estatura valida");
} else {
  if (estatura > 0 && estatura <= 1.2) {
    console.log("Pertenece a la categoria Junior");
  } else {
    if (estatura > 1.2 && estatura <= 1.7) {
      console.log("Pertenece a la categoria Media");
    } else {
      console.log("Pertenece a la categoria Adultos");
    }
  }
}

//ejercicio 14
let añitos = parseInt(prompt("Ingrese su edad"));
let imc = parseInt(prompt("Ingrese su IMC"));

if (isNaN(añitos) || añitos < 0 || isNaN(imc) || imc < 0 || añitos < 19) {
  console.log("Ingrese datos validos");
} else {
  if (añitos >= 19 && añitos <= 24 && imc >= 19 && imc <= 24) {
    console.log("Tiene peso normal");
  } else {
    if (añitos >= 19 && añitos <= 24 && imc >= 30 && imc <= 35) {
      console.log("Tiene sobre peso");
    } else {
      if (añitos >= 19 && añitos <= 24 && imc >= 36) {
        console.log("Tiene obesidad");
      }
    }

    if (añitos >= 25 && añitos <= 34 && imc >= 20 && imc <= 25) {
      console.log("Tiene peso normal");
    } else {
      if (añitos >= 25 && añitos <=34 && imc >= 30 && imc <= 35) {
        console.log("Tiene sobre peso");
      } else {
        if (añitos >= 25 && añitos <= 34 && imc >= 36) {
          console.log("Tiene obesidad");
        }
      }
    }

    if (añitos >= 35 && añitos <= 44 && imc >= 21 && imc <= 26) {
      console.log("Tiene peso normal");
    } else {
      if (añitos >= 35 && añitos <=44 && imc >= 30 && imc <= 35) {
        console.log("Tiene sobre peso");
      } else {
        if (añitos >= 35 && añitos <= 44 && imc >= 36) {
          console.log("Tiene obesidad");
        }
      }
    }

    if (añitos >= 45 && añitos <= 54 && imc >= 22 && imc <= 27) {
      console.log("Tiene peso normal");
    } else {
      if (añitos >= 45 && añitos <=54 && imc >= 30 && imc <= 35) {
        console.log("Tiene sobre peso");
      } else {
        if (añitos >= 45 && añitos <= 54 && imc >= 36) {
          console.log("Tiene obesidad");
        }
      }
    }

    if (añitos >= 55 && añitos <= 64 && imc >= 23 && imc <= 28) {
      console.log("Tiene peso normal");
    } else {
      if (añitos >= 55 && añitos <=64 && imc >= 30 && imc <= 35) {
        console.log("Tiene sobre peso");
      } else {
        if (añitos >= 55 && añitos <= 64 && imc >= 36) {
          console.log("Tiene obesidad");
        }
      }
    }

    if (añitos >= 65 && imc >= 24 && imc <= 29) {
      console.log("Tiene peso normal");
    } else {
      if (añitos >= 65 && imc >= 30 && imc <= 35) {
        console.log("Tiene sobre peso");
      } else {
        if (añitos >= 65 && imc >= 36) {
          console.log("Tiene obesidad");
        }
      }
    }
  }
}

//ejercicio 15
let kilos = parseInt(prompt("Digite el peso del paquete"));
let lugar = prompt("Digite el destino: America del Norte, America Central, America del Sur, Europa o Asia");

if (isNaN(kilos) || kilos < 0 || lugar !== "America del Norte" || lugar !== "America Central" || lugar !== "America del Sur" || lugar !== "Europa" || lugar !== "Asia") {
  console.log("Error en el destino o peso invalido");
} else {
  if (kilos > 5) {
    console.log("La empresa no transporta paquetes de mas de 5 kilos");
  } else {
    if (lugar === "America del Norte") {
      let prezio = kilos*24;
      console.log("El precio a pagar es: " +prezio);
    } else {
      if (lugar === "America Central") {
        prezio = kilos*20;
        console.log("El precio a pagar es: " +prezio);
      } else {
        if (lugar === "America Central") {
          prezio = kilos*21;
          console.log("El precio a pagar es: " +prezio);
        } else {
          if (lugar === "Europa") {
            prezio = kilos*10;
            console.log("El precio a pagar es: " +prezio);
          } else {
            prezio = kilos*18;
            console.log("El precio a pagar es: " +prezio);
          }
        }
      }
    }
  }
}

//ejercicio 16
let topi = prompt("Digite el topping que quiere agregarle a su Helado");

if (topi === "Oreo" || topi === "oreo" || topi === "OREO") {
  pagar = 1+1.90;
  console.log("El precio del helado es: " +pagar);
} else {
  if (topi === "KitKat" || topi === "Kitkat" || topi === "kitkat" || topi === "KITKAT") {
    pagar = 1.50+1.90;
    console.log("El precio del helado es: " +pagar);
  } else {
    if (topi === "Brownie" || topi === "brownie" || topi === "BROWNIE") {
      pagar = 0.75+1.90;
      console.log("El precio del helado es: " +pagar);
    } else {
      if (topi === "Lacasitos" || topi === "lacasitos" || topi === "LACASITOS") {
        pagar = 0.95+1.90;
      } else {
        console.log("No tenemos ese topping, lo sentimos");
        console.log("El total a pagar es 1.9$");
      }
    }
  }
}

//ejercicio 17

let dia = parseInt(prompt("Digite el numero del dia en el que se realizo la llamada"));
let time = parseInt(prompt("Digite la duracion de la llamada en minutos"));
let valor = 0;

if (isNaN(time) || time < 0 || isNaN(dia) || dia < 0 || dia > 7 ) {
  console.log("Error en la duracion o el dia de la llamada");
} else {
  if (time <= 5 ) {
    valor = 1;
  } else {
    if (time > 5 && time <= 8) {
      valor = 1+0.8;
    } else {
      if (time > 8 && time <= 10) {
        valor = 1+0.8+0.7;
      } else {
        valor = (1+0.8+0.7)+(time*0.5)
      }
    }
  }
  if (dia > 0 && dia < 7) {
    let pag = valor * 0.15;
    pag = pag + valor;
    console.log("El valor a pagar por su llamada es: " +pag);
  } else {
    pag = valor * 0.03;
    pag = pag + valor;
    console.log("El valor a pagar por su llamada es: " +pag);
  }
}

//ejercicio 18
let tipo = prompt("Digite el tipo de vehiculo: Carro, Moto, Autobus");
let litro = parseInt(prompt("Digite los litros consumidos"));
let kilometro = parseInt(prompt("Digite la cantidad de kilometros recorridos"));

if (isNaN(litro) || litro < 0 || isNaN(kilometro) || kilometro < 0)  {
  console.log("Error al digitar el vehiculo o valores invalidos");
} else {
  if (tipo === "Carro" || tipo === "carro" || tipo === "CARRO") {
    let money = kilometro*0.1;
    console.log("Valor a pagar: "+money);
  } else {
    if (tipo === "Moto" || tipo === "moto" || tipo === "MOTO") {
      let money = kilometro*0.2;
      console.log("Valor a pagar: "+money);
    } else {
      if (tipo === "Autobus" || tipo === "autobus" || tipo === "AUTOBUS") {
        let money = kilometro*0.5;
        console.log("Valor a pagar: "+money);
      }
    }
  }

  if (litro >= 0 && litro <= 100) {
    litro = litro + 1;
    console.log("Litros consumidos: " +litro);
  } else {
    litro = litro + 2;
    console.log("Litros consumidos: " +litro);
  }
}

//ejercicio 19

let horas = parseInt(prompt("Digite las horas trabajadas"));
let pay = parseInt(prompt("Digite el pago por hora"));

if (isNaN(horas) || horas < 0 ||isNaN(pay) || pay < 0) {
  console.log("Digite valores validos");
} else {
  if (horas > 40 && horas <= 48 ) {
    let pago = (pay * horas) * 2;
    console.log("El pago que recibira es de: " +pago);
  } else {
    if (horas > 48) {
      pago = (pay * horas) * 3;
      console.log("El pago que recibira es de: " +pago);
    } else {
      pago = pay * horas;
      console.log("El pago que recibira es de: " +pago);
    }
  }
}

//ejercicio 20

let pezo = parseInt(prompt("Digite su peso"));
let altura = parseInt(prompt("Digite su altura"));
let altura2 = altura*altura;
let IMC = pezo/altura2;
console.log(altura);
console.log(IMC);
if (isNaN(pezo) || pezo < 0 || isNaN(altura) || altura < 0) {
  console.log("Digite datos validos");
} else {
  if (IMC < 18.5) {
    console.log("Ud esta flaco, debe comer");
  } else {
    if (IMC >= 18.5 && IMC <= 24.9) {
      console.log("Ud esta bien de peso wapo");
    } else {
      if (IMC >= 25 && IMC <= 29.9) {
        console.log("Ud esta mamado, pero de sobrepeso");
      } else {
        console.log("Es mas facil saltarlo que rodearlo, esta bien obeso");
      }
    }
  }
}

//ejercicio 21

let eva1 = parseInt(prompt("Digite la nota de la evaluacion 1"));
let eva2 = parseInt(prompt("Digite la nota de la evaluacion 2"));
let eva3 = parseInt(prompt("Digite la nota de la evaluacion 3"));

let nota = (eva1*0.3)+(eva2*0.3)+(eva3*0.4);

if (nota >= 3) {
  console.log("Paso la materia con: " +nota);
} else {
  console.log("No paso la materia por feo, con: " +nota);
}
