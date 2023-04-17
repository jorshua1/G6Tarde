/*
COEX es una entidad que tiene como misión capacitar jóvenes que desean adquirir conocimientos y 
habilidades en el área de programación. 
Al llegar a COEX, cada talento es registrado con un código y su nombre.
Un grupo puede estar conformado una cantidad N de talentos.
Durante el transcurso del módulo uno, se presentan y explican diferentes temáticas y cada talento 
realiza una misión, que es una prueba para medir como va su proceso.
Cada misión, es puntuada con un valor entre 1 y 100.
En total se realizan 3 misiones. Al finalizar el módulo, se realizará una misión final, conocida como 
prueba de Nivel.
Se les solicita a ustedes como talentos que han adquirido los conceptos y habilidades de 
programadores para que creen un programa que permita llevar a cabo los registros correspondientes al proceso.
Se debe validar que la nota de cada talento esté entre 0 y 100, Se debe evitar que se repitan códigos 
al registrar estudiantes, Se debe validar que el nombre del talento no esté vacío.

Se les solicita que el programa tenga un menú que:

1. Solicite la cantidad N de talentos (solo se debe hacer una vez y no debe permitir hacer los otros 
hasta no haberla realizado).
2. Registrar los datos de los talentos en una matriz 2xN (Código y Nombre).
3. Registrar nota de Misión 1.
4. Registrar nota de Misión 2.
5. Registrar nota de Misión 3.
6. Registrar prueba de nivel final.
7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1.
8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2.
9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3.
10. Mostrar el nombre y el promedio de cada talento (el promedio se obtiene de las 4 pruebas).
11. Mostrar código, nombre, nota misión 1, nota misión 2, nota misión 3 y prueba final.
12. Nombre de los talentos que desarrollaron el ejercicio.
13. Salir.
*/

let talentos = [];
let cantidadTalentosCoex = 0;
let menuPrincipal = 0;

