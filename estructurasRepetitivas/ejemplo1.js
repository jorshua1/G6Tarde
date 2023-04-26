let numero = parseInt(prompt('ingrese  un  numero'))
let h = 1
if (isNaN(numero)) {
  alert('error')
} else {
  while (numero > 0 && h <= 10 && h >= 0) {
    console.log(numero * h)
    h++
  }
  console.log('resultados')
}

////

///
let i = 0

for (i; i <= 10; i++) {
  console.log(i)
}
//
//

let number = parseInt(prompt('ingrese el numero'))
let m = 1

while (isNaN(number)) {
  number = parseInt(prompt('valor no valido, ingrese un numero'))
}
for (m; m <= 10; m++) {
  console.log(number * m)
}
