let genero = prompt('ingrese el genero')

if (genero == 'Masculino') {
  alert('Ingresaste Masculino')
} else if (genero == 'Femenino') {
  alert('ingresaste Femenino')
} else if (genero == 'Indefinido') {
  alert('ingresaste Indefinido')
} else if (
  (genero != 'Masculino', genero != 'Femenino', genero != 'Indefinido')
) {
  alert('ingreso un valor invalido')
}

//luis////
opcionSubmenu=0
datosNombre = prompt(`
ingrese su nombre
`)
while (!isNaN(datosNombre) ) {
  datosNombre = prompt(`
      valor invalido
  ingrese su nombre
  `)



  Altura = parseInt(prompt('ingrese su altura en metros'))

  while (isNaN(Altura) || Altura <= 0) {
    Altura = prompt(`
        valor invalido
    ingrese su altura en metros
    `)

    Peso = parseInt(prompt('ingrese su peso en kilogramos'))
    while (isNaN(Peso) || Peso <= 0) {
      Peso = prompt(`
            valor invalido
        ingrese su peso en kilogramos
        `)

      
    }
  }
}