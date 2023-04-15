
estudiantes = [];
mostrarEstudiantes = [];
mostrarNotasEstudiantes = [];
mision1 = [];
mision2 = [];
mision3 = [];
misionFinal = [];
sumatoriaNotasMision1 = [];
sumatoriaNotasMision2 = [];
sumatoriaNotasMision3 = [];
sumatoriaNotasMisionFinal = [];
promedio = [];
mejorNotaMision1 = 0;
mejorNotaMision2 = 0;
mejorNotaMision3 = 0;
bandera = 1;

do {
    opcion = parseInt(prompt("Ingrese la opcion que desea realizar \n1. Ingresar cantidad de talentos \n2. Registrar datos de talentos \n3. Registrar nota de Misión 1 \n4. Registrar nota de Misión 2 \n5. Registrar nota de Misión 3\n6. Registrar prueba de nivel final\n7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1 \n8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2\n9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3\n10. Mostrar nombre y promedio de cada talento \n11. Mostrar código, nombre y notas de las misiones y prueba final \n12. Mostrar nombre de los talentos que desarrollaron el ejercicio \n13. Salir"));

    switch (opcion) {
        case 1:
            var cantidadTalentos = parseInt(prompt("Ingrese la cantidad de talentos"));
            while (isNaN(cantidadTalentos) || cantidadTalentos <= 0) {
                cantidadTalentos = parseInt(prompt("Ingrese la cantidad valida de talentos"));
            }

            break;

        case 2:
            if (cantidadTalentos == undefined) {
                alert("Debe digitar primero la cantidad de talentos, (opcion 1)")
            } else {
                for (let filas = 0; filas < cantidadTalentos; filas++) {
                    estudiantes[filas] = [];
                    for (let columnas = 0; columnas < 2; columnas++) {
                        if (columnas == 0) {
                            estudiantes[filas][columnas] = (filas + 1)
                        } else {
                            estudiantes[filas][columnas] = prompt("Digite el nombre del estudiante " + (filas + 1));
                            while (!isNaN(estudiantes[filas][columnas]) || estudiantes[filas][columnas] == undefined) {
                                estudiantes[filas][columnas] = prompt("Digite un nombre valido del estudiante " + (filas + 1));
                            }
                        }

                    }
                }
            }
            break;

        case 3:
            if (cantidadTalentos == undefined) {
                alert("Debe digitar primero la cantidad de talentos, (opcion 1)")
            } else {
                for (let i = 0; i < cantidadTalentos; i++) {
                    mision1[i] = parseFloat(prompt("Ingrese la nota de la mision 1 para el estudiante con codigo: " + (i + 1)));
                    while (isNaN(mision1[i]) || mision1[i] < 0 || mision1[i] > 100 || mision1[i] == undefined) {
                        mision1[i] = parseFloat(prompt("Ingrese una nota valida de la mision 1 para el estudiante con codigo: " + (i + 1)));
                    }
                    if (mision1[i] > mejorNotaMision1) {
                        mejorNotaMision1 = mision1[i];
                        mejorEstudianteMision1 = i;
                    }
                    sumatoriaNotasMision1[i] = 0;
                    sumatoriaNotasMision1[i] = mision1[i] + sumatoriaNotasMision1[i];
                }
            }
            break;

        case 4:
            if (cantidadTalentos == undefined) {
                alert("Debe digitar primero la cantidad de talentos, (opcion 1)")
            } else {
                for (let i = 0; i < cantidadTalentos; i++) {
                    mision2[i] = parseFloat(prompt("Ingrese la nota de la mision 2 para el estudiante con codigo: " + (i + 1)));
                    while (isNaN(mision2[i]) || mision2[i] < 0 || mision2[i] > 100 || mision2[i] == undefined) {
                        mision2[i] = parseFloat(prompt("Ingrese una nota valida de la mision 2 para el estudiante con codigo: " + (i + 1)));
                    }
                    if (mision2[i] > mejorNotaMision2) {
                        mejorNotaMision2 = mision2[i];
                        mejorEstudianteMision2 = i;
                    }

                    sumatoriaNotasMision2[i] = 0;
                    sumatoriaNotasMision2[i] = mision2[i] + sumatoriaNotasMision2[i];
                }

            }
            break;

        case 5:
            if (cantidadTalentos == undefined) {
                alert("Debe digitar primero la cantidad de talentos, (opcion 1)")
            } else {
                for (let i = 0; i < cantidadTalentos; i++) {
                    mision3[i] = parseFloat(prompt("Ingrese la nota de la mision 3 para el estudiante con codigo: " + (i + 1)));
                    while(isNaN(mision3[i]) || mision3[i] < 0 || mision3[i] > 100 || mision3[i] == undefined) {
                        mision3[i] = parseFloat(prompt("Ingrese una nota valida de la mision 3 para el estudiante con codigo: " + (i + 1)));
                    }
                    if (mision3[i] > mejorNotaMision3) {
                        mejorNotaMision3 = mision3[i];
                        mejorEstudianteMision3 = i;
                    }

                    sumatoriaNotasMision3[i] = 0;
                    sumatoriaNotasMision3[i] = mision3[i] + sumatoriaNotasMision3[i];
                }

            }
            break;

        case 6:
            if (cantidadTalentos == undefined) {
                alert("Debe digitar primero la cantidad de talentos, (opcion 1)")
            } else {
                for (let i = 0; i < cantidadTalentos; i++) {
                    misionFinal[i] = parseFloat(prompt("Ingrese la nota de la mision final para el estudiante con codigo: " + (i + 1)));
                    while (isNaN(misionFinal[i] || misionFinal[i] < 0 || misionFinal[i] > 100 || misionFinal[i] == undefined)) {
                        misionFinal[i] = parseFloat(prompt("Ingrese una nota valida de la mision final para el estudiante con codigo: " + (i + 1)));
                    }

                    sumatoriaNotasMisionFinal[i] = 0;
                    sumatoriaNotasMisionFinal[i] = misionFinal[i] + sumatoriaNotasMisionFinal[i];
                }
            }
            break;

        case 7:
            if (cantidadTalentos == undefined) {
                alert("Debe digitar primero la cantidad de talentos, (opcion 1)")
            } else {
                if (mejorNotaMision1 === 0) {
                    alert("Debe ingresar primero las notas de la mision 1");
                } else {
                    alert("El nombre del estudiante con la mejor nota de la mision 1 es: " + estudiantes[mejorEstudianteMision1] + " y su nota es de: " + mejorNotaMision1)
                }
            }
            break;

        case 8:
            if (cantidadTalentos == undefined) {
                alert("Debe digitar primero la cantidad de talentos, (opcion 1)")
            } else {
                if (mejorNotaMision2 === 0) {
                    alert("Debe ingresar primero las notas de la mision 2");
                } else {
                    alert("La mejor nota de la mision 2 es de: " + estudiantes[mejorEstudianteMision2] + " y su nota es de: " + mejorNotaMision2)
                }
            }
            break;

        case 9:
            if (cantidadTalentos == undefined) {
                alert("Debe digitar primero la cantidad de talentos, (opcion 1)")
            } else {
                if (mejorNotaMision3 === 0) {
                    alert("Debe ingresar primero las notas de la mision 3");
                } else {
                    alert("La mejor nota de la mision 3 es de: " + estudiantes[mejorEstudianteMision3] + " y su nota es de: " + mejorNotaMision3)

                }
            }
            break;

        case 10:
            if (cantidadTalentos == undefined) {
                alert("Debe digitar primero la cantidad de talentos, (opcion 1)")
            } else {

                if (mejorNotaMision1 === 0 || mejorNotaMision2 === 0 || mejorNotaMision3 === 0 || misionFinal[0] === undefined) {
                    alert("Falta alguna nota de alguna de las misiones");
                } else {
                    for (let i = 0; i < cantidadTalentos; i++) {
                        promedio[i] = sumatoriaNotasMision1[i] + sumatoriaNotasMision2[i] + sumatoriaNotasMision3[i] + sumatoriaNotasMisionFinal[i];
                        promedio[i] = promedio[i] / 4
                    }
    
                    for (let filas = 0; filas < cantidadTalentos; filas++) {
                        mostrarEstudiantes[filas] = [];
                        for (let columnas = 0; columnas < 3; columnas++) {
                            if (columnas == 0) {
                                mostrarEstudiantes[filas][columnas] = (filas + 1);
                            } else {
                                mostrarEstudiantes[filas][columnas] = estudiantes[filas][columnas];
                                if (columnas == 2) {
                                    mostrarEstudiantes[filas][columnas] = promedio[filas];
                                }
                            }
    
                        }
                    }
                    console.log(mostrarEstudiantes);
                }

            }
            break;

        case 11:
            if (cantidadTalentos == undefined) {
                alert("Debe digitar primero la cantidad de talentos, (opcion 1)")
            } else {
                if (mejorNotaMision1 === 0 || mejorNotaMision2 === 0 || mejorNotaMision3 === 0 || misionFinal[0] === undefined) {
                    alert("Falta alguna nota de alguna de las misiones");
                } else {
                    for (let filas = 0; filas < cantidadTalentos; filas++) {
                        mostrarNotasEstudiantes[filas] = [];
                        for (let columnas = 0; columnas < 6; columnas++) {
                            if (columnas == 0) {
                                mostrarNotasEstudiantes[filas][columnas] = (filas + 1);
                            } else {
                                if (columnas == 1) {
                                    mostrarNotasEstudiantes[filas][columnas] = estudiantes[filas][columnas];
                                } else {
                                    if (columnas == 2) {
                                        mostrarNotasEstudiantes[filas][columnas] = mision1[filas];
                                    } else {
                                        if (columnas == 3) {
                                            mostrarNotasEstudiantes[filas][columnas] = mision2[filas];
                                        } else {
                                            if (columnas == 4) {
                                                mostrarNotasEstudiantes[filas][columnas] = mision3[filas];
                                            } else {
                                                mostrarNotasEstudiantes[filas][columnas] = misionFinal[filas]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                console.log(mostrarNotasEstudiantes);
            }
            break;

        case 12:
            if (cantidadTalentos == undefined) {
                alert("Debe digitar primero la cantidad de talentos, (opcion 1)")
            } else {
                alert("Diego Tarazona Pedraza");
            }
            break;

        case 13:
            bandera = 2;
            break;

        default:
            break;
    }
} while (bandera === 1);