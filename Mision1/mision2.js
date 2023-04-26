let familiares = 0
let pesoKilogramo = 0
let estaturaMetros = 0
let imc = 0
let opcion = 0
let opcionSubmenu = 0
let cantidadPersonas = 0

while (opcion !== 4) {
  opcion = parseInt(
    prompt(`
Selecciona una opcion del menu:
1. ingresar familiares
2. Ingresar datos
3. Mostrar resultados
4. Salir.
`),
  )
  while (isNaN(opcion) || opcion <= 0 || opcion > 5) {
    opcion = parseInt(
      prompt(`
   ingrese valores validos
    
    Selecciona una opcion del menu:
    1. ingresar familiares
    2. Ingresar datos
    3. Mostrar resultados
    4. Salir.
    `),
    )
  }

  switch (opcion) {
    case 1:
      opcionSubmenu = 0
      while (opcionSubmenu !== 2) {
        opcionSubmenu = parseInt(
          prompt(`
        1. continuar
        2. volver al menu anterior`),
        )

        while (
          isNaN(opcionSubmenu) ||
          opcionSubmenu <= 0 ||
          opcionSubmenu > 3
        ) {
          opcionSubmenu = parseInt(
            prompt(`
            valor invalido
            1. continuar
            2. volver al menu anterior
            
            `),
          )
        }
        switch (opcionSubmenu) {
          case 1:
            cantidadPersonas = parseInt(
              prompt(`
        Ingrese la cantidad de personas que desea agregar:
        `),
            )
            while (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
              cantidadPersonas = parseInt(
                prompt(`
                valor invalido
            Ingrese la cantidad de personas que desea agregar:
            
            `),
              )
            }
          
            break
          case 2:
            alert('Volviendo al menu anterior')
            break
          default:
            alert('Ingrese un valor valido')
            break
        }
      }
    case 2:
      opcionSubmenu = 0
      while (opcionSubmenu !== 2) {
        opcionSubmenu = parseInt(
          prompt(`
      1. continuar
      2. volver al menu anterior`),
        )

        while (
          isNaN(opcionSubmenu) ||
          opcionSubmenu <= 0 ||
          opcionSubmenu > 3
        ) {
          opcionSubmenu = parseInt(
            prompt(`
          valor invalido
          1. continuar
          2. volver al menu anterior
          
          `),
          )
        }

        switch (opcionSubmenu) {
          case 1:
            for (i = 1; i <= cantidadPersonas; i++) {
              nombre = prompt('ingrese el nombre')

              Peso = parseInt(
                prompt('ingrese el Peso de la persona en kilogramos'),
              )
              while (Peso <= 0 || isNaN(Peso)) {
                Peso = parseInt(
                  prompt(
                    'valor invalido, ingrese el Peso de la persona en kilogramos',
                  ),
                )
              }

              Altura = parseInt(prompt('ingrese la estatura de la persona'))
              while (Altura <= 0 || isNaN(Altura)) {
                Altura = parseInt(
                  prompt('valor invalido, ingrese la estatura de la persona'),
                )
              }
              imc = Peso / (Altura * Altura)
              console.log(`${nombre} tiene un imc de ${imc}  `)
            }
            break 
            case 2:
      alert('Volviendo al menu anterior')
      break
    default:
      alert('Ingrese un valor valido')
      break
      
        }
      }

      
   
      
      case 3:
  opcionSubmenu = 0
while (opcionSubmenu !== 2) {
  opcionSubmenu = parseInt(
    prompt(`
      1. continuar
      2. volver al menu anterior`),
  )

  while (isNaN(opcionSubmenu) || opcionSubmenu <= 0 || opcionSubmenu > 3) {
    opcionSubmenu = parseInt(
      prompt(`
          valor invalido
          1. continuar
          2. volver al menu anterior
          
          `),
    )
  }
  switch (opcionSubmenu) {
    case 1:
      alert('el promedio global de su familia es de ')

    default:
      alert('volviendo al menu anterior')
      break
  }
}
  }
  
  

}


