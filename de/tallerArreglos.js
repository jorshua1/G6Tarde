let numeros = [10]
suma = 0
for (let i = 0; i < 10; i++) {
  numeros[i] = Number(prompt('ingrese un valor numerico'))
}

for (j = 0; j < 10; j++) {
  suma += numeros[j]
}

console.log(suma)

////////////////////////////////////////////////////////////////////////

let notas = [5]
resultado = 0
for (let i = 0; i < 5; i++) {
  notas[i] = Number(prompt('ingrese el valor de su nota'))
}

for (j = 0; j < 5; j++) {
  resultado += notas[j]
}

promedio = resultado / 5

console.log(promedio)

////////////////////////////////////////////////////////////////////////

Array.prototype.ordenarDatosBurbuja = function () {
  ordenado = false

  while (!ordenado) {
    ordenado = true

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        temporal = this[i + 1]
        this[i + 1] = this[i]
        this[i] = temporal
        ordenado = false
      }
    }
  }
  return this
}
let numero = [5, 6, 3, 9, 4, 28, 272, 40, 38, 68, 2]
console.log(numero)

let numerosOrdenados = numero.ordenarDatosBurbuja()

console.log(numerosOrdenados)

////////////////////////////////////////////////////////////////////////
