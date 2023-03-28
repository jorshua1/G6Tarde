let opcionMenuPrincipal = 0;
let cantidadFamiliares = 0;
let promedioAlturaFamiliares = 0;
let promedioPesoFamiliares = 0;
let promedioIndiceMasaCorporalFamiliares = 0;
let promedioNivelDePesoFamiliares;
let promedioEdadFamiliares=0;


while (opcionMenuPrincipal !== 4) {
    opcionMenuPrincipal = Number(prompt(`Escriba que opción desea ejecutar:
    1. Ingresar familiares.
    2. Ingresar datos.
    3. Mostrar resultados.
    4. Salir.`))
    while (isNaN(opcionMenuPrincipal) || opcionMenuPrincipal < 1 || opcionMenuPrincipal > 4 || opcionMenuPrincipal === "") {
        opcionMenuPrincipal = Number(prompt(`
    ERROR
    Escriba que opción desea ejecutar:
    1. Ingresar familiares.
    2. Ingresar datos.
    3. Mostrar resultados.
    4. Salir.`))
    }
    switch (opcionMenuPrincipal) {
        case 1:
            if (cantidadFamiliares === 0) {
                cantidadFamiliares = Number(prompt("Digite la cantidad de familiares que tiene y desea realizarle un IMC."));
                while (isNaN(cantidadFamiliares) || cantidadFamiliares <= 0) {
                    cantidadFamiliares = Number(prompt(`
                ERROR. 
                Digite la cantidad de familiares que tiene y desea realizarle un IMC.`));
                }

            } else {
                alert("Usted ya ingresó una cantidad de familiares, no puede volver a ingresar nuevamente.");
                break;
            }
            break;
        case 2:
            if (cantidadFamiliares > 0 && promedioAlturaFamiliares === 0) {
                for (let i = 1; i <= cantidadFamiliares; i++) {
                    let edad=Number(prompt(`Ingrese la edad del familiar ${i} que desea registrar`));
                    while(isNaN(edad)||edad<20){
                        if(isNaN(edad)){
                            edad= Number(prompt(`
                            ERROR
                            Ingrese la edad del familiar ${i}`))
                        }else if (edad<20){
                            edad=Number(prompt(`La edad ingresada no es válida para esta formula del IMC, digite la edad de otro familiar mayor de 20 años. `));
                        }
                    }
                    let nombreFamiliar = prompt(`Ingrese el nombre del familiar #${i} que desea registrar`);
                    while (nombreFamiliar === "") {
                        nombreFamiliar = prompt(`
                        ERROR
                        Ingrese el nombre del familiar #${i} que desea registrar`);
                    }
                    let parentezcoFamiliar = prompt(`Ingrese el parentezco que ${nombreFamiliar} tiene con usted`);
                    while (parentezcoFamiliar === "") {
                        parentezcoFamiliar = prompt(`
                        ERROR
                        Ingrese el parentezco que ${nombreFamiliar} tiene con usted`);
                    }
                    let alturaFamiliar = Number(prompt(`Ingrese la altura de ${nombreFamiliar} en metros`));
                    while (isNaN(alturaFamiliar) || alturaFamiliar <= 0) {
                        alturaFamiliar = Number(prompt(`
                        ERROR
                        Ingrese la altura de ${nombreFamiliar} en metros`));
                    }
                    if (alturaFamiliar > 2.5 || alturaFamiliar < 1) {
                        alert("Los datos serán tomados en cuenta, pero no es un dato normal.")
                    }
                    let pesoFamiliar = Number(prompt(`Ingrese el peso de ${nombreFamiliar} en kg`));
                    while (isNaN(pesoFamiliar) || pesoFamiliar <= 0) {
                        pesoFamiliar = Number(prompt(`
                        ERROR
                        Ingrese la altura de ${nombreFamiliar} en metros`));
                    }
                    if (pesoFamiliar > 300 || pesoFamiliar < 10) {
                        alert("Los datos serán tomados en cuenta pero no es un dato normal. ")
                    }
                    let calculoIndiceDeMasaCorporal = (pesoFamiliar / (alturaFamiliar ** 2));
                    let nivelDePeso;
                    if (calculoIndiceDeMasaCorporal < 18.5) {
                        nivelDePeso = "Bajo peso";
                    } else if (calculoIndiceDeMasaCorporal <= 24.9) {
                        nivelDePeso = "Normal";
                    } else if (calculoIndiceDeMasaCorporal <= 28.9) {
                        nivelDePeso = "Sobrepeso";
                    } else if (calculoIndiceDeMasaCorporal <= 34, 9) {
                        nivelDePeso = "Obeso 1";
                    } else {
                        nivelDePeso = "Obeso 2";
                    }
                    alert(`
                    ****RESULTADOS ${nombreFamiliar}****
                    Edad -> ${edad}
                    Parentezco -> ${parentezcoFamiliar}
                    Peso -> ${pesoFamiliar}
                    Altura -> ${alturaFamiliar}
                    IMC -> ${calculoIndiceDeMasaCorporal}
                    Nivel de Peso -> ${nivelDePeso}
                    `);
                    promedioAlturaFamiliares += alturaFamiliar;
                    promedioPesoFamiliares += pesoFamiliar;
                }
            } else if (promedioAlturaFamiliares !== 0) {
                alert(`
                ERROR
                Usted ya no puede volver a ingresar datos, ya utilizó esta opción. `);
                alert("Devolviendo al menú principal");
                break;
            } else {
                alert("Usted no ha ingresado los datos necesarios para utilizar esta opción. Ingrese primero a la opción 1 y digite la cantidad de familiares que tiene. ");
            }
            break;
        case 3:
            if (cantidadFamiliares !== 0 && promedioAlturaFamiliares !== 0 && promedioPesoFamiliares !== 0) {
                promedioEdadFamiliares=promedioEdadFamiliares/cantidadFamiliares;
                promedioPesoFamiliares = promedioPesoFamiliares / cantidadFamiliares;
                promedioAlturaFamiliares = promedioAlturaFamiliares / cantidadFamiliares;
                promedioIndiceMasaCorporalFamiliares = (promedioPesoFamiliares / (promedioAlturaFamiliares ** 2));
                if (promedioIndiceMasaCorporalFamiliares < 18.5) {
                    promedioNivelDePesoFamiliares = "Bajo peso";
                } else if (promedioIndiceMasaCorporalFamiliares <= 24.9) {
                    promedioNivelDePesoFamiliares = "Normal";
                } else if (promedioIndiceMasaCorporalFamiliares <= 28.9) {
                    promedioNivelDePesoFamiliares = "Sobrepeso";
                } else if (promedioIndiceMasaCorporalFamiliares <= 34, 9) {
                    promedioNivelDePesoFamiliares = "Obeso 1";
                } else {
                    promedioNivelDePesoFamiliares = "Obeso 2";
                }

                alert(`
                ****Resultados Finales de la Familia****
                La cantidad de familiares registrados fueron -> ${cantidadFamiliares}
                EL promedio de edad en la familia es -> ${promedioEdadFamiliares}
                El promedio del peso en la familia es -> ${promedioPesoFamiliares}
                El promedio de la altura en la familia es -> ${promedioAlturaFamiliares}
                El promedio de indice de masa corporal en la familia es -> ${promedioIndiceMasaCorporalFamiliares}
                El promedio de nivel de peso en la familia debido a su IMC es -> ${promedioNivelDePesoFamiliares}
                `);
            } else if (cantidadFamiliares !== 0 && promedioAlturaFamiliares === 0) {
                alert("Usted no ha ingresado los datos necesarios para utilizar esta opción. Realice la inserción de datos en la opcion 2. ");
                alert("Devolviendo al menú principal")
                break;
            } else {
                alert("Usted no ha ingresado los datos necesarios para utilizar esta opción. Ingrese primero a la opción 1 y digite la cantidad de familiares que tiene y después realice la inserción de datos en la opción 2. ");
                alert("Devolviendo al menú principal")
                break;
            }
            break;
        case 4:
            alert("Saliendo del programa.")
            break;
        default:
            alert("No ingresó una opción correcta");
            break;
    }
}
 
