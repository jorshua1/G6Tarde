/*MISION 3:
COEX es una entidad que tiene como misión capacitar jóvenes que desean 
adquirir conocimientos y habilidades en el área de programación. Al llegar a 
COEX, cada talento es registrado con un código y su nombre. Un grupo puede 
estar conformado una cantidad N de talentos. Durante el transcurso del 
módulo uno, se presentan y explican diferentes temáticas y cada talento 
realiza una misión, que es una prueba para medir como va su proceso. Cada 
misión, es puntuada con un valor entre 1 y 100. En total se realizan 3 
misiones. Al finalizar el módulo, se realizará una misión final, conocida como 
prueba de Nivel. Se les solicita a ustedes como talentos que han adquirido los 
conceptos y habilidades de programadores para que creen un programa que 
permita llevar a cabo los registros correspondientes al proceso. Se les solicita 
que el programa tenga un menú que:
1. Solicite la cantidad N de talentos (solo se debe hacer una vez y no debe 
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
del talento no esté vacío */

//cada estudiante tiene un codigo y nombre de registro
// un grupo se conforma por una cantidad N de estudiantes
// mision para medir el proceso se evaluan entre 1-100
// 3 misiones 

let cantidadTalentos = 0;
let codigos = [];
let menu = 0;
let matriz = [0, 0];
let notaMision1 = [0];
let notaMision2 = [0];
let notaMision3 = [0];
let notaFinal = [0];
let mayorNota1 = 0;
let mayorNota2 = 0;
let mayorNota3 = 0;
let promedioNotas = 0;
let talentos = "";
let confirmacion;




