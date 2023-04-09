let datos = []
let eleccion = 0;
let contadorFamiliares = 0;
let familiar = 0;
let registrarOtro = 0;
let corregir = 0;
let menu = "Bienvenido a la calculadora IMC. Eliga una de las siguientes opciones mediante su respectivo número: \n1. Añadir familiares.\n2. Ver datos registrados.\n3. Modificar datos.\n4. Eliminar familiar.\n5. Ver parentesco de familiares registrados.\n6. Ver promedio IMC de la familia.\n7. Salir.";
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

do{
    eleccion = Number(prompt(menu));
    while((eleccion<1)||(eleccion>7)||(!Number.isInteger(eleccion))||(isNaN(eleccion))){
        alert("Por favor, ingrese una opción válida.");
        eleccion = Number(prompt(menu));
    }
    switch (eleccion){
        case 1:
            contadorFamiliares++;
            for(familiar;familiar<contadorFamiliares;familiar++){
                datos[familiar] = new Array(7);
                datos[familiar][0] = prompt("Ingrese el nombre de su familiar.");
                while((!isNaN(datos[familiar][0]))||(datos[familiar][0]==="")){
                    alert("Por favor ingrese un nombre válido.");
                    datos[familiar][0] = prompt("Ingrese el nombre de su familiar.");
                }
                eleccionParentesco = Number(prompt(`Parentesco de su familiar (${datos[familiar][0]}). Seleccione alguna de las siguientes opciones:\n1. Padre.\n2. Madre.\n3. Hermano(a).\n4. Tío(a).\n5. Abuelo(a).\n6. Primo(a).\n7. Otro.\n8.Volver al menú principal.`));
                while((eleccionParentesco<1)||(eleccionParentesco>8)||(!Number.isInteger(eleccionParentesco))||(isNaN(eleccionParentesco))){
                    alert("Por favor, seleccione una opción válida.");
                    eleccionParentesco = Number(prompt(`Parentesco de su familiar (${datos[familiar][0]}). Seleccione alguna de las siguientes opciones:\n1. Padre.\n2. Madre.\n3. Hermano(a).\n4. Tío(a).\n5. Abuelo(a).\n6. Primo(a).\n7. Otro.\n8.Volver al menú principal.`));
                }
                switch (eleccionParentesco){
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
                            while((!isNaN(datos[familiar][1]))||(datos[familiar][1]==="")){
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
                datos[familiar][2] = Number(prompt(`Ingrese la edad de ${datos[familiar][0]}.`));
                while((datos[familiar][2]<0)||(!Number.isInteger(datos[familiar][2]))||(isNaN(datos[familiar][2]))){
                    alert("Por favor, ingrese una edad válida.");
                    datos[familiar][2] = Number(prompt(`Ingrese la edad de ${datos[familiar][0]}.`));
                }
                datos[familiar][3] = Number(prompt(`Ingrese el peso de ${datos[familiar][0]} en kg.`));
                while((datos[familiar][3]<3)||(isNaN(datos[familiar][3]))||(datos[familiar][3]>635)){
                    alert("Por favor, ingrese un peso válido.");
                    datos[familiar][3] = Number(prompt(`Ingrese el peso de ${datos[familiar][0]} en kg.`));
                }
                datos[familiar][4] = Number(prompt(`Ingrese la estatura de ${datos[familiar][0]} en metros.`));
                while((datos[familiar][4]<0.35)||(isNaN(datos[familiar][4]))||(datos[familiar][4]>3)){
                    alert("Por favor, ingrese una estatura válida.");
                    datos[familiar][4] = Number(prompt(`Ingrese la estatura de ${datos[familiar][0]} en metros.`));
                }
                confirmacion = Number(prompt(`Nombre: ${datos[familiar][0]}\nParentesco: ${datos[familiar][1]}\nEdad: ${datos[familiar][2]}\nPeso: ${datos[familiar][3]}kg.\nEstatura: ${datos[familiar][4]}m.\nLos datos son correctos? 1) Si. --- 2) No.`));
                while((confirmacion!==1)&&(confirmacion!==2)){
                    alert("Por favor, ingrese una opción válida.");
                    confirmacion = Number(prompt(`Nombre: ${datos[familiar][0]}\nParentesco: ${datos[familiar][1]}\nEdad: ${datos[familiar][2]}\nPeso: ${datos[familiar][3]}kg.\nEstatura: ${datos[familiar][4]}m.\nLos datos son correctos? 1) Si. --- 2) No.`));
                }
                while(confirmacion===2){
                    corregir = Number(prompt("¿Qué dato desea corregir?\n1. Nombre.\n2. Parentesco.\n3. Edad.\n4. Peso.\n5.Estatura.\n6.Volver.\n7.Eliminar los datos ingresados."));
                    while((corregir<1)||(corregir>7)||(!Number.isInteger(corregir))||(isNaN(corregir))){
                        alert("Por favor, ingrese una opción válida.");
                        corregir = Number(prompt("¿Qué dato desea corregir?\n1. Nombre.\n2. Parentesco.\n3. Edad.\n4. Peso.\n5.Estatura.\n6.Volver.\n7.Eliminar los datos ingresados."));
                    }
                    switch (corregir){
                        case 1:
                            datos[familiar][0] = prompt("Ingrese el nombre de su familiar.");
                            while((!isNaN(datos[familiar][0]))||(datos[familiar][0]==="")){
                                alert("Por favor ingrese un nombre válido.");
                                datos[familiar][0] = prompt("Ingrese el nombre de su familiar.");
                            }
                            break;
                        case 2:
                            eleccionParentesco = Number(prompt(`Parentesco de su familiar (${datos[familiar][0]}). Seleccione alguna de las siguientes opciones:\n1. Padre.\n2. Madre.\n3. Hermano(a).\n4. Tío(a).\n5. Abuelo(a).\n6. Primo(a).\n7. Otro.\n8.Volver al menú principal.`));
                            while((eleccionParentesco<1)||(eleccionParentesco>8)||(!Number.isInteger(eleccionParentesco))||(isNaN(eleccionParentesco))){
                                alert("Por favor, seleccione una opción válida.");
                                eleccionParentesco = Number(prompt(`Parentesco de su familiar (${datos[familiar][0]}). Seleccione alguna de las siguientes opciones:\n1. Padre.\n2. Madre.\n3. Hermano(a).\n4. Tío(a).\n5. Abuelo(a).\n6. Primo(a).\n7. Otro.`));
                            }
                            switch (eleccionParentesco){
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
                                        while((!isNaN(datos[familiar][1]))||(datos[familiar][1]==="")){
                                            alert("Ingrese un parentesco válido.")
                                            datos[familiar][1] = prompt(`Ingrese el parentesco que tiene con ${datos[familiar][0]}.`);
                                        }
                                        break;
                            }
                            break;
                        case 3:
                            datos[familiar][2] = Number(prompt(`Ingrese la edad de ${datos[familiar][0]}.`));
                            while((datos[familiar][2]<0)||(!Number.isInteger(datos[familiar][2]))||(isNaN(datos[familiar][2]))){
                                alert("Por favor, ingrese una edad válida.");
                                datos[familiar][2] = Number(prompt(`Ingrese la edad de ${datos[familiar][0]}.`));
                            }
                            break;
                        case 4:
                            datos[familiar][3] = Number(prompt(`Ingrese el peso de ${datos[familiar][0]} en kg.`));
                            while((datos[familiar][3]<3)||(isNaN(datos[familiar][3]))||(datos[familiar][3]>635)){
                                alert("Por favor, ingrese un peso válido.");
                                datos[familiar][3] = Number(prompt(`Ingrese el peso de ${datos[familiar][0]} en kg.`));
                            }
                            break;
                        case 5:
                            datos[familiar][4] = Number(prompt(`Ingrese la estatura de ${datos[familiar][0]} en metros.`));
                            while((datos[familiar][4]<0.35)||(isNaN(datos[familiar][4]))||(datos[familiar][4]>3)){
                                alert("Por favor, ingrese una estatura válida.");
                                datos[familiar][4] = Number(prompt(`Ingrese la estatura de ${datos[familiar][0]} en metros.`));
                            }
                            break;
                        case 6:
                            break;
                        case 7:
                            datos.splice(familiar, 1);
                            alert("Volviendo al menú principal. No se han guardado los datos.");
                            break;
                    }
                    if((corregir!==7))
                    confirmacion = Number(prompt(`Nombre: ${datos[familiar][0]}\nParentesco: ${datos[familiar][1]}\nEdad: ${datos[familiar][2]}\nPeso: ${datos[familiar][3]}kg.\nEstatura: ${datos[familiar][4]}m.\nLos datos son correctos? 1) Si. --- 2) No.`));
                    while((confirmacion!==1)&&(confirmacion!==2)){
                        alert("Por favor, ingrese una opción válida.");
                        confirmacion = Number(prompt(`Nombre: ${datos[familiar][0]}\nParentesco: ${datos[familiar][1]}\nEdad: ${datos[familiar][2]}\nPeso: ${datos[familiar][3]}kg.\nEstatura: ${datos[familiar][4]}m.\nLos datos son correctos? 1) Si. --- 2) No.`));
                    }
                }
                if((confirmacion===1)&&(corregir!==7)){
                    datos[familiar][5] = datos[familiar][3]/(datos[familiar][4]**2);
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
                    switch (datos[familiar][1]){
                        case "Padre": 
                            contadorPadres++    
                            break;
                        case "Madre":
                            contadorPadres++    
                            break;
                        case "Hermano(a)":
                            contadorHermanos++
                            break;
                        case "Tío(a)":
                            contadorTios++
                            break;
                        case "Abuelo(a)":
                            contadorAbuelos++
                            break;
                        case "Primo(a)":
                            contadorPrimos++
                            break;
                        default:
                                contadorOtros++
                                break;
                    }
                    registrarOtro = Number(prompt("¿Deseas registrar otro familiar?\n1) Si. --- 2) No."));
                    if(registrarOtro===1){
                        contadorFamiliares++;
                    }else{
                        alert("Volviendo al menú principal.")
                    }
                }
            }
            break;
    }
}while(eleccion!==7)
