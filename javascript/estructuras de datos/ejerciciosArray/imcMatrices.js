let datos = []
let eleccion = 0;
let contadorFamiliares = 0;
let familiar = 0;
let registrarOtro = 0;
let corregir = 0;
let menuInicial = "Bienvenido a la calculadora IMC. Eliga una de las siguientes opciones mediante su respectivo número: \n1. Añadir familiares.\n2. Ver datos registrados.\n3. Modificar datos.\n4. Eliminar familiar.\n5. Ver datos de todos los familiares.\n6. Ver promedio IMC de la familia.\n7. Salir.";
let eleccionParentesco = 0;
let contadorPadres = 0;
let contadorAbuelos = 0;
let contadorHermanos = 0;
let contadorTios = 0;
let contadorPrimos = 0;
let contadorOtros = 0;
let confirmacion = 0;
let acumuladoImc = 0;
let promedioImc = 0;
let categoriaFamilia = "";
let menuRegistros = "";
let modificarCaracteristica = 0;
let memoria = "";
let menuDatos = "";

do {
    eleccion = Number(prompt(menuInicial));
    while ((eleccion < 1) || (eleccion > 7) || (!Number.isInteger(eleccion)) || (isNaN(eleccion))) {
        alert("Por favor, ingrese una opción válida.");
        eleccion = Number(prompt(menuInicial));
    }
    switch (eleccion) {
        case 1:
            contadorFamiliares++;
            for (familiar; familiar < contadorFamiliares; familiar++) {
                datos[familiar] = new Array(7);
                datos[familiar][0] = prompt("Ingrese el nombre de su familiar.");
                while ((!isNaN(datos[familiar][0])) || (datos[familiar][0] === "")) {
                    alert("Por favor ingrese un nombre válido.");
                    datos[familiar][0] = prompt("Ingrese el nombre de su familiar.");
                }
                eleccionParentesco = Number(prompt(`Parentesco de su familiar (${datos[familiar][0]}). Seleccione alguna de las siguientes opciones:\n1. Padre.\n2. Madre.\n3. Hermano(a).\n4. Tío(a).\n5. Abuelo(a).\n6. Primo(a).\n7. Otro.\n8.Volver al menú principal.`));
                while ((eleccionParentesco < 1) || (eleccionParentesco > 8) || (!Number.isInteger(eleccionParentesco)) || (isNaN(eleccionParentesco))) {
                    alert("Por favor, seleccione una opción válida.");
                    eleccionParentesco = Number(prompt(`Parentesco de su familiar (${datos[familiar][0]}). Seleccione alguna de las siguientes opciones:\n1. Padre.\n2. Madre.\n3. Hermano(a).\n4. Tío(a).\n5. Abuelo(a).\n6. Primo(a).\n7. Otro.\n8.Volver al menú principal.`));
                }
                switch (eleccionParentesco) {
                    case 1:
                        datos[familiar][1] = "Padre";
                        break;
                    case 2:
                        datos[familiar][1] = "Madre";
                        break;
                    case 3:
                        datos[familiar][1] = "Hermano(a)";
                        break;
                    case 4:
                        datos[familiar][1] = "Tío(a)";
                        break;
                    case 5:
                        datos[familiar][1] = "Abuelo(a)";
                        break;
                    case 6:
                        datos[familiar][1] = "Primo(a)";
                        break;
                    case 7:
                        datos[familiar][1] = prompt(`Ingrese el parentesco que tiene con ${datos[familiar][0]}.`);
                        while ((!isNaN(datos[familiar][1])) || (datos[familiar][1] === "")) {
                            alert("Ingrese un parentesco válido.")
                            datos[familiar][1] = prompt(`Ingrese el parentesco que tiene con ${datos[familiar][0]}.`);
                        }
                        break;
                    case 8:
                        alert("Volviendo al menú principal. No se han guardado los datos de este familiar.");
                        contadorFamiliares--;
                        familiar--;
                        break;
                }
                if (eleccionParentesco !== 8) {
                    datos[familiar][2] = Number(prompt(`Ingrese la edad de ${datos[familiar][0]}.`));
                    while ((datos[familiar][2] < 0) || (!Number.isInteger(datos[familiar][2])) || (isNaN(datos[familiar][2]))) {
                        alert("Por favor, ingrese una edad válida.");
                        datos[familiar][2] = Number(prompt(`Ingrese la edad de ${datos[familiar][0]}.`));
                    }
                    datos[familiar][3] = Number(prompt(`Ingrese el peso de ${datos[familiar][0]} en kg.`));
                    while ((datos[familiar][3] < 3) || (isNaN(datos[familiar][3])) || (datos[familiar][3] > 635)) {
                        alert("Por favor, ingrese un peso válido.");
                        datos[familiar][3] = Number(prompt(`Ingrese el peso de ${datos[familiar][0]} en kg.`));
                    }
                    datos[familiar][4] = Number(prompt(`Ingrese la estatura de ${datos[familiar][0]} en metros.`));
                    while ((datos[familiar][4] < 0.35) || (isNaN(datos[familiar][4])) || (datos[familiar][4] > 3)) {
                        alert("Por favor, ingrese una estatura válida.");
                        datos[familiar][4] = Number(prompt(`Ingrese la estatura de ${datos[familiar][0]} en metros.`));
                    }
                    confirmacion = Number(prompt(`Nombre: ${datos[familiar][0]}\nParentesco: ${datos[familiar][1]}\nEdad: ${datos[familiar][2]}\nPeso: ${datos[familiar][3]}kg.\nEstatura: ${datos[familiar][4]}m.\nLos datos son correctos? 1) Si. --- 2) No.`));
                    while ((confirmacion !== 1) && (confirmacion !== 2)) {
                        alert("Por favor, ingrese una opción válida.");
                        confirmacion = Number(prompt(`Nombre: ${datos[familiar][0]}\nParentesco: ${datos[familiar][1]}\nEdad: ${datos[familiar][2]}\nPeso: ${datos[familiar][3]}kg.\nEstatura: ${datos[familiar][4]}m.\nLos datos son correctos? 1) Si. --- 2) No.`));
                    }
                    while (confirmacion === 2) {
                        corregir = Number(prompt("¿Qué dato desea corregir?\n1. Nombre.\n2. Parentesco.\n3. Edad.\n4. Peso.\n5.Estatura.\n6.Volver.\n7.Eliminar los datos ingresados."));
                        while ((corregir < 1) || (corregir > 7) || (!Number.isInteger(corregir)) || (isNaN(corregir))) {
                            alert("Por favor, ingrese una opción válida.");
                            corregir = Number(prompt("¿Qué dato desea corregir?\n1. Nombre.\n2. Parentesco.\n3. Edad.\n4. Peso.\n5.Estatura.\n6.Volver.\n7.Eliminar los datos ingresados."));
                        }
                        switch (corregir) {
                            case 1:
                                datos[familiar][0] = prompt("Ingrese el nombre de su familiar.");
                                while ((!isNaN(datos[familiar][0])) || (datos[familiar][0] === "")) {
                                    alert("Por favor ingrese un nombre válido.");
                                    datos[familiar][0] = prompt("Ingrese el nombre de su familiar.");
                                }
                                break;
                            case 2:
                                eleccionParentesco = Number(prompt(`Parentesco de su familiar (${datos[familiar][0]}). Seleccione alguna de las siguientes opciones:\n1. Padre.\n2. Madre.\n3. Hermano(a).\n4. Tío(a).\n5. Abuelo(a).\n6. Primo(a).\n7. Otro.`));
                                while ((eleccionParentesco < 1) || (eleccionParentesco > 7) || (!Number.isInteger(eleccionParentesco)) || (isNaN(eleccionParentesco))) {
                                    alert("Por favor, seleccione una opción válida.");
                                    eleccionParentesco = Number(prompt(`Parentesco de su familiar (${datos[familiar][0]}). Seleccione alguna de las siguientes opciones:\n1. Padre.\n2. Madre.\n3. Hermano(a).\n4. Tío(a).\n5. Abuelo(a).\n6. Primo(a).\n7. Otro.`));
                                }
                                switch (eleccionParentesco) {
                                    case 1:
                                        datos[familiar][1] = "Padre";
                                        break;
                                    case 2:
                                        datos[familiar][1] = "Madre";
                                        break;
                                    case 3:
                                        datos[familiar][1] = "Hermano(a)";
                                        break;
                                    case 4:
                                        datos[familiar][1] = "Tío(a)";
                                        break;
                                    case 5:
                                        datos[familiar][1] = "Abuelo(a)";
                                        break;
                                    case 6:
                                        datos[familiar][1] = "Primo(a)";
                                        break;
                                    case 7:
                                        datos[familiar][1] = prompt(`Ingrese el parentesco que tiene con ${datos[familiar][0]}.`);
                                        while ((!isNaN(datos[familiar][1])) || (datos[familiar][1] === "")) {
                                            alert("Ingrese un parentesco válido.")
                                            datos[familiar][1] = prompt(`Ingrese el parentesco que tiene con ${datos[familiar][0]}.`);
                                        }
                                        break;
                                }
                                break;
                            case 3:
                                datos[familiar][2] = Number(prompt(`Ingrese la edad de ${datos[familiar][0]}.`));
                                while ((datos[familiar][2] < 0) || (!Number.isInteger(datos[familiar][2])) || (isNaN(datos[familiar][2]))) {
                                    alert("Por favor, ingrese una edad válida.");
                                    datos[familiar][2] = Number(prompt(`Ingrese la edad de ${datos[familiar][0]}.`));
                                }
                                break;
                            case 4:
                                datos[familiar][3] = Number(prompt(`Ingrese el peso de ${datos[familiar][0]} en kg.`));
                                while ((datos[familiar][3] < 3) || (isNaN(datos[familiar][3])) || (datos[familiar][3] > 635)) {
                                    alert("Por favor, ingrese un peso válido.");
                                    datos[familiar][3] = Number(prompt(`Ingrese el peso de ${datos[familiar][0]} en kg.`));
                                }
                                break;
                            case 5:
                                datos[familiar][4] = Number(prompt(`Ingrese la estatura de ${datos[familiar][0]} en metros.`));
                                while ((datos[familiar][4] < 0.35) || (isNaN(datos[familiar][4])) || (datos[familiar][4] > 3)) {
                                    alert("Por favor, ingrese una estatura válida.");
                                    datos[familiar][4] = Number(prompt(`Ingrese la estatura de ${datos[familiar][0]} en metros.`));
                                }
                                break;
                            case 6:
                                break;
                            case 7:
                                datos.splice(familiar, 1);
                                alert("Volviendo al menú principal. No se han guardado los datos.");
                                familiar--;
                                contadorFamiliares--;
                                confirmacion = 1;
                                break;
                        }
                        if ((corregir !== 7))
                            confirmacion = Number(prompt(`Nombre: ${datos[familiar][0]}\nParentesco: ${datos[familiar][1]}\nEdad: ${datos[familiar][2]}\nPeso: ${datos[familiar][3]}kg.\nEstatura: ${datos[familiar][4]}m.\nLos datos son correctos? 1) Si. --- 2) No.`));
                        while ((confirmacion !== 1) && (confirmacion !== 2)) {
                            alert("Por favor, ingrese una opción válida.");
                            confirmacion = Number(prompt(`Nombre: ${datos[familiar][0]}\nParentesco: ${datos[familiar][1]}\nEdad: ${datos[familiar][2]}\nPeso: ${datos[familiar][3]}kg.\nEstatura: ${datos[familiar][4]}m.\nLos datos son correctos? 1) Si. --- 2) No.`));
                        }
                    }
                    if ((confirmacion === 1) && (corregir !== 7)) {
                        datos[familiar][5] = datos[familiar][3] / (datos[familiar][4] ** 2);
                        if (datos[familiar][5] < 18.5) {
                            datos[familiar][6] = "Bajo peso";
                        } else if ((datos[familiar][5] > 18.5) && (datos[familiar][5] < 24.9)) {
                            datos[familiar][6] = "Peso normal";
                        } else if ((datos[familiar][5] > 25.0) && (datos[familiar][5] < 28.9)) {
                            datos[familiar][6] = "Sobrepeso";
                        } else if ((datos[familiar][5] > 29.0) && (datos[familiar][5] < 34.9)) {
                            datos[familiar][6] = "Obeso I";
                        } else if (datos[familiar][5] > 35.0) {
                            datos[familiar][6] = "Obeso II";
                        }
                        alert(`Se ha registrado el familiar.\nNombre: ${datos[familiar][0]}\nParentesco: ${datos[familiar][1]}\nEdad: ${datos[familiar][2]}\nPeso: ${datos[familiar][3]}kg.\nEstatura: ${datos[familiar][4]}m.\nIMC: ${datos[familiar][5]}.\nCategoría: ${datos[familiar][6]}.`);
                        switch (datos[familiar][1]) {
                            case "Padre":
                                contadorPadres++;
                                break;
                            case "Madre":
                                contadorPadres++;
                                break;
                            case "Hermano(a)":
                                contadorHermanos++;
                                break;
                            case "Tío(a)":
                                contadorTios++;
                                break;
                            case "Abuelo(a)":
                                contadorAbuelos++;
                                break;
                            case "Primo(a)":
                                contadorPrimos++;
                                break;
                            default:
                                contadorOtros++;
                                break;
                        }
                        registrarOtro = Number(prompt("¿Deseas registrar otro familiar?\n1) Si. --- 2) No."));
                        while ((registrarOtro !== 1) && (registrarOtro !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            registrarOtro = Number(prompt("¿Deseas registrar otro familiar?\n1) Si. --- 2) No."));
                        }
                        if (registrarOtro === 1) {
                            contadorFamiliares++;
                        } else {
                            alert("Volviendo al menú principal.");
                        }
                    }
                }
            }
            break;
        case 2:
            registrarOtro = 0;
            do {
                menuRegistros = "Elija la persona a consultar datos registrados. (Escriba 0 para volver)";
                for (let opcionesMenu = 0; opcionesMenu < contadorFamiliares; opcionesMenu++) {
                    menuRegistros += `\n${opcionesMenu + 1}. ${datos[opcionesMenu][0]}`
                }
                eleccion = Number(prompt(menuRegistros));
                while ((isNaN(eleccion)) || (!Number.isInteger(eleccion)) || (eleccion < 0) || (eleccion > contadorFamiliares)) {
                    alert("Por favor, elija una opción válida.");
                    eleccion = Number(prompt(menuRegistros));
                }
                if (eleccion === 0) {
                    alert("Volviendo al menú principal.");
                    registrarOtro = 2;
                } else {
                    for (let opcionesMenu = 0; opcionesMenu <= eleccion; opcionesMenu++) {
                        if (opcionesMenu === eleccion) {
                            alert(`Nombre: ${datos[eleccion - 1][0]}\nParentesco: ${datos[eleccion - 1][1]}\nEdad: ${datos[eleccion - 1][2]}\nPeso: ${datos[eleccion - 1][3]}kg.\nEstatura: ${datos[eleccion - 1][4]}m.\nIMC: ${datos[eleccion - 1][5]}.\nCategoría: ${datos[eleccion - 1][6]}.`);
                        }
                    }
                    registrarOtro = Number(prompt("¿Desea consultar otro registro?\n1) Si. --- 2) No."));
                    while ((registrarOtro !== 1) && (registrarOtro !== 2)) {
                        alert("Por favor, seleccione una opción válida.");
                        registrarOtro = Number(prompt("¿Desea consultar otro registro?\n1) Si. --- 2) No."));
                    }
                }
            } while (registrarOtro !== 2)
            break;
        case 3:
            registrarOtro = 0;
            do {
                menuRegistros = "Elija la persona a modificar datos registrados. (Escriba 0 para volver)";
                for (let opcionesMenu = 0; opcionesMenu < contadorFamiliares; opcionesMenu++) {
                    menuRegistros += `\n${opcionesMenu + 1}. ${datos[opcionesMenu][0]}`;
                }
                eleccion = Number(prompt(menuRegistros));
                while ((isNaN(eleccion)) || (!Number.isInteger(eleccion)) || (eleccion < 0) || (eleccion > contadorFamiliares)) {
                    alert("Por favor, elija una opción válida.");
                    eleccion = Number(prompt(menuRegistros));
                }
                if (eleccion === 0) {
                    alert("Volviendo al menú principal.");
                    registrarOtro = 2;
                } else {
                    for (let opcionesMenu = 0; opcionesMenu <= eleccion; opcionesMenu++) {
                        if (opcionesMenu === eleccion) {
                            alert(`Nombre: ${datos[eleccion - 1][0]}\nParentesco: ${datos[eleccion - 1][1]}\nEdad: ${datos[eleccion - 1][2]}\nPeso: ${datos[eleccion - 1][3]}kg.\nEstatura: ${datos[eleccion - 1][4]}m.\nIMC: ${datos[eleccion - 1][5]}.\nCategoría: ${datos[eleccion - 1][6]}.`);
                            do {
                                modificarCaracteristica = 0;
                                corregir = Number(prompt("¿Qué dato desea corregir?\n1. Nombre.\n2. Parentesco.\n3. Edad.\n4. Peso.\n5.Estatura.\n6.Volver."));
                                while ((corregir < 1) || (corregir > 6) || (!Number.isInteger(corregir)) || (isNaN(corregir))) {
                                    alert("Por favor, ingrese una opción válida.");
                                    corregir = Number(prompt("¿Qué dato desea corregir?\n1. Nombre.\n2. Parentesco.\n3. Edad.\n4. Peso.\n5.Estatura.\n6.Volver."));
                                }
                                switch (corregir) {
                                    case 1:
                                        memoria = datos[eleccion - 1][0];
                                        datos[eleccion - 1][0] = prompt(`Ingrese el nombre de su familiar. (Actual: ${datos[eleccion - 1][0]})`);
                                        while ((!isNaN(datos[eleccion - 1][0])) || (datos[eleccion - 1][0] === "")) {
                                            alert("Por favor ingrese un nombre válido.");
                                            datos[eleccion - 1][0] = prompt(`Ingrese el nombre de su familiar. (Actual: ${memoria})`);
                                        }
                                        alert(`Nombre: ${datos[eleccion - 1][0]}\nParentesco: ${datos[eleccion - 1][1]}\nEdad: ${datos[eleccion - 1][2]}\nPeso: ${datos[eleccion - 1][3]}kg.\nEstatura: ${datos[eleccion - 1][4]}m.\nIMC: ${datos[eleccion - 1][5]}.\nCategoría: ${datos[eleccion - 1][6]}.`);
                                        break;
                                    case 2:
                                        switch (datos[eleccion - 1][1]) {
                                            case "Padre":
                                                contadorPadres--;
                                                break;
                                            case "Madre":
                                                contadorPadres--;
                                                break;
                                            case "Hermano(a)":
                                                contadorHermanos--;
                                                break;
                                            case "Tío(a)":
                                                contadorTios--;
                                                break;
                                            case "Abuelo(a)":
                                                contadorAbuelos--;
                                                break;
                                            case "Primo(a)":
                                                contadorPrimos--;
                                                break;
                                            default:
                                                contadorOtros--;
                                                break;
                                        }
                                        memoria = datos[eleccion - 1][1];
                                        eleccionParentesco = Number(prompt(`Parentesco de su familiar (${datos[eleccion - 1][0]}) (Actual: ${datos[eleccion - 1][1]}). Seleccione alguna de las siguientes opciones:\n1. Padre.\n2. Madre.\n3. Hermano(a).\n4. Tío(a).\n5. Abuelo(a).\n6. Primo(a).\n7. Otro.`));
                                        while ((eleccionParentesco < 1) || (eleccionParentesco > 7) || (!Number.isInteger(eleccionParentesco)) || (isNaN(eleccionParentesco))) {
                                            alert("Por favor, seleccione una opción válida.");
                                            eleccionParentesco = Number(prompt(`Parentesco de su familiar (${datos[eleccion - 1][0]}) (Actual: ${memoria}). Seleccione alguna de las siguientes opciones:\n1. Padre.\n2. Madre.\n3. Hermano(a).\n4. Tío(a).\n5. Abuelo(a).\n6. Primo(a).\n7. Otro.`));
                                        }
                                        switch (eleccionParentesco) {
                                            case 1:
                                                datos[eleccion - 1][1] = "Padre";
                                                contadorPadres++;
                                                break;
                                            case 2:
                                                datos[eleccion - 1][1] = "Madre";
                                                contadorPadres++;
                                                break;
                                            case 3:
                                                datos[eleccion - 1][1] = "Hermano(a)";
                                                contadorHermanos++;
                                                break;
                                            case 4:
                                                datos[eleccion - 1][1] = "Tío(a)";
                                                contadorTios++;
                                                break;
                                            case 5:
                                                datos[eleccion - 1][1] = "Abuelo(a)";
                                                contadorAbuelos++;
                                                break;
                                            case 6:
                                                datos[eleccion - 1][1] = "Primo(a)";
                                                contadorPrimos++;
                                                break;
                                            case 7:
                                                datos[eleccion - 1][1] = prompt(`Ingrese el parentesco que tiene con ${datos[eleccion - 1][0]}.`);
                                                while ((!isNaN(datos[eleccion - 1][1])) || (datos[eleccion - 1][1] === "")) {
                                                    alert("Ingrese un parentesco válido.")
                                                    datos[eleccion - 1][1] = prompt(`Ingrese el parentesco que tiene con ${datos[eleccion - 1][0]}.`);
                                                }
                                                contadorOtros++;
                                                break;
                                        }
                                        alert(`Nombre: ${datos[eleccion - 1][0]}\nParentesco: ${datos[eleccion - 1][1]}\nEdad: ${datos[eleccion - 1][2]}\nPeso: ${datos[eleccion - 1][3]}kg.\nEstatura: ${datos[eleccion - 1][4]}m.\nIMC: ${datos[eleccion - 1][5]}.\nCategoría: ${datos[eleccion - 1][6]}.`);
                                        break;
                                    case 3:
                                        memoria = datos[eleccion - 1][2];
                                        datos[eleccion - 1][2] = Number(prompt(`Ingrese la edad de ${datos[eleccion - 1][0]}. (Actual: ${memoria})`));
                                        while ((datos[eleccion - 1][2] < 0) || (!Number.isInteger(datos[eleccion - 1][2])) || (isNaN(datos[eleccion - 1][2]))) {
                                            alert("Por favor, ingrese una edad válida.");
                                            datos[eleccion - 1][2] = Number(prompt(`Ingrese la edad de ${datos[eleccion - 1][0]}. (Actual: ${memoria})`));
                                        }
                                        alert(`Nombre: ${datos[eleccion - 1][0]}\nParentesco: ${datos[eleccion - 1][1]}\nEdad: ${datos[eleccion - 1][2]}\nPeso: ${datos[eleccion - 1][3]}kg.\nEstatura: ${datos[eleccion - 1][4]}m.\nIMC: ${datos[eleccion - 1][5]}.\nCategoría: ${datos[eleccion - 1][6]}.`);
                                        break;
                                    case 4:
                                        memoria = datos[eleccion - 1][3];
                                        datos[eleccion - 1][3] = Number(prompt(`Ingrese el peso de ${datos[eleccion - 1][0]} en kg. (Actual: ${memoria})`));
                                        while ((datos[eleccion - 1][3] < 3) || (isNaN(datos[eleccion - 1][3])) || (datos[eleccion - 1][3] > 635)) {
                                            alert("Por favor, ingrese un peso válido.");
                                            datos[eleccion - 1][3] = Number(prompt(`Ingrese el peso de ${datos[eleccion - 1][0]} en kg. (Actual: ${memoria})`));
                                        }
                                        datos[eleccion - 1][5] = datos[eleccion - 1][3] / (datos[eleccion - 1][4] ** 2);
                                        if (datos[eleccion - 1][5] < 18.5) {
                                            datos[eleccion - 1][6] = "Bajo peso";
                                        } else if ((datos[eleccion - 1][5] > 18.5) && (datos[eleccion - 1][5] < 24.9)) {
                                            datos[eleccion - 1][6] = "Peso normal";
                                        } else if ((datos[eleccion - 1][5] > 25.0) && (datos[eleccion - 1][5] < 28.9)) {
                                            datos[eleccion - 1][6] = "Sobrepeso";
                                        } else if ((datos[eleccion - 1][5] > 29.0) && (datos[eleccion - 1][5] < 34.9)) {
                                            datos[eleccion - 1][6] = "Obeso I";
                                        } else if (datos[eleccion - 1][5] > 35.0) {
                                            datos[eleccion - 1][6] = "Obeso II";
                                        }
                                        alert(`Nombre: ${datos[eleccion - 1][0]}\nParentesco: ${datos[eleccion - 1][1]}\nEdad: ${datos[eleccion - 1][2]}\nPeso: ${datos[eleccion - 1][3]}kg.\nEstatura: ${datos[eleccion - 1][4]}m.\nIMC: ${datos[eleccion - 1][5]}.\nCategoría: ${datos[eleccion - 1][6]}.`);
                                        break;
                                    case 5:
                                        memoria = datos[eleccion - 1][4];
                                        datos[eleccion - 1][4] = Number(prompt(`Ingrese la estatura de ${datos[eleccion - 1][0]} en metros. (Actual: ${memoria})`));
                                        while ((datos[eleccion - 1][4] < 0.35) || (isNaN(datos[eleccion - 1][4])) || (datos[eleccion - 1][4] > 3)) {
                                            alert("Por favor, ingrese una estatura válida.");
                                            datos[eleccion - 1][4] = Number(prompt(`Ingrese la estatura de ${datos[eleccion - 1][0]} en metros. (Actual: ${memoria})`));
                                        }
                                        datos[eleccion - 1][5] = datos[eleccion - 1][3] / (datos[eleccion - 1][4] ** 2);
                                        if (datos[eleccion - 1][5] < 18.5) {
                                            datos[eleccion - 1][6] = "Bajo peso";
                                        } else if ((datos[eleccion - 1][5] > 18.5) && (datos[eleccion - 1][5] < 24.9)) {
                                            datos[eleccion - 1][6] = "Peso normal";
                                        } else if ((datos[eleccion - 1][5] > 25.0) && (datos[eleccion - 1][5] < 28.9)) {
                                            datos[eleccion - 1][6] = "Sobrepeso";
                                        } else if ((datos[eleccion - 1][5] > 29.0) && (datos[eleccion - 1][5] < 34.9)) {
                                            datos[eleccion - 1][6] = "Obeso I";
                                        } else if (datos[eleccion - 1][5] > 35.0) {
                                            datos[eleccion - 1][6] = "Obeso II";
                                        }
                                        alert(`Nombre: ${datos[eleccion - 1][0]}\nParentesco: ${datos[eleccion - 1][1]}\nEdad: ${datos[eleccion - 1][2]}\nPeso: ${datos[eleccion - 1][3]}kg.\nEstatura: ${datos[eleccion - 1][4]}m.\nIMC: ${datos[eleccion - 1][5]}.\nCategoría: ${datos[eleccion - 1][6]}.`);
                                        break;
                                    case 6:
                                        registrarOtro = 1;
                                        modificarCaracteristica = 2;
                                        break;
                                }
                                if (corregir !== 6) {
                                    modificarCaracteristica = Number(prompt(`¿Desea modificar otro dato de ${datos[eleccion - 1][0]}?\n1) Si. --- 2) No.`));
                                    while ((modificarCaracteristica !== 1) && (modificarCaracteristica !== 2)) {
                                        alert("Por favor, seleccione una opción válida.");
                                        modificarCaracteristica = Number(prompt(`¿Desea modificar otro dato de ${datos[eleccion - 1][0]}?\n1) Si. --- 2) No.`));
                                    }
                                }
                            } while (modificarCaracteristica !== 2)
                            if (corregir !== 6) {
                                registrarOtro = Number(prompt("¿Desea modificar otro registro?\n1) Si. --- 2) No."));
                                while ((registrarOtro !== 1) && (registrarOtro !== 2)) {
                                    alert("Por favor, seleccione una opción válida.");
                                    registrarOtro = Number(prompt("¿Desea modificar otro registro?\n1) Si. --- 2) No."));
                                }
                            }
                        }
                    }
                }
            } while (registrarOtro !== 2)
            break;
        case 4:
            registrarOtro = 0;
            do {
                menuRegistros = "Elija la persona a eliminar datos registrados. (Escriba 0 para volver)";
                for (let opcionesMenu = 0; opcionesMenu < contadorFamiliares; opcionesMenu++) {
                    menuRegistros += `\n${opcionesMenu + 1}. ${datos[opcionesMenu][0]}`;
                }
                eleccion = Number(prompt(menuRegistros));
                while ((isNaN(eleccion)) || (!Number.isInteger(eleccion)) || (eleccion < 0) || (eleccion > contadorFamiliares)) {
                    alert("Por favor, elija una opción válida.");
                    eleccion = Number(prompt(menuRegistros));
                }
                if (eleccion === 0) {
                    alert("Volviendo al menú principal.");
                    registrarOtro = 2;
                } else {
                    for (let opcionesMenu = 0; opcionesMenu <= eleccion; opcionesMenu++) {
                        if (opcionesMenu === eleccion) {
                            confirmacion = Number(prompt(`Nombre: ${datos[eleccion - 1][0]}\nParentesco: ${datos[eleccion - 1][1]}\nEdad: ${datos[eleccion - 1][2]}\nPeso: ${datos[eleccion - 1][3]}kg.\nEstatura: ${datos[eleccion - 1][4]}m.\nIMC: ${datos[eleccion - 1][5]}.\nCategoría: ${datos[eleccion - 1][6]}.\nEliminar los datos de este familiar?\n1) Si. --- 2) No.`));
                            while ((confirmacion !== 1) && (confirmacion !== 2)) {
                                alert("Por favor, seleccione una opción válida.");
                                confirmacion = Number(prompt(`Nombre: ${datos[eleccion - 1][0]}\nParentesco: ${datos[eleccion - 1][1]}\nEdad: ${datos[eleccion - 1][2]}\nPeso: ${datos[eleccion - 1][3]}kg.\nEstatura: ${datos[eleccion - 1][4]}m.\nIMC: ${datos[eleccion - 1][5]}.\nCategoría: ${datos[eleccion - 1][6]}.\nEliminar los datos de este familiar?\n1) Si. --- 2) No.`));
                            }
                            if (confirmacion === 1) {
                                contadorFamiliares--
                                familiar--
                                switch (datos[eleccion - 1][1]) {
                                    case "Padre":
                                        contadorPadres--;
                                        break;
                                    case "Madre":
                                        contadorPadres--;
                                        break;
                                    case "Hermano(a)":
                                        contadorHermanos--;
                                        break;
                                    case "Tío(a)":
                                        contadorTios--;
                                        break;
                                    case "Abuelo(a)":
                                        contadorAbuelos--;
                                        break;
                                    case "Primo(a)":
                                        contadorPrimos--;
                                        break;
                                    default:
                                        contadorOtros--;
                                        break;
                                }
                                datos.splice((eleccion - 1), 1);
                                alert("Se ha eliminado este familiar.");
                                registrarOtro = Number(prompt("Deseas seguir eliminando familiares?\n1) Si. --- 2) No."));
                                while ((registrarOtro !== 1) && (registrarOtro !== 2)) {
                                    alert("Por favor, seleccione una opción válida.");
                                    registrarOtro = Number(prompt("Deseas seguir eliminando familiares?\n1) Si. --- 2) No."));
                                }
                            } else {
                                alert("No se ha eliminado este familiar.");
                                registrarOtro = Number(prompt("Deseas seguir eliminando familiares?\n1) Si. --- 2) No."));
                                while ((registrarOtro !== 1) && (registrarOtro !== 2)) {
                                    alert("Por favor, seleccione una opción válida.");
                                    registrarOtro = Number(prompt("Deseas seguir eliminando familiares?\n1) Si. --- 2) No."));
                                }
                            }
                        }
                    }
                }
            } while (registrarOtro !== 2)
            break;
        case 5:
            do {
                eleccion = Number(prompt("¿Qué datos quieres ver? (Escribe 0 para volver). \n1. Parentesco.\n2. Edad.\n3. Peso.\n4. Estatura.\n5. IMC y categoría."));
                while ((isNaN(eleccion)) || (!Number.isInteger(eleccion)) || (eleccion < 0) || (eleccion > 5)) {
                    alert("Por favor, seleccione una opción válida.");
                    eleccion = Number(prompt("¿Qué datos quieres ver? (Escribe 0 para volver). \n1. Parentesco.\n2. Edad.\n3. Peso.\n4. Estatura.\n5. IMC y categoría."));
                }
                switch (eleccion) {
                    case 0:
                        alert("Volviendo al menú principal.");
                        registrarOtro = 2;
                        break;
                    case 1:
                        menuDatos = "Parentescos: ";
                        for (let opcionesMenu = 0; opcionesMenu < contadorFamiliares; opcionesMenu++) {
                            menuDatos += `\n${opcionesMenu + 1}. ${datos[opcionesMenu][0]} -- ${datos[opcionesMenu][1]}.`
                        }
                        alert(menuDatos);
                        registrarOtro = Number(prompt("¿Deseas revisar más datos generales?\n1) Si. --- 2) No."));
                        while ((registrarOtro !== 1) && (registrarOtro !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            registrarOtro = Number(prompt("¿Deseas revisar más datos generales?\n1) Si. --- 2) No."));
                        }
                        break;
                    case 2:
                        menuDatos = "Edades: ";
                        for (let opcionesMenu = 0; opcionesMenu < contadorFamiliares; opcionesMenu++) {
                            menuDatos += `\n${opcionesMenu + 1}. ${datos[opcionesMenu][0]} -- ${datos[opcionesMenu][2]}.`
                        }
                        alert(menuDatos);
                        registrarOtro = Number(prompt("¿Deseas revisar más datos generales?\n1) Si. --- 2) No."));
                        while ((registrarOtro !== 1) && (registrarOtro !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            registrarOtro = Number(prompt("¿Deseas revisar más datos generales?\n1) Si. --- 2) No."));
                        }
                        break;
                    case 3:
                        menuDatos = "Pesos: ";
                        for (let opcionesMenu = 0; opcionesMenu < contadorFamiliares; opcionesMenu++) {
                            menuDatos += `\n${opcionesMenu + 1}. ${datos[opcionesMenu][0]} -- ${datos[opcionesMenu][3]}kg.`
                        }
                        alert(menuDatos);
                        registrarOtro = Number(prompt("¿Deseas revisar más datos generales?\n1) Si. --- 2) No."));
                        while ((registrarOtro !== 1) && (registrarOtro !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            registrarOtro = Number(prompt("¿Deseas revisar más datos generales?\n1) Si. --- 2) No."));
                        }
                        break;
                    case 4:
                        menuDatos = "Estaturas: ";
                        for (let opcionesMenu = 0; opcionesMenu < contadorFamiliares; opcionesMenu++) {
                            menuDatos += `\n${opcionesMenu + 1}. ${datos[opcionesMenu][0]} -- ${datos[opcionesMenu][4]}m.`
                        }
                        alert(menuDatos);
                        registrarOtro = Number(prompt("¿Deseas revisar más datos generales?\n1) Si. --- 2) No."));
                        while ((registrarOtro !== 1) && (registrarOtro !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            registrarOtro = Number(prompt("¿Deseas revisar más datos generales?\n1) Si. --- 2) No."));
                        }
                        break;
                    case 5:
                        menuDatos = "IMC: ";
                        for (let opcionesMenu = 0; opcionesMenu < contadorFamiliares; opcionesMenu++) {
                            menuDatos += `\n${opcionesMenu + 1}. ${datos[opcionesMenu][0]} -- IMC: ${datos[opcionesMenu][5]} -- ${datos[opcionesMenu][6]}`
                        }
                        alert(menuDatos);
                        registrarOtro = Number(prompt("¿Deseas revisar más datos generales?\n1) Si. --- 2) No."));
                        while ((registrarOtro !== 1) && (registrarOtro !== 2)) {
                            alert("Por favor, seleccione una opción válida.");
                            registrarOtro = Number(prompt("¿Deseas revisar más datos generales?\n1) Si. --- 2) No."));
                        }
                        break;
                }
            } while (registrarOtro !== 2)
            break;
        case 6:
            for (let opcionesMenu = 0; opcionesMenu < contadorFamiliares; opcionesMenu++) {
                acumuladoImc += datos[opcionesMenu][5];
            }
            promedioImc = acumuladoImc / contadorFamiliares;
            if (promedioImc < 18.5) {
                categoriaFamilia = "Bajo peso";
            } else if ((promedioImc > 18.5) && (promedioImc < 24.9)) {
                categoriaFamilia = "Peso normal";
            } else if ((promedioImc > 25.0) && (promedioImc < 28.9)) {
                categoriaFamilia = "Sobrepeso";
            } else if ((promedioImc > 29.0) && (promedioImc < 34.9)) {
                categoriaFamilia = "Obeso I";
            } else if (promedioImc > 35.0) {
                categoriaFamilia = "Obeso II";
            }
            alert(`El IMC promedio de la familia es de: ${promedioImc}.\nLa familia se encuentra en la categoría ${categoriaFamilia}.\nFamiliares registrados: ${contadorFamiliares}.`);
    }
} while (eleccion !== 7)
