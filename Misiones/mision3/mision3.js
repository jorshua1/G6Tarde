let usuario = ""
let asignacionTalentos = 0;
let cantidadTalentos = 0;
let codigoNombre = [];
let codigosDisponibles = [];
let talentosRegistrados = 0;
let codigoValido = 0;
let menu = "";
let eleccion = 0;
let validarEleccion = 0;
let confirmacion = 0;
let repetir = 0;

usuario = prompt("Bienvenido, usuario. Por favor, ingrese su nombre para continuar.");
while ((!isNaN(usuario)) || (usuario.length === 0)) {
    usuario = prompt("Por favor, ingrese un nombre válido para continuar.");
}
do {
    menu = `Usuario ${usuario}, por favor, seleccione una de las siguientes opciones:\n1. Registrar cantidad de talentos.\n2. Registrar datos de los talentos.\n3. Registrar notas de los talentos. \n4. Mejores desempeños.\n5. Promedio talentos.\n6. Inspeccionar talentos.\n7. Ordenar talentos.\n8. Acerca del desarrollador.\n9. Salir.`;
    eleccion = Number(prompt(menu));
    while ((isNaN(eleccion)) || (!Number.isInteger(eleccion)) || (eleccion < 1) || (eleccion > 9)) {
        alert("Por favor, seleccione una opción válida.");
        eleccion = Number(prompt(menu));
    }
    switch (eleccion) {
        case 1:
            if (asignacionTalentos === 0) {
                do {
                    cantidadTalentos = Number(prompt("Por favor, ingrese la cantidad de talentos que desea registrar."));
                    while ((isNaN(cantidadTalentos)) || (!Number.isInteger(cantidadTalentos)) || (cantidadTalentos <= 0)) {
                        alert("Por favor, ingrese una cantidad de talentos válida.");
                        cantidadTalentos = Number(prompt("Por favor, ingrese la cantidad de talentos que desea registrar."));
                    }
                    confirmacion = Number(prompt(`¿Desea registrar ${cantidadTalentos} talentos? (Esta cantidad máxima no se podrá incrementar).\n1) Sí.\n2) No.`));
                    while ((confirmacion !== 1) && (confirmacion !== 2)) {
                        alert("Por favor ingrese una opción válida.");
                        confirmacion = Number(prompt(`¿Desea registrar ${cantidadTalentos} talentos? (Esta cantidad máxima no se podrá incrementar).\n1) Sí.\n2) No.`));
                    }
                    switch (confirmacion) {
                        case 1:
                            asignacionTalentos = 1;
                            for (let i = 0; i < cantidadTalentos; i++) {
                                codigosDisponibles[i] = i + 1;
                            }
                            alert(`Se han registrado ${cantidadTalentos} talentos. Volviendo al menú principal.`);
                            break;
                    }
                } while (confirmacion === 2);
            } else {
                alert("Ya se han registrado talentos, no se puede acceder a esta opción.");
            }
            break;
        case 2:
            let codigoIngresado = 0;
            let i = 0;
            codigoValido = 1;
            if ((asignacionTalentos === 1) && (cantidadTalentos > 0) && (cantidadTalentos !== talentosRegistrados)) {
                for (talentosRegistrados; talentosRegistrados < cantidadTalentos;) {
                    codigoNombre[talentosRegistrados] = [0, ""]
                    do {
                        codigoValido = 1;
                        codigoNombre[talentosRegistrados][0] = Number(prompt(`Ingrese un número entre 1 y ${cantidadTalentos} para asignarle un código a este estudiante.\nCódigos disponibles: ${codigosDisponibles}`));
                        for (i = 0; i < codigosDisponibles.length; i++) {
                            if (codigoNombre[talentosRegistrados][0] === codigosDisponibles[i]) {
                                codigoValido = 0;
                                break;
                            }
                        }
                        if (codigoValido === 1) {
                            alert("Código no disponible, inténtelo de nuevo.");
                        }
                    } while (codigoValido === 1);
                    codigoIngresado = codigoNombre[talentosRegistrados][0]
                    codigoNombre[talentosRegistrados][1] = prompt(`Ingrese el nombre del estudiante identificado con el código ${codigoNombre[talentosRegistrados][0]}.`);
                    while ((!isNaN(codigoNombre[talentosRegistrados][1])) || (codigoNombre[talentosRegistrados][1].length === 0)) {
                        alert("Por favor, ingrese un nombre válido.");
                        codigoNombre[talentosRegistrados][1] = prompt(`Ingrese el nombre del estudiante identificado con el código ${codigoNombre[talentosRegistrados][0]}.`);
                    }
                    do {
                        confirmacion = Number(prompt(`Código: ${codigoNombre[talentosRegistrados][0]}\nNombre: ${codigoNombre[talentosRegistrados][1]}.\n¿Son correctos estos datos?\n1) Sí.\n2) No.`));
                        while ((confirmacion !== 1) && (confirmacion !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            confirmacion = Number(prompt(`Código: ${codigoNombre[talentosRegistrados][0]}\nNombre: ${codigoNombre[talentosRegistrados][1]}.\n¿Son correctos estos datos?\n1) Sí.\n2) No.`));
                        }
                        if (confirmacion === 1) {
                            alert("Se han registrado los datos de este estudiante.");
                            codigoNombre[talentosRegistrados][2] = [0, 0, 0, 0];
                            talentosRegistrados++;
                            codigosDisponibles[codigoIngresado - 1] = "X";
                        } else {
                            eleccion = Number(prompt(`¿Qué dato deseas modificar? (0 para retroceder).\n1. Código.\n2. Nombre.\n3. Volver al menú principal.`));
                            while ((isNaN(eleccion)) || (!Number.isInteger(eleccion)) || (eleccion < 0) || (eleccion > 3)) {
                                alert("Por favor, seleccione una opción válida");
                                eleccion = Number(prompt(`¿Qué dato deseas modificar? (0 para retroceder).\n1. Código.\n2. Nombre.\n3. Volver al menú principal.`));
                            }
                            switch (eleccion) {
                                case 1:
                                    do {
                                        codigoValido = 1;
                                        codigoNombre[talentosRegistrados][0] = Number(prompt(`Ingrese un número entre 1 y ${cantidadTalentos} para asignarle un código a este estudiante.\nCódigos disponibles: ${codigosDisponibles}`));
                                        for (i = 0; i < codigosDisponibles.length; i++) {
                                            if (codigoNombre[talentosRegistrados][0] === codigosDisponibles[i]) {
                                                codigoValido = 0;
                                                break;
                                            }
                                        }
                                        if (codigoValido === 1) {
                                            alert("Código no disponible, inténtelo de nuevo.");
                                        }
                                    } while (codigoValido === 1);
                                    codigoIngresado = codigoNombre[talentosRegistrados][0];
                                    break;
                                case 2:
                                    codigoNombre[talentosRegistrados][1] = prompt(`Ingrese el nombre del estudiante identificado con el código ${codigoNombre[talentosRegistrados][0]}.`);
                                    while ((!isNaN(codigoNombre[talentosRegistrados][1])) || (codigoNombre[talentosRegistrados][1].length === 0)) {
                                        alert("Por favor, ingrese un nombre válido.");
                                        codigoNombre[talentosRegistrados][1] = prompt(`Ingrese el nombre del estudiante identificado con el código ${codigoNombre[talentosRegistrados][0]}.`);
                                    }
                                    break;
                                case 3:
                                    codigoNombre.splice(talentosRegistrados, 1);
                                    alert("Volviendo al menú principal.");
                                    break;
                            }
                        }
                        if (eleccion === 3) {
                            break;
                        }
                    } while ((confirmacion !== 1) && (eleccion !== 3));
                    if ((confirmacion === 1) && (eleccion !== 3) && (talentosRegistrados < cantidadTalentos)) {
                        repetir = Number(prompt(`¿Deseas continuar registrando datos de los talentos?\n1) Sí.\n2) No.`));
                        while ((repetir !== 1) && (repetir !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            repetir = Number(prompt(`¿Deseas continuar registrando datos de los talentos?\n1) Sí.\n2) No.`));
                        }
                        if (repetir === 2) {
                            break;
                        }
                    } else if (((confirmacion === 1) && (eleccion !== 3) && (talentosRegistrados === cantidadTalentos))) {
                        alert("No hay más talentos por registrar datos. Volviendo al menú principal.");
                    } else {
                        break;
                    }
                }
            } else if ((asignacionTalentos === 1) && (cantidadTalentos === talentosRegistrados)) {
                alert("Ya se han ingresado los datos de todos los talentos registrados, no se puede acceder a esta opción.");
            } else {
                alert("No hay talentos registrados, no se puede acceder a esta opción.");
            }
            break;
        case 3:
            validarEleccion = 1;
            if (codigoNombre.length > 0) {
                let validando = 0;
                let temp = 0
                do {
                    menu = `Escriba el código del talento al que desee asignar notas (Escriba 0 para salir):`
                    validarEleccion = 1;
                    for (let i = 0; i < codigoNombre.length; i++) {
                        menu += `\n${codigoNombre[i][0]}. ${codigoNombre[i][1]}.`
                    }
                    do {
                        eleccion = Number(prompt(menu));
                        if (eleccion !== 0) {
                            for (validando = 0; validando < codigoNombre.length; validando++) {
                                if (eleccion === codigoNombre[validando][0]) {
                                    validarEleccion = 0;
                                    break;
                                }
                            }
                        }
                        if ((validarEleccion === 1) && (eleccion !== 0)) {
                            alert("Error. El código indicado no coincide con ninguna de las opciones.");
                        }
                    } while ((validarEleccion === 1) && (eleccion !== 0));
                    if (eleccion !== 0) {
                        do {
                            eleccion = Number(prompt(`¿Qué nota desea asignar al talento ${codigoNombre[validando][1]}? (0 para volver).\n1. Misión 1.\n2. Misión 2.\n3. Misión 3.\n4. Prueba de nivel final.`));
                            while ((isNaN(eleccion)) || (!Number.isInteger(eleccion)) || (eleccion < 0) || (eleccion > 4)) {
                                alert("Por favor, seleccione una opción válida.");
                                eleccion = Number(prompt(`¿Qué nota desea asignar al talento ${codigoNombre[validando][1]}?(0 para volver).\n1. Misión 1.\n2. Misión 2.\n3. Misión 3.\n4. Prueba de nivel final.`));
                            }
                            switch (eleccion) {
                                case 1:
                                    temp = codigoNombre[validando][2][0];
                                    codigoNombre[validando][2][0] = Number(prompt(`Ingrese la nota de la misión 1 del talento ${codigoNombre[validando][1]}. (Entre 1 y 100. No se aceptan decimales).`));
                                    while ((isNaN(codigoNombre[validando][2][0])) || (!Number.isInteger(codigoNombre[validando][2][0])) || (codigoNombre[validando][2][0] < 1) || (codigoNombre[validando][2][0] > 100)) {
                                        alert("Por favor, ingrese una nota válida.");
                                        codigoNombre[validando][2][0] = Number(prompt(`Ingrese la nota de la misión 1 del talento ${codigoNombre[validando][1]}. (Entre 1 y 100. No se aceptan decimales).`));
                                    }
                                    if (temp === 0) {
                                        alert(`Se ha registrado la nota de la misión 1 de ${codigoNombre[validando][1]}`);
                                    } else if (temp !== 0) {
                                        confirmacion = Number(prompt(`Ya existe una nota de misión 1 de este talento (Nota: ${temp}). ¿Deseas sobreescribirla?\n1) Sí.\n2) No.`));
                                        while ((confirmacion !== 1) && (confirmacion !== 2)) {
                                            alert("Por favor seleccione una opción válida.");
                                            confirmacion = Number(prompt(`Ya existe una nota de misión 1 de este talento (Nota: ${temp}). ¿Deseas sobreescribirla?\n1) Sí.\n2)No.`));
                                        }
                                        if (confirmacion === 1) {
                                            alert("Se ha sobreescrito la nota de la misión 1 de este talento.");
                                        } else {
                                            codigoNombre[validando][2][0] = temp;
                                            alert("La nota de este talento no se ha modificado.");
                                        }
                                    }
                                    break;
                                case 2:
                                    temp = codigoNombre[validando][2][1];
                                    codigoNombre[validando][2][1] = Number(prompt(`Ingrese la nota de la misión 2 del talento ${codigoNombre[validando][1]}. (Entre 1 y 100. No se aceptan decimales).`));
                                    while ((isNaN(codigoNombre[validando][2][1])) || (!Number.isInteger(codigoNombre[validando][2][1])) || (codigoNombre[validando][2][1] < 1) || (codigoNombre[validando][2][1] > 100)) {
                                        alert("Por favor, ingrese una nota válida.");
                                        codigoNombre[validando][2][1] = Number(prompt(`Ingrese la nota de la misión 2 del talento ${codigoNombre[validando][1]}. (Entre 1 y 100. No se aceptan decimales).`));
                                    }
                                    if (temp === 0) {
                                        alert(`Se ha registrado la nota de la misión 2 de ${codigoNombre[validando][1]}`);
                                    } else if (temp !== 0) {
                                        confirmacion = Number(prompt(`Ya existe una nota de misión 2 de este talento (Nota: ${temp}). ¿Deseas sobreescribirla?\n1) Sí.\n 2) No.`));
                                        while ((confirmacion !== 1) && (confirmacion !== 2)) {
                                            alert("Por favor seleccione una opción válida.");
                                            confirmacion = Number(prompt(`Ya existe una nota de misión 2 de este talento (Nota: ${temp}). ¿Deseas sobreescribirla?\n1) Sí.\n2) No.`));
                                        }
                                        if (confirmacion === 1) {
                                            alert("Se ha sobreescrito la nota de la misión 2 de este talento.");
                                        } else {
                                            codigoNombre[validando][2][1] = temp;
                                            alert("La nota de este talento no se ha modificado.");
                                        }
                                    }
                                    break;
                                case 3:
                                    temp = codigoNombre[validando][2][2];
                                    codigoNombre[validando][2][2] = Number(prompt(`Ingrese la nota de la misión 3 del talento ${codigoNombre[validando][1]}. (Entre 1 y 100. No se aceptan decimales).`));
                                    while ((isNaN(codigoNombre[validando][2][2])) || (!Number.isInteger(codigoNombre[validando][2][2])) || (codigoNombre[validando][2][2] < 1) || (codigoNombre[validando][2][2] > 100)) {
                                        alert("Por favor, ingrese una nota válida.");
                                        codigoNombre[validando][2][2] = Number(prompt(`Ingrese la nota de la misión 3 del talento ${codigoNombre[validando][1]}. (Entre 1 y 100. No se aceptan decimales).`));
                                    }
                                    if (temp === 0) {
                                        alert(`Se ha registrado la nota de la misión 3 de ${codigoNombre[validando][1]}`);
                                    } else if (temp !== 0) {
                                        confirmacion = Number(prompt(`Ya existe una nota de misión 3 de este talento (Nota: ${temp}). ¿Deseas sobreescribirla?\n1) Sí.\n 2) No.`));
                                        while ((confirmacion !== 1) && (confirmacion !== 2)) {
                                            alert("Por favor seleccione una opción válida.");
                                            confirmacion = Number(prompt(`Ya existe una nota de misión 3 de este talento (Nota: ${temp}). ¿Deseas sobreescribirla?\n1) Sí.\n2) No.`));
                                        }
                                        if (confirmacion === 1) {
                                            alert("Se ha sobreescrito la nota de la misión 3 de este talento.");
                                        } else {
                                            codigoNombre[validando][2][2] = temp;
                                            alert("La nota de este talento no se ha modificado.");
                                        }
                                    }
                                    break;
                                case 4:
                                    temp = codigoNombre[validando][2][3];
                                    codigoNombre[validando][2][3] = Number(prompt(`Ingrese la nota de la prueba de nivel final del talento ${codigoNombre[validando][1]}. (Entre 1 y 100. No se aceptan decimales).`));
                                    while ((isNaN(codigoNombre[validando][2][3])) || (!Number.isInteger(codigoNombre[validando][2][3])) || (codigoNombre[validando][2][3] < 1) || (codigoNombre[validando][2][3] > 100)) {
                                        alert("Por favor, ingrese una nota válida.");
                                        codigoNombre[validando][2][3] = Number(prompt(`Ingrese la nota de la prueba de nivel final del talento ${codigoNombre[validando][1]}. (Entre 1 y 100. No se aceptan decimales).`));
                                    }
                                    if (temp === 0) {
                                        alert(`Se ha registrado la nota de la prueba de nivel final de ${codigoNombre[validando][1]}`);
                                    } else if (temp !== 0) {
                                        confirmacion = Number(prompt(`Ya existe una nota de prueba de nivel final de este talento (Nota: ${temp}). ¿Deseas sobreescribirla?\n1) Sí.\n 2) No.`));
                                        while ((confirmacion !== 1) && (confirmacion !== 2)) {
                                            alert("Por favor seleccione una opción válida.");
                                            confirmacion = Number(prompt(`Ya existe una nota de prueba de nivel final de este talento (Nota: ${temp}). ¿Deseas sobreescribirla?\n1) Sí.\n2) No.`));
                                        }
                                        if (confirmacion === 1) {
                                            alert("Se ha sobreescrito la nota de la prueba de nivel final de este talento.");
                                        } else {
                                            codigoNombre[validando][2][3] = temp;
                                            alert("La nota de este talento no se ha modificado.");
                                        }
                                    }
                                    break;
                                default:
                                    repetir = 2;
                            }
                            if (eleccion !== 0) {
                                repetir = Number(prompt("¿Deseas continuar asignando notas a este talento?\n1) Sí.\n2) No."));
                                while ((repetir !== 1) && (repetir !== 2)) {
                                    alert("Por favor seleccione una opción válida.");
                                    repetir = Number(prompt("¿Deseas continuar asignando notas a este talento?\n1) Sí.\n2) No."));
                                }
                            }
                        } while (repetir === 1);
                        repetir = Number(prompt("¿Deseas continuar asignando notas de talentos?\n1) Sí.\n2) No."));
                        while ((repetir !== 1) && (repetir !== 2)) {
                            alert("Por favor seleccione una opción válida.");
                            repetir = Number(prompt("¿Deseas continuar asignando notas de talentos?\n1) Sí.\n2) No."));
                        }
                    } else {
                        repetir = 2;
                    }
                } while (repetir === 1);
                alert("Volviendo al menú principal.");
            } else {
                alert("No hay datos de talentos registrados, no se puede acceder a esta acción.")
            }
            break;
        case 4:
            if (codigoNombre.length > 0) {
                let mejorNota = 0;
                menu = "Mejores desempeños";
                for (let mision = 0; mision < 4; mision++) {
                    if (mision !== 3) {
                        menu += `\nMisión ${mision + 1}:`;
                    } else {
                        menu += `\nPrueba final:`;
                    }
                    for (let i = 0; i < codigoNombre.length; i++) {
                        if (mejorNota === 0) {
                            mejorNota = codigoNombre[i][2][mision];
                        } else if (codigoNombre[i][2][mision] > mejorNota) {
                            mejorNota = codigoNombre[i][2][mision];
                        }
                    }
                    if (mejorNota !== 0) {
                        for (let i = 0; i < codigoNombre.length; i++) {
                            if (codigoNombre[i][2][mision] === mejorNota) {
                                menu += `\nTalento: ${codigoNombre[i][1]} --  Nota: ${codigoNombre[i][2][mision]}`
                            }
                        }
                    } else {
                        menu += "\nNo hay notas registradas.";
                    }
                    mejorNota = 0;
                }
                alert(menu);
            } else {
                alert("No hay datos de talentos registrados, no se puede acceder a esta acción.");
            }
            break;
        case 5:
            if ((codigoNombre.length > 0)) {
                let promedio = 0;;
                menu = "Promedio talentos:";
                for (let i = 0; i < codigoNombre.length; i++) {
                    promedio = 0;
                    for (let sumando = 0; sumando < 4; sumando++) {
                        promedio += codigoNombre[i][2][sumando];
                    }
                    promedio /= 4;
                    if (promedio > 0) {
                        if ((codigoNombre[i][2][0] === 0) || (codigoNombre[i][2][1] === 0) || (codigoNombre[i][2][3] === 0) || (codigoNombre[i][2][4] === 0)) {
                            menu += `\n${codigoNombre[i][1]}: ${promedio} (Este talento tiene notas sin registrar).`;
                        } else {
                            menu += `\n${codigoNombre[i][1]}: ${promedio} (Todas las notas registradas).`;
                        }
                    } else {
                        menu += `\n${codigoNombre[i][1]}: (Sin notas registradas).`;
                    }
                }
                alert(menu);
            } else {
                alert("No hay datos de talentos registrados, no se puede acceder a esta acción.");
            }
            break;
        case 6:
            validarEleccion = 1;
            if ((codigoNombre.length > 0)) {
                let validando = 0;
                let promedio = 0;
                menu = "Escriba el código del talento a inspeccionar (0 para volver).";
                validarEleccion = 1;
                for (let i = 0; i < codigoNombre.length; i++) {
                    menu += `\n${codigoNombre[i][0]}. ${codigoNombre[i][1]}`
                    promedio = 0;
                    for (let sumando = 0; sumando < 4; sumando++) {
                        promedio += codigoNombre[i][2][sumando];
                    }
                    promedio /= 4;
                    codigoNombre[i][2][4] = promedio;
                }
                do {
                    validarEleccion = 1;
                    do {
                        eleccion = Number(prompt(menu));
                        if (eleccion !== 0) {
                            for (validando = 0; validando < codigoNombre.length; validando++) {
                                if (eleccion === codigoNombre[validando][0]) {
                                    validarEleccion = 0;
                                    break;
                                }
                            }
                        }
                        if ((validarEleccion === 1) && (eleccion !== 0)) {
                            alert("Error. El código indicado no coincide con ninguna de las opciones.");
                        }
                    } while ((validarEleccion === 1) && (eleccion !== 0));
                    if (eleccion !== 0) {
                        alert(`Información talento\nCódigo: ${codigoNombre[validando][0]}.\nNombre: ${codigoNombre[validando][1]}.\nNota misión 1: ${codigoNombre[validando][2][0]}.\nNota misión 2: ${codigoNombre[validando][2][1]}.\nNota misión 3: ${codigoNombre[validando][2][2]}.\nNota prueba final: ${codigoNombre[validando][2][3]}.\nPromedio: ${codigoNombre[validando][2][4]}.`);
                        repetir = Number(prompt("¿Desea seguir inspeccionando los datos de los talentos?\n1) Sí.\n2) No."));
                        while ((repetir !== 1) && (repetir !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            repetir = Number(prompt("¿Desea seguir inspeccionando los datos de los talentos?\n1) Sí.\n2) No."));
                        }
                        if (repetir === 2) {
                            alert("Volviendo al menú principal");
                        }
                    } else {
                        alert("Volviendo al menú principal.");
                    }
                } while ((eleccion !== 0) && (repetir !== 2));
            } else {
                alert("No hay datos de talentos registrados, no se puede acceder a esta acción.");
            }
            break;
        case 7:
            let temp = 0;
            if ((codigoNombre.length > 0)) {
                eleccion = Number(prompt("¿Cómo deseas organizar los registros? (0 para volver).\n1. Código menor-mayor.\n2. Código mayor-menor."));
                while ((eleccion !== 0) && (eleccion !== 1) && (eleccion !== 2)) {
                    alert("Por favor seleccione una opción válida.");
                    eleccion = Number(prompt("¿Cómo deseas organizar los registros? (0 para volver).\n1. Código menor-mayor.\n2. Código mayor-menor."));
                }
                if ((eleccion !== 0) && (eleccion === 1)) {
                    for (let i = 1; i < codigoNombre.length; i++) {
                        for (let j = 0; j < (codigoNombre.length - 1); j++) {
                            if (codigoNombre[j][0] > codigoNombre[j + 1][0]) {
                                temp = codigoNombre[j];
                                codigoNombre[j] = codigoNombre[j + 1];
                                codigoNombre[j + 1] = temp;
                            }
                        }
                    }
                    alert("Se ha realizado el ordenamiento.");
                } else if ((eleccion !== 0) && (eleccion === 2)) {
                    for (let i = 1; i < codigoNombre.length; i++) {
                        for (let j = 0; j < (codigoNombre.length - 1); j++) {
                            if (codigoNombre[j][0] < codigoNombre[j + 1][0]) {
                                temp = codigoNombre[j];
                                codigoNombre[j] = codigoNombre[j + 1];
                                codigoNombre[j + 1] = temp;
                            }
                        }
                    }
                    alert("Se ha realizado el ordenamiento.");
                } else {
                    alert("Volviendo al menú principal.")
                }
            } else {
                alert("No hay datos de talentos registrados, no se puede acceder a esta acción.");
            }
            break;
        case 8:
            if ((codigoNombre.length > 0)) {
                alert("Código desarrollado por Miguel Angel Pasachoa, talento de COEX.\nUsuario en GitHub: Miguelit09\nCorreo electrónico: miguel.p0908@gmail.com");
            }else{
                alert("No hay datos de talentos registrados, no se puede acceder a esta acción.");
            }
    }
} while (eleccion !== 9);
alert("Saliendo... ¡Vuelva pronto!");