while (menuPrincipal !== 13) {

    menuPrincipal = parseInt(prompt(`Menú:
  1. Ingresar cantidad de talentos.
  2. Registrar datos de talentos.
  3. Registrar nota de Misión 1.
  4. Registrar nota de Misión 2.
  5. Registrar nota de Misión 3.
  6. Registrar prueba de nivel final.
  7. Mostrar mejor nota en Misión 1.
  8. Mostrar mejor nota en Misión 2.
  9. Mostrar mejor nota en Misión 3.
  10. Mostrar promedio de notas.
  11. Mostrar todos los datos.
  12. Mostrar nombres de los talentos que desarrollaron el ejercicio.
  13. Salir.`));

    while (isNaN(menuPrincipal) || menuPrincipal <= 0 || menuPrincipal > 13) {
        menuPrincipal = parseInt(prompt(`Menú:
  1. Ingresar cantidad de talentos.
  2. Registrar datos de talentos.
  3. Registrar nota de Misión 1.
  4. Registrar nota de Misión 2.
  5. Registrar nota de Misión 3.
  6. Registrar prueba de nivel final.
  7. Mostrar mejor nota en Misión 1.
  8. Mostrar mejor nota en Misión 2.
  9. Mostrar mejor nota en Misión 3.
  10. Mostrar promedio de notas.
  11. Mostrar todos los datos.
  12. Mostrar nombres de los talentos que desarrollaron el ejercicio.
  13. Salir.`));
    }

    switch (menuPrincipal) {

        case 1:

            cantidadTalentosCoex = parseInt(prompt(`Por favor ingrese la cantidad de talentos COEX:`));
            var reiniciadorRegistroTalentos = cantidadTalentosCoex;
            var reiniciadorMisionUno = cantidadTalentosCoex;
            var reiniciadorMisionDos = cantidadTalentosCoex;
            var reiniciadorMisionTres = cantidadTalentosCoex;
            var reiniciadorPruebaNivelFinal = cantidadTalentosCoex;

            alert(`Se Han habilitado ${cantidadTalentosCoex} talentos COEX.`);
            break;

        case 2:

            for (i = 1; i <= reiniciadorRegistroTalentos; i++) {
                if (reiniciadorRegistroTalentos >= i) {

                    var codigoTalentoCoex = prompt(`Por favor ingrese el código del talento ${i}:`);
                    var nombreTalentoCoex = prompt(`Por favor ingrese el nombre del talento ${i}:`);
                    let codigoRepetido = false;

                    for (let j = 0; j < talentos.length; j++) {
                        if (talentos[j][0] === codigoTalentoCoex) {
                            codigoRepetido = true;
                            break;
                        }
                    }
                    if (codigoRepetido) {
                        alert(`Por favor verifique, ya existe un talento COEX con ese código.`);
                    } else if (nombreTalentoCoex === ``) {
                        alert(`Por favor deebe ingresar un nombre para el talento, no dejar el recuadro en blanco.`);
                    } else {
                        talentos.push([codigoTalentoCoex, nombreTalentoCoex]);
                    }
                } else {
                    reiniciadorRegistroTalentos--
                }
            }
            alert(`No hay mas registros habilitados, ya ha registrado todos los talentos.`);
            reiniciadorRegistroTalentos = 0;
            break;

        case 3:

            var misionUno = ("Mision Uno");

            for (let i = 0; i < reiniciadorMisionUno; i++) {
                let notaUno = parseInt(prompt(`Por favor ingrese la notaUno de la ${misionUno} del talento ${talentos[i][1]}:`));
                while (notaUno < 0 || notaUno > 100 || isNaN(notaUno)) {
                    notaUno = parseInt(prompt(`
                    Tener en cuenta que la notaUno debe estar en tre 0 y 100. 
                    Por favor ingrese la notaUno de la ${misionUno} del talento ${talentos[i][1]}:`));
                }
                talentos[i][misionUno] = notaUno;
                alert(`Nota de la ${misionUno} del talento ${talentos[i][1]}, agregada. `)
            }
            alert(`Ya has registrado todos los registros habilitados de la ${misionUno}.`)
            reiniciadorMisionUno = 0;
            break;

        case 4:

            var misionDos = ("Mision Dos");

            for (let i = 0; i < reiniciadorMisionDos; i++) {
                let notaDos = parseInt(prompt(`Por favor ingrese la notaDos de la ${misionDos} del talento ${talentos[i][1]}:`));
                while (notaDos < 0 || notaDos > 100 || isNaN(notaDos)) {
                    notaDos = parseInt(prompt(`
                    Tener en cuenta que la notaDos debe estar en tre 0 y 100. 
                    Por favor ingrese la notaDos de la ${misionDos} del talento ${talentos[i][1]}:`));
                }
                talentos[i][misionDos] = notaDos;
                alert(`Nota de la ${misionDos} del talento ${talentos[i][1]}, agregada. `)
            }
            alert(`Ya has registrado todos los registros habilitados de la ${misionDos}.`)
            reiniciadorMisionDos = 0;
            break;

        case 5:

            var misionTres = ("Mision Tres");

            for (let i = 0; i < reiniciadorMisionTres; i++) {
                let notaTres = parseInt(prompt(`Por favor ingrese la notaTres de la ${misionTres} del talento ${talentos[i][1]}:`));
                while (notaTres < 0 || notaTres > 100 || isNaN(notaTres)) {
                    notaTres = parseInt(prompt(`
                    Tener en cuenta que la notaTres debe estar en tre 0 y 100. 
                    Por favor ingrese la notaTres de la ${misionTres} del talento ${talentos[i][1]}:`));
                }
                talentos[i][misionTres] = notaTres;
                alert(`Nota de la ${misionTres} del talento ${talentos[i][1]}, agregada. `)
            }
            alert(`Ya has registrado todos los registros habilitados de la ${misionTres}.`)
            reiniciadorMisionTres = 0;
            break;

        case 6:

            var pruebaNivelFinal = ("Prueba Nivel Final");

            for (let i = 0; i < reiniciadorPruebaNivelFinal; i++) {
                let notaCuatro = parseInt(prompt(`Por favor ingrese la notaCuatro de la ${pruebaNivelFinal} del talento ${talentos[i][1]}:`));
                while (notaCuatro < 0 || notaCuatro > 100 || isNaN(notaCuatro)) {
                    notaCuatro = parseInt(prompt(`
                    Tener en cuenta que la notaCuatro debe estar en tre 0 y 100. 
                    Por favor ingrese la notaCuatro de la ${pruebaNivelFinal} del talento ${talentos[i][1]}:`));
                }
                talentos[i][pruebaNivelFinal] = notaCuatro;
                alert(`Nota de la ${pruebaNivelFinal} del talento ${talentos[i][1]}, agregada. `)
            }
            alert(`Ya has registrado todos los registros habilitados de la ${pruebaNivelFinal}.`)
            reiniciadorPruebaNivelFinal = 0;
            break;

        case 7:

            let misionUnoNotaMaxima = misionUno;
            let misionUnoMejorNota = -1;
            let mejorTalentoMisionUno;

            for (let i = 0; i < talentos.length; i++) {
                if (talentos[i][misionUnoNotaMaxima] > misionUnoMejorNota) {
                    misionUnoMejorNota = talentos[i][misionUnoNotaMaxima];
                    mejorTalentoMisionUno = talentos[i][1];
                }
            }
            alert(`
            El talento con la mejor nota en la Misión ${misionUnoNotaMaxima} es: 
            ${mejorTalentoMisionUno} con una nota de ${misionUnoMejorNota}.`);
            break;

        case 8:

            let misionDosNotaMaxima = misionDos;
            let misionDosMejorNota = -1;
            let mejorTalentoMisionDos;

            for (let i = 0; i < talentos.length; i++) {
                if (talentos[i][misionDosNotaMaxima] > misionDosMejorNota) {
                    misionDosMejorNota = talentos[i][misionDosNotaMaxima];
                    mejorTalentoMisionDos = talentos[i][1];
                }
            }
            alert(`
            El talento con la mejor nota en la Misión ${misionDosNotaMaxima} es: 
            ${mejorTalentoMisionDos} con una nota de ${misionDosMejorNota}.`);
            break;

        case 9:

            let misionTresNotaMaxima = misionTres;
            let misionTresMejorNota = -1;
            let mejorTalentoMisionTres;

            for (let i = 0; i < talentos.length; i++) {
                if (talentos[i][misionTresNotaMaxima] > misionTresMejorNota) {
                    misionTresMejorNota = talentos[i][misionTresNotaMaxima];
                    mejorTalentoMisionTres = talentos[i][1];
                }
            }
            alert(`
            El talento con la mejor nota en la Misión ${misionTresNotaMaxima} es :
            ${mejorTalentoMisionTres} con una nota de ${misionTresMejorNota}.`);
            break;

        case 10:

            for (let i = 0; i < talentos.length; i++) {
                if (talentos[i]["Mision Uno"] !== undefined && talentos[i]["Mision Dos"] !== undefined && talentos[i]["Mision Tres"] !== undefined && talentos[i]["Prueba Nivel Final"] !== undefined) {
                    let sumaTotalNotasTalentos = talentos[i]["Mision Uno"] + talentos[i]["Mision Dos"] + talentos[i]["Mision Tres"] + talentos[i]["Prueba Nivel Final"];
                    let promedioNotasTalentos = sumaTotalNotasTalentos / 4;
                    alert(`
                    El promedio del talento Coex ${talentos[i][1]} es de ${promedioNotasTalentos.toFixed(2)}`);
                } else {
                    alert(`
                    El talento COEX ${talentos[i][1]} aun tiene pendiente notas de misiones y/o de la prueba de nivel final.`);
                }
            }
            break;

        case 11:

            console.log("Mostrando datos de Talentos COEX.");
            for (let i = 0; i < talentos.length; i++) {
                alert(`Talento COEX ${i + 1}: 
                Código: ${talentos[i][0]}
                Nombre: ${talentos[i][1]}
                Nota Misión 1: ${talentos[i]["Mision Uno"]}
                Nota Misión 2: ${talentos[i]["Mision Dos"]}
                Nota Misión 3: ${talentos[i]["Mision Tres"]}
                Prueba Nivel Final: ${talentos[i]["Prueba Nivel Final"]}`);
            }
            break;

        case 12:

            let nombreTalento = `Jefferson Fabian Coronado Amado`;

            alert(`
            El talento COEX que desarrolló la Mision 3 Es: 
            ${nombreTalento}.`);
            break;

        case 13:

            alert(`
            FINAL DEL MODULO
            
            ¡¡GRACIAS POR SU TIEMPO Y DEDICACIÓN!!`);
            break;

        default:
    }
}