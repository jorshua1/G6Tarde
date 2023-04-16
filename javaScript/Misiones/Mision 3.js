/*Coex es una entidad que tiene como misión capacitar jóvenes que desean
adquirir conocimientos y habilidades en el área de programación. Al llegar a
Coex, cada talento es registrado con un código y su nombre. Un grupo puede
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
10.Mostrar el nombre y el promedio de cada talento (el promedio se obtiene de las 4 pruebas)
11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y prueba final
12.Nombre de los talentos que desarrollaron el ejercicio
13.Salir
Se debe validar que la nota de cada talento esté entre 0 y 100, Se debe evitar
que se repitan códigos al registrar estudiantes, Se debe validar que el nombre
del talento no esté vacío */

let textoMenu = `
1. Ingresar cantidad de talentos Coex 
2. Registrar los datos de los talentos
3. Registrar nota de Misión 1
4. Registrar nota de Misión 2
5. Registrar nota de Misión 3
6. Registrar nota de Prueba de nivel final
7. ver nombre y nota del talento con la mejor nota en la Misión 1
8. ver nombre y nota del talento con la mejor nota en la Misión 2
9. ver nombre y nota del talento con la mejor nota en la Misión 3
10.ver el nombre y el promedio de cada talento
11.Ver código, nombre, y notas de las 4 pruebas
12.Nombre del talento que desarrollaró el ejercicio
13.Salir`;

let cantidadTalentos = 0;
let datosTalentos = [0, 0];
let codigosRegistrados = [0];
let codigoValido = 0;
let codigo = 0;
let mision1 = [0];
let mision2 = [0];
let mision3 = [0];
let pruebaNivelFianl = [0];
let promedio = 0;
let mensajeLista = "";
let confirmacion = 0;
let seleccion = 0;

