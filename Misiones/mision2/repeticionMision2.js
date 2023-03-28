let eleccion = 0;
let familiares = 0;
let añadirFamiliares = 0;
let menu = "";
let nombreFamiliar = "";
let eleccionParentesco = 0;
let parentesco = "";
let contadorPadres = 0;
let contadorAbuelos = 0;
let contadorHermanos = 0;
let contadorTios = 0;
let contadorPrimos = 0;
let contadorOtros = 0;
let contadorFamiliares = 0;
let peso = 0;
let estatura = 0;
let confirmacion = 0;
let imc = 0;
let acumuladoImc = 0;
let promedioImc = 0;
let categoria = "";
let categoriaFamilia = "";



do {
    menu = "Calculadora IMC.\n¿Qué desea hacer? Hay " + familiares + " familiares registrados sin calcular.\n1. Ingresar familiares.\n2. Ingresar datos para calcular el IMC.\n3. Mostrar promedio IMC familiar.\n4. Ver tipos de familiares registrados.\n5. Salir.";
    eleccion = Number(prompt(menu));
    while ((eleccion !== 1) && (eleccion !== 2) && (eleccion !== 3) && (eleccion !== 4)&&(eleccion!==5)) {
        alert("Por favor, ingrese una opción válida.");
        eleccion = Number(prompt(menu));
    }
    switch (eleccion) {
        case 1:
            añadirFamiliares = Number(prompt("¿Cuántos familiares desea ingresar?"));
            while ((isNaN(añadirFamiliares)) || (añadirFamiliares < 0) || (!Number.isInteger(añadirFamiliares))) {
                alert("Por favor, ingrese una cantidad válida de familiares.");
                añadirFamiliares = Number(prompt("¿Cuántos familiares desea ingresar?"));
            }
            alert("Se han añadido " + añadirFamiliares + " familiares.")
            familiares = familiares + añadirFamiliares
            break;
        case 2:
            nombreFamiliar = ""
            if (familiares <= 0) {
                alert("No hay familiares registrados en el sistema. No se puede acceder a esta opción.")
            }
            while ((familiares > 0) && (eleccionParentesco !== 9) && (nombreFamiliar != 2)) {
                eleccionParentesco = Number(prompt("Ingrese el parentesco de su familiar de acuerdo al número.\n1. Madre.\n2. Padre.\n3. Hermano(a).\n4. Tío(a).\n5. Primo(a).\n6. Abuelo.\n7. Abuela.\n8. Otro.\n9. Volver al menú principal."));
                while ((isNaN(eleccionParentesco)) || (!Number.isInteger(eleccionParentesco)) || (eleccionParentesco < 1) || (eleccionParentesco > 9)) {
                    alert("Por favor, ingrese una opción válida.");
                    eleccionParentesco = Number(prompt("Ingrese el parentesco de su familiar de acuerdo al número.\n1. Madre.\n2. Padre.\n3. Hermano(a).\n4. Tío(a).\n5. Primo(a).\n6. Abuelo.\n7. Abuela.\n8. Otro.\n9. Volver al menú principal."));
                }
                while ((eleccionParentesco === 1) && (contadorPadres === 2)) {
                    alert("Tus dos padres ya están registrados. Por favor selecciona otra opción.");
                    eleccionParentesco = Number(prompt("Ingrese el parentesco de su familiar de acuerdo al número.\n1. Madre.\n2. Padre.\n3. Hermano(a).\n4. Tío(a).\n5. Primo(a).\n6. Abuelo.\n7. Abuela.\n8. Otro.\n9. Volver al menú principal."));
                }
                while ((eleccionParentesco == 2) && (contadorPadres === 2)) {
                    alert("Tus dos padres ya están registrados. Por favor selecciona otra opción.");
                    eleccionParentesco = Number(prompt("Ingrese el parentesco de su familiar de acuerdo al número.\n1. Madre.\n2. Padre.\n3. Hermano(a).\n4. Tío(a).\n5. Primo(a).\n6. Abuelo.\n7. Abuela.\n8. Otro.\n9. Volver al menú principal."));
                }
                while ((eleccionParentesco === 6) && (contadorAbuelos === 4)) {
                    alert("Tus cuatro abuelos ya están registrados. Por favor selecciona otra opción.");
                    eleccionParentesco = Number(prompt("Ingrese el parentesco de su familiar de acuerdo al número.\n1. Madre.\n2. Padre.\n3. Hermano(a).\n4. Tío(a).\n5. Primo(a).\n6. Abuelo.\n7. Abuela.\n8. Otro.\n9. Volver al menú principal."));
                }
                while ((eleccionParentesco === 7) && (contadorAbuelos === 4)) {
                    alert("Tus cuatro abuelos ya están registrados. Por favor selecciona otra opción.");
                    eleccionParentesco = Number(prompt("Ingrese el parentesco de su familiar de acuerdo al número.\n1. Madre.\n2. Padre.\n3. Hermano(a).\n4. Tío(a).\n5. Primo(a).\n6. Abuelo.\n7. Abuela.\n8. Otro.\n9. Volver al menú principal."));
                }
                switch (eleccionParentesco) {
                    case 1:
                        parentesco = "Madre";
                        contadorPadres++;
                        break;
                    case 2:
                        parentesco = "Padre";
                        contadorPadres++;
                        break;
                    case 3:
                        parentesco = "Hermano(a)";
                        contadorHermanos++;
                        break;
                    case 4:
                        parentesco = "Tio(a)";
                        contadorTios++;
                        break;
                    case 5:
                        parentesco = "Primo(a)";
                        contadorPrimos++;
                        break;
                    case 6:
                        parentesco = "Abuelo";
                        contadorAbuelos++;
                        break;
                    case 7:
                        parentesco = "Abuela";
                        contadorAbuelos++;
                        break;
                    case 8:
                        parentesco = prompt("Ingrese el parentesco de la persona.");
                        while(!isNaN(parentesco)){
                            alert("Por favor ingrese un parentesco válido.");
                            parentesco = prompt("Ingrese el parentesco de la persona.");
                        }
                        contadorOtros++;
                        break;
                    default:
                        alert("Se han registrado los familiares ingresados hasta el momento. Volviendo al menú principal.");
                        break;
                }
                if (eleccionParentesco !== 9) {
                    nombreFamiliar = prompt("Ingrese el nombre de su " + parentesco + ".\nSi desea volver a la selección de familiar, escriba 1.\nSi desea volver al menú principal, escriba 2.");
                    while ((!isNaN(nombreFamiliar)) && (nombreFamiliar != 1) && (nombreFamiliar != 2)) {
                        alert("Por favor, ingrese un nombre válido o retroceder.");
                        nombreFamiliar = prompt("Ingrese el nombre de su " + parentesco + ".\nSi desea volver a la selección de familiar, escriba 1.\nSi desea volver al menú principal, escriba 2.");
                    }
                    if (isNaN(nombreFamiliar)) {
                        peso = Number(prompt("¿Cuál es el peso en kg de " + nombreFamiliar + "?"));
                        while ((isNaN(peso)) || (peso <= 0) || (peso > 635)) {
                            if (peso > 635) {
                                alert("Este peso no puede ser real. Inténtelo de nuevo.");
                                peso = Number(prompt("¿Cuál es el peso en kg de " + nombreFamiliar + "?"));
                            }
                            else if ((isNaN(peso)) || (peso <= 0)) {
                                alert("Por favor, ingrese un peso válido.");
                                peso = Number(prompt("¿Cuál es el peso en kg de " + nombreFamiliar + "?"));
                            }
                        }
                        estatura = Number(prompt("¿Cuál es la estatura en metros de " + nombreFamiliar + "?"));
                        while ((isNaN(estatura)) || (estatura <= 0) || (estatura > 3)) {
                            if (estatura > 3) {
                                alert("Este estatura no puede ser real. Inténtelo de nuevo.");
                                estatura = Number(prompt("¿Cuál es la estatura en metros de " + nombreFamiliar + "?"));
                            }
                            else if ((isNaN(estatura)) || (estatura <= 0)) {
                                alert("Por favor, ingrese un estatura válida.");
                                estatura = Number(prompt("¿Cuál es la estatura en metros de " + nombreFamiliar + "?"));
                            }
                        }
                        confirmacion = Number(prompt("¿Los datos ingresados son correctos?\nNombre: " + nombreFamiliar + ".\nParentesco: " + parentesco + ".\nPeso: " + peso + "kg.\nEstatura: " + estatura + "m.\n1)Sí.\n2)No."));
                        while ((confirmacion !== 1) && (confirmacion !== 2)) {
                            alert("Por favor ingrese una opción válida.");
                            confirmacion = Number(prompt("¿Los datos ingresados son correctos?\nNombre: " + nombreFamiliar + ".\nParentesco: " + parentesco + ".\nPeso: " + peso + "kg.\nEstatura: " + estatura + "m.\n1)Sí.\n2)No."));
                        }
                        switch (confirmacion) {
                            case 1:
                                imc = peso / (estatura ** 2);
                                if (imc < 18.5) {
                                    categoria = "Bajo peso";
                                } else if ((imc > 18.5) && (imc < 24.9)) {
                                    categoria = "Peso normal"
                                } else if ((imc > 25.0) && (imc < 28.9)) {
                                    categoria = "Sobrepeso"
                                } else if ((imc > 29.0) && (imc < 34.9)) {
                                    categoria = "Obeso I"
                                } else if (imc > 35.0) {
                                    categoria = "Obeso II"
                                }
                                contadorFamiliares++;
                                familiares--;
                                acumuladoImc = acumuladoImc + imc;
                                alert("Clasificación.\nSu " + parentesco + " " + nombreFamiliar + " está en la categoría " + categoria + " con un IMC de " + imc + ".")
                                console.log("Registrado: " + nombreFamiliar + ".--Parentesco: " + parentesco + ".--Peso: " + peso + "kg.--Estatura: " + estatura + "m.--Categoría: " + categoria)
                                alert("Se ha registrado este familiar. Volviendo al menú principal. (Si hay personas registradas sin calcular, volverás a la selección de parentesco).");
                                break;
                            case 2:
                                parentesco = "";
                                nombreFamiliar = "";
                                switch (eleccionParentesco) {
                                    case 1:
                                        contadorPadres--;
                                        break;
                                    case 2:
                                        contadorPadres--;
                                        break;
                                    case 3:
                                        contadorHermanos--;
                                        break;
                                    case 4:
                                        contadorTios--;
                                        break;
                                    case 5:
                                        contadorPrimos--;
                                        break;
                                    case 6:
                                        contadorAbuelos--;
                                        break;
                                    case 7:
                                        contadorAbuelos--;
                                        break;
                                    case 8:
                                        contadorOtros--;
                                        break;
                                }
                                eleccionParentesco = 0;
                                peso = 0;
                                estatura = 0;
                                confirmacion = 0;
                                alert("No se ha registrado este familiar. Volviendo a la selección de parentesco.")
                        }
                    } else if (nombreFamiliar == 1) {
                        alert("Volviendo a la selección de familiar. No se han guardado los datos ingresados.")
                        parentesco = "";
                        nombreFamiliar = ""
                        switch (eleccionParentesco) {
                            case 1:
                                contadorPadres--;
                                break;
                            case 2:
                                contadorPadres--;
                                break;
                            case 3:
                                contadorHermanos--;
                                break;
                            case 4:
                                contadorTios--;
                                break;
                            case 5:
                                contadorPrimos--;
                                break;
                            case 6:
                                contadorAbuelos--;
                                break;
                            case 7:
                                contadorAbuelos--;
                                break;
                            case 8:
                                contadorOtros--;
                                break;
                        }
                        eleccionParentesco = 0;
                    } else {
                        alert("Volviendo al menú principal. No se han guardado los datos ingresados.")
                        parentesco = "";
                        switch (eleccionParentesco) {
                            case 1:
                                contadorPadres--;
                                break;
                            case 2:
                                contadorPadres--;
                                break;
                            case 3:
                                contadorHermanos--;
                                break;
                            case 4:
                                contadorTios--;
                                break;
                            case 5:
                                contadorPrimos--;
                                break;
                            case 6:
                                contadorAbuelos--;
                                break;
                            case 7:
                                contadorAbuelos--;
                                break;
                            case 8:
                                contadorOtros--;
                                break;
                        }
                        eleccionParentesco = 0;
                    }

                }

            }
            break;
        case 3:
            promedioImc = acumuladoImc / contadorFamiliares;
            if (promedioImc < 18.5) {
                categoriaFamilia = "Bajo peso";
            } else if ((promedioImc > 18.5) && (promedioImc < 24.9)) {
                categoriaFamilia = "Peso normal"
            } else if ((promedioImc > 25.0) && (promedioImc < 28.9)) {
                categoriaFamilia = "Sobrepeso"
            } else if ((promedioImc > 29.0) && (promedioImc < 34.9)) {
                categoriaFamilia = "Obeso I"
            } else if (promedioImc > 35.0) {
                categoriaFamilia = "Obeso II"
            }
            alert("El promedio actual de la familia es de " + promedioImc + ".\nEl promedio de la familia está en la categoría " + categoriaFamilia + ".\nFamiliares registrados hasta el momento: " + contadorFamiliares + ".");
            break;
        case 4:
            alert("Familiares registrados hasta el momento: \nPadres: " + contadorPadres + ".\nAbuel@s: " + contadorAbuelos + ".\nHerman@s: " + contadorHermanos +".\nTi@s: " + contadorTios + ".\nPrim@s: " + contadorPrimos + ".\nOtr@s: " + contadorOtros);
            break;
        case 5:
            promedioImc = acumuladoImc / contadorFamiliares;
            if (promedioImc < 18.5) {
                categoriaFamilia = "Bajo peso";
            } else if ((promedioImc > 18.5) && (promedioImc < 24.9)) {
                categoriaFamilia = "Peso normal"
            } else if ((promedioImc > 25.0) && (promedioImc < 28.9)) {
                categoriaFamilia = "Sobrepeso"
            } else if ((promedioImc > 29.0) && (promedioImc < 34.9)) {
                categoriaFamilia = "Obeso I"
            } else if (promedioImc > 35.0) {
                categoriaFamilia = "Obeso II"
            }
            alert("El promedio final de la familia es de " + promedioImc + ".\nEl promedio de la familia está en la categoría " + categoriaFamilia + ".\nFamiliares registrados: " + contadorFamiliares + "\nCerrando el programa.");
            break;
    }
} while (eleccion !== 5)
