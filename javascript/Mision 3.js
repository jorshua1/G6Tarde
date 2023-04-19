let menu;
    let cantidadEstudiantes;
    let matriz = [];
    let matrizDos = [];
    let datos = {
        nombre: [],
        codigo: [],
        mision1: [],
        mision2: [],
        mision3: [],
        pruebaFinal: [],
        promedio: [],
    };
    let promedios = 0;
    let total = [];


    do {
    menu = parseInt(prompt(`
    Bienvenido al menú de Dainners
    1. Ingrese la cantidad de estudiantes
    2. Registrar Código y Nombre de los estudiantes
    3. Registrar nota de Misión 1
    4. Registrar nota de Misión 2
    5. Registrar nota de Misión 3
    6. Registrar prueba de nivel final
    7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1
    8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2
    9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3
    10.Mostrar el nombre y el promedio de cada estudiante
    11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y 
       prueba final
    12.Nombre de los talentos que desarrollaron el ejercicio
    13.Salir`));
    while (isNaN(menu) || menu <= 0 || menu >= 14) {
        menu = parseInt(prompt(`
    Ingrese una opcion correcta del menu:    
    Bienvenido al menú de Dainners.
    1. Ingrese la cantidad de estudiantes.
    2. Registrar Código y Nombre de los estudiantes.
    3. Registrar nota de Misión 1.
    4. Registrar nota de Misión 2.
    5. Registrar nota de Misión 3.
    6. Registrar prueba de nivel final.
    7. Mostrar nombre y nota del talento con la mejor nota en la Misión 1.
    8. Mostrar nombre y nota del talento con la mejor nota en la Misión 2.
    9. Mostrar nombre y nota del talento con la mejor nota en la Misión 3.
    10.Mostrar el nombre y el promedio de cada estudiante.
    11.Mostrar código, nombre, nota misión1, nota mision2 y nota misión 3, y .
       prueba final.
    12.Nombre de los talentos que desarrollaron el ejercicio.
    13.Salir.`));
    }
    switch (menu) {
        case 1:
            cantidadEstudiantes = parseInt(prompt(`Ingrese la cantidad de estudiantes`));
            while (isNaN(cantidadEstudiantes)) {
                cantidadEstudiantes = parseInt(prompt(`
                Ingrese un numero correcto:
                Ingrese la cantidad de estudiantes`));
            };
            break;

            case 2:
                for (let columna = 0; columna < cantidadEstudiantes; columna++) {
                    matriz[columna] = [];
                    for (let fila = 0; fila < 2; fila++) {
                        matriz[columna][fila];
                    }
                };
                for (let i = 0; i < cantidadEstudiantes; i++) {
                    datos.codigo[i] = parseInt(prompt(`Ingrese el codigo del estudiante ${i+1}`));
                    while (isNaN(datos.codigo[i])) {
                        datos.codigo[i] = parseInt(prompt(`
                        Ingrese un codigo valido
                        Ingresed el codigo del estudiante ${i+1}`));
                    };
                    matriz[i][`Codigo`] = datos.codigo[i].toFixed(2);

                    datos.nombre[i] = prompt(`Ingrese el nombre del estudiante ${i+1}`);
                    while (!isNaN(datos.nombre[i])) {
                        datos.nombre[i] = prompt(`
                        Ingrese un nombre valido
                        Ingrese el nombre del estudiante ${i+1}`);
                    };
                    matriz[i][`Nombre`] = datos.nombre[i];
                };
                
                break;
                case 3:
                    for (let i = 0; i <cantidadEstudiantes; i++) {
                           datos.mision1[i] = parseInt(prompt(`Ingresar la nota de la mision 1 del estudiante ${i+1}`));
                           while (datos.mision1[i] <= 0 || datos.mision1[i] >= 101) {
                            datos.mision1[i] = parseInt(prompt(`
                            Ingrese una nota valida
                            Ingresar la nota de la mision 2 del estudiante ${i+1}`));
                        };
                           
                    };
                break;
                case 4:
                    for (let i = 0; i <cantidadEstudiantes; i++) {
                            datos.mision2[i] = parseInt(prompt(`Ingresar la nota de la mision 2 del estudiante ${i+1}`));
                            while (datos.mision2[i] <= 0 || datos.mision2[i] >= 101) {
                                datos.mision2[i] = parseInt(prompt(`
                                Ingrese una nota valida
                                Ingresar la nota de la mision 2 del estudiante ${i+1}`));
                            };
                            
                        };
                break;
                case 5:
                    for (let i = 0; i <cantidadEstudiantes; i++) {
                            datos.mision3[i] = parseInt(prompt(`Ingresar la nota de la mision 3 del estudiante ${i+1}`));
                            while (datos.mision3[i] <= 0 || datos.mision3[i] >= 101) {
                                datos.mision3[i] = parseInt(prompt(`
                                Ingrese una nota valida
                                Ingresar la nota de la mision 2 del estudiante ${i+1}`));
                            };
                            
                        };
                break;
                case 6:
                    for (let i = 0; i <cantidadEstudiantes; i++) {
                        datos.pruebaFinal[i] = parseInt(prompt(`Ingresar la nota de la prueba final del estudiante ${i+1}`));
                        while (datos.pruebaFinal[i] <= 0 || datos.pruebaFinal[i] >= 101) {
                            datos.pruebaFinal[i] = parseInt(prompt(`
                            Ingrese una nota valida
                            Ingresar la nota de la mision 2 del estudiante ${i+1}`));
                        };
                        };
                break;
                case 7:
                    let mejorNota1 = Math.max(...datos.mision1);
                    let posicion1 = datos.mision1.indexOf(mejorNota1);
                    alert(`Mejor nota de mision 1: ${datos.nombre[posicion1]} y la nota: ${mejorNota1}`);
                    break;
                    case 8:
                        let mejorNota2 = Math.max(...datos.mision2);
                        let posicion2 = datos.mision2.indexOf(mejorNota2);
                        alert(`Mejor nota de mision 2: ${datos.nombre[posicion2]} y la nota es: ${mejorNota2}`);
                    break;
                    case 9:
                        let mejorNota3 = Math.max(...datos.mision3);
                        let posicion3 = datos.mision3.indexOf(mejorNota3);
                        alert(`Mejor nota de mision 3: ${datos.nombre[posicion3]} y la nota es: ${mejorNota3}`);
                    break;
                case 10:
                    for (let i = 0; i <cantidadEstudiantes; i++) {
                        promedios += datos.mision1[i];
                        promedios += datos.mision2[i];
                        promedios += datos.mision3[i];
                        promedios += datos.pruebaFinal[i];
                        promedios = promedios / 4;
                        datos.promedio[i] = promedios;
                    };
                    
                    for (let columna = 0; columna < cantidadEstudiantes; columna++) {
                        matrizDos[columna] = [];
                        for (let fila = 0; fila < 2; fila++) {
                            matrizDos[columna][fila];
                        }
                    };
                    for (let i = 0; i < cantidadEstudiantes; i++) {
                        matrizDos[i][`Nombre`] = datos.nombre[i];

                        matrizDos[i][`Promedio`] = datos.promedio[i];
                    };
                    console.table(matrizDos);
                    
                break;
                case 11:
                    total.push(datos);
                    for (let i = 0; i < total.length; i++) {
                        console.table(total[i]);
                    };
                break;
                case 12:
                    alert(`
                    Nombre del talento
                    Dainners Redondo Camacho`);
                    break;
                case 13: 
                alert(`Hasta luego`);
                break
    }
    } while (menu !== 13);
