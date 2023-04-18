let menu = 0
let cantidadDeTalentos = 0
let datosdetalentos = []
let notasMision1 = []
let notasMision2 = []
let notasMision3 = []
let mejorNotaDeLaMision1 = 0
let mejorNotaDeLaMision2 = 0
let mejorNotaDeLaMision3 = 0
let mejorTalentoMision1
let mejorTalentoMision2
let mejorTalentoMision3
let pruebaFinal = []
let estudiantes = []
let sumaDeNotasMision1 = 0
let sumaDeNotasMision2 = 0
let sumaDeNotasMision3 = 0



while (menu !== 13) {
    menu = parseInt(prompt
        (
            `
    BIENVENIDO AL MENÚ COEX
    presione el numero de la opcion que desee...

    1. Ingresar la cantidad de talentos
    2. Ingresar los datos de los talentos
    3. Registrar nota de la mision 1
    4. Registrar nota de la mision 2
    5. Registrar nota de la mision 3
    6. Registrar prueba de nivel final
    7. Mostrar nombre y nota del talento con la mejor nota en la mision 1
    8. Mostrar nombre y nota del talento con la mejor nota en la mision 2
    9. Mostrar nombre y nota del talento con la mejor nota en la mision 3
    10. Mostrar el nombre y el promedio de cada talento 
    11. Mostrar codigo, nombre, nota misión1, nota mision2 y nota misión 3, y
    prueba final
    12. Mostrar datos del talento que realizó este ejercicio
    13. Salir
    `))
    while (isNaN(menu) || menu <= 0 || menu > 13) {
        menu = parseInt(prompt
            (
                `
        ERROR.
    presione el numero de la opcion que desee...
        
    1. Ingresar la cantidad de talentos
    2. Ingresar los datos de los talentos
    3. Registrar nota de la mision 1
    4. Registrar nota de la mision 2
    5. Registrar nota de la mision 3
    6. Registrar prueba de nivel final
    7. Mostrar nombre y nota del talento con la mejor nota en la mision 1
    8. Mostrar nombre y nota del talento con la mejor nota en la mision 2
    9. Mostrar nombre y nota del talento con la mejor nota en la mision 3
    10. Mostrar el nombre y el promedio de cada talento 
    11. Mostrar codigo, nombre, nota misión1, nota mision2 y nota misión 3, y
    prueba final
    12. Mostrar datos del talento que realizó este ejercicio
    13. Salir
        `))
    }
    switch (menu) {
        case 1:
            if (cantidadDeTalentos === 0) {
                cantidadDeTalentos = parseInt(prompt("ingrese la cantidad de talentos"))
                while (cantidadDeTalentos <= 0 || isNaN(cantidadDeTalentos)) {
                    cantidadDeTalentos = parseInt(prompt(" ERROR, ingrese la cantidad de talentos"))
                }
            } else { alert(" ERROR, ya registró la cantidad de talentos") }

            break


        case 2:
            if (datosdetalentos.length == 0) {


                let codigovalido = 0
                let i = 0
                if (cantidadDeTalentos == undefined || cantidadDeTalentos == "") {
                    alert("tiene que haber una cantidad de talentos ingresada")
                }
                else {
                    do {
                        codigovalido = 0
                        for (i; i < cantidadDeTalentos;) {
                            codigovalido = 0
                            datosdetalentos[i] = [0, ""]
                            datosdetalentos[i][0] = parseInt(prompt(` estudiante ${i + 1} ingrese su codigo`))
                            while (datosdetalentos[i][0] <= 0 || isNaN(datosdetalentos[i][0])) {
                                datosdetalentos[i][0] = parseInt(prompt(` estudiante ${i + 1} ingrese un codigo valido `))


                            } if (datosdetalentos.length > 1) {
                                for (let j = 0; j < datosdetalentos.length - 1; j++) {
                                    if (
                                        datosdetalentos[i][0] !== datosdetalentos[j][0]
                                    ) {



                                    } else {
                                        alert(" codigo repetido")
                                        codigovalido = 1;
                                        break;
                                    }
                                }


                                if (codigovalido === 0) {
                                    datosdetalentos[i][1] = prompt("ingrese el nombre del talento de codigo" + datosdetalentos[i][0])
                                    while (!isNaN(datosdetalentos[i][1]) || datosdetalentos[i][1] == "") {
                                        datosdetalentos[i][1] = prompt("ERROR, ingrese el nombre del talento")
                                    }
                                    i++
                                    if (i < cantidadDeTalentos) {
                                        codigovalido = 1
                                    } else {
                                        codigovalido = 0
                                        break;
                                    }

                                }


                            } else {
                                datosdetalentos[i][1] = prompt("ingrese el nombre del talento de codigo" + datosdetalentos[i][0])
                                while (!isNaN(datosdetalentos[i][1]) || datosdetalentos[i][1] == "") {
                                    datosdetalentos[i][1] = prompt("ERROR, ingrese el nombre del talento")
                                }
                                i++
                                if (i < cantidadDeTalentos) {
                                    codigovalido = 1
                                } else {
                                    codigovalido = 0
                                    break;
                                }
                            }




                        }


                    } while (codigovalido === 1)
                }
            } else { alert(" ERROR, ya hay datos registrados") }
            break;
        case 3:
            if (datosdetalentos.length == undefined || datosdetalentos.length == 0) {
                alert("tiene que haber una cantidad de talentos registrada")
            } 
            else if (notasMision1.length > 0 ){
                alert("ya hay notas de la mision 1 registradas")
            }
            else {
                for (let a = 0; a < cantidadDeTalentos; a++) {
                    notasMision1[a] = parseInt(prompt("ingrese la nota de la mision 1 del estudiante con el codigo" + datosdetalentos[a][0]))
                    while (isNaN(notasMision1[a]) || notasMision1[a] < 0 || notasMision1[a] > 100) {
                        notasMision1[a] = parseInt(prompt("ERROR, ingrese una nota valida"))
                    }
                    if (mejorNotaDeLaMision1 === 0) {
                        mejorNotaDeLaMision1 = notasMision1[a]
                        mejorTalentoMision1 = a
                    }
                    else if (notasMision1[a] > mejorNotaDeLaMision1) {
                        mejorNotaDeLaMision1 = notasMision1[a]
                        mejorTalentoMision1 = a
                    }

                }

            }
            break
        case 4:
            if (datosdetalentos.length == undefined || datosdetalentos.length == 0) {
                alert('debe haber una cantidad de talentos registrada')
            }
            else if (notasMision1.length === 0) {
                alert("primero debe ingresar las notas de las misiones anteriores")
            }
            else if (notasMision2.length > 0 ){
                alert("ya hay notas de la mision 2 registradas")
            }
            else {
                for (let i = 0; i < cantidadDeTalentos; i++) {
                    notasMision2[i] = parseInt(prompt('ingrese la nota de la mision 2 del estudiante con el codigo' + datosdetalentos[i][0]))
                    while (isNaN(notasMision2[i]) || notasMision2[i] < 0 || notasMision2[i] > 100 || notasMision2[i] < 0 || notasMision2[i] == undefined) {
                        notasMision2[i] = parseInt(prompt(" ERROR, ingrese la nota de la mision 2 del estudiante con el codigo"(i + 1)))
                    }
                    if (mejorNotaDeLaMision2 === 0) {
                        mejorNotaDeLaMision2 = notasMision2[i]
                        mejorTalentoMision2 = i
                    }
                    else if (notasMision2[i] > mejorNotaDeLaMision2) {
                        mejorNotaDeLaMision2 = notasMision2[i]
                        mejorTalentoMision2 = i
                    }


                }
            } break
        case 5:
            if (datosdetalentos.length == undefined || datosdetalentos.length == 0) {
                alert('debe haber una cantidad de talentos registrada')
            }
            else if (notasMision2.length === 0) {
                alert("primero debe ingresar las notas de las misiones anteriores")
            }
            else if (notasMision3.length > 0 ){
                alert("ya hay notas de la Mision3 registradas")
            }
            else {
                for (let i = 0; i < cantidadDeTalentos; i++) {
                    notasMision3[i] = parseInt(prompt('ingrese la nota de la mision 3 del estudiante con el codigo' + datosdetalentos[i][0]))
                    while (isNaN(notasMision3[i]) || notasMision3[i] < 0 || notasMision3[i] > 100 || notasMision3[i] == undefined) {
                        notasMision3[i] = parseInt(prompt(" ERROR, ingrese la nota de la mision 3 del estudiante con el codigo"(i + 1)))
                    }
                    if (mejorNotaDeLaMision3 === 0) {
                        mejorNotaDeLaMision3 = notasMision3[i]
                        mejorTalentoMision3 = i
                    }
                    else if (notasMision3[i] > mejorNotaDeLaMision3) {
                        mejorNotaDeLaMision3 = notasMision3[i]
                        mejorTalentoMision3 = i
                    }

                }
            } break
        case 6:
            if (datosdetalentos.length == undefined || datosdetalentos.length == 0) {
                alert('debe haber una cantidad de talentos registrada')
            }
            else if (notasMision3.length === 0) {
                alert("primero debe ingresar las notas de las misiones anteriores")
            }
            else if (pruebaFinal.length > 0 ){
                alert("ya hay notas de la prueba final registradas")
            }
            else {
                for (let i = 0; i < cantidadDeTalentos; i++) {
                    pruebaFinal[i] = parseInt(prompt('ingrese la nota de la prueba final del talento con el codigo' + datosdetalentos[i][0]))
                    while (pruebaFinal[i] < 0 || pruebaFinal[i] > 100 || isNaN(pruebaFinal[i])) {
                        pruebaFinal[i] = parseInt(prompt('ERROR, ingrese la nota de la prueba final del talento con el codigo' + datosdetalentos[i][0]))
                    }

                }
            }
            break
        case 7:
            if (datosdetalentos.length == undefined || datosdetalentos.length == 0) {
                alert('debe haber una cantidad de talentos registrada')
            } else {
                if (mejorNotaDeLaMision1 == 0) {
                    alert(' ingrese las notas de la mision 1')
                }
                else { alert('el talento con la mejor nota en la mision 1 es ' + datosdetalentos[mejorTalentoMision1][1] + ' con una nota de ' + mejorNotaDeLaMision1) }
            }
            break

        case 8:
            if (datosdetalentos.length == undefined || datosdetalentos.length == 0) {
                alert('debe haber una cantidad de talentos registrada')
            } else {
                if (mejorNotaDeLaMision2 === 0) {
                    alert(' ingrese las notas de la mision 2mejorNotaDeLaMision2')
                }
                else { alert('el talento con la mejor nota en la mision 2 es ' + datosdetalentos[mejorTalentoMision2][1] + ' con una nota de ' + mejorNotaDeLaMision2) }
            }
            break;

        case 9:

            if (datosdetalentos.length == undefined || datosdetalentos.length == 0) {
                alert('debe haber una cantidad de talentos registrada')
            } else {
                if (mejorNotaDeLaMision3 === 0) {
                    alert(' ingrese las notas de la mision 3')
                }
                else { alert('el talento con la mejor nota en la mision 3 es ' + datosdetalentos[mejorTalentoMision3][1] + ' con una nota de ' + mejorNotaDeLaMision3) }
            }
            break;
        case 10:
            if (datosdetalentos.length == undefined || datosdetalentos.length == 0) {
                alert('debe haber una cantidad de talentos registrada')
            }
            else if (pruebaFinal.length == 0) {
                alert('debe haber ingresado todas las notas para saber el promedio')
            }
            else {
                let promedios = "promedio talentos"
                for (let i = 0; i < datosdetalentos.length; i++) {
                    promedios += `\n${datosdetalentos[i][1]} : ${(notasMision1[i] + notasMision2[i] + notasMision3[i] + pruebaFinal[i]) / 4}`

                } alert(promedios)

            }
            break;
        case 11: 
        if (datosdetalentos.length == undefined || datosdetalentos.length == 0) {
            alert('debe haber una cantidad de talentos registrada')
        }else {
            let registros = "registro talentos"
            for (let i = 0; i < datosdetalentos.length; i++) {
                registros += `\n codigo :${datosdetalentos[i][0]} - nombre:  ${datosdetalentos[i][1]} - notas: \nmision1: ${notasMision1[i]} - mision2: ${notasMision2[i]} - \nmision3: ${notasMision3[i]} - prueba final : ${pruebaFinal[i]}`

            } alert(registros)

        }
        break;
        case 12 : alert(`
        nombre: Santiago Santamaria
        Grupo : G6 tarde
        coach:  Jorshua Hernandez
        `)
        break;
    }

}
alert("saliendo del programa")
