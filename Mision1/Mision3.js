let numero = parseInt(prompt('ingrese un numero'))

function validador(numero) {
  if (numero % 2 == 0) {
    return 'es par'
  } else {
    return 'es impar'
  }
}
console.log(validador(numero))
/////////////7777
let numero2 = parseInt(prompt('ingrese un numero'))

function validador(numero2) {
  if (numero2 > 0) {
    return 'es positivo'
  } else if (numero2 < 0) {
    return 'es negativo'
  } else {
    return 'el numero es 0'
  }
}

console.log(validador(numero2))

//////////////////////////////

let numero3= parseInt(prompt('ingrese un numero'))
let numeros=[]
function validador(numero3) {
  if (numero3 > 0) {
    for (i = 0; i <numero3; i++) {
      numeros[i] = i +1
    }
numero3=numeros
    return numero3
  } else if (numero3 < 0) {
    for (i = 0; i > numero3; i--) {
      numeros[i] = i -1
    }
    numero3=numeros
    return numero3
  } else {
    return 'error'
  }
}
 console.log(validador(numero3))

 /////////////////////////77

 let numeroCuatro= parseInt(prompt('ingrese un numero'))
let num=[]
function validador(numeroCuatro) {

if( numeroCuatro % 3  == 0){

return "Fizz"

}else if ( numeroCuatro % 5  == 0){


return "Buzz"

}else if (numeroCuatro > 0) {
    for (i = 0; i <numeroCuatro; i++) {
      num[i] = i +1
    }
numeroCuatro=num
    return numeroCuatro
  } else if (numeroCuatro < 0) {
    for (i = 0; i > numeroCuatro; i--) {
      num[i] = i -1
    }
    numeroCuatro=num
    return numeroCuatro
  } else {
    return 'error'
  }
}
 console.log(validador(numeroCuatro))
