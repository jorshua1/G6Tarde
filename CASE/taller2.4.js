alert('compra de conejos')
let numeroConejosB = parseInt(prompt('ingrese el numero de conejos blancos'))

let numeroConejosN = parseInt(prompt('ingrese el numero de conejos negros'))

let precioConejosB = parseInt(prompt('ingrese el precio de un conejo blanco'))

let precioConejosN = parseInt(prompt('ingrese el precio de un conejo negro'))

let conejosBcomprados = parseInt(
  prompt('ingrese la cantidad de conejos blancos comprados'),
)

let conejosNcomprados = parseInt(
  prompt('ingrese la cantidad de conejos negros comprados'),
)

if (conejosBcomprados > numeroConejosB) {
  alert('no hay conejos suficientes')
} else if (conejosNcomprados > numeroConejosN) {
  alert('no hay conejos suficientes')
} else {
  valorConejosB = precioConejosB * conejosBcomprados
  alert('debe pagar por los conejos blancos ' + valorConejosB)

  valorConejosN = precioConejosN * conejosNcomprados
  alert('debe pagar por los conejos negros ' + valorConejosN)

  valorTotal = valorConejosB + valorConejosN

  alert('total a pagar ' + valorTotal)
  if (conejosBcomprados > conejosNcomprados) {
    alert('se compraron mas conejos blancos')
  } else if (conejosNcomprados > conejosBcomprados) {
    alert('se compraron mas conejos negros')
  }
  conejosRestantes = numeroConejosB - conejosBcomprados
  alert('conejos blancos restantes ' + conejosRestantes)
  conejosRestantesn = numeroConejosN - conejosNcomprados
  alert('conejos negros restantes ' + conejosRestantesn)
}
