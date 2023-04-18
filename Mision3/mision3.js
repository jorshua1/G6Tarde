let opcionMenu = 0;
let cantidadTalentos = 0;
let arregloDatosTalentos = new Array();
let arregloNotasMision1 = new Array();
let arregloNotasMision2 = new Array();
let arregloNotasMision3 = new Array();
let arregloPruebaFinal = new Array();
let notasTalento = new Array();

while (opcionMenu != 13) {
    opcionMenu = Number(prompt(
        `
        Seleccione una opción del menú
        -------------------------------------
                        MENU
        -------------------------------------                
        
        OPCIONES:

        1. Ingrese cantidad de talentos que desea registrar. 
        2. Registrar los datos de los talentos. (Codigo y Nombre)
        3. Registrar nota de la mision 1.
        4. Registrar nota de la mision 2. 
        5. Registrar nota de la mision 3. 
        6. Registrar prueba de nivel final.
        7. Mostrar nombre y nota del talento con mejor nota de la mision 1.
        8. Mostrar nombre y nota del talento con mejor nota de la mision 2.
        9. Mostrar nombre y nota del talento con mejor nota de la mision 3.
        10. Mostrar nombre y promedio de cada talento.
        11. Mostrar código, nombre, nota mision1, not mision2, nota mision3 y prueba final.
        12. Nombre de los talentos que desarrollaron el ejercicio.
        13. Salir.

        `))

    while ((isNaN(opcionMenu) || opcionMenu < 1 || opcionMenu > 13)) {
        alert("ERROR. Seleccione nuevamente la opción")
        opcionMenu = Number(prompt(
            `
            ERROR. Seleccione nuevamente la opción. 
            Seleccione una opción del menú
            -------------------------------------
                            MENU
            -------------------------------------                
            
            OPCIONES:
    
            1. Ingrese cantidad de talentos que desea registrar. 
            2. Registrar los datos de los talentos. (Codigo y Nombre)
            3. Registrar nota de la mision 1.
            4. Registrar nota de la mision 2. 
            5. Registrar nota de la mision 3. 
            6. Registrar prueba de nivel final.
            7. Mostrar nombre y nota del talento con mejor nota de la mision 1.
            8. Mostrar nombre y nota del talento con mejor nota de la mision 2.
            9. Mostrar nombre y nota del talento con mejor nota de la mision 3.
            10. Mostrar nombre y promedio de cada talento.
            11. Mostrar código, nombre, nota mision1, nota mision2, nota mision3 y prueba final.
            12. Nombre de los talentos que desarrollaron el ejercicio.
            13. Salir.
    
            `))
    }

    switch (opcionMenu) {
        case 1:
            if (cantidadTalentos === 0) {
                cantidadTalentos = Number(prompt("Ingrese la cantidad de talentos que desea registrar"));
                while (isNaN(cantidadTalentos) || cantidadTalentos <= 0 || cantidadTalentos.length === 0) {
                    alert("Ingrese una cantidad válida");
                    cantidadTalentos = Number(prompt("Ingrese la cantidad de talentos que desea registrar"));
                }
            } else {
                alert("Usted ya ingresó la cantidad de talentos, no puede ingresar nuevamente. ");
                alert("Devolviendo al menú principal.")
                break;
            }
            break;

        case 2:
            let codigoValido=0;
            let codigoTalento=0;
            if (cantidadTalentos === 0) {
                alert("Debes seleccionar primero la opción 1 y digitar la cantidad de talentos. ")
                alert("Devolviendo al menú principal.")
                break;
            } else if (arregloDatosTalentos.length !== 0) {
                alert("Usted ya ingresó los datos de los talentos, no puede hacerlo nuevamente.")
                alert("Devolviendo al menú principal.")
            } else {
                alert("Registro de los talentos.")
                for (let i = 0; i < cantidadTalentos;) {
                    codigoValido= 0;
                    arregloDatosTalentos[i] = new Array();
                    codigoTalento = Number(prompt(`ingrese el codigo del talento ${i+1}`));
                    while (isNaN(codigoTalento) || codigoTalento <= 0) {
                        codigoTalento = Number(prompt(`Ingrese un codigo válido para el talento ${i+1}`));
                    }
                    if (i === 0) {
                        arregloDatosTalentos[i][0] = codigoTalento;
                        arregloDatosTalentos[i][1] = prompt("ingrese el nombre del talento");
                        codigoTalento=0;
                        i++;
                    } else {
                        for (let codigo = 0; codigo < arregloDatosTalentos.length; codigo++) {
                            if (arregloDatosTalentos[codigo][0] === codigoTalento) {
                                alert("El codigo digitado ya está asignado a un talento")
                                codigoValido=1;
                                codigoTalento=0;
                                break;                                
                            }
                        }if(codigoValido===0){
                            arregloDatosTalentos[i][0]=codigoTalento;
                            arregloDatosTalentos[i][1] = prompt("ingrese el nombre del talento");
                            i++;
                            codigoTalento=0;
                        }
                    }
                }
            } console.log(arregloDatosTalentos);
            break;
        case 3:
            if (cantidadTalentos === 0) {
                alert("Debes primero digitar en la opcion1 la cantidad de talentos que hay ");
                alert("Devolviendo al menú principal");
            } else if (arregloDatosTalentos.length === 0) {
                alert("En la opción 2 digita la información de los talentos a registrar antes de ingresar a esta opcion.");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision1.length !== 0) {
                alert("Usted ya ingresó las notas de la misión 1");
                alert("Devolviendo al menú principal");
            } else {
                let j = 0;
                for (let i = 0; i < cantidadTalentos; i++) {

                    let notaMision1 = Number(prompt(`Ingrese la nota de la misión 1 del talento ${arregloDatosTalentos[i][j + 1]}`));
                    while (isNaN(notaMision1) || notaMision1 < 1 || notaMision1 > 100 || notaMision1.length === 0) {
                        notaMision1 = Number(prompt(`ERROR. Ingrese la nota de la misión 1 del talento ${arregloDatosTalentos[i][j + 1]}`));
                    }
                    arregloNotasMision1[i] = notaMision1;

                };

            } break;
        case 4:
            if (cantidadTalentos === 0) {
                alert("Debes primero digitar en la opcion1 la cantidad de talentos que hay ");
                alert("Devolviendo al menú principal");
            } else if (arregloDatosTalentos.length === 0) {
                alert("En la opción 2 digita la información de los talentos a registrar antes de ingresar a esta opcion.");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision1.length === 0) {
                alert("En la opción 3 digita la nota de la misión 1 de los talentos antes de registrar la nota de la misión 2");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision2.length !== 0) {
                alert("Usted ya ingresó las notas de la misión 2");
                alert("Devolviendo al menú principal");
            } else {
                let j = 0;
                for (let i = 0; i < cantidadTalentos; i++) {
                    let notaMision2 = Number(prompt(`Ingrese la nota de la misión 2 del talento ${arregloDatosTalentos[i][j + 1]}`));
                    while (isNaN(notaMision2) || notaMision2 < 1 || notaMision2 > 100 || notaMision2 === 0) {
                        notaMision2 = Number(prompt(`ERROR. Ingrese la nota de la misión 2 del talento ${arregloDatosTalentos[i][j + 1]}`));
                    }
                    arregloNotasMision2[i] = notaMision2;
                };

            } break;

        case 5:
            if (cantidadTalentos === 0) {
                alert("Debes primero digitar en la opcion1 la cantidad de talentos que hay ");
                alert("Devolviendo al menú principal");
            } else if (arregloDatosTalentos.length === 0) {
                alert("En la opción 2 digita la información de los talentos a registrar antes de ingresar a esta opcion.");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision1.length === 0) {
                alert("En la opción 3 digita la nota de la misión 1 de los talentos antes de registrar la nota de la misión 2");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision2.length === 0) {
                alert("En la opción 4 digita la nota de la misión 2 de los talentos antes de registrar la nota de la misión 3");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision3.length !== 0) {
                alert("Usted ya ingresó las notas de la misión 3");
                alert("Devolviendo al menú principal");
            } else {
                let j = 0;
                for (let i = 0; i < cantidadTalentos; i++) {
                    let notaMision3 = Number(prompt(`Ingrese la nota de la misión 3 del talento ${arregloDatosTalentos[i][j + 1]}`));
                    while (isNaN(notaMision3) || notaMision3 < 1 || notaMision3 > 100 || notaMision3 === 0) {
                        notaMision3 = Number(prompt(`ERROR. Ingrese la nota de la misión 3 del talento ${arregloDatosTalentos[i][j + 1]}`));
                    }
                    arregloNotasMision3[i] = notaMision3;
                };

            } break;
        case 6:
            if (cantidadTalentos === 0) {
                alert("Debes primero digitar en la opcion 1 la cantidad de talentos que hay ");
                alert("Devolviendo al menú principal");
            } else if (arregloDatosTalentos.length === 0) {
                alert("En la opción 2 digita la información de los talentos a registrar antes de ingresar a esta opcion.");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision1.length === 0) {
                alert("En la opción 3 digita la nota de la misión 1 de los talentos antes de registrar la nota de la misión 2");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision2.length === 0) {
                alert("En la opción 4 digita la nota de la misión 2 de los talentos antes de registrar la nota de la misión 3");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision3.length === 0) {
                alert("En la opción 5 digita la nota de la misión 3 de los talentos antes de registrar la nota de la prueba final");
                alert("Devolviendo al menú principal");
            } else if (arregloPruebaFinal.length !== 0) {
                alert("Usted ya ingresó las notas de la prueba final.");
                alert("Devolviendo al menú principal");
            } else {
                let j = 0;
                for (let i = 0; i < cantidadTalentos; i++) {
                    let notaPruebaFinal = Number(prompt(`Ingrese la nota de la prueba final del talento ${arregloDatosTalentos[i][j + 1]}`));
                    while (isNaN(notaPruebaFinal) || notaPruebaFinal < 1 || notaPruebaFinal > 100 || notaPruebaFinal.length === 0) {
                        notaPruebaFinal = Number(prompt(`ERROR. Ingrese la nota de la prueba final del talento ${arregloDatosTalentos[i][j + 1]}`));
                    }
                    arregloPruebaFinal[i] = notaPruebaFinal;
                };
            } break;

        case 7:
            if (cantidadTalentos === 0) {
                alert("Debes primero digitar en la opcion 1 la cantidad de talentos que hay ");
                alert("Devolviendo al menú principal");
            } else if (arregloDatosTalentos.length === 0) {
                alert("En la opción 2 digita la información de los talentos a registrar antes de ingresar a esta opcion.");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision1.length === 0) {
                alert("En la opción 3 digita la nota de la misión 1 de los talentos antes de consultar quien tuvo la mejor nota de la mision 1");
                alert("Devolviendo al menú principal");
            } else {
                let mejorNotaMision1 = 0;
                let guardaPosicionMision1 = 0;
                for (let i = 0; i < cantidadTalentos; i++) {
                    if (arregloNotasMision1[i] > mejorNotaMision1) {
                        mejorNotaMision1 = arregloNotasMision1[i];
                        guardaPosicionMision1 = i;
                    }
                }
                alert(`${arregloDatosTalentos[guardaPosicionMision1][1]} con una nota de ${mejorNotaMision1}, fue la mejor nota de la misión 1. `)
            } break;

        case 8:
            if (cantidadTalentos === 0) {
                alert("Debes primero digitar en la opcion 1 la cantidad de talentos que hay ");
                alert("Devolviendo al menú principal");
            } else if (arregloDatosTalentos.length === 0) {
                alert("En la opción 2 digita la información de los talentos a registrar antes de ingresar a esta opcion.");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision2.length === 0) {
                alert("En la opción 4 digita la nota de la misión 2 de los talentos antes de consultar quien tuvo la mejor nota");
                alert("Devolviendo al menú principal");
            } else {
                let mejorNotaMision2 = 0;
                let guardaPosicionMision2 = 0;
                for (let i = 0; i < cantidadTalentos; i++) {
                    if (arregloNotasMision2[i] > mejorNotaMision2) {
                        mejorNotaMision2 = arregloNotasMision2[i];
                        guardaPosicionMision2 = i;
                    }
                }
                alert(`${arregloDatosTalentos[guardaPosicionMision2][1]} con una nota de ${mejorNotaMision2}, fue la mejor nota de la misión 2. `)
            } break;

        case 9:
            if (cantidadTalentos === 0) {
                alert("Debes primero digitar en la opcion 1 la cantidad de talentos que hay ");
                alert("Devolviendo al menú principal");
            } else if (arregloDatosTalentos.length === 0) {
                alert("En la opción 2 digita la información de los talentos a registrar antes de ingresar a esta opcion.");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision3.length === 0) {
                alert("En la opción 5 digita la nota de la misión 3 de los talentos antes de consultar quien tuvo la mejor nota");
                alert("Devolviendo al menú principal");
            } else {
                let mejorNotaMision3 = 0;
                let guardaPosicionMision3 = 0;
                for (let i = 0; i < cantidadTalentos; i++) {
                    if (arregloNotasMision3[i] > mejorNotaMision3) {
                        mejorNotaMision3 = arregloNotasMision3[i];
                        guardaPosicionMision3 = i;
                    }
                }
                alert(`${arregloDatosTalentos[guardaPosicionMision3][1]} con una nota de ${mejorNotaMision3}, fue la mejor nota de la misión 3. `)
            } break;

        case 10:
            if (cantidadTalentos === 0) {
                alert("Debes primero digitar en la opcion 1 la cantidad de talentos que hay ");
                alert("Devolviendo al menú principal");
            } else if (arregloDatosTalentos.length === 0) {
                alert("En la opción 2 digita la información de los talentos a registrar antes de ingresar a esta opcion.");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision1.length === 0) {
                alert("En la opción 3 digita la nota de la misión 1 antes de ingresar a esta opción");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision2.length === 0) {
                alert("En la opción 4 digita la nota de la misión 2 antes de ingresar a esta opción");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision3.length === 0) {
                alert("En la opción 5 digita la nota de la misión 3 antes de ingresar a esta opción");
                alert("Devolviendo al menú principal");
            } else if (arregloPruebaFinal.length === 0) {
                alert("En la opción 6 digita la nota de prueba final antes de ingresar a esta opción");
                alert("Devolviendo al menú principal");
            } else {
                for (let i = 0; i < cantidadTalentos; i++) {
                    let promedioNotas = ((arregloNotasMision1[i] + arregloNotasMision2[i] + arregloNotasMision3[i] + arregloPruebaFinal[i]) / 4);
                    alert(
                        `
                    El talento ${arregloDatosTalentos[i][1]} tiene un promedio de ${promedioNotas}
                    `);
                }
            } break;

        case 11:
            if (cantidadTalentos === 0) {
                alert("Debes primero digitar en la opcion 1 la cantidad de talentos que hay ");
                alert("Devolviendo al menú principal");
            } else if (arregloDatosTalentos.length === 0) {
                alert("En la opción 2 digita la información de los talentos a registrar antes de ingresar a esta opcion.");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision1.length === 0) {
                alert("En la opción 3 digita la nota de la misión 1 antes de ingresar a esta opción");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision2.length === 0) {
                alert("En la opción 4 digita la nota de la misión 2 antes de ingresar a esta opción");
                alert("Devolviendo al menú principal");
            } else if (arregloNotasMision3.length === 0) {
                alert("En la opción 5 digita la nota de la misión 3 antes de ingresar a esta opción");
                alert("Devolviendo al menú principal");
            } else if (arregloPruebaFinal.length === 0) {
                alert("En la opción 6 digita la nota de prueba final antes de ingresar a esta opción");
                alert("Devolviendo al menú principal");
            } else {
                for (let i = 0; i < cantidadTalentos; i++) {
                    notasTalento[i] = new Array();
                    notasTalento[i]["CODIGO"] = arregloDatosTalentos[i][0];
                    notasTalento[i]["NOMBRE"] = arregloDatosTalentos[i][1];
                    notasTalento[i]["NOTA MISION 1"] = arregloNotasMision1[i];
                    notasTalento[i]["NOTA MISION 2"] = arregloNotasMision2[i];
                    notasTalento[i]["NOTA MISION 3"] = arregloNotasMision3[i];
                    notasTalento[i]["PRUEBA FINAL"] = arregloPruebaFinal[i];

                } console.table(notasTalento);
            }
            break;

        case 12:

            alert("Mi nombre es Any Melisa Gómez Florez y tengo 19 años. ")
    }
}