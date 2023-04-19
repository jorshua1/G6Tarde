let numeros = [10]
let suma = 0
for (let i = 0; i < 10; i++) {
  numeros[i] = Number(prompt('ingrese un valor numerico'))
}

console.log(numeros)

for (let i = 0; i < 10; i++) {
  suma += numeros[i]
}

console.log(suma)

////////////////
let cantidadNumeros = Number(
  prompt('ingrese la cantidad de datos que desea ordenar'),
)
let datos = []
for (i = 0; i < cantidadNumeros; i++) {
  var random = Math.floor(Math.random() * -100 + 100)

  datos[i] = random
}

console.log(datos)

for (i = 1; i < cantidadNumeros - 1; i++) {
  for (j = 0; j < cantidadNumeros - 1; j++) {
    while (datos[j] > datos[j + 1]) {
      TEMP = datos[j]
      datos[j] = datos[j + 1]
      datos[j + 1] = TEMP
    }
  }
}
console.log(datos)

/////////////////////

let positivos = []
let cantidad = 100
let dato = []
for (i = 0; i < cantidad; i++) {
  var random = Math.floor(Math.random() * (101 - -101)) + -100

  dato[i] = random
}

console.log(dato)

for (i = 1; i < cantidad - 1; i++) {
  for (j = 0; j < cantidad - 1; j++) {
    if (dato[j] > dato[j + 1]) {
      TEMP = dato[j]
      dato[j] = dato[j + 1]
      dato[j + 1] = TEMP
    }
  }
}
console.log(dato)

for (i = 0; i < 100; i++) {
  if (dato[i] >= 0) {
    positivos[i] = dato[i]
  }
}

for (i = 1; i < cantidad - 1; i++) {
  for (j = 0; j < cantidad - 1; j++) {
    if (positivos[j] > positivos[j + 1]) {
      TEMP = positivos[j]
      positivos[j] = positivos[j + 1]
      positivos[j + 1] = TEMP
    }
  }
}
console.log(positivos)

/////////////////////////////777

let array = [3,4,2,5,6,3,7,8,2,9]




for (i = 1; i < 10 - 1; i++) {
  AUX = array[i]
  IZQ = 0
  DER = i - 1
  while (IZQ <= DER) {
    m = (IZQ + DER) / 2
    if (AUX <= array[m]) {
      DER = m - 1
    } else {
      IZQ = m + 1
    }
  }

  j = i - 1

  while (j >= IZQ) {
    array[j + 1] = array[j]
    j--
  }

  array[IZQ] = AUX
}
console.log(array)