do {
    //Pido el menu **********************************************************************************************************
    menu = parseInt(prompt(textoMenu));
    while (isNaN(menu) || menu < 0 || menu > 13) {
        menu = parseInt(prompt(`POR FAVOR revise el menu e ingrese una opcion valida ${textoMenu}`));
    }
    switch (menu) {
        case 1:
            if (cantidadTalentos === 0) {
                do {
                    cantidadTalentos = Number(prompt(`Ingrese la cantidad de talentos Coex`));
                    while (isNaN(cantidadTalentos) || cantidadTalentos < 0 || !Number.isInteger(cantidadTalentos)) {
                        cantidadTalentos = Number(prompt(`Ingrese un dato valido`));
                    }
                    confirmacion = Number(prompt(`¿Desea registrar ${cantidadTalentos} talentos? \nTenga en cuenta que despues no podra cambiar la cantidad de talentos.\n1. Si.\n2. No.`));
                    while ((confirmacion !== 1) && (confirmacion !== 2)) {
                        confirmacion = Number(prompt(`POR FAVOR INGRESE UNA OPCION VALIDA \n¿Desea registrar ${cantidadTalentos} talentos? \nTenga en cuenta que despues no podra cambiar la cantidad de talentos.\n1. Si.\n2. No.`));
                    }
                    if (confirmacion === 1) {
                        alert(`Se ingreso la cantidad de: ${cantidadTalentos} talentos para realizar el registro de notas `)
                    }
                } while (confirmacion === 2)
            } else if (cantidadTalentos !== 0) {
                alert(`Ya ingreso los datos de la cantidad de talentos, no puede sobreescribir datos. `)
            }
            break;
        case 2:
            //Pido los datos del talento Coex codigo y nombre
            if (datosTalentos[0] === 0 && cantidadTalentos > 0) {
                for (let i = 0; i < datosTalentos.length; i++) {
                    datosTalentos[i] = new Array(cantidadTalentos)
                }
                for (let i = 0; i < cantidadTalentos; i++) {

                    let nuevoCodigo = "";
                    let codigoRepetido = false;

                    while (true) {
                        let j = 0;
                        nuevoCodigo = prompt(`Ingrese el codigo para el talento ${i + 1}\nCodigos registrados: ${datosTalentos[0]}`);
                        codigoRepetido = false;
                        for (let j = 0; j < codigosRegistrados.length; j++) {

                            if (nuevoCodigo === codigosRegistrados[j]) {
                                codigoRepetido = true;
                                break;
                            }
                        }
                        if (!codigoRepetido) {
                            break;
                        }
                        alert("Este código ya ha sido registrado. Por favor, ingrese otro código.");
                        j++;

                    }
                    codigosRegistrados[i] = nuevoCodigo;
                    datosTalentos[0][i] = codigosRegistrados[i];
                }
                for (let i = 0; i < cantidadTalentos; i++) {

                    datosTalentos[1][i] = prompt(`Ingrese el nombre del talento Coex ${i + 1}`);
                    while (!isNaN(datosTalentos[1][i])) {
                        datosTalentos[1][i] = prompt(`Dato invalido \nPor favor vuelva a ingresar el nombre del talento Coex${i + 1}`);
                    }
                }
            } else if (menu === 2 && datosTalentos[0] !== 0) {
                alert(`Ya registro los datos de los talentos, no puede sobre escribir los datos`)
            } else if (menu === 2 && cantidadTalentos === 0) {
                alert(`Pimero debe ingresar cuantos talentos hay para poder continuar`)
            }
            break;
        case 3:
            //pido la nota de la mision 1
            if (datosTalentos[0] !== 0 && mision1[0] === 0) {
                mensajeLista = "";
                seleccion = 0;
                for (let i = 0; i < cantidadTalentos; i++) {

                    mision1[i] = parseFloat(prompt(`Ingrese la nota de la mision 1 del Talento Coex ${datosTalentos[1][i]}`))
                    while (isNaN(mision1[i]) || mision1[i] < 0 || mision1[i] > 100) {
                        mision1[i] = parseFloat(prompt(`Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter. Por favor vuelva a ingresar la nota de la mision 1 del talento Coex ${datosTalentos[1][i]}`));
                    }
                    mensajeLista += `${i + 1}. Nota del talento ${datosTalentos[1][i]}: ${mision1[i]} \n`
                }
                confirmacion = parseInt(prompt(`Las notas registradas son: \n${mensajeLista}Los datos son correctos? \n1. Si\n2. No, cambiar datos`));
                while ((confirmacion !== 1) && (confirmacion !== 2)) {
                    alert("Por favor, seleccione una opción válida.");
                    confirmacion = parseInt(prompt(`Las notas registradas son: ${mensajeLista}Los datos son correctos? \n1. Si\n2. No, cambiar datos`));
                }
                if (confirmacion === 1) {
                    alert(`La nota se registro correctamente `)
                } else {
                    confirmacion = 0;
                    do {
                        seleccion = parseInt(prompt(`Seleccione la opcion que desea cambiar \n${mensajeLista}`))
                        while (isNaN(seleccion) || seleccion > cantidadTalentos || seleccion <= 0) {
                            alert(`Seleccione una opcion valida`)
                            seleccion = parseInt(prompt(`Seleccione la opcion que desea cambiar \n${mensajeLista}`))
                        }
                        mision1[seleccion - 1] = parseInt(prompt(`Ingrese la nota correcta de la mision 1 del Talento ${datosTalentos[1][seleccion - 1]} `))
                        while (isNaN(mision1[seleccion - 1]) || mision1[seleccion - 1] < 0 || mision1[seleccion - 1] > 100) {
                            mision1[seleccion - 1] = parseFloat(prompt(`Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter Por favor vuelva a ingresar la nota de la mision 1 del talento Coex `));
                        }
                        confirmacion = parseInt(prompt(`Desea cambiar otra nota? \n1. Si\n2. No`));
                        while ((confirmacion !== 1) && (confirmacion !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            confirmacion = parseInt(prompt(`Desea cambiar otra nota? \n1. Si\n2. No`));
                        }
                        if (confirmacion === 1) {
                            confirmacion = 1;
                        } else {
                            alert(`Todas las notas se registraron correctamente `)
                        }
                    } while (confirmacion === 1)
                }
            } else if (mision1[0] !== 0) {
                alert(`Ya se registo la nota de la mision 1 y no se puede cambiar`)
            } else if ((cantidadTalentos !== 0 && datosTalentos[0] === 0) || cantidadTalentos === 0) {
                alert(`Para registrar las notas primero debe registrar los datos de los talentos`)
            }
            break;
        case 4:
            //pido la nota de la mision 2
            if (datosTalentos[0] !== 0 && mision2[0] === 0) {
                mensajeLista = "";
                seleccion = 0;
                for (let i = 0; i < cantidadTalentos; i++) {

                    mision2[i] = parseInt(prompt(`Ingrese la nota de la mision 2 del Talento Coex ${datosTalentos[1][i]}`))
                    while (isNaN(mision2[i]) || mision2[i] < 0 || mision2[i] > 100) {
                        mision2[i] = parseFloat(prompt(`Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter Por favor vuelva a ingresar la nota de la mision 2 del talento Coex ${datosTalentos[1][i]}`));
                    }
                    mensajeLista += `${i + 1}. Nota del talento ${datosTalentos[1][i]}: ${mision2[i]} \n`
                } confirmacion = parseInt(prompt(`Las notas registradas son: \n${mensajeLista}Los datos son correctos? \n1. Si\n2. No, cambiar datos`));
                while ((confirmacion !== 1) && (confirmacion !== 2)) {
                    alert("Por favor, seleccione una opción válida.");
                    confirmacion = parseInt(prompt(`Las notas registradas son: ${mensajeLista}Los datos son correctos? \n1. Si\n2. No, cambiar datos`));
                }
                if (confirmacion === 1) {
                    alert(`La nota se registro correctamente `)
                } else {
                    confirmacion = 0;
                    do {
                        seleccion = parseInt(prompt(`Seleccione la opcion que desea cambiar \n${mensajeLista}`))
                        while (isNaN(seleccion) || seleccion > cantidadTalentos || seleccion <= 0) {
                            alert(`Seleccione una opcion valida`)
                            seleccion = parseInt(prompt(`Seleccione la opcion que desea cambiar \n${mensajeLista}`))
                        }
                        mision2[seleccion - 1] = parseInt(prompt(`Ingrese la nota correcta de la mision 1 del Talento ${datosTalentos[1][seleccion - 1]} `))
                        while (isNaN(mision2[seleccion - 1]) || mision2[seleccion - 1] < 0 || mision2[seleccion - 1] > 100) {
                            mision2[seleccion - 1] = parseFloat(prompt(`Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter Por favor vuelva a ingresar la nota de la mision 1 del talento Coex `));
                        }
                        confirmacion = parseInt(prompt(`Desea cambiar otra nota? \n1. Si\n2. No`));
                        while ((confirmacion !== 1) && (confirmacion !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            confirmacion = parseInt(prompt(`Desea cambiar otra nota? \n1. Si\n2. No`));
                        }
                        if (confirmacion === 1) {
                            confirmacion = 1;
                        } else {
                            alert(`Todas las notas se registraron correctamente `)
                        }
                    } while (confirmacion === 1)
                }
            } else if (mision2[0] !== 0) {
                alert(`Ya se registo la nota de la mision 2 y no se puede cambiar`)
            } else if ((cantidadTalentos !== 0 && datosTalentos[0] === 0) || cantidadTalentos === 0) {
                alert(`Para registrar las notas primero debe registrar los datos de los talentos`)
            }
            break;
        case 5:
            //Pido nota mision 3
            if (datosTalentos[0] !== 0 && mision3[0] === 0) {
                mensajeLista = "";
                seleccion = 0;
                for (let i = 0; i < cantidadTalentos; i++) {

                    mision3[i] = parseInt(prompt(`Ingrese la nota de la mision 3 del Talento Coex ${datosTalentos[1][i]}`))
                    while (isNaN(mision3[i]) || mision3[i] < 0 || mision3[i] > 100) {
                        mision3[i] = parseInt(prompt(`Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter Por favor vuelva a ingresar la nota de la mision 3 del talento Coex ${datosTalentos[1][i]}`));
                    }
                    mensajeLista += `${i + 1}. Nota del talento ${datosTalentos[1][i]}: ${mision3[i]} \n`

                } confirmacion = parseInt(prompt(`Las notas registradas son: \n${mensajeLista}Los datos son correctos? \n1. Si\n2. No, cambiar datos`));
                while ((confirmacion !== 1) && (confirmacion !== 2)) {
                    alert("Por favor, seleccione una opción válida.");
                    confirmacion = parseInt(prompt(`Las notas registradas son: ${mensajeLista}Los datos son correctos? \n1. Si\n2. No, cambiar datos`));
                }
                if (confirmacion === 1) {
                    alert(`La nota se registro correctamente `)
                } else {
                    confirmacion = 0;
                    do {
                        seleccion = parseInt(prompt(`Seleccione la opcion que desea cambiar \n${mensajeLista}`))
                        while (isNaN(seleccion) || seleccion > cantidadTalentos || seleccion <= 0) {
                            alert(`Seleccione una opcion valida`)
                            seleccion = parseInt(prompt(`Seleccione la opcion que desea cambiar \n${mensajeLista}`))
                        }
                        mision3[seleccion - 1] = parseInt(prompt(`Ingrese la nota correcta de la mision 1 del Talento ${datosTalentos[1][seleccion - 1]} `))
                        while (isNaN(mision3[seleccion - 1]) || mision3[seleccion - 1] < 0 || mision3[seleccion - 1] > 100) {
                            mision3[seleccion - 1] = parseInt(prompt(`Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter Por favor vuelva a ingresar la nota de la mision 1 del talento Coex `));
                        }
                        confirmacion = parseInt(prompt(`Desea cambiar otra nota? \n1. Si\n2. No`));
                        while ((confirmacion !== 1) && (confirmacion !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            confirmacion = parseInt(prompt(`Desea cambiar otra nota? \n1. Si\n2. No`));
                        }
                        if (confirmacion === 1) {
                            confirmacion = 1;
                        } else {
                            alert(`Todas las notas se registraron correctamente `)
                        }
                    } while (confirmacion === 1)
                }
            } else if (mision3[0] !== 0) {
                alert(`Ya se registo la nota de la mision 3 y no se puede cambiar`)
            } else if ((cantidadTalentos !== 0 && datosTalentos[0] === 0) || cantidadTalentos === 0) {
                alert(`Para registrar las notas primero debe registrar los datos de los talentos`)
            }
            break;
        case 6:
            //Pido nota prueva de nivel final
            if (datosTalentos[0] !== 0 && pruebaNivelFianl[0] === 0) {
                mensajeLista = "";
                seleccion = 0;
                for (let i = 0; i < cantidadTalentos; i++) {

                    pruebaNivelFianl[i] = parseInt(prompt(`Ingrese la nota de la prueba de nivel final del Talento Coex ${datosTalentos[1][i]}`))
                    while (isNaN(pruebaNivelFianl[i]) || pruebaNivelFianl[i] < 0 || pruebaNivelFianl[i] > 100) {
                        pruebaNivelFianl[i] = parseInt(prompt(`Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter Por favor vuelva a ingresar la nota de la prueba de nivel final del talento Coex ${datosTalentos[1][i]}`));
                    }
                    mensajeLista += `${i + 1}. Nota del talento ${datosTalentos[1][i]}: ${pruebaNivelFianl[i]} \n`
                }
                confirmacion = parseInt(prompt(`Las notas registradas son: \n${mensajeLista}Los datos son correctos? \n1. Si\n2. No, cambiar datos`));
                while ((confirmacion !== 1) && (confirmacion !== 2)) {
                    alert("Por favor, seleccione una opción válida.");
                    confirmacion = parseInt(prompt(`Las notas registradas son: ${mensajeLista}Los datos son correctos? \n1. Si\n2. No, cambiar datos`));
                }
                if (confirmacion === 1) {
                    alert(`La nota se registro correctamente `)
                } else {
                    confirmacion = 0;
                    do {
                        seleccion = parseInt(prompt(`Seleccione la opcion que desea cambiar \n${mensajeLista}`))
                        while (isNaN(seleccion) || seleccion > cantidadTalentos || seleccion <= 0) {
                            alert(`Seleccione una opcion valida`)
                            seleccion = parseInt(prompt(`Seleccione la opcion que desea cambiar \n${mensajeLista}`))
                        }
                        pruebaNivelFianl[seleccion - 1] = parseInt(prompt(`Ingrese la nota correcta de la mision 1 del Talento ${datosTalentos[1][seleccion - 1]} `))
                        while (isNaN(pruebaNivelFianl[seleccion - 1]) || pruebaNivelFianl[seleccion - 1] < 0 || pruebaNivelFianl[seleccion - 1] > 100) {
                            pruebaNivelFianl[seleccion - 1] = parseInt(prompt(`Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter Por favor vuelva a ingresar la nota de la mision 1 del talento Coex `));
                        }
                        confirmacion = parseInt(prompt(`Desea cambiar otra nota? \n1. Si\n2. No`));
                        while ((confirmacion !== 1) && (confirmacion !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            confirmacion = parseInt(prompt(`Desea cambiar otra nota? \n1. Si\n2. No`));
                        }
                        if (confirmacion === 1) {
                            confirmacion = 1;
                        } else {
                            alert(`Todas las notas se registraron correctamente `)
                        }
                    } while (confirmacion === 1)
                }
            } else if (pruebaNivelFianl[0] !== 0) {
                alert(`Ya se registo la nota de la prueba final y no se puede cambiar`)
            } else if ((cantidadTalentos !== 0 && datosTalentos[0] === 0) || cantidadTalentos === 0) {
                alert(`Para registrar las notas primero debe registrar los datos de los talentos`)
            }
            break;
        case 7:
            //Muestro el nombre y la nota del talento Coex con mayor nota en la mision 1
            if (mision1[0] !== 0) {

                for (let i = 0; i < mision1.length; i++) {

                    for (let j = 0; j < mision1.length - 1; j++) {

                        if (mision1[j] < mision1[j + 1]) {

                            [mision1[j], mision1[j + 1]] = [mision1[j + 1], mision1[j]];
                            [datosTalentos[1][j], datosTalentos[1][j + 1]] = [datosTalentos[1][j + 1], datosTalentos[1][j]];
                        }
                    }
                }
                alert(`El estudiante que tiene la mayor nota en la mision 1 es ${datosTalentos[1][0]} con una nota de: ${mision1[0]}`)
            } else if ((cantidadTalentos === 0) || (mision1[0] === 0)) {
                alert(`No puede visualizar datos que no ha ingresado`)
            }
            break;
        case 8:
            //Muestro el nombre y la nota del talento Coex con mayor nota en la mision 2
            if (mision2[0] !== 0) {

                for (let i = 0; i < mision2.length; i++) {

                    for (let j = 0; j < mision2.length - 1; j++) {

                        if (mision2[j] < mision2[j + 1]) {

                            [mision2[j], mision2[j + 1]] = [mision2[j + 1], mision2[j]];
                            [datosTalentos[1][j], datosTalentos[1][j + 1]] = [datosTalentos[1][j + 1], datosTalentos[1][j]];
                        }
                    }
                }
                alert(`El estudiante que tiene la mayor nota en la mision 2 es ${datosTalentos[1][0]} con una nota de: ${mision2[0]}`)
            } else if ((cantidadTalentos === 0) || (mision2[0] === 0)) {
                alert(`No puede visualizar datos que no ha ingresado`)
            }
            break
        case 9:
            //Muestro el nombre y la nota del talento Coex con mayor nota en la mision 3
            if (mision3[0] !== 0) {

                for (let i = 0; i < mision3.length; i++) {

                    for (let j = 0; j < mision3.length - 1; j++) {

                        if (mision3[j] < mision3[j + 1]) {

                            [mision3[j], mision3[j + 1]] = [mision3[j + 1], mision3[j]];
                            [datosTalentos[1][j], datosTalentos[1][j + 1]] = [datosTalentos[1][j + 1], datosTalentos[1][j]];
                        }
                    }
                }
                alert(`El estudiante que tiene la mayor nota en la mision 3 es ${datosTalentos[1][0]} con una nota de: ${mision3[0]}`)
            } else if ((cantidadTalentos === 0) || (mision3[0] === 0)) {
                alert(`No puede visualizar datos que no ha ingresado`)
            }
            break;
        case 10:
            mensajeLista = "";
            //Muestro el nombre del talento y el promedio que saco en las 4 pruebas
            if (mision1[0] !== 0 && mision2[0] !== 0 && mision3[0] !== 0 && pruebaNivelFianl[0] !== 0) {

                for (let i = 0; i < cantidadTalentos; i++) {

                    promedio = (mision1[i] + mision2[i] + mision3[i] + pruebaNivelFianl[i]) / 4
                    mensajeLista += `El promedio del talento ${datosTalentos[1][i]} en las 4 purebas es: ${promedio} \n`
                }
                alert(`${mensajeLista}`)
            } else {
                alert(`Debe ingresar primero las notas que sacaron los talentos en las 4 pruebas`)
            }
            break;
        case 11:
            mensajeLista = "";
            //Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y prueba final
            if (promedio !== 0) {
                for (let i = 0; i < cantidadTalentos; i++) {

                    mensajeLista += `---------------------------------------------- \n--Codigo:  ${datosTalentos[0][i]}  --Nombre: ${datosTalentos[1][i]} --Nota mision 1: ${mision1[i]}  --Nota mision 2: ${mision2[i]}  --Nota mision 3: ${mision3[i]}  --Nota prueba fial: ${pruebaNivelFianl[i]} \n`
                }
                alert(mensajeLista);
            } else if (promedio === 0 && ((mision1[0] === 0 || mision2[0] === 0 || mision3[0] === 0 || pruebaNivelFianl[0] === 0))) {
                alert(`No hay datos registrados para mostrar`)
            }
            else if (promedio === 0 && ((mision1[0] !== 0 && mision2[0] !== 0 && mision3[0] !== 0 && pruebaNivelFianl[0] !== 0))) {
                alert(`Ya se registraron los datos pero no se ha calculado el promedio, por favor ingrese a la opcion 10 para generar el promedio de los talentos`)
            }
            break;
        case 12:
            alert(`Ejercicio desarrollado por el talento: Nicolas Santiago Ruiz Camacho. `)
            break;
        case 13:
            alert(`Saliendo del programa...`)
            break;
    }
} while (menu !== 13) 