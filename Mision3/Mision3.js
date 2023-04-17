let cant_estudiantes = null;
let estudiantes = [];
let mision1 = [], mision2 = [], mision3 = [], pruebafinal = [];
let seguir = 0;
let opcion;
let a, b, c, d;

do {
    opcion = parseInt(prompt("1. Cantidad de talentos\n" +
        "2. Registrar los datos de los talentos\n" +
        "3. Registrar nota de Misión 1\n" +
        "4. Registrar nota de Misión 2\n" +
        "5. Registrar nota de Misión 3\n" +
        "6. Registrar prueba de nivel final\n" +
        "7. nombre y nota del talento con la mejor nota en la Misión 1\n" +
        "8. nombre y nota del talento con la mejor nota en la Misión 2\n" +
        "9. nombre y nota del talento con la mejor nota en la Misión 3\n" +
        "10.Mostrar el nombre y el promedio de cada talento\n" +
        "11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y prueba final\n" +
        "12.Nombre de los talentos que desarrollaron el ejercicio\n" +
        "13.Salir"));
    switch (opcion) {
        case 1:
            if (cant_estudiantes == null) {
                cant_estudiantes = parseInt(prompt("por favor ingresar la cantidad de estudiantes a realizar el registro de notas"));
                while (isNaN(cant_estudiantes)) {
                    alert("Error, valor ingresado invalido");
                    cant_estudiantes = parseInt(prompt("por favor ingresar la cantidad de estudiantes a realizar el registro de notas"));
                }
            } else {
                alert("No se permite volver a ingresar datos");
            }

            break;
        case 2:
            if (cant_estudiantes != null) {
                for (let documento = 0; documento < cant_estudiantes; documento++) {
                    estudiantes[documento] = new Array;
                    for (let nombre = 0; nombre < 2; nombre++) {
                        if (nombre == 0) {
                            estudiantes[documento][nombre] = parseInt(prompt("por favor ingresar el documento del estudiante " + (documento + 1)));
                            while (isNaN(estudiantes[documento][nombre]) || estudiantes[documento][nombre] < 0) {
                                alert("Error, informacion ingresada invalida");
                                estudiantes[documento][nombre] = parseInt(prompt("por favor ingresar el documento del estudiante " + (documento + 1)));
                            }
                        } else if (nombre == 1) {
                            estudiantes[documento][nombre] = prompt("por favor ingresar el nombre del estudiante " + (documento + 1));
                            while (!isNaN(estudiantes[documento][nombre])) {
                                alert("Error, informacion ingresada invalida");
                                estudiantes[documento][nombre] = prompt("por favor ingresar el nombre del estudiante " + (documento + 1));
                            }
                        }
                    }
                }
            } else {
                alert("Lo lamento, no se ha ingresado la cantidad de alunmos");
            }

            break;
        case 3:
            if (cant_estudiantes != null) {

                for (let i = 0; i < cant_estudiantes; i++) {
                    mision1[i] = new Array;
                    for (let x = 0; x < 2; x++) {
                        if (x == 0) {
                            mision1[i][x] = estudiantes[i][(x + 1)];
                        } else if (x == 1) {
                            mision1[i][x] = parseInt(prompt("por favor ingresar la nota de la mision 1 (entre 0 y 100), del estudiante: " + estudiantes[i][x]));
                            while (isNaN(mision1[i][x]) || mision1[i][x] < 0 || mision1[i][x] >= 100) {
                                alert("Error, el dato ingresado no es de caracter numerico o supera el rango de la nota");
                                mision1[i][x] = parseInt(prompt("por favor ingresar la nota de la mision 1 (entre 0 y 100), del estudiante: " + estudiantes[i][x]));
                            }
                        }
                    }
                }
            } else {
                alert("Lo lamento, no se ha ingresado la cantidad de alunmos");
            }
            break;
        case 4:
            if (cant_estudiantes != null) {

                for (let i = 0; i < cant_estudiantes; i++) {
                    mision2[i] = new Array;
                    for (let x = 0; x < 2; x++) {
                        if (x == 0) {
                            mision2[i][x] = estudiantes[i][(x + 1)];
                        } else if (x == 1) {
                            mision2[i][x] = parseInt(prompt("por favor ingresar la nota de la mision 2 (entre 0 y 100), del estudiante: " + estudiantes[i][x]));
                            while (isNaN(mision2[i][x]) || mision2[i][x] < 0 || mision2[i][x] >= 100) {
                                alert("Error, el dato ingresado no es de caracter numerico o supera el rango de la nota");
                                mision2[i][x] = parseInt(prompt("por favor ingresar la nota de la mision 2 (entre 0 y 100), del estudiante: " + estudiantes[i][x]));
                            }
                        }
                    }
                }
            } else {
                alert("Lo lamento, no se ha ingresado la cantidad de alunmos");
            }
            break;
        case 5:
            if (cant_estudiantes != null) {

                for (let i = 0; i < cant_estudiantes; i++) {
                    mision3[i] = new Array;
                    for (let x = 0; x < 2; x++) {
                        if (x == 0) {
                            mision3[i][x] = estudiantes[i][(x + 1)];
                        } else if (x == 1) {
                            mision3[i][x] = parseInt(prompt("por favor ingresar la nota de la mision 3 (entre 0 y 100), del estudiante: " + estudiantes[i][x]));
                            while (isNaN(mision3[i][x]) || mision3[i][x] < 0 || mision3[i][x] >= 100) {
                                alert("Error, el dato ingresado no es de caracter numerico o supera el rango de la nota");
                                mision3[i][x] = parseInt(prompt("por favor ingresar la nota de la mision 3 (entre 0 y 100), del estudiante: " + estudiantes[i][x]));
                            }
                        }
                    }
                }
            } else {
                alert("Lo lamento, no se ha ingresado la cantidad de alunmos");
            }
            break;
        case 6:
            if (cant_estudiantes != null) {

                for (let i = 0; i < cant_estudiantes; i++) {
                    pruebafinal[i] = new Array;
                    for (let x = 0; x < 2; x++) {
                        if (x == 0) {
                            pruebafinal[i][x] = estudiantes[i][(x + 1)];
                        } else if (x == 1) {
                            pruebafinal[i][x] = parseInt(prompt("por favor ingresar la nota de la prueba final (entre 0 y 100), del estudiante: " + estudiantes[i][x]));
                            while (isNaN(pruebafinal[i][x]) || pruebafinal[i][x] < 0 || pruebafinal[i][x] >= 100) {
                                alert("Error, el dato ingresado no es de caracter numerico o supera el rango de la nota");
                                pruebafinal[i][x] = parseInt(prompt("por favor ingresar la nota de la prueba final (entre 0 y 100), del estudiante: " + estudiantes[i][x]));
                            }
                        }
                    }
                }
            } else {
                alert("Lo lamento, no se ha ingresado la cantidad de alunmos");
            }
            break;
        case 7:
            if (estudiantes.length > 0) {
                let mejorNota = 0;
                for (let i = 0; i < cant_estudiantes; i++) {
                    if (mejorNota === 0) {
                        mejorNota = mision1[i][1];
                    } else if (mision1[i][1] > mejorNota) {
                        mejorNota = mision1[i][1];
                    }
                }
                for (let i = 0; i < cant_estudiantes; i++) {
                    if (mision1[i][1] === mejorNota) {
                        alert("El estudiante con mejor nota en misión 1 es: " + mision1[i][0] + "\nNota: " + mision1[i][1]);
                    }
                }
            } else {
                alert("No hay datos de talentos registrados, no se puede acceder a esta acción.");
            }
            break;
        case 8:
            if (estudiantes.length > 0) {
                let mejorNota = 0;
                for (let i = 0; i < cant_estudiantes; i++) {
                    if (mejorNota === 0) {
                        mejorNota = mision2[i][1];
                    } else if (mision2[i][1] > mejorNota) {
                        mejorNota = mision2[i][1];
                    }
                }
                for (let i = 0; i < cant_estudiantes; i++) {
                    if (mision2[i][1] === mejorNota) {
                        alert("El estudiante con mejor nota en misión 2 es: " + mision2[i][0] + "\nNota: " + mision2[i][1]);
                    }
                }
            } else {
                alert("No hay datos de talentos registrados, no se puede acceder a esta acción.");
            }
            break;
        case 9:
            if (estudiantes.length > 0) {
                let mejorNota = 0;
                for (let i = 0; i < cant_estudiantes; i++) {
                    if (mejorNota === 0) {
                        mejorNota = mision3[i][1];
                    } else if (mision3[i][1] > mejorNota) {
                        mejorNota = mision3[i][1];
                    }
                }
                for (let i = 0; i < cant_estudiantes; i++) {
                    if (mision3[i][1] === mejorNota) {
                        alert("El estudiante con mejor nota en misión 3 es: " + mision3[i][0] + "\nNota: " + mision3[i][1]);
                    }
                }
            } else {
                alert("No hay datos de talentos registrados, no se puede acceder a esta acción.");
            }
            break;
        case 10:
            if (cant_estudiantes != null || mision1 == null || mision2 == null || mision3 == null) {
                for (let i = 0; i < cant_estudiantes; i++) {
                    console.log("--------------------------------------------------");
                    for (let nombre = 0; nombre < 2; nombre++) {
                        if (nombre == 1) {
                            console.log("Nombre del estudiante: " + estudiantes[i][nombre]);
                            a = mision1[i][nombre];
                            b = mision2[i][nombre];
                            c = mision3[i][nombre];
                            d = pruebafinal[i][nombre]
                        }

                    }
                    let promedio;
                    promedio = (a + b + c + d) / 4;
                    console.log("promedio: " + promedio);
                }
            } else {
                alert("Lo lamento, no se han ingresado todos los datos de los estudiantes");
            }
            break;
        case 11:
            if (cant_estudiantes != null || mision1 == null || mision2 == null || mision3 == null) {
                for (let i = 0; i < cant_estudiantes; i++) {
                    console.log("--------------------------------------------------");
                    for (let nombre = 0; nombre < 2; nombre++) {
                        if (nombre == 0) {
                            console.log("Documento del estudiante: " + estudiantes[i][(nombre)]);
                        } else if (nombre == 1) {
                            console.log("Nombre del estudiante: " + estudiantes[i][nombre]);
                        }

                    }
                    console.log("Registra las siguientes calificaciones:");
                    for (let x = 0; x < 2; x++) {
                        if (x == 1) {
                            console.log("Mision 1: " + mision1[i][x]);
                        }
                    }
                    for (let x = 0; x < 2; x++) {
                        if (x == 1) {
                            console.log("Mision 2: " + mision2[i][x]);
                        }
                    }
                    for (let x = 0; x < 2; x++) {
                        if (x == 1) {
                            console.log("Mision 3 :" + mision3[i][x]);
                        }
                    }
                    for (let x = 0; x < 2; x++) {
                        if (x == 1) {
                            console.log("Prueba final: " + pruebafinal[i][x]);
                        }
                    }
                }
            } else {
                alert("Lo lamento, no se han ingresado datos de los estudiantes");
            }
            break;
        case 12:
            if (estudiantes.leng !== null) {
                for (let i = 0; i < cant_estudiantes; i++) {
                    console.log("--------------------------------------------------");
                    for (let nombre = 0; nombre < 2; nombre++) {
                        if (nombre == 1) {
                            console.log("Nombre del estudiante: " + estudiantes[i][nombre]);
                        }
                    }
                }
            } else {
                alert("Lo lamento, no se han ingresado todos los datos de los estudiantes");
            }
            break;
        case 13:
            seguir = 13;
            break;

        default:
            console.log("lo lamento, el valor ingresado esta por fuera de las opciones");
            break;
    }


} while (seguir !== 13);
console.table(estudiantes);