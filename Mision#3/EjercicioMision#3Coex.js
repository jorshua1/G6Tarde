let opcionesMenu = 0;
let nombresEstudiantes = [];
let codigosEstudiantes = [];
let cantidadTalentos = 0;
let notas1 = [];
let mejorNota1 = 0;
let nombreMejorNota1 = "";
let notas2 = [];
let mejorNota2 = 0;
let nombreMejorNota2 = "";
let notas3 = [];
let mejorNota3 = 0;
let nombreMejorNota3 = "";
let notasFinales = [];
let mejorNota4 = 0;
let promedioGeneral = [];
let mejorNota = [];


while (opcionesMenu !== 13) {
    opcionesMenu = parseInt(prompt(`
        Selecciona una opcion del menu:
        1. Ingrese la cantidad de Talentos
        2. Registrar Nombres y Codigo del Talento
        3. Registrar Nota 1
        4. Registrar Nota 2
        5. Registrar Nota 3
        6. Registrar Nota Final
        7. Top One Mision #1
        8. Top One Mision #2
        9. Top One Mision #3
        10. Resultados de Talentos y Promedios de las 4 pruebas.
        11. Resultados detallados por nombres de las misiones y prueba Final.
        12. Nombres de los participantes de Coex
        13. Salir del programa.
        `));
    while (isNaN(opcionesMenu) || opcionesMenu <= 0 || opcionesMenu > 14) {
        opcionesMenu = parseInt(prompt(`
        Por favor Ingrese los valores correctamente

        Selecciona una opcion del menu:
        1. Ingrese la cantidad de Talentos
        2. Registrar Nombres y Codigo del Talento
        3. Registrar Nota 1
        4. Registrar Nota 2
        5. Registrar Nota 3
        6. Registrar Nota Final
        7. Top One Mision #1
        8. Top One Mision #2
        9. Top One Mision #3
        10. Resultados de Talentos y Promedios de las 4 pruebas.
        11. Resultados detallados por nombres de las misiones y prueba Final.
        12. Nombres de los participantes de Coex
        13. Salir del programa.
        `));
    }
    switch (opcionesMenu) {
        case 1:
            if (cantidadTalentos <= 0) {
                cantidadTalentos = Number(prompt(`
                Ingrese la cantidad de Talentos a registrar
                
                Actualmente hay ${cantidadTalentos} personas registradas`));

                while (cantidadTalentos === 0 || isNaN(cantidadTalentos)) {
                    alert("Por favor ingrese un dato Numero. \n Ingrese la cantidad de Talentos a registrar");
                    cantidadTalentos = Number(prompt(`
            Ingrese la cantidad de Talentos a registrar
            
            Actualmente hay ${cantidadTalentos} personas registradas`));
                }
            } else {
                alert("Ya ha registrado " + cantidadTalentos + "\n No puede registrar mas hasta no finalizar el programa, Gracias")
            }
            break;
        case 2:
            if (cantidadTalentos <= 0) {
                alert("Usted no ha registrado la cantidad de Talentos, por favor devuelvase a la Opcion #1 e ingrese datos");
            } else if (nombresEstudiantes.length > 0) {
                alert("No puede registrar mas nombres");
            } else {
                let i = 1;
                for (i = 1; i <= cantidadTalentos; i++) {
                    nombresEstudiantes[i] = (prompt("Ingrese el nombre del Talento # " + i));

                    while (!isNaN(nombresEstudiantes[i]) || (nombresEstudiantes[i] === null) || (nombresEstudiantes[i] === "")) {
                        alert("El nombre no puede tener espacios o estar vacio");
                        nombresEstudiantes[i] = (prompt("Ingrese el nombre del Talento # " + i));
                    }

                    codigosEstudiantes[i] = Number(prompt("Ingrese el codigo del Talento: " + nombresEstudiantes[i]));

                    while (isNaN(codigosEstudiantes[i]) || (codigosEstudiantes[i] < 0)) {
                        alert("Por favor ingrese uno codigo Numerico Positivo");

                        codigosEstudiantes[i] = parseInt(prompt("Ingrese el codigo del Talento: " + nombresEstudiantes[i]));
                    }
                    let hayRepetidos = false;
                    for (let i = 0; i < codigosEstudiantes.length; i++) {
                        for (let j = i + 1; j < codigosEstudiantes.length; j++) {
                            while (codigosEstudiantes[i] === codigosEstudiantes[j]) {
                                hayRepetidos = true;
                                alert(`El estudiante  ${nombresEstudiantes[j]} con el código ${codigosEstudiantes[j]} se repite y no es posible guardar.`);
                                codigosEstudiantes[j] = parseInt(prompt("Ingrese el codigo del Talento: " + nombresEstudiantes[j]));
                            }
                        }
                    }
                }
            } break;
        case 3:
            if (cantidadTalentos <= 0) {
                alert("Usted no ha registrado la cantidad de Talentos, por favor devuelvase a la Opcion #1 e ingrese datos");
            } else if ((nombresEstudiantes < 1) || (nombresEstudiantes === 0)) {
                alert("Usted no ha registrado los nombres y codigo de los Talentos por favor realizelo de inmediato");
            } else if (notas1[1] > 1) {
                console.log(notas1);
                alert("Usted ya registro la Nota 1 de los estudiantes, por favor siga con el ingreso de las demas notas restantes");
            } else {
                for (var i = 1; i <= cantidadTalentos; i++) {
                    alert("A continuacion vamos a registrar la Nota del Talento llamado : " + nombresEstudiantes[i] + "\n" + "Y su codigo registrado es: " + codigosEstudiantes[i]);

                    notas1[i] = parseFloat(prompt("Ingrese la nota del Talento " + nombresEstudiantes[i] + "\nCon el codigo: " + codigosEstudiantes[i] + "\nNota: Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter"));

                    while (isNaN(notas1[i]) || (notas1[i] < 0) || notas1[i] > 100) {
                        alert("Nota: Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter" + "\n INTENTO DE NUEVO!!!");

                        notas1[i] = parseFloat(prompt("Ingrese la nota del Talento " + nombresEstudiantes[i] + "\nCon el codigo: " + codigosEstudiantes[i] + "\nNota: Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter"));
                    }
                }
            } break;
        case 4:
            if (cantidadTalentos <= 0) {
                alert("Usted no ha registrado la cantidad de Talentos, por favor devuelvase a la Opcion #1 e ingrese datos");
            } else if ((nombresEstudiantes < 1) || (nombresEstudiantes === 0)) {
                alert("Usted no ha registrado los nombres y codigo de los Talentos por favor realizelo de inmediato");
            } else if (notas2[1] > 1) {
                console.log(notas2);
                alert("Usted ya registro la Nota 2 de los estudiantes, por favor siga con el ingreso de las demas notas restantes");
            } else {
                let i = 1;
                for (i = 1; i <= cantidadTalentos; i++) {
                    alert("A continuacion vamos a registrar la Nota del Talento llamado : " + nombresEstudiantes[i] + "\n" + "Y su codigo registrado es: " + codigosEstudiantes[i]);

                    notas2[i] = parseFloat(prompt("Ingrese la nota del Talento " + nombresEstudiantes[i] + "\nCon el codigo: " + codigosEstudiantes[i] + "\nNota: Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter"));

                    while (isNaN(notas2[i]) || (notas2[i] < 0) || notas2[i] > 100) {
                        alert("Nota: Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter" + "\n INTENTO DE NUEVO!!!");

                        notas2[i] = parseFloat(prompt("Ingrese la nota del Talento " + nombresEstudiantes[i] + "\nCon el codigo: " + codigosEstudiantes[i] + "\nNota: Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter"));
                    }
                }
            } break;
        case 5:
            if (cantidadTalentos <= 0) {
                alert("Usted no ha registrado la cantidad de Talentos, por favor devuelvase a la Opcion #1 e ingrese datos");
            } else if ((nombresEstudiantes < 1) || (nombresEstudiantes === 0)) {
                alert("Usted no ha registrado los nombres y codigo de los Talentos por favor realizelo de inmediato");
            } else if (notas3[1] > 1) {
                console.log(notas3);
                alert("Usted ya registro la Nota 3 de los estudiantes, por favor siga con el ingreso de las demas notas restantes");
            } else {
                let i = 1;
                for (i = 1; i <= cantidadTalentos; i++) {
                    alert("A continuacion vamos a registrar la Nota del Talento llamado : " + nombresEstudiantes[i] + "\n" + "Y su codigo registrado es: " + codigosEstudiantes[i]);

                    notas3[i] = parseFloat(prompt("Ingrese la nota del Talento " + nombresEstudiantes[i] + "\nCon el codigo: " + codigosEstudiantes[i] + "\nNota: Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter"));
                    while (isNaN(notas3[i]) || (notas3[i] < 0) || notas3[i] > 100) {
                        alert("Nota: Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter" + "\n INTENTO DE NUEVO!!!");

                        notas3[i] = parseFloat(prompt("Ingrese la nota del Talento " + nombresEstudiantes[i] + "\nCon el codigo: " + codigosEstudiantes[i] + "\nNota: Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter"));
                    }
                }
            } break;
        case 6:
            if (cantidadTalentos <= 0) {
                alert("Usted no ha registrado la cantidad de Talentos, por favor devuelvase a la Opcion #1 e ingrese datos");
            } else if ((nombresEstudiantes < 1) || (nombresEstudiantes === 0)) {
                alert("Usted no ha registrado los nombres y codigo de los Talentos por favor realizelo de inmediato");
            } else if (notasFinales[1] > 1) {
                console.log(notasFinales);
                alert("Usted ya registro la Nota Final de los estudiantes, por favor siga con el ingreso de las demas notas restantes");
            } else {
                let i = 1;
                for (i = 1; i <= cantidadTalentos; i++) {
                    alert("A continuacion vamos a registrar la Nota del Talento llamado : " + nombresEstudiantes[i] + "\n" + "Y su codigo registrado es: " + codigosEstudiantes[i]);

                    notasFinales[i] = parseFloat(prompt("Ingrese la nota del Talento " + nombresEstudiantes[i] + "\nCon el codigo: " + codigosEstudiantes[i] + "\nNota: Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter"));

                    while (isNaN(notasFinales[i]) || (notasFinales[i] < 0) || notasFinales[i] > 100) {
                        alert("Nota: Recuerde que la nota va de 0 a 100, no puede ingresar datos fuera de ese rango, ni datos de tipo caracter" + "\n INTENTO DE NUEVO!!!");

                        notasFinales[i] = parseFloat(prompt("Ingrese la nota del Talento" + nombresEstudiantes[i] + "\n Con el codigo: " + codigosEstudiantes[i]));
                    }
                }
            } break;
        case 7:
            if (cantidadTalentos <= 0) {
                alert("Usted no ha registrado la cantidad de Talentos, por favor devuelvase a la Opcion #1 e ingrese datos");
            } else if ((nombresEstudiantes < 1) || (nombresEstudiantes === 0)) {
                alert("Usted no ha registrado los nombres y codigo de los Talentos por favor realizelo de inmediato");
            } else if (notas1 < 1) {
                console.log(notas1);
                alert("NO hay resultados aun porque NO ha llenado las notas, por favor realizar el ingreso de las notas, Gracias.");
            } else {
                for (i = 1; i < notas1.length; i++) {
                    if (notas1[i] > mejorNota1) {
                        mejorNota1 = notas1[i]
                        nombreMejorNota1 = nombresEstudiantes[i];
                    }
                }
                alert("El nombre del estudiante: " + nombreMejorNota1 + " obtuvo la mejor Nota de la #1 Mision " + mejorNota1);
            }
            break;
        case 8:
            if (cantidadTalentos <= 0) {
                alert("Usted no ha registrado la cantidad de Talentos, por favor devuelvase a la Opcion #1 e ingrese datos");
            } else if ((nombresEstudiantes < 1) || (nombresEstudiantes === 0)) {
                alert("Usted no ha registrado los nombres y codigo de los Talentos por favor realizelo de inmediato");
            } else if (notas2 < 1) {
                console.log(notas2);
                alert("NO hay resultados aun porque NO ha llenado las notas, por favor realizar el ingreso de las notas, Gracias.");
            } else {
                for (i = 1; i < notas2.length; i++) {
                    if (notas2[i] > mejorNota2) {
                        mejorNota2 = notas2[i]
                        nombreMejorNota2 = nombresEstudiantes[i];
                    }
                }
                alert("El nombre del estudiante: " + nombreMejorNota2 + " obtuvo la mejor Nota de la #2 Mision " + mejorNota2);
            }
            break;
        case 9:
            if (cantidadTalentos <= 0) {
                alert("Usted no ha registrado la cantidad de Talentos, por favor devuelvase a la Opcion #1 e ingrese datos");
            } else if ((nombresEstudiantes < 1) || (nombresEstudiantes === 0)) {
                alert("Usted no ha registrado los nombres y codigo de los Talentos por favor realizelo de inmediato");
            } else if (notas3 < 1) {
                console.log(notas3);
                alert("NO hay resultados aun porque NO ha llenado las notas, por favor realizar el ingreso de las notas, Gracias.");
            } else {
                for (i = 1; i < notas3.length; i++) {
                    if (notas3[i] > mejorNota3) {
                        mejorNota3 = notas3[i]
                        nombreMejorNota3 = nombresEstudiantes[i];
                    }
                }
                alert("El nombre del estudiante: " + nombreMejorNota3 + " obtuvo la mejor Nota de la #3 Mision " + mejorNota3);
            }
            break;
        case 10:
            if (cantidadTalentos <= 0) {
                alert("Usted no ha registrado la cantidad de Talentos, por favor devuelvase a la Opcion #1 e ingrese datos");
            } else if ((nombresEstudiantes < 1) || (nombresEstudiantes === 0)) {
                alert("Usted no ha registrado los nombres y codigo de los Talentos por favor realizelo de inmediato");
            } else if (notas1 < 1 || notas2 < 1 || notas3 < 1) {
                alert("NO hay resultados aun porque NO ha llenado la totalidad de las notas, por favor realizar el ingreso de las notas, Gracias.");
            } else {
                for (i = 1; i < cantidadTalentos; i++) {
                    promedioGeneral[i] = (notas1[i] + notas2[i] + notas3[i] + notasFinales[i]) / 4;
                    alert("El nombre del estudiante es: " + nombresEstudiantes[i] + "El Promedio general del Talento es de : " + promedioGeneral[i]);
                }
            }
            break;
        case 11:
            if (cantidadTalentos <= 0) {
                alert("Usted no ha registrado la cantidad de Talentos, por favor devuelvase a la Opcion #1 e ingrese datos");
            } else if ((nombresEstudiantes < 1) || (nombresEstudiantes === 0)) {
                alert("Usted no ha registrado los nombres y codigo de los Talentos por favor realizelo de inmediato");
            } else if (notas1 < 1 || notas2 < 1 || notas3 < 1) {
                alert("NO hay resultados aun porque NO ha llenado la totalidad de las notas, por favor realizar el ingreso de las notas, Gracias.");
            } else {
                let i = 1;
                for (i = 1; i < cantidadTalentos; i++) {
                    alert(`
                    Codigo Talento `+ codigosEstudiantes[i] + `
                    Nombre: `+ nombresEstudiantes[i] + ` 
                    Nota#1: `+ notas1[i] + ` 
                    Nota#2: `+ notas2[i] + ` 
                    Nota#3: `+ notas3[i] + ` 
                    Nota Final: `+ notasFinales[i] + ` 
                    Promedio: `+ promedioGeneral[i]);
                }
            }
            break;
        case 12:
            if (cantidadTalentos <= 0) {
                alert("Usted no ha registrado la cantidad de Talentos, por favor devuelvase a la Opcion #1 e ingrese datos");
            } else if ((nombresEstudiantes < 1) || (nombresEstudiantes === 0)) {
                alert("Usted no ha registrado los nombres y codigo de los Talentos por favor realizelo de inmediato");
            } else {
                alert("El nombre de los estudiantes que realizaron la prueba son: " + nombresEstudiantes);
            }
            break;
        case 13:
            alert("Saliendo....")
            break;
    }
}
