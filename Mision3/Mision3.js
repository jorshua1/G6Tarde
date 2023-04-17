/*1. Solicite la cantidad N de talentos (solo se debe hacer una vez y no debe
permitir hacer los otros hasta no haberla realizado)
2. Registrar los datos de los talentos en una matriz 2xN (Código y Nombre)
3. Registrar nota de Misión 1
4. Registrar nota de Misión 2
5. Registrar nota de Misión 3
6. Registrar prueba de nivel final
7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene
de las 4 pruebas)
11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y
prueba final
12.Nombre de los talentos que desarrollaron el ejercicio
13.Salir
Se debe validar que la nota de cada talento esté entre 0 y 100, Se debe evitar
que se repitan códigos al registrar estudiantes, Se debe validar que el nombre
del talento no esté vacío*/
let cant_estudiantes = null;
let estudiantes = [];
let mision1 = [], mision2 = [], mision3 = [], pruebafinal = [];
let seguir = 0;
let opcion;

do {
    opcion = parseInt(prompt("1. Cantidad de talentos\n" +
        "2. Registrar los datos de los talentos\n" +
        "3. Registrar nota de Misión 1\n" +
        "4. Registrar nota de Misión 2\n" +
        "5. Registrar nota de Misión 3\n" +
        "6. Registrar prueba de nivel final\n" +
        "7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1\n" +
        "8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2\n" +
        "9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3\n" +
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
                for (var documento = 0; documento < cant_estudiantes; documento++) {
                    estudiantes[documento] = new Array;
                    for (var nombre = 0; nombre < 2; nombre++) {
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
                            mision1[i][x] = prompt("por favor ingresar la nota de la mision 1 del estudiante: " + estudiantes[i][x]);
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
                            mision2[i][x] = prompt("por favor ingresar la nota de la mision 2 del estudiante: " + estudiantes[i][x]);
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
                    mision2[i] = new Array;
                    for (let x = 0; x < 2; x++) {
                        if (x == 0) {
                            mision2[i][x] = estudiantes[temp][(x + 1)];
                        } else if (x == 1) {
                            mision2[i][x] = prompt("por favor ingresar la nota de la mision 3 del estudiante: " + estudiantes[i][x]);
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
                            pruebafinal[i][x] = prompt("por favor ingresar la nota de la prueba final del estudiante: " + estudiantes[i][x]);
                        }
                    }
                }
            } else {
                alert("Lo lamento, no se ha ingresado la cantidad de alunmos");
            }
            break;
        case 7:
            console.table(mision1);
            break;
        case 8:
            console.table(mision2);
            break;
        case 9:
            console.table(mision3);
            break;
        case 10:
            
            break;
        case 11:
            
            break;
        case 12:
                
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