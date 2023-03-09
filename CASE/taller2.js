let numeroUno = parseInt(prompt('ingrese el primer numero'))
let numeroDos = parseInt(prompt('ingrese el segundo numero'))
if (isNaN(numeroUno)) {
  alert('error')
} else if (isNaN(numeroDos)) {
  alert('error')
} else if (numeroUno > numeroDos) {
  alert('orden acendente ' + numeroDos + ' luego ' + numeroUno)
} else if (numeroUno < numeroDos) {
  alert('orden acendente ' + numeroUno + ' luego ' + numeroDos)
} else if ((numeroUno = numeroDos)) {
  alert(' los numero son iguales')
}
