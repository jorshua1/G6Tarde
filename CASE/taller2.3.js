let minutos = parseInt(prompt('duracion de la llamada en minutos'))
let estandar = 200

if (isNaN(minutos)) {
  alert('error')
} else if (minutos > 3) {
  cantidadMinutos = minutos - 3
  pagoTotal = cantidadMinutos * 100 + estandar
  alert('total a pagar por la llamada es ' + pagoTotal)
} else if (minutos >= 1 || minutos <= 3) {
  alert('total a pagar por la llamada es de 200 pesos')
}