while (menu !== 13) {
    menu = parseInt(prompt(`
    Digite un número según la 
    acción que desea ejecutar:
    1. Registrar la cantidad de talentos COEX
    2. Registrar los datos de los talentos COEX
    3. Registrar las notas de la misiones 1
    4. Registrar las notas de la misiones 2
    5. Registrar las notas de la misiones 3
    6. Registrar la nota de la prueba final
    7. Ver el talento con la mejor nota en la misión 1
    8. Ver el talento con la mejor nota en la misión 2
    9. Ver el talento con la mejor nota en la misión 3
    10. Ver el promedio final de cada uno de los talentos COEX
    11. Ver el registro de todas las notas de cada talento COEX
    12. Nombre del talento que desarrolla el ejercicio 
    13. Salir del programa
    `))
    while (isNaN(menu) || menu <= 0 || menu >= 14) {
        menu = parseInt(prompt(`
        ¡¡¡ERROR DATO INVALIDO !!!
        Digite un número según la 
        acción que desea ejecutar:
        1. Registrar la cantidad de talentos COEX
        2. Registrar los datos de los talentos COEX
        3. Registrar las notas de la misiones 1
        4. Registrar las notas de la misiones 2
        5. Registrar las notas de la misiones 3
        6. Registrar la nota de la prueba final
        7. Ver el talento con la mejor nota en la misión 1
        8. Ver el talento con la mejor nota en la misión 2
        9. Ver el talento con la mejor nota en la misión 3
        10. Ver el promedio final de cada uno de los talentos COEX
        11. Ver el registro de todas las notas de cada talento COEX
        12. Nombre del talento que desarrolla el ejercicio 
        13. Salir del programa
        `))
    }
    alert(menu);
    switch (menu) {
        case 1:
            if (cantidadTalentos > 0) {
                alert(`
            Ya tiene una cantidad de talentos registrada,
            si quiere realizar un nuevo registro vuelva a 
            ejecutar el programa.`)
            } else {
                while (cantidadTalentos <= 0 || isNaN(cantidadTalentos) || !Number.isInteger(cantidadTalentos)) {
                    cantidadTalentos = Number(prompt(`
                Ingrese la cantidad total de 
                talentos COEX que quiere registrar,
                recuerde que este dato es necesario
                para continuar con el registro.`))
                    if (isNaN(cantidadTalentos) || cantidadTalentos <= 0) {
                        alert("ERROR INGRESE UN DATO VALIDO")
                    } else {
                        alert("Dato registrado correctamente.")
                    }
                }
            }
            break;
        case 2:
            if (matriz[0] === 0) {
                if (cantidadTalentos <= 0) {
                    alert(`
                    No se puede realizar el registro de los talentos COEX
                    sin antes registrar la cantidad de talentos, por favor 
                    hacer este registro en la opción 1 para continuar.`)
                } else {
                    for (fila = 0; fila < cantidadTalentos; fila++) {
                        console.log(`Registro del talento # ${fila + 1}`);
                        matriz[fila] = [];
                        for (let columna = 0; columna < 2; columna++) {

                            if (columna === 0) {
                                matriz[fila][columna] = (fila + 1)
                            } else {
                                matriz[fila][columna] = prompt(`
                            Acontinuación vas a registrar los talentos COEX
                            Digite el nombre del talento que quiere registrar
                            el sistema ya le asigno un codigo único a este 
                            talento.`);
                                while (!isNaN(matriz[fila][columna]) || matriz[fila][columna] == undefined) {
                                    matriz[fila][columna] = prompt(`
                                Acontinuación vas a registrar los talentos COEX
                                Digite el nombre del talento que quiere registrar
                                el sistema ya le asigno un codigo único a este 
                                talento.`);
                                }
                            }
                            console.log(`
                        El codigo asignado para este talento es ${fila + 1} 
                        datos del talento: ${matriz[fila]}`);
                        }
                    } console.log(matriz);
                }
            } else {
                alert(`Ya tienes los talentos registrados.`)
            }
            break;
        case 3:
            if (notaMision1[0] === 0) {
                if (cantidadTalentos === 0) {
                    alert(`
                ERROR!!! 
                Recuerde que debe registrar la cantidad de talentos COEX primero, 
                ingrese a la opción 1 del menú para hacer este registro`)
                } else {
                    for (let i = 0; i < cantidadTalentos; i++) {
                        notaMision1[i] = parseFloat(prompt(`Ingrese la nota de la misión 1 para el talento con codigo ${i + 1}`));
                        while (isNaN(notaMision1[i]) || notaMision1[i] < 0 || notaMision1[i] > 100 || notaMision1[i] == undefined) {
                            notaMision1[i] = parseFloat(prompt(`
                        ERROR!!! Ingrese un valor valido para la nota de la misión 1 para el talento ${i + 1}`));
                        }
                        if (notaMision1[i] > mayorNota1) {
                            mayorNota1 = notaMision1[i];
                            mayorNota1Talento = i;
                        }
                    }
                }
            } else {
                if (notaMision1[0] !== 0) {
                    confirmacion = parseInt(prompt(`
                    Desea sobreescribir la nota de la misión 1?
                    -Digite 1 para Si.
                    -Digite 2 para No.`));
                    while (isNaN(confirmacion) || confirmacion < 1 || confirmacion > 2) {
                        confirmacion = parseInt(prompt(`
                    ERROR DIGITE UN NUMERO VALIDO!!!
                    Desea sobreescribir la nota de la misión 1?
                    -Digite 1 para Si.
                    -Digite 2 para No.`));
                    }
                    if (confirmacion === 1) {
                        for (let i = 0; i < cantidadTalentos; i++) {
                            notaMision1[i] = parseFloat(prompt(`Ingrese la nota de la misión 1 para el talento con codigo ${i + 1}`));
                            while (isNaN(notaMision1[i]) || notaMision1[i] < 0 || notaMision1[i] > 100 || notaMision1[i] == undefined) {
                                notaMision1[i] = parseFloat(prompt(`
                            ERROR!!! Ingrese un valor valido para la nota de la misión 1 para el talento ${i + 1}`));
                            }
                            if (notaMision1[i] > mayorNota1) {
                                mayorNota1 = notaMision1[i];
                                mayorNota1Talento = i;
                            }
                        }
                    } else {
                        alert(`Regresando al menú principal.`)
                    }
                }


            }
            break;
        case 4:
            if (notaMision2[0] === 0) {
                if (cantidadTalentos === 0) {
                    alert(`
                ERROR!!! 
                Recuerde que debe registrar la cantidad de talentos COEX primero, 
                ingrese a la opción 1 del menú para hacer este registro`)
                } else {
                    for (let i = 0; i < cantidadTalentos; i++) {
                        notaMision2[i] = parseFloat(prompt(`Ingrese la nota de la misión 2 para el talento con codigo ${i + 1}`));
                        while (isNaN(notaMision2[i]) || notaMision2[i] < 0 || notaMision2[i] > 100 || notaMision2[i] == undefined) {
                            notaMision2[i] = parseFloat(prompt(`
                        ERROR!!! Ingrese un valor valido para la nota de la misión 2 para el talento ${i + 1}`));
                        }
                        if (notaMision2[i] > mayorNota2) {
                            mayorNota2 = notaMision2[i];
                            mayorNota2Talento = i;
                        }
                    }
                }
            } else {
                if (notaMision2[0] !== 0) {
                    confirmacion = parseInt(prompt(`
                    Desea sobreescribir la nota de la misión 2?
                    -Digite 1 para Si.
                    -Digite 2 para No.`));
                    while (isNaN(confirmacion) || confirmacion < 1 || confirmacion > 2) {
                        confirmacion = parseInt(prompt(`
                    ERROR DIGITE UN NUMERO VALIDO!!!
                    Desea sobreescribir la nota de la misión 2?
                    -Digite 1 para Si.
                    -Digite 2 para No.`));
                    }
                    if (confirmacion === 1) {
                        for (let i = 0; i < cantidadTalentos; i++) {
                            notaMision2[i] = parseFloat(prompt(`Ingrese la nota de la misión 2 para el talento con codigo ${i + 1}`));
                            while (isNaN(notaMision2[i]) || notaMision2[i] < 0 || notaMision2[i] > 100 || notaMision2[i] == undefined) {
                                notaMision2[i] = parseFloat(prompt(`
                            ERROR!!! Ingrese un valor valido para la nota de la misión 2 para el talento ${i + 1}`));
                            }
                            if (notaMision2[i] > mayorNota2) {
                                mayorNota2 = notaMision2[i];
                                mayorNota2Talento = i;
                            }
                        }
                    } else {
                        alert(`Regresando al menú principal.`)
                    }
                }


            }
            break;
        case 5:
            if (notaMision3[0] === 0) {
                if (cantidadTalentos === 0) {
                    alert(`
                ERROR!!! 
                Recuerde que debe registrar la cantidad de talentos COEX primero, 
                ingrese a la opción 1 del menú para hacer este registro`)
                } else {
                    for (let i = 0; i < cantidadTalentos; i++) {
                        notaMision3[i] = parseFloat(prompt(`Ingrese la nota de la misión 3 para el talento con codigo ${i + 1}`));
                        while (isNaN(notaMision3[i]) || notaMision3[i] < 0 || notaMision3[i] > 100 || notaMision3[i] == undefined) {
                            notaMision3[i] = parseFloat(prompt(`
                        ERROR!!! Ingrese un valor valido para la nota de la misión 3 para el talento ${i + 1}`));
                        }
                        if (notaMision3[i] > mayorNota3) {
                            mayorNota3 = notaMision3[i];
                            mayorNota3Talento = i;
                        }
                    }
                }
            } else {
                if (notaMision3[0] !== 0) {
                    confirmacion = parseInt(prompt(`
                    Desea sobreescribir la nota de la misión 3?
                    -Digite 1 para Si.
                    -Digite 2 para No.`));
                    while (isNaN(confirmacion) || confirmacion < 1 || confirmacion > 2) {
                        confirmacion = parseInt(prompt(`
                    ERROR DIGITE UN NUMERO VALIDO!!!
                    Desea sobreescribir la nota de la misión 3?
                    -Digite 1 para Si.
                    -Digite 2 para No.`));
                    }
                    if (confirmacion === 1) {
                        for (let i = 0; i < cantidadTalentos; i++) {
                            notaMision3[i] = parseFloat(prompt(`Ingrese la nota de la misión 3 para el talento con codigo ${i + 1}`));
                            while (isNaN(notaMision3[i]) || notaMision3[i] < 0 || notaMision3[i] > 100 || notaMision3[i] == undefined) {
                                notaMision3[i] = parseFloat(prompt(`
                            ERROR!!! Ingrese un valor valido para la nota de la misión 3 para el talento ${i + 1}`));
                            }
                            if (notaMision3[i] > mayorNota3) {
                                mayorNota3 = notaMision3[i];
                                mayorNota3Talento = i;
                            }
                        }
                    } else {
                        alert(`Regresando al menú principal.`)
                    }
                }


            }
            break;
        case 6:
            if (notaFinal[0] === 0) {
                if (cantidadTalentos === 0) {
                    alert(`
                ERROR!!! 
                Recuerde que debe registrar la cantidad de talentos COEX primero, 
                ingrese a la opción 1 del menú para hacer este registro`)
                } else {
                    for (let i = 0; i < cantidadTalentos; i++) {
                        notaFinal[i] = parseFloat(prompt(`Ingrese la nota final para el talento ${i + 1}`));
                        while (isNaN(notaFinal[i]) || notaFinal[i] < 0 || notaFinal[i] > 100 || notaFinal[i] == undefined) {
                            notaFinal[i] = parseFloat(prompt(`
                        ERROR!!! Ingrese un valor valido para la nota final para el talento ${i + 1}`));
                        }
                    }
                }
            } else {
                if (notaFinal[0] !== 0) {
                    confirmacion = parseInt(prompt(`
                    Desea sobreescribir la nota final?
                    -Digite 1 para Si.
                    -Digite 2 para No.`));
                    while (isNaN(confirmacion) || confirmacion < 1 || confirmacion > 2) {
                        confirmacion = parseInt(prompt(`
                    ERROR DIGITE UN NUMERO VALIDO!!!
                    Desea sobreescribir la nota final?
                    -Digite 1 para Si.
                    -Digite 2 para No.`));
                    }
                    if (confirmacion === 1) {
                        for (let i = 0; i < cantidadTalentos; i++) {
                            notaFinal[i] = parseFloat(prompt(`Ingrese la nota final para el talento con codigo ${i + 1}`));
                            while (isNaN(notaFinal[i]) || notaFinal[i] < 0 || notaFinal[i] > 100 || notaFinal[i] == undefined) {
                                notaFinal[i] = parseFloat(prompt(`
                            ERROR!!! Ingrese un valor valido para la nota final del talento ${i + 1}`));
                            }

                        }
                    } else {
                        alert(`Regresando al menú principal.`)
                    }
                }


            }
            break;
        case 7:
            if (cantidadTalentos === 0) {
                alert(`
                ERROR!!! 
                Recuerde que debe registrar la cantidad de talentos COEX primero, 
                ingrese a la opción 1 del menú para hacer este registro`)
            } else {
                if (mayorNota1 <= 0) {
                    alert(`No ha registrado notas o todos sacaron 0 no hay mejor nota.`)
                } else {
                    alert(`${matriz[mayorNota1Talento][1]} obtuvo la mejor nota con una calificación de : ${mayorNota1}`)
                }
            } break;
        case 8:
            if (cantidadTalentos === 0) {
                alert(`
                ERROR!!! 
                Recuerde que debe registrar la cantidad de talentos COEX primero, 
                ingrese a la opción 1 del menú para hacer este registro`)
            } else {
                if (mayorNota2 <= 0) {
                    alert(`No ha registrado notas o todos sacaron 0 no hay mejor nota.`)
                } else {
                    alert(`${matriz[mayorNota2Talento][1]} obtuvo la mejor nota con una calificación de : ${mayorNota2}`)
                }
            } break;
        case 9:
            if (cantidadTalentos === 0) {
                alert(`
                ERROR!!! 
                Recuerde que debe registrar la cantidad de talentos COEX primero, 
                ingrese a la opción 1 del menú para hacer este registro`)
            } else {
                if (mayorNota3 <= 0) {
                    alert(`No ha registrado notas o todos sacaron 0 no hay mejor nota.`)
                } else {
                    alert(`${matriz[mayorNota3Talento][1]} obtuvo la mejor nota con una calificación de : ${mayorNota3}`)
                }
            } break;
        case 10:
            if (cantidadTalentos === 0) {
                alert(`
                ERROR!!! 
                Recuerde que debe registrar la cantidad de talentos COEX primero, 
                ingrese a la opción 1 del menú para hacer este registro`)
            } else {
                if (notaMision1[0] !== 0 && notaMision2[0] !== 0 && notaMision3[0] !== 0 && notaFinal[0] !== 0) {
                    for (let i = 0; i < cantidadTalentos; i++) {

                        promedioNotas = (notaMision1[i] + notaMision2[i] + notaMision3[i] + notaFinal[i]) / 4
                        talentos += `El promedio del talento ${matriz[i][1]} en las 4 notas es: ${promedioNotas} \n`
                    }
                    alert(`${talentos}`)
                } else {
                    alert("Registre las notas de los talentos para acceder a esta opción.")
                }
            } break;
        case 11:

            talentos = "";
            if (cantidadTalentos === 0 && promedioNotas === 0) {
                alert(`
                ERROR!!! 
                Recuerde que debe registrar la cantidad de talentos COEX primero, 
                ingrese a la opción 1 del menú para hacer este registro y por 
                último ingrese a la opción 10 para calcular el promedio.
                `)
            } else if (promedioNotas === 0 && ((notaMision1[0] === 0 || notaMision2[0] === 0 || notaMision3[0] === 0 || notaFinal[0] === 0))) {
                alert(`Registre las notas de los talentos para acceder a esta opción.`)
            } else {
                if (promedioNotas !== 0) {
                    for (let i = 0; i < cantidadTalentos; i++) {
                        for (let h = 0; h < 1; h++) {
                            console.log(`
                            Nombre: ${matriz[i][h + 1]}
                            codigo: ${matriz[i][h]}
                            Nota Misión 1: ${notaMision1[i]} , Nota Misión 2: ${notaMision2[i]} , Nota Misión 3: ${notaMision3[i]}
                            Nota Final: ${notaFinal[i]}`);
                        }
                    }
                }

            }
            break;
        case 12:
            alert(`
            Misión desarrolla por Jonathan Carrillo Bermúdez C.C.1102379663 G6 TARDE talento coex.`)

        case 13:
            alert("programa finalizado");
            break;
        default:
            alert("ERROR DATO INVALIDO")
    }
}





























