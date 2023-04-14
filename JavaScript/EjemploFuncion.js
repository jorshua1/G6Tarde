function validador (numero){
	if (isNaN(numero)) {
	return "ERROR DATO INVALIDO"
	}else{
	return numero
	}
}

let x = prompt("Ingrese un vcalor");

console.log(x);

//====================================================================================================================

function fParImpar(numero) {
    if (numero % 2 === 0) {
      return "Es par";
    } else {
      return "Es impar";
    }
}
 let vN = Number(prompt("Ingrese un numero"));
console.log(fParImpar(vN));

//===========================================================================================================================

function fPosiNega(numero) {
    if (numero > 0) {
      return "Es positivo";
    } else {
      return "Es negativo";
    }
}
 let vN = Number(prompt("Ingrese un numero"));
console.log(fPosiNega(vN));

//=========================================================================================================================
numero = Number(prompt("Ingrese un numero"));
function fParamtro(numero) {
    for (let i = 0; i <= numero; i++) {
        i.push()
        console.log(i);
    }
}
//========================================================================================================================
function fFizz(numero) {
    for (var i = 1; i <= numero; i++) {
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
  