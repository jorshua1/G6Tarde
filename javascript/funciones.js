function parImpar(number) {
  if (number % 2 == 0) {
    return "Es par";
  } else {
    return "Es impar";
  }
}

/////////////////////////////////////////////////

function verificarNumero(numero) {
  return numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Cero";
}

////////////////////////////////////////////////////////////

function escalera(number) {
  console.log(
    number > 0
      ? "Numero positivo, es creciente"
      : "Numero negativo, es decreciente"
  );

  if (number > 0) {
    for (let i = 1; i < number; i++) {
      console.log(i);
    }
  } else {
    for (let i = 1; i >= number; i--) {
      console.log(i);
    }
  }
}

var p = parseInt(prompt("Numero aqui perro"));
console.log(escalera(p));

//////////////////////////////////////////////////////////////

function fizzBuzz(n) {
  if (n <= 0) {
    console.log("Error numero negativo o cero");
  } else {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
}

var n = parseInt(prompt("numero"));
console.log(fizzBuzz(n));
