
let opcion = 0;
let datosTalentos = [0, 0];
let cantidadDeTalentos = 0;
let notaMisionUno = [];
let notaMisionDos = [];
let notaMisionTres = [];
let notaPruebaFinal = [];
let mayorMisionUno = 0;
let nombreMayorMisionUno = "";
let mayorMisionDos = 0;
let nombreMayorMisionDos = "";
let mayorMisionTres = 0;
let nombreMayorMisionTres = "";
let promedioGeneral = [];
let codigoTalentos = [];
let nombresTalentos = [];
let codigosRegistrados = [];
let a=0;

do {
    opcion = parseInt(prompt(`(1) Ingresar cantidad de Talentos
(2) Ingresar datos de los Talentos
(3) Registrar nota de la Misión 1
(4) Registrar nota de la Misión 2
(5) Registrar nota de la Misión 3
(6) Registrar nota de la Prueba Final
(7) Mostrar el Talento con la mejor nota de la Mision 1
(8) Mostrar el Talento con la mejor nota de la Mision 2
(9) Mostrar el Talento con la mejor nota de la Mision 3
(10) Mostrar el promedio de cada Talento
(11) Mostrar notas de cada Mision por cada Talento
(12) Mostrar el nombre de los Talentos que desarrollaron el ejercicio
(13) Salir`));

    switch (opcion) {
        case 1:
            if (cantidadDeTalentos == 0) {
                cantidadDeTalentos = parseInt(prompt("Ingrese la cantidad de Talentos"));
                while (isNaN(cantidadDeTalentos) || cantidadDeTalentos <= 0) {
                    cantidadDeTalentos = parseInt(prompt("ERROR \n Ingrese la cantidad de Talentos"));
                }
            }
            else {
                alert("Ya tiene datos registrados")
            }
            break;
        case 2:
            a=0
            if (cantidadDeTalentos > 0) {
                for (i = 0; i < datosTalentos.length; i++) {
                    datosTalentos[i] = []
                }
                for (i = 0; i < cantidadDeTalentos; i++) {
                    let codigoNuevoTalento = "";
                    let codigoRepetido = false;
                    while (true) {
                        codigoNuevoTalento = prompt("Ingrese el codigo del talento " + i);
                        codigoRepetido = false;
                        for (i = 0; i < codigosRegistrados.length; i++) {
                            if (codigoNuevoTalento === codigosRegistrados[i]) {
                                codigoRepetido = true;
                                break;
                            }
                        }
                        if (!codigoRepetido) {
                            break;
                        }
                        alert("Este codigo ya esta registrado, registre uno nuevo")
                    }
                    codigosRegistrados[i] = codigoNuevoTalento;
                    datosTalentos[0][i] = codigosRegistrados[i];
                }
                for (i = 0; i < cantidadDeTalentos; i++) {
                    datosTalentos[1][i] = prompt("Ingrese el nombre del talento " + i);
                    while (!isNaN(datosTalentos[1][i])) {
                        datosTalentos[1][i] = prompt("ERROR, Ingrese el nombre del talento " + i);
                    }
                }
            }
            else {
                alert("No hay Talentos registrados")
            }
            a+=1
            break;
        case 3:
            if (cantidadDeTalentos > 0) {
                if (a===1) {
                    for (i = 0; i < cantidadDeTalentos; i++) {
                        notaMisionUno[i] = parseFloat(prompt("Ingrese la nota de la Mision 1 del Talento " + i))
                        while (isNaN(notaMisionUno[i]) || notaMisionUno[i] < 0 || notaMisionUno[i] > 100) {
                            notaMisionUno[i] = parseFloat(prompt("ERROR, Ingrese la nota de la Mision 1 del Talento " + i))
                        }
                    }
                }
                else {
                    alert("No hay datos en la matriz")
                }
            }
            else {
                alert("No hay Talentos registrados")
            }

            break;
        case 4:
            if (cantidadDeTalentos > 0) {
                if (a===1) {
                for (i = 0; i < cantidadDeTalentos; i++) {
                    notaMisionDos[i] = parseFloat(prompt("Ingrese la nota de la Mision 2 del Talento " + i))
                    while (isNaN(notaMisionDos[i]) || notaMisionDos[i] < 0 || notaMisionDos[i] > 100) {
                        notaMisionDos[i] = parseFloat(prompt("ERROR, Ingrese la nota de la Mision 2 del Talento " + i))
                    }
                }
            }
            else{
                alert("No hay datos en la matriz")
            }
        }
            else {
                alert("No hay Talentos registrados")
            }

            break;
        case 5:
            if (cantidadDeTalentos > 0) {
                if (a===1) {
                for (i = 0; i < cantidadDeTalentos; i++) {
                    notaMisionTres[i] = parseFloat(prompt("Ingrese la nota de la Mision 3 del Talento " + i))
                    while (isNaN(notaMisionTres[i]) || notaMisionTres[i] < 0 || notaMisionTres[i] > 100) {
                        notaMisionTres[i] = parseFloat(prompt("ERROR, Ingrese la nota de la Mision 3 del Talento " + i))
                    }
                }
            }
            else{
                alert("No hay datos en la matriz")
            }
        }
            else {
                alert("No hay Talentos registrados")
            }

            break;
        case 6:
            if (cantidadDeTalentos > 0 && a === 1) {
                if (a===1) {
                for (i = 0; i < cantidadDeTalentos; i++) {
                    notaPruebaFinal[i] = parseFloat(prompt("Ingrese la nota de la Prueba Final del Talento " + i))
                    while (isNaN(notaPruebaFinal[i]) || notaPruebaFinal[i] < 0 || notaPruebaFinal[i] > 100) {
                        notaPruebaFinal[i] = parseFloat(prompt("ERROR, Ingrese la nota de la Mision 2 del Talento " + i))
                    }
                }
            }
            else{
                alert("No hay datos en la matriz")
            }
            }
            else {
                alert("No hay Talentos registrados")
            }

            break;
        case 7:
            if (cantidadDeTalentos > 0 && notaMisionUno.length !== 0) {
                for (i = 0; i < notaMisionUno.length; i++) {
                    if (notaMisionUno[i] > mayorMisionUno) {
                        mayorMisionUno = notaMisionUno[i]
                        nombreMayorMisionUno = datosTalentos[1][i]
                    }
                }
                alert(`
Talento con la Mejor Nota de la Mision 1:
Nombre: ` + nombreMayorMisionUno + ` 
Nota: ` + mayorMisionUno);
            }
            else {
                alert("No hay Talentos registrados")
            }

            break;
        case 8:
            if (cantidadDeTalentos > 0 && notaMisionDos.length !== 0) {
                for (i = 0; i < notaMisionDos.length; i++) {
                    if (notaMisionDos[i] > mayorMisionDos) {
                        mayorMisionDos = notaMisionDos[i]
                        nombreMayorMisionDos = datosTalentos[1][i]
                    }
                }
                alert(`
Talento con la Mejor Nota de la Mision 2: 
Nombre: `+ nombreMayorMisionDos + ` 
Nota: ` + mayorMisionDos);
            }
            else {
                alert("No hay Talentos registrados")
            }

            break;
        case 9:
            if (cantidadDeTalentos > 0 && notaMisionTres.length !== 0) {
                for (i = 0; i < notaMisionTres.length; i++) {
                    if (notaMisionTres[i] > mayorMisionTres) {
                        mayorMisionTres = notaMisionTres[i]
                        nombreMayorMisionTres = datosTalentos[1][i]
                    }
                }
                alert(`
Talento con la Mejor Nota de la Mision 3: 
Nombre: ` + nombreMayorMisionTres + ` 
Nota: ` + mayorMisionTres);
            }
            else {
                alert("No hay Talentos registrados")
            }

            break;
        case 10:
            if (cantidadDeTalentos > 0 && notaMisionUno.length !== 0 && notaMisionDos.length !== 0 && notaMisionTres.length !== 0) {
                for (i = 0; i < cantidadDeTalentos; i++) {
                    promedioGeneral[i] = (notaMisionUno[i] + notaMisionDos[i] + notaMisionTres[i] + notaPruebaFinal[i]) / 4
                    nombresTalentos[i] = datosTalentos[1][i]
                    alert(`
Promedio general del Talento `+ i + `
Nombre: `+ nombresTalentos[i] + ` 
Promedio: `+ promedioGeneral[i]);
                }
            }
            else {
                alert(`
Revise que la cantidad de Talentos esté registrada y 
que las notas de cada Prueba esten completas
Se puede dirigir a la opcion 11 del menu
y revisar cual nota falta`)
            }
            break;
        case 11:
            if (cantidadDeTalentos > 0) {
                for (i = 0; i < cantidadDeTalentos; i++) {
                    codigoTalentos[i] = datosTalentos[0][i]
                    alert(`
Talento ` + i + `
Codigo: ` + codigoTalentos[i] + ` 
Nombre: ` + nombresTalentos[i] + `
Nota Mision 1: ` + notaMisionUno[i] + `
Nota Mision 2: ` + notaMisionDos[i] + ` 
Nota Mision 3: ` + notaMisionTres[i] + `
Nota Prueba Final: `+ notaPruebaFinal[i]);
                }
            }
            else {
                alert("No hay Talentos registrados")
            }

            break;
        case 12:
            alert(`
Nombre: Yari Zarela Lizarazo Niño
Codigo: 1005602008
Edad: 22`)
            break;
        case 13:
            alert("Saliendo");
            break;
        default:
            alert("Por Favor ingresa bien los datos del menu");
            break;

    }
}
while (opcion !== 13)