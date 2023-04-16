/* MISIÓN 3
LISTAS (VECTORES Y MATRICES) EN PYTHON
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
del talento no esté vacío 
*/

let vNumeroTalentos = 0;
let vDatosTalentos = [];
let vNotaMision01 = [], vNotaMision02 = [], vNotaMision03 = [], vNotaMisionFinal = [];
let vSumaNotaMision01 = [], vSumaNotaMision02 = [], vSumaNotaMision03 = [], vSumaMisionFinal = [];
let vNombreMejorTalento01 = 0, vNombreMejorTalento02 = 0, vNombreMejorTalento03 = 0;
let vNotaMejorTalento01 = 0, vNotaMejorTalento02 = 0, vNotaMejorTalento03 = 0;
var vNombreTalento, vPromedioNotaMision = [], vNombreTalento = [], vNotaTalento = [];
var vCodigoTalento = [];

do {

    var vMenu = parseInt(prompt("MENU DE INGRESO \nIngresa las opcciones disponibles: \n\n1) Ingrese la cantidad de Talentos a registrar. \n2) Registra el nombre de cada talento. \n3) Registrar nota de la Mision 1. \n4) Registrar nota de la Mision 2. \n5) Registrar nota de la Mision 3. \n6) Registrar nota final \n7) Mostrar nombre y nota del mejor talento en la Mision 1. \n8) Mostrar nombre y nota del mejor talento en la Mision 2. \n9) Mostrar nombre y nota del mejor talento en la Mision 3. \n10) Mostrar nombre y promedio de cada talento registrado. \n11) Mostrar codigo, nombre, nota de todas las misiones y la prueba final. \n12) Mostrar nombre del talento que desarrollo la Mision. \n0) Salir."));

    switch (vMenu) {

        case 1:
            vNumeroTalentos = parseInt(prompt("Ingrese el numero de talentos a registrar"));
            while (isNaN(vNumeroTalentos) || vNumeroTalentos < 1) {
                vNumeroTalentos = parseInt(prompt("ERROR DE DATO INGRESADO! \nIngrese el numero de talentos a registrar"));

            }   while (vNumeroTalentos == undefined) {
                vNumeroTalentos = parseInt(prompt("ERROR NO HA INGRESADO UN DATO! \nDijite el numero de talentos a registrar"));
            }
        break;

        case 2:
            if (vNumeroTalentos == undefined) {
                alert("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");
                console.log("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");

            } else {
                for (let i = 0; i < vNumeroTalentos; i++) {
                    vDatosTalentos[i] = new Array();
                    //vCodigoTalento = vNumeroTalentos["T00"+i];

                    for (var j = 0; j < 2; j++) {
                        if (j == 0) {
                            vDatosTalentos[i][j] = (i + 1);

                        } else {
                            vDatosTalentos[i][j] = prompt("Ingrese el nombre del talento " + (i+1) + " el codigo se asignara por orden de ingreso");
                            while (!isNaN(vDatosTalentos[i][j]) || vDatosTalentos[i][j] == undefined) {
                                vDatosTalentos[i][j] = prompt("ERROR DE DATO \nIngrese el nombre del talento " + (i+1) + " el codigo se asignara por orden de ingreso");
                            }

                        }
                        
                    }
                    
                }
            }
        break;

        case 3:
            if (vNumeroTalentos == undefined || vDatosTalentos == undefined) {
                alert("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");
                console.log("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");

            } else {
                for (let i = 0; i < vNumeroTalentos; i++) {
                    vNotaMision01[i] = parseInt(prompt("Ingrese la nota del Talento " + vDatosTalentos[i] + " con codigo " + "T00"+(i+1)));

                    while (isNaN(vNotaMision01[i]) || vNotaMision01[i] < 0 || vNotaMision01[i] > 100 || vNotaMision01[i] == undefined) {
                        vNotaMision01[i] = parseInt(prompt("ERROR DE DATO! \nIngrese la nota del Talento " + vDatosTalentos[i] + " con codigo " + "T00"+(i+1)));
                    }
                    if (vNotaMision01[i] > vNotaMejorTalento01) {
                        vNotaMejorTalento01 = vNotaMision01[i];
                        vNombreMejorTalento01 = i;
                    }
                    vSumaNotaMision01[i] = 0;
                    vSumaNotaMision01[i] = vSumaNotaMision01[i] + vNotaMision01[i];
                }
            }
        break;

        case 4:
            if (vNumeroTalentos == undefined || vDatosTalentos == undefined || vNotaMision01 == undefined) {
                alert("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");
                console.log("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");

            } else {
                for (let i = 0; i < vNumeroTalentos; i++) {
                    vNotaMision02[i] = parseInt(prompt("Ingrese la nota del Talento " + vDatosTalentos[i] + " con codigo " + "T00"+(i+1)));
                    while (isNaN(vNotaMision02[i]) || vNotaMision02[i] < 0 || vNotaMision02[i] > 100 || vNotaMision02[i] == undefined) {
                        vNotaMision02[i] = parseInt(prompt("ERROR DE DATO!! \nIngrese la nota del Talento " + vDatosTalentos[i] + " con codigo " + "T00"+(i+1)));
                    }
                    if (vNotaMision02[i] > vNotaMejorTalento02) {
                        vNotaMejorTalento02 = vNotaMision02[i];
                        vNombreMejorTalento02 = i;
                    }
                    vSumaNotaMision02[i] = 0;
                    vSumaNotaMision02[i] = vSumaNotaMision02[i] + vNotaMision02[i];
                }
            }
        break;

        case 5:   
            if (vNumeroTalentos == undefined || vDatosTalentos == undefined || vNotaMision01 == undefined || vNotaMision02 == undefined) {
                alert("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");
                console.log("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");

            } else {
                for (let i = 0; i < vNumeroTalentos; i++) {
                    vNotaMision03[i] = parseInt(prompt("Ingrese la nota del Talento " + vDatosTalentos[i] + " con codigo " + "T00"+(i+1)));
                    while (isNaN(vNotaMision03[i]) || vNotaMision03[i] < 0 || vNotaMision03[i] > 100 || vNotaMision03[i] == undefined) {
                        vNotaMision03[i] = parseInt(prompt("ERROR DE DATO!!! \nIngrese la nota del Talento " + vDatosTalentos[i] + " con codigo " + "T00"+(i+1)));
                    }
                    if (vNotaMision03[i] > vNotaMejorTalento03) {
                        vNotaMejorTalento03 = vNotaMision03[i];
                        vNombreMejorTalento03 = i;
                    }
                    vSumaNotaMision03[i] = 0;
                    vSumaNotaMision03[i] = vSumaNotaMision03[i] + vNotaMision03[i];
                }
            } 
        break;

        case 6:    
            if (vNumeroTalentos == undefined || vDatosTalentos == undefined || vNotaMision01 == undefined || vNotaMision02 == undefined || vNotaMision03 == undefined) {
                alert("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");
                console.log("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");

            } else {
                for (let i = 0; i < vNumeroTalentos; i++) {
                    vNotaMisionFinal[i] = parseInt(prompt("Ingrese la nota final del Talento " + vDatosTalentos[i] + " con codigo " + "T00"+(i+1)));
                    while (isNaN(vNotaMisionFinal[i]) || vNotaMisionFinal[i] < 0 || vNotaMisionFinal[i] > 100 || vNotaMisionFinal[i] == undefined) {
                        vNotaMisionFinal[i] = parseInt(prompt("¡¡¡ERROR DE DATO!!! \nIngrese la nota final del Talento " + vDatosTalentos[i] + " con codigo " + "T00"+(i+1)));
                    }
                    vSumaMisionFinal[i] = 0;
                    vSumaMisionFinal[i] = vSumaMisionFinal[i] + vNotaMisionFinal[i];
                }
            }
        break;

        case 7:    
            if (vNumeroTalentos == undefined || vDatosTalentos == undefined || vNotaMision01 == undefined || vNotaMision02 == undefined || vNotaMision03 == undefined || vNotaMisionFinal == undefined || vNotaMisionFinal == undefined) {
                alert("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");
                console.log("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");

            } else {
                if (vNotaMejorTalento01 == 0) {
                    alert("Ingrese las notas de la Mision 1, si desea proceder");
                    console.log("Ingrese las notas de la Mision 1, si desea proceder");

                } else {
                    alert("El Talento con la mejor nota de la Mision 1 es: " + vDatosTalentos[vNombreMejorTalento01] + "\nSu nota es de: " + vNotaMejorTalento01);
                    console.log("El Talento con la mejor nota de la Mision 1 es: " + vDatosTalentos[vNombreMejorTalento01] + "\nSu nota es de: " + vNotaMejorTalento01);
                }
            }
        break;

        case 8:  
            if (vNumeroTalentos == undefined || vDatosTalentos == undefined || vNotaMision01 == undefined || vNotaMision02 == undefined || vNotaMision03 == undefined || vNotaMisionFinal == undefined || vNotaMisionFinal == undefined) {
                alert("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");
                console.log("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");

            } else {
                if (vNotaMejorTalento02 == 0) {
                    alert("Ingrese las notas de la Mision 2, si desea proceder");
                    console.log("Ingrese las notas de la Mision 2, si desea proceder");

                } else {
                    alert("El Talento con la mejor nota de la Mision 2 es: " + vDatosTalentos[vNombreMejorTalento02] + "\nSu nota es de: " + vNotaMejorTalento02);
                    console.log("El Talento con la mejor nota de la Mision 2 es: " + vDatosTalentos[vNombreMejorTalento02] + "\nSu nota es de: " + vNotaMejorTalento02);
                }
            }
        break;

        case 9:    
            if (vNumeroTalentos == undefined || vDatosTalentos == undefined || vNotaMision01 == undefined || vNotaMision02 == undefined || vNotaMision03 == undefined || vNotaMisionFinal == undefined || vNotaMisionFinal == undefined) {
                alert("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");
                console.log("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");

            } else {
                if (vNotaMejorTalento03 == 0) {
                    alert("Ingrese las notas de la Mision 3, si desea proceder");
                    console.log("Ingrese las notas de la Mision 3, si desea proceder");

                } else {
                    alert("El Talento con la mejor nota de la Mision 3 es: " + vDatosTalentos[vNombreMejorTalento03] + "\nSu nota es de: " + vNotaMejorTalento03);
                    console.log("El Talento con la mejor nota de la Mision 3 es: " + vDatosTalentos[vNombreMejorTalento03] + "\nSu nota es de: " + vNotaMejorTalento03);
                }
            }
        break;

        case 10:    
            if (vNumeroTalentos == undefined || vDatosTalentos == undefined || vNotaMision01 == undefined || vNotaMision02 == undefined || vNotaMision03 == undefined || vNotaMisionFinal == undefined || vNotaMisionFinal == undefined) {
                alert("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");
                console.log("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");

            } else {
                if (vNotaMejorTalento01 === 0 || vNotaMejorTalento02 === 0 || vNotaMejorTalento03 === 0 || vNotaMisionFinal[0] === undefined) {
                    alert("Faltan datos de las Misiones anteriores, registrelo para poder continuar");
                    console.log("Faltan datos de las Misiones anteriores, registrelo para poder continuar");

                } else {
                    for (let i = 0; i < vNumeroTalentos; i++) {
                        vPromedioNotaMision[i] = (vSumaNotaMision01[i] + vSumaNotaMision02[i] + vSumaNotaMision03[i] + vSumaMisionFinal[i]) / 4;
                        
                    } for (let i = 0; i < vNumeroTalentos; i++) {
                        vNombreTalento[i] = new Array();

                        for (let j = 0; j < 3; j++) {

                            if (j == 0) {
                                vNombreTalento[i][j] = (i+1);

                            } else {
                                vNombreTalento[i][j] = vDatosTalentos[i][j];

                                if (j == 2) {
                                    vNombreTalento[i][j] = vPromedioNotaMision[i];
                                }
                            }
                            
                        }
                    }
                }
                alert(vNombreTalento);
                console.table(vNombreTalento);
            }
        break;

        case 11:   
            if (vNumeroTalentos == undefined || vDatosTalentos == undefined || vNotaMision01 == undefined || vNotaMision02 == undefined || vNotaMision03 == undefined) {
                alert("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");
                console.log("ERROR NO HA INGRESADO EL DATO ANTERIOR, \nIngrese para proceder");
                
            } else {
                if (vNotaMejorTalento01 === 0 || vNotaMejorTalento02 === 0 || vNotaMejorTalento03 === 0 || vNotaMisionFinal[0] === undefined) {
                    alert("Faltan datos de las Misiones anteriores, registrelo para poder continuar");
                    console.log("Faltan datos de las Misiones anteriores, registrelo para poder continuar");
                    
                } else {
                    for (let i = 0; i < vNumeroTalentos; i++) {
                        vNotaTalento[i] = new Array();
                        
                        for (let j = 0; j < 6; j++) {
                            if (j == 0) {
                                vNotaTalento[i][j] = (i+1);

                            } else if(j == 1) {
                                vNotaTalento[i][j] = vDatosTalentos[i][j];

                            } else if(j == 2) {
                                vNotaTalento[i][j] = vNotaMision01[i];
                                
                            } else if(j == 3) {
                                vNotaTalento[i][j] = vNotaMision02[i];
                                
                            } else if(j == 4) {
                                vNotaTalento[i][j] = vNotaMision03[i];
                                
                            } else {
                                vNotaTalento[i][j] = vNotaMisionFinal[i];
                            }
                            
                        }
                    }
                }
                alert(vNotaTalento);
                console.table(vNotaTalento);
            }
        break;

        case 12:    
            alert("El nombre del Talento de la prueba es: \nWILMER MARTINEZ");
            console.log("El nombre del Talento de la prueba es: \nWILMER MARTINEZ");
        break;

        default:
        break;
    }
    
} while (vMenu != 0);