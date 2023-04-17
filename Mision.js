let menu;
let matriz = [];
let codigos = [];
let nombres = [];
let mision1 = [];
let nota1;
let mision2 = [];
let nota2;
let mision3 = [];
let nota3;
let pruebaFinal = [];
let notaFinal;
let promedios = [];
let matriz2 = [];
let cantidadTalentos;
let nombreTalento;
let codigoTalento;



do {
    menu=parseInt(prompt("Ingrese el numero segun la opción del menú a realizar\n"
    +"1-Ingresar cantidad de talentos\n"
    +"2-Registrar datos de los talentos\n"
    +"3-Registrar nota mision 1\n"
    +"4-Registrar nota mision 2\n"
    +"5-Registrar nota mision 3\n"
    +"6-Registrar prueba de nivel final\n"
    +"7-Mostrar nombre y nota del talento con la mejor nota en la mision 1\n"
    +"8-Mostrar nombre y nota del talento con la mejor nota en la mision 2\n"
    +"9-Mostrar nombre y nota del talento con la mejor nota en la mision 3\n"
    +"10-Mostrar el nombre y el promedio de cada talento\n"
    +"11-Mostrar codigo, nombre, nota mision 1, nota mision 2, nota mision 3 y prueba\n"
    +"12-Autor\n"
    +"13-Salir"))

    switch (menu) {
        case 1:
            cantidadTalentos= parseInt(prompt("Ingrese la cantidad de talentos a registrar"))
            while(cantidadTalentos<=0 || isNaN(cantidadTalentos)){
                cantidadTalentos=parseInt(prompt("Ingrese una cantidad de estudiantes"))
            }
            break;
        case 2:
            if (cantidadTalentos === undefined) {
                alert("No es posible ingresar a esta opción aun")
            }else{
                for (let f = 0; f < cantidadTalentos ; f++) {
                    codigoTalento = parseInt(prompt("Ingrese el codigo del talento"))
                    while (codigoTalento < 0 || isNaN(codigoTalento)) {
                        codigoTalento = parseInt(prompt("Ingrese un valor de codigo valido"));
                    }
                    for (let i = 0; i < matriz.length; i++) {
                        while (matriz[i][0] === codigoTalento || codigoTalento <0 || isNaN(codigoTalento)) {
                            codigoTalento = parseInt(prompt("El codigo ingresado anteriormente esta repetido o no es valido, ingrese uno valido"))
                        }
                    }
                    codigos.push(codigoTalento);
                    nombreTalento = prompt("Ingrese el nombre del talento")
                    while (nombreTalento.length === 0) {
                        nombreTalento = prompt("Ingrese un nombre valido")
                    }
                    nombres.push(nombreTalento)
                    matriz[f] = []
                    for (let c = 0; c < 1; c++) {
                        matriz[f][0] = codigoTalento
                        matriz[f][1] = nombreTalento
                    }
                }
                console.table(matriz);
            }
        break;
        case 3:
            if (cantidadTalentos === undefined) {
                alert("No es posible ingresar a esta opción aun")
            }else{
                for(let i = 0; i<matriz.length;i++){
                    nota1=parseFloat(prompt("Ingrese la nota de la mision 1 del talento "+matriz[i][1]));
                    while(nota1<1 || nota1>100 ||isNaN(nota1)){
                        nota1=parseFloat(prompt("Ingrese una nota valida para la mision 1"))
                    }
                    mision1.push(nota1);
                }
            }
            break;
            case 4:
                if (cantidadTalentos === undefined) {
                    alert("No es posible ingresar a esta opción aun")
                }else{
                    for(let i = 0; i<matriz.length;i++){
                        nota2=parseFloat(prompt("Ingrese la nota de la mision 2 del talento "+matriz[i][1]));
                        while(nota2<1 || nota2>100 ||isNaN(nota2)){
                            nota2=parseFloat(prompt("Ingrese una nota valida para la mision 2"))
                        }
                        mision2.push(nota2);
                    }
                }
                break;
        case 5:
            if (cantidadTalentos === undefined) {
                alert("No es posible ingresar a esta opción aun")
            }else{
                for(let i = 0; i<matriz.length;i++){
                    nota3=parseFloat(prompt("Ingrese la nota de la mision 3 del talento "+matriz[i][1]));
                    while(nota3<1 || nota3>100 ||isNaN(nota3)){
                        nota3=parseFloat(prompt("Ingrese una nota valida para la mision 1"))
                    }
                    mision3.push(nota3);
                }
            }
            break;
            case 6:
                if (cantidadTalentos === undefined) {
                    alert("No es posible ingresar a esta opción aun")
                }else{
                    for(let i = 0; i<matriz.length;i++){
                        notaFinal=parseFloat(prompt("Ingrese la nota de la prueba final de "+matriz[i][1]));
                        while(notaFinal<1 || notaFinal>100 ||isNaN(notaFinal)){
                            notaFinal=parseFloat(prompt("Ingrese una nota valida para prueba final"))
                        }
                        pruebaFinal.push(notaFinal);
                    }
                }
            break;
            case 7:
                if (cantidadTalentos === undefined) {
                    alert("No es posible ingresar a esta opción aun")
                }else{
                    let notaMax1 = Math.max(...mision1)
                    let nombreMax1= mision1.indexOf(notaMax1)
                    alert("El talento "+nombres[nombreMax1]+" con la nota "+notaMax1+" es la mejor nota de la Misión 1");
                }
            break;
            case 8:
                if (cantidadTalentos === undefined) {
                    alert("No es posible ingresar a esta opción aun")
                }else{
                    let notaMax2 = Math.max(...mision2)
                    let nombreMax2= mision2.indexOf(notaMax2)
                    alert("El talento "+nombres[nombreMax2]+" con la nota "+notaMax2+" es la mejor nota de la Misión 2");
                }
            break;
            case 9:
                if (cantidadTalentos === undefined) {
                    alert("No es posible ingresar a esta opción aun")
                }else{
                    let notaMax3 = Math.max(...mision3)
                    let nombreMax3= mision3.indexOf(notaMax3)
                    alert("El talento "+nombres[nombreMax3]+" con la nota "+notaMax3+" es la mejor nota de la Misión 3");
                }
            break;
            case 10:
                if (cantidadTalentos === undefined) {
                    alert("No es posible ingresar a esta opción aun")
                }else{
                    for(let i = 0; i<matriz.length; i++){
                        let notaPromedio = ((mision1[i]+mision2[i]+mision3[i]+pruebaFinal[i])/4)
                        alert("El talento "+matriz[i][1]+" tiene un promedio de "+notaPromedio)
                        promedios.push(notaPromedio);
                       }
                }
                break;
            case 11:
                if (cantidadTalentos === undefined) {
                    alert("No es posible ingresar a esta opción aun")
                }else{
                    for (let f = 0; f < cantidadTalentos ; f++){
                        matriz2[f] = []
                    for (let c = 0; c < 1; c++) {
                        matriz2[f][0] = codigos[f]
                        matriz2[f][1] = nombres[f]
                        matriz2[f][2] = mision1[f]
                        matriz2[f][3] = mision2[f]
                        matriz2[f][4] = mision3[f]
                        matriz2[f][5] = pruebaFinal[f]
                    }
                    }
               console.table(matriz2);
                }
            break;
            case 12:
                console.log("Ig: felipe_4_5");
            break;
        default:
            console.log("Abandonaste el menú");
            break;
    }
} while (menu!==13);