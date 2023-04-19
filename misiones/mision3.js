let menu = 0;
let cantidadDeTalentos = 0;
let datosDeTalentos = [];

let mision1 = [];
let mejorNotaDeLaMision1 = 0;
let mejorEstudiantePrimeraMision = 0;

let mision2 = [];
let mejorNotaDeLaMision2 = 0;
let mejorEstudianteSegundaMision = 0;

let mision3 = [];
let mejorNotaDeLaMision3 = 0;
let mejorEstudianteTerceraMision = 0;

let pruebaFinal = [];

let promedio = []
let sumaNotasMision1 = [];
let sumaNotasMision2 = [];
let sumaNotasMision3 = [];
let sumaNotasPruebaFinal = [];
let talento = [];
let notasDeLosTalentos = [];




do {

    menu = parseInt(prompt("Ingrese la opcion que desea \n 1. Registrar cantidad de talentos \n 2. Registrar datos de talentos \n 3. Registrar nota de la Misión 1 \n 4. Registrar nota de la Misión 2 \n 5. Registrar nota de la Misión 3 \n 6. Registrar prueba de nivel \n 7. Ver nombre y nota del talento con la mejor nota en la Misión 1 \n 8. Ver nombre y nota del talento con la mejor nota en la Misión 2 \n 9. Ver nombre y nota del talento con la mejor nota en la Misión 3 \n 10. Ver nombre y promedio de cada talento \n 11. Ver código, nombre, notas de las misiones y de la prueba final \n 12. Ver nombre del talento que desarrollaron el ejercicio \n 13. Salir"));

    switch (menu) {
        case 1:
            cantidadDeTalentos = Number(prompt("Ingrese la cantidad de talentos que desea registrar"));
            while (isNaN(cantidadDeTalentos) || cantidadDeTalentos <= 0) {
                cantidadDeTalentos = Number(prompt("Ingrese una cantidad valida"));
            }
            break;
        case 2:

            if(cantidadDeTalentos == undefined){
                alert("DEBE INGRESAR LA CANTIDAD DE TALENTOS")
            }else {
                for (let a = 0; a < cantidadDeTalentos; a++) {
                    datosDeTalentos[a] = [];
                    for (let b = 0; b < 2; b++) {
                        if (b == 0) {
                            datosDeTalentos[a][b] = (a + 1)
                        } else {
                            datosDeTalentos[a][b] = prompt("Ingrese el nombre del talento" + (a + 1));
                            while (!isNaN(datosDeTalentos[a][b]) || datosDeTalentos[a][b] == undefined) {
                                datosDeTalentos[a][b] = prompt("Ingrese un nombre valido" + (a + 1));

                            }

                        }
                    }
                }
            }

            break;

        case 3:

            if (cantidadDeTalentos == undefined) {
                console.log("DEBE INGRESAR LA CANTIDAD DE TALENTOS");
            } else {
                for (let a = 0; a < cantidadDeTalentos; a++) {
                    mision1[a] = Number(prompt("Ingrese la nota de primera mision del estudiante que posse el codigo " + (a + 1)))
                    while (isNaN(mision1[a]) || mision1[a] < 0 || mision1[a] > 100 || mision1[a] == undefined) {
                        mision1[a] = Number(prompt("Ingrese una nota valida para la mision 1"));
                    }
                    if (mision1[a] > mejorNotaDeLaMision1) {
                        mejorNotaDeLaMision1 = mision1[a];
                        mejorEstudiantePrimeraMision = a;
                    }
                    sumaNotasMision1[a] = 0;
                    sumaNotasMision1[a] = mision1[a] + sumaNotasMision1[a];
                }
            }

            break;

        case 4:

            if (cantidadDeTalentos == undefined) {
                console.log("DEBE INGRESAR LA CANTIDAD DE TALENTOS");
            } else {
                for (let a = 0; a < cantidadDeTalentos; a++) {
                    mision2[a] = Number(prompt("Ingrese la nota de segunda mision del estudiante que posse el codigo " + (a + 1)))
                    while (isNaN(mision2[a]) || mision2[a] < 0 || mision2[a] > 100 || mision2[a] == undefined) {
                        mision2[a] = Number(prompt("Ingrese una nota valida para la mision 2"));
                    }
                    if (mision2[a] > mejorNotaDeLaMision2) {
                        mejorNotaDeLaMision2 = mision2[a];
                        mejorEstudianteSegundaMision = a;
                    }
                    sumaNotasMision2[a] = 0;
                    sumaNotasMision2[a] = mision2[a] + sumaNotasMision2[a];
                }
            }

            break;

        case 5:

            if (cantidadDeTalentos == undefined) {
                console.log("DEBE INGRESAR LA CANTIDAD DE TALENTOS");
            } else {
                for (let a = 0; a < cantidadDeTalentos; a++) {
                    mision3[a] = Number(prompt("Ingrese la nota de tercera mision del estudiante que posse el codigo " + (a + 1)))
                    while (isNaN(mision3[a]) || mision3[a] < 0 || mision3[a] > 100 || mision3[a] == undefined) {
                        mision3[a] = Number(prompt("Ingrese una nota valida para la mision 3"));
                    }
                    if (mision3[a] > mejorNotaDeLaMision3) {
                        mejorNotaDeLaMision3 = mision3[a];
                        mejorEstudianteTerceraMision = a;
                    }
                    sumaNotasMision3[a] = 0;
                    sumaNotasMision3[a] = mision3[a] + sumaNotasMision3[a];                    
                }
            }

            break;

        case 6:

            if (cantidadDeTalentos == undefined) {
                console.log("DEBE INGRESAR LA CANTIDAD DE TALENTOS");
            } else {
                for (let a = 0; a < cantidadDeTalentos; a++) {
                    pruebaFinal[a] = Number(prompt("Ingrese la nota de la prueba final del estudiante que posse " + (a + 1)))
                    while (isNaN(pruebaFinal[a]) || pruebaFinal[a] < 0 || pruebaFinal[a] > 100 || pruebaFinal[a] == undefined) {
                        pruebaFinal[a] = Number(prompt("Ingrese una nota validad para la prueba final"))
                    }
                    sumaNotasPruebaFinal[a] = 0;
                    sumaNotasPruebaFinal[a] = pruebaFinal[a] + sumaNotasPruebaFinal[a];                    
                }
            }

            break;

        case 7:

            if (cantidadDeTalentos == undefined) {
                console.log("Primero ingrese el numero de talentos")
            } else {
                if (mejorNotaDeLaMision1 === 0) {
                    console.log("Ingrese las notas de la mision 1 para continuar");
                } else {
                    console.log("El estudiante con la mejor nota de la mision 1 es: " + datosDeTalentos[mejorEstudiantePrimeraMision] + " con una nota de: " + mejorNotaDeLaMision1)
                }
            }

            break;

        case 8:

            if (cantidadDeTalentos == undefined) {
                console.log("Primero ingrese el numero de talentos")
            } else {
                if (mejorNotaDeLaMision2 === 0) {
                    console.log("Ingrese las notas de la mision 2 para continuar");
                } else {
                    console.log("El estudiante con la mejor nota de la mision 2 es: " + datosDeTalentos[mejorEstudianteSegundaMision] + " con una nota de: " + mejorNotaDeLaMision2)
                }
            }

            break;

        case 9:

            if (cantidadDeTalentos == undefined) {
                console.log("Primero ingrese el numero de talentos")
            } else {
                if (mejorNotaDeLaMision1 === 0) {
                    console.log("Ingrese las notas de la mision 3 para continuar");
                } else {
                    console.log("El estudiante con la mejor nota de la mision 3 es: " + datosDeTalentos[mejorEstudianteTerceraMision] + " con una nota de: " + mejorNotaDeLaMision3)
                }
            }

            break;

        case 10:

            if (cantidadDeTalentos == undefined) {
                console.log("Primero ingrese el numero de talentos ")
            } else {
                if (mejorNotaDeLaMision1 === 0 || mejorNotaDeLaMision2 === 0 || mejorNotaDeLaMision3 === 0 || pruebaFinal[0] === undefined) {
                    alert("Faltan notas de las misiones");
                } else {
                    for (let a = 0; a < cantidadDeTalentos; a++) {
                        promedio[a] = (sumaNotasMision1[a] + sumaNotasMision2[a] + sumaNotasMision3[a] + sumaNotasPruebaFinal[a]) / 4;
                    }
                    for (let a = 0; a < cantidadDeTalentos; a++) {
                        talento[a] = [];
                        for (let b = 0; b < 3; b++) {
                            if (b == 0) {
                                talento[a][b] = (a + 1);
                            } else {
                                talento[a][b] = datosDeTalentos[a][b];
                                if (b == 2) {
                                    talento[a][b] = promedio[a];
                                }
                            }
    
                        }
                    }
                }

                console.log(talento);
            }

            break;

        case 11:

            if (cantidadDeTalentos == undefined) {
                console.log("Primero ingrese el numero de talentos")
            } else {
                if (mejorNotaDeLaMision1 === 0 || mejorNotaDeLaMision2 === 0 || mejorNotaDeLaMision3 === 0 || pruebaFinal[0] === undefined) {
                    alert("Faltan notas de las misiones");
                } else {
                    for (let a = 0; a < cantidadDeTalentos; a++) {
                        notasDeLosTalentos[a] = [];
                        for (let b = 0; b < 6; b++) {
                            if (b == 0) {
                                notasDeLosTalentos[a][b] = (a + 1);
                            } else if (b == 1) {
                                notasDeLosTalentos[a][b] = datosDeTalentos[a][b];
                            } else if (b == 2) {
                                notasDeLosTalentos[a][b] = mision1[a];
                            } else if (b == 3) {
                                notasDeLosTalentos[a][b] = mision2[a];
                            } else if (b == 4) {
                                notasDeLosTalentos[a][b] = mision3[a];
                            } else {
                                notasDeLosTalentos[a][b] = pruebaFinal[a]
                            }
                        }
                    }
                }

                console.log(notasDeLosTalentos);
            }
            break;

        case 12:

            alert("FELIPE GIL")


            break;


        default:
            break;
    }


} while (menu !== 13);