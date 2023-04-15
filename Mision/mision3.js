opcion = 0

numeroTalentos = parseInt(prompt("Cuntos talentos desea registrar?"))
while (isNaN(numeroTalentos) || numeroTalentos < 0) {
    alert("Por favor dijite un nunmero valido para la cantidad de talentos")
    numeroTalentos = parseInt(prompt("Cuntos talentos desea registrar?"))
}


estudiantes = []
notasMision1 = []
notasMision2 = []
notasMision3 = []
notasPruebaFinal = []
promedio = []

while (opcion != 7) {

    opcion = parseInt(prompt("Por favor seleccione una opcion \n\n==================* MENÚ *===================\n 1. Registrar talentos y notas\n 2. Mostrar nombre y nota del talento con la mejor nota en la MISION 1\n 3. Mostrar nombre y nota del talento con la mejor nota en la MISION 2\n 4. Mostrar nombre y nota del talento con la mejor nota en la MISION 3\n 5. Mostrar nombre y promedio de cada talento\n 6. Mostrar nombre de los talentos registrados\n 7. Salir\n==========================================="))

    while (isNaN(opcion) || opcion < 0 || opcion > 8) {

        alert("Por favor seleccione una opcion valida para el menú")
        opcion = parseInt(prompt("Por favor seleccione una opcion \n\n==================* MENÚ *===================\n 1. Registrar talentos y notas\n 2. Mostrar nombre y nota del talento con la mejor nota en la MISION 1\n 3. Mostrar nombre y nota del talento con la mejor nota en la MISION 2\n 4. Mostrar nombre y nota del talento con la mejor nota en la MISION 3\n 5. Mostrar nombre y promedio de cada talento\n 6. Mostrar nombre de los talentos registrados\n 7. Salir\n==========================================="))
    }

    switch (opcion) {
        case 1:
            alert("Registrar talentos y notas")

            opcion2 = 0
            /////sub menu
            while (opcion2 !== 6) {
                opcion2 = parseInt(prompt("Por favor seleccione una opcion \n\n==================* MENÚ *===================\n 1. Registrar Estudiantes\n 2. Registrar notas de la MISION 1 \n 3. Registrar notas de la MISION 2\n 4. Registrar notas de la MISION 3\n 5. Registrar notas de la prueba final\n 6. volver\n==========================================="))

                while (isNaN(opcion2) || opcion2 < 0 || opcion2 > 6) {

                    alert("Por favor seleccione una opcion valida para el menú")
                    opcion2 = parseInt(prompt("Por favor seleccione una opcion \n\n==================* MENÚ *===================\n 1. Registrar Estudiantes\n 2. Registrar notas de la MISION 1 \n 3. Registrar notas de la MISION 2\n 4. Registrar notas de la MISION 3\n 5. Registrar notas de la prueba final\n 6. volver\n==========================================="))
                }
                switch (opcion2) {
                    case 1:
                        alert("Registrar Estudiantes")
                        if (estudiantes.length == 0) {

                            for (let filas = 0; filas < numeroTalentos; filas++) {
                                estudiantes[filas] = []
                                for (let columnas = 0; columnas < 2; columnas++) {
                                    if (columnas == 0) {

                                        estudiantes[filas][columnas] = (filas + 1)

                                    } else {

                                        nombreEstuidiante = prompt("Digite el nombre del estudiante " + (filas + 1))
                                        while (!isNaN(nombreEstuidiante)) {
                                            alert("dijite un nombre valido")
                                            nombreEstuidiante = prompt("Digite el nombre del estudiante " + (filas + 1))
                                        }
                                        estudiantes[filas][columnas] = nombreEstuidiante
                                    }
                                }
                                alert("Talento ingresado.")
                            }
                            alert("Datos ingresados con exito")
                        } else {
                            alert("Usted ya ha ingresado a los estudiantes")
                        }



                        break;
                    case 2:
                        alert("Registrar notas de la MISION 1")

                        if (notasMision1.length == 0) {
                            for (let i = 0; i < numeroTalentos; i++) {
                                notaMision1 = parseInt(prompt("Ingrese la nota de la MISION 1 para el estudiante con codigo: " + (i + 1)))
                                while (isNaN(notaMision1) || notaMision1 < 1 || notaMision1 > 100) {
                                    alert("Por favor digite una nota valida para el talento")
                                    notaMision1 = parseInt(prompt("Ingrese la nota de la MISION 1 para el estudiante con codigo: " + (i + 1)))
                                }
                                notasMision1[i] = notaMision1

                                alert("Nota ingresada.")

                            }

                            alert("Notas ingresadas con exito!")


                        } else {
                            alert("Usted ya ha ingresado las notas de la MISION 1")
                        }



                        break;
                    case 3:
                        alert("Registrar notas de la MISION 2")
                        if (notasMision2.length == 0) {
                            for (let i = 0; i < numeroTalentos; i++) {
                                notaMision2 = parseInt(prompt("Ingrese la nota de la MISION 2 para el estudiante con codigo: " + (i + 1)))
                                while (isNaN(notaMision2) || notaMision2 < 1 || notaMision2 > 100) {
                                    alert("Por favor digite una nota valida para el talento")
                                    notaMision2 = parseInt(prompt("Ingrese la nota de la MISION 2 para el estudiante con codigo: " + (i + 1)))
                                }
                                notasMision2[i] = notaMision2
                                alert("Nota ingresada.")
                            }

                            alert("Notas ingresadas con exito!")


                        } else {
                            alert("Usted ya ha ingresado las notas de la MISION 2")
                        }


                        break;
                    case 4:
                        alert("Registrar notas de la MISION 3")

                        if (notasMision3.length == 0) {
                            for (let i = 0; i < numeroTalentos; i++) {
                                notaMision3 = parseInt(prompt("Ingrese la nota de la MISION 3 para el estudiante con codigo: " + (i + 1)))
                                while (isNaN(notaMision3) || notaMision3 < 1 || notaMision3 > 100) {
                                    alert("Por favor digite una nota valida para el talento")
                                    notaMision3 = parseInt(prompt("Ingrese la nota de la MISION 3 para el estudiante con codigo: " + (i + 1)))
                                }
                                notasMision3[i] = notaMision3
                                alert("Nota ingresada.")
                            }

                            alert("Notas ingresadas con exito!")


                        } else {
                            alert("Usted ya ha ingresado las notas de la MISION 3")
                        }


                        break;
                    case 5:

                        alert("Registrar notas de la prueba final")

                        if (notasPruebaFinal.length == 0) {

                            for (let i = 0; i < numeroTalentos; i++) {
                                notaPruebaFinal = parseInt(prompt("Ingrese la nota de la prueba final para el estudiante con codigo: " + (i + 1)))
                                while (isNaN(notaPruebaFinal) || notaPruebaFinal < 1 || notaPruebaFinal > 100) {
                                    alert("Por favor digite una nota valida para el talento")
                                    notaPruebaFinal = parseInt(prompt("Ingrese la nota de la prueba final para el estudiante con codigo: " + (i + 1)))
                                }
                                notasPruebaFinal[i] = notaPruebaFinal
                                alert("Nota ingresada.")
                            }

                            alert("Notas ingresadas con exito!")

                        } else {

                            alert("Usted ya ha ingresado las notas de la PRUEBA FINAL")
                        }


                        break;
                    case 6:
                        break;
                    default:
                        alert("Por favor ingrese una opcion valida")
                        break;
                }
            }
            opcion2 = 0

            break;

        case 2:
            alert("Mostrar nombre y nota del talento con la mejor calificacion en la MISION 1")

            persona = 0
            posicion = 0
            notaMayor = 0
            if (notasMision1.length == 0 || notasMision2.length == 0 || notasMision3.length == 0 || notasPruebaFinal.length == 0) {
                alert("ERROR: Por favor, registre primero las notas de los estudiantes antes de visualizar")
            } else {
                ///////for para recorrer el vector de las notas y sacar la posicion
                for (let i = 0; i < numeroTalentos; i++) {
                    if (notasMision1[i] > notaMayor) {
                        posicion = i
                        notaMayor = notasMision1[i]

                    }

                }
                //////// for para recorrer la matriz y comparar la posicion para sacar el nombre del estudiante
                for (let filas = 0; filas < numeroTalentos; filas++) {
                    if (filas == posicion) {
                        persona = filas
                    }
                }

                console.log(estudiantes)
                console.log(notasMision1)
                alert("El talento con mejor mejor calificacion en la MISION 1 es: " + estudiantes[persona][1] + ", con una calificacion de: " + notaMayor)

            }



            break;

        case 3:
            alert("Mostrar nombre y nota del talento con la mejor nota en la MISION 2")

            persona2 = 0
            posicion2 = 0
            notaMayor2 = 0
            if (notasMision1.length == 0 || notasMision2.length == 0 || notasMision3.length == 0 || notasPruebaFinal.length == 0) {
                alert("ERROR: Por favor, registre primero las notas de los estudiantes antes de visualizar")
            } else {
                ///////for para recorrer el vector de las notas y sacar la posicion
                for (let i = 0; i < numeroTalentos; i++) {
                    if (notasMision2[i] > notaMayor2) {
                        posicion2 = i
                        notaMayor2 = notasMision2[i]

                    }

                }
                //////// for para recorrer la matriz y comparar la posicion para sacar el nombre del estudiante
                for (let filas = 0; filas < numeroTalentos; filas++) {
                    if (filas == posicion2) {
                        persona2 = filas
                    }
                }

                console.log(estudiantes)
                console.log(notasMision2)
                alert("El talento con mejor mejor calificacion en la MISION 2 es: " + estudiantes[persona2][1] + ", con una calificacion de: " + notaMayor2)

            }



            break;

        case 4:
            alert("Mostrar nombre y nota del talento con la mejor nota en la MISION 3")

            persona3 = 0
            posicion3 = 0
            notaMayor3 = 0
            if (notasMision1.length == 0 || notasMision2.length == 0 || notasMision3.length == 0 || notasPruebaFinal.length == 0) {
                alert("ERROR: Por favor, registre primero las notas de los estudiantes antes de visualizar")
            } else {
                ///////for para recorrer el vector de las notas y sacar la posicion
                for (let i = 0; i < numeroTalentos; i++) {
                    if (notasMision3[i] > notaMayor3) {
                        posicion3 = i
                        notaMayor3 = notasMision3[i]

                    }

                }
                //////// for para recorrer la matriz y comparar la posicion para sacar el nombre del estudiante
                for (let filas = 0; filas < numeroTalentos; filas++) {
                    if (filas == posicion3) {
                        persona3 = filas
                    }
                }

                console.log(estudiantes)
                console.log(notasMision3)
                alert("El talento con mejor mejor calificacion en la MISION 3 es: " + estudiantes[persona3][1] + ", con una calificacion de: " + notaMayor3)

            }

            break;

        case 5:

            alert("Mostrar nombre y promedio de cada talento")
            if (notasMision1.length == 0 || notasMision2.length == 0 || notasMision3.length == 0 || notasPruebaFinal.length == 0) {

                alert("ERROR: Por favor, registre primero las notas de los estudiantes antes de visualizar")

            } else {
                incrementoDePosicion = 0

                for (let i = 0; i < numeroTalentos; i++) {

                    incrementoDePosicion = i
                    promedio[i] = (notasMision1[i] + notasMision2[i] + notasMision2[i] + notasPruebaFinal[i]) / 4

                    console.log("El estudiante: " + estudiantes[incrementoDePosicion][1] + " tiene un promedio de: " + promedio[i] + "\n")
                    alert("El estudiante: " + estudiantes[incrementoDePosicion][1] + " tiene un promedio de: " + promedio[i] + "\n")
                }

            }


            break;

        case 6:
            alert("Mostrar nombre de los talentos registrados")

            alert(estudiantes)
            alert("Para mejor visualizacion, consulte la consola del sistema ")
            console.log(estudiantes)

            break;

        case 7:
            alert("Saliendo del programa")
            break;

        default:
            alert("Por favor ingrese una opcion valida")
            break;
    }

}