let estudiantes = 0;
let cantidadEstudiantes = 0;
let nombreDelEstudiante = 0;
let codigoDelEstudiante = 0;
let nivelDelEstudiante = 0;
let listadoNombres = [];
let listadoCodigo = [];
let listadoNivel = [];
let notaEstudiante1 = [];
let notaEstudiante2 = [];
let notaEstudiante3 = [];
let notaEstudiante4 = [];
let notas = [notaEstudiante1, notaEstudiante2, notaEstudiante3, notaEstudiante4];
let listado = [listadoNombres, listadoCodigo, listadoNivel];
var promedios = [];
let promediosEstudiantes = [listadoNombres, promedios]
let menu;

do {
  let menu = parseInt(
    prompt(
      "menu\n (1) definir cantidad de estudiantes \n (2) registrar datos estudiantes  \n (3) mostrar listado de estudiantes \n (4) registrar notas estudiantes \n (5) imprimir notas estudiantes \n (6) Mostrar nombre y nota del talento con la mejor nota en la Misión 1 \n (7) Mostrar nombre y nota del talento con la mejor nota en la Misión 2 \n (8) Mostrar nombre y nota del talento con la mejor nota en la Misión 3 \n (9) Ver promedio \n (10) acerca del autor \n (11) salir "
    )
  );
  if (menu <= 11 && menu > 0) {
    switch (menu) {
      case 1:
        cantidadEstudiantes = parseInt(
          prompt("por favor digite la cantidad de estudiantes")
        );
        while (cantidadEstudiantes < 0 || isNaN(cantidadEstudiantes)) {
          cantidadEstudiantes = parseInt(
            prompt(
              "la cantidad de estudiantes ingresada es incorrecta, porfavor, ingrese de nuevo los datos"
            )
          );
        }
        alert("la cantidad ingresada es " + cantidadEstudiantes);
        break;
      case 2:
        for (let i = 0; i < cantidadEstudiantes; i++) {
          alert("Por favor ingrese los datos del estudiante" + (i + 1));

          nombreDelEstudiante = prompt(
            "ingrese el nombre del estudiante " + (i + 1)
            );
          
            while (nombreDelEstudiante.length==0) {
              nombreDelEstudiante = 
                prompt(
                  "Ingresó un nombre vacío, por favor ingrese un nombre: "
                );
              }
          listadoNombres.push(nombreDelEstudiante);

          codigoDelEstudiante = parseInt(
            prompt("ingrese el codigo del estudiante" + (i + 1))
          );

          while (codigoDelEstudiante < 0 || isNaN(codigoDelEstudiante)) {
            codigoDelEstudiante = parseInt(
              prompt(
                "el codigo ingresado es incorrecto, porfavor, ingrese de nuevo el codigo"
              )
            );
            }
            for (let i = 0; i < listadoCodigo.length; i++) {
              while (codigoDelEstudiante === listadoCodigo[i]) {
                codigoDelEstudiante = parseInt(
                    prompt("El codigo ya existe, ingrese uno nuevo")
                  );
                }
            }listadoCodigo.push(codigoDelEstudiante);
          nivelDelEstudiante = parseInt(
            prompt(
              "que nivel es el estudiante\n (1) beginner\n (2) junior \n (3) senior "
            )
          );

          while (
            nivelDelEstudiante < 0 ||
            nivelDelEstudiante > 3 ||
            isNaN(nivelDelEstudiante)
          ) {
            nivelDelEstudiante = parseInt(
              prompt(
                "digite correctamente el nivel\n (1) beginner\n (2) junior \n (3) senior"
              )
            );
          }

          if (nivelDelEstudiante === 1) {
            alert("el estudiante es de nivel beginner");
            nivelDelEstudiante = "Beginner";
            listadoNivel.push(nivelDelEstudiante);
          } else if (nivelDelEstudiante === 2) {
            alert("el estudiante es junior");
            nivelDelEstudiante = "Junior";
            listadoNivel.push(nivelDelEstudiante);
          } else if (nivelDelEstudiante === 3) {
            alert("el estudiante es nivel senior");
            nivelDelEstudiante = "Senior";
            listadoNivel.push(nivelDelEstudiante);
          }

          while (codigoDelEstudiante < 0 || isNaN(codigoDelEstudiante)) {
            codigoDelEstudiante = parseInt(
              prompt(
                "el codigo ingresado es incorrecto, porfavor, ingrese nuevamente el codigo"
              )
            );
          }
        }
        break;
      case 3:
        console.table(listado);
        break;
      case 4:
        alert("ingrese las notas");
        for (let i = 0; i < cantidadEstudiantes; i++) {
          console.log(i);
          
          notaEstudiante1[i] = parseFloat(
            prompt("Ingrese la nota de la mision 1" + " del estudiante" + (i + 1))
          );
          while (
            notaEstudiante1[i] < 0 ||
            notaEstudiante1[i] > 5 ||
            isNaN(notaEstudiante1[i])
          ) {
           notaEstudiante1[i] = parseFloat(
            prompt(
               "la nota ingresada es incorrecta, porfavor, ingrese nuevamente la nota"
              )
            );
          }

          notaEstudiante2[i] = parseFloat(
            prompt("Ingrese la nota de la mision 2" + " del estudiante" + (i + 1))
          );
          console.log("estudiante 2 " + notaEstudiante2[i]);
          while (
            notaEstudiante2[i] < 0 ||
            notaEstudiante2[i] > 5 ||
            isNaN(notaEstudiante2[i])
          ) {
            notaEstudiante2 [i] = parseFloat(
             prompt(
                "la nota ingresada es incorrecta, porfavor, ingrese nuevamente la nota"
             )
           );
          }

          notaEstudiante3[i] = parseFloat(
            prompt("Ingrese la nota de la mision 3" + " del estudiante" + (i + 1))
          );
          console.log("estudiante 3 " + notaEstudiante3[i]);
          while (
            notaEstudiante3[i] < 0 ||
            notaEstudiante3[i] > 5 ||
            isNaN(notaEstudiante3[i])
          ) {
           notaEstudiante3 [i] = parseFloat(
            prompt(
               "la nota ingresada es incorrecta, porfavor, ingrese nuevamente la nota"
             )
         );
          }
          notaEstudiante4[i] = parseFloat(
            prompt("Ingrese la nota final" + " del estudiante" + (i + 1))
          );
          console.log("estudiante 4 " + notaEstudiante3[i]);
          while (
            notaEstudiante4[i] < 0 ||
            notaEstudiante4[i] > 5 ||
            isNaN(notaEstudiante4[i])
          ) {
           notaEstudiante4 [i] = parseFloat(
            prompt(
               "la nota ingresada es incorrecta, porfavor, ingrese nuevamente la nota"
             )
         );
          }
        }
        break;
      case 5:
        console.table(notas);
        
        break;
        case 6:
          const max1 = Math.max(...notaEstudiante1)
          const index1 = notaEstudiante1.indexOf(max1)
          alert('El estudiante con mejor nota en la misión 1 es ' + listadoNombres[index1] + ' con nota de ' + max1)
          break;
          
      case 7:
          const max2 = Math.max(...notaEstudiante2)
          const index2 = notaEstudiante2.indexOf(max2)
          alert('El estudiante con mejor nota en la misión 2 es ' + listadoNombres[index2] + ' con nota de ' + max2)
          break;

      case 8:
          const max3 = Math.max(...notaEstudiante3)
          const index3 = notaEstudiante3.indexOf(max3)
          alert('El estudiante con mejor nota en la misión 3 es ' + listadoNombres[index3] + ' con nota de ' + max3)
          break;
          case 9:
            for(let i = 0; i < listadoCodigo.length; i++){
                let promedio = (notaEstudiante1[i] + notaEstudiante2[i] + notaEstudiante3[i] + notaEstudiante4[i])/4
                promedios.push(promedio)    
            }
            console.table(promediosEstudiantes)
            break;
      case 10:
        alert(
          "Hola, esto lo hizo arley gg, tengo 22 años, estudio economía, vivo en piedecuesta siuuuu"
        );
        break
      case 11:
        alert("Eso fue todo, gracias");
        break;
    }
    if (menu === 11) {
      break;
    }
  }
} while (menu !== 11);
