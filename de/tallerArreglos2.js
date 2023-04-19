let vectorNumeros = []

let cuadrado = []
let cubo = []
for (i = 0; i < 10; i++) {
  var random = Math.floor(Math.random() * -10 + 10)

  vectorNumeros[i] = random
}
console.log(vectorNumeros)

for (j = 0; j < 10; j++) {
  cuadrado[j] = vectorNumeros[j] ** 2
}
console.log(cuadrado)

for (l = 0; l < 10; l++) {
  cubo[l] = vectorNumeros[l] ** 3
}

console.log(cubo)

/////////////////////////////7

caracteres = []
let invertidos = []
for (let i = 0; i < 10; i++) {
  caracteres[i] = prompt('ingrese un caracter')

  while (!isNaN(caracteres)) {
    alert('valor invalido')
    caracteres[i] = prompt('ingrese un numero')
  }
}
console.log(caracteres)

let i = 0
for (j = 9; j >= 0; j--) {
  invertidos[i] = caracteres[j]
  i++
}
console.log(invertidos)

////////////////

let notas = []
let notasOrdenadas = []
for (let i = 0; i < 5; i++) {
  notas[i] = prompt('ingrese su nota entre 1 y 10')

  while (isNaN(notas[i]) || notas[i] > 10 || notas[i] < 0) {
    alert('valor invalido')
    notas[i] = prompt('ingrese su nota entre 1 y 10')
  }
}
console.log(notas)
for (i = 1; i < 6 - 1; i++) {
  for (j = 0; j < 6 - 1; j++) {
    while (notas[j] > notas[j + 1]) {
      TEMP = notas[j]
      notas[j] = notas[j + 1]
      notas[j + 1] = TEMP
    }
  }
}
console.log(notas)

alert(`

sus notas en orde acendente:${notas}
su nota mas alta es:${notas[4]}
su nota media es:${notas[2]}
su nota mas baja es:${notas[0]}




`)

//////////

vector = []

for (let i = 0; i < 10; i++) {
  vector[i] = prompt('ingrese un numero')
  if (vector[i] < 0) {
    i = 10
  } else {
    while (isNaN(vector[i])) {
      alert('valor invalido')
      vector[i] = prompt('ingrese un numero')
    }
  }
}
console.log(vector)

///////////////////////////////////77
let NumerosAleatorios = []

for (i = 0; i < 10; i++) {
  var random = Math.floor(Math.random() * -10 + 10)

  NumerosAleatorios[i] = random
}
console.log(NumerosAleatorios)

for (i = 1; i < 10 - 1; i++) {
  for (j = 0; j < 10 - 1; j++) {
    while (NumerosAleatorios[j] > NumerosAleatorios[j + 1]) {
      TEMP = NumerosAleatorios[j]
      NumerosAleatorios[j] = NumerosAleatorios[j + 1]
      NumerosAleatorios[j + 1] = TEMP
    }
  }
}
console.log(NumerosAleatorios)

////////////////////////////

let nombreMes = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Optubre',
  'Noviembre',
  'Diciembre',
]
let numeroDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let numeroMes = parseInt(prompt('ingrese el numero del mes'))
while (isNaN(numeroMes) || numeroMes > 12 || numeroMes < 1) {
  numeroMes = parseInt(prompt('ingrese el numero del mes'))
}

switch (numeroMes) {
  case 1:
    alert(`
el mes numero ${numeroMes} 
se llama ${nombreMes[0]} 
y tiene ${numeroDias[0]} dias

`)

    break
  case 2:
    alert(`
el mes numero ${numeroMes} 
se llama ${nombreMes[1]} 
y tiene ${numeroDias[1]} dias

`)
    break

  case 3:
    alert(`
el mes numero ${numeroMes} 
se llama ${nombreMes[2]} 
y tiene ${numeroDias[2]} dias

`)
    break

  case 4:
    alert(`
el mes numero ${numeroMes} 
se llama ${nombreMes[3]} 
y tiene ${numeroDias[3]} dias

`)
    break

  case 5:
    alert(`
el mes numero ${numeroMes} 
se llama ${nombreMes[4]} 
y tiene ${numeroDias[4]} dias

`)
    break

  case 6:
    alert(`
el mes numero ${numeroMes} 
se llama ${nombreMes[5]} 
y tiene ${numeroDias[5]} dias

`)
    break

  case 7:
    alert(`
el mes numero ${numeroMes} 
se llama ${nombreMes[6]} 
y tiene ${numeroDias[6]} dias

`)
    break

  case 8:
    alert(`
el mes numero ${numeroMes} 
se llama ${nombreMes[7]} 
y tiene ${numeroDias[7]} dias

`)
    break
  case 9:
    alert(`
el mes numero ${numeroMes} 
se llama ${nombreMes[8]} 
y tiene ${numeroDias[8]} dias

`)
    break
  case 10:
    alert(`
el mes numero ${numeroMes} 
se llama ${nombreMes[9]} 
y tiene ${numeroDias[9]} dias

`)
    break
  case 11:
    alert(`
el mes numero ${numeroMes} 
se llama ${nombreMes[10]} 
y tiene ${numeroDias[10]} dias

`)
    break

  case 12:
    alert(`
el mes numero ${numeroMes} 
se llama ${nombreMes[11]} 
y tiene ${numeroDias[11]} dias

`)
    break
}
///////////////////////////


