let ctdaddetalentos = 0;
let x = 0;
let datos = []
let validador= 1
while (x == 0) {
    let menu = Number(prompt("MENU\n1)ingresar cantidad de talentos\n2)Registrar datos\n3)Mejor nota mision1\n4)Mejor nota mision2\n5)Mejor nota mision 3\n6)Promedio de cada talento\n7)Tabla de notas\n8)Nombres de los talentos que desarrollaron el ejercicio\n9)salir"))
    while (menu != 1 && menu != 2 && menu != 3 && menu != 4 && menu != 5 && menu != 6 && menu != 7 && menu != 8 && menu != 9) {
        alert("ingrese una opción válida del menú");
        menu = Number(prompt("MENU\n1)ingresar cantida de talentos\n2)Registrar datos\n3)Mejor nota mision1\n4)Mejor nota mision2\n5)Mejor nota mision 3\n6)Promedio de cada talento\n7)Tabla de notas\n8)Nombres de los talentos que desarrollaron el ejercicio\n9)salir"))
    }
    switch (menu) {
        case 1:
            if (ctdaddetalentos == 0) {
                ctdaddetalentos = Number(prompt("Ingrese la cantidad de talentos"))
                while (ctdaddetalentos < 0 || isNaN(ctdaddetalentos) || ctdaddetalentos === 0)
                    alert("ingrese una cantidad válida de talentos")
                    ctdaddetalentos = Number(prompt("Ingrese la cantidad de talentos"))
            } else {
                alert("Ya se ha registrado antes la cantidad de talentos, si desea ingresar una nueva cantidad, por favor reinicie el programa")
            }
            break;

        case 2:
            validador=0
            if (ctdaddetalentos == 0) {
                alert("No se puede usar esta opcion, porque aun no se ha registrado la cantidad de talentos o no se han registrado datos ")
            } else {    
                for (let x = 0; x < ctdaddetalentos; x++) {
                    datos[x] = new Array();
                    for (let y = 0; y < 6; y++) {
                        switch (y) {
                            case 0:
                                datos[x][y] = Number(prompt("inserte el codigo del Talento " + (x+1)));
                                var validadorcodigos = datos[x][y];
                                while(datos[x][y]<0 || isNaN(datos[x][y]) || datos[x][y]==0){
                                    datos[x][y] = Number(prompt("Error formato de codigo invalido, por favor solo use números"))
                                    validadorcodigos= datos[x][y];}
                                if (x>1 && validadorcodigos==datos[x][y]){
                                    datos[x][y] = Number(prompt("Error código repetido, por favor ingrese el codigo nuevamente"))
                                }       
                                break;
                            case 1:

                                datos[x]["nombre"] = prompt("ingrese el Nombre del Talento" + (x+1));
                                break;
                            case 2:
                                var mision1 = Number(prompt("Ingrese la nota de la mision 1 "));
                                while (mision1 < 1 || mision1 > 100 || mision1 === "" || mision1 === null || isNaN(mision1)) {
                                    mision1 = Number(prompt("la nota de la mision 1 solo puede ocupar valores entre 1 y 100"));
                                } datos[x]["Mision1"] = mision1;
                                break;
                            case 3:
                                var mision2 = Number(prompt("Ingrese la nota de la mision 2"));
                                while (mision2 < 1 || mision2 > 100 || mision2 === "" || mision2 === null || isNaN(mision2)) {
                                    mision2 = Number(prompt("la nota de la mision 2 solo puede ocupar valores entre 1 y 100"));
                                } datos[x]["Mision2"] = mision2;
                                break;
                            case 4:
                                var mision3 = Number(prompt("Ingrese la nota de  la mision 3"));
                                while (mision3 < 1 || mision3 > 100 || mision3 === "" || mision3 === null || isNaN(mision3)) {
                                    mision3 = Number(prompt("la nota de la mision 3 solo puede ocupar valores entre 1 y 100"))
                                } datos[x]["Mision3"] = mision3;
                                break;
                            case 5:
                                var misionfinal = Number(prompt("Ingrese al nota de la mision final"));
                                while (misionfinal < 1 || misionfinal > 100 || misionfinal === "" || misionfinal === null || isNaN(misionfinal)) {
                                    misionfinal = Number(prompt("la nota de la mision final solo puede ocupar valores entre 1 y 100"))
                                } datos[x]["MisionFinal"] = misionfinal;
                                break;
                        }
                    }
                }
                break;
            }
        case 3:
            if (ctdaddetalentos == 0 || validador==1) {
                alert("no se puede usar esta opcion porque aun no se ha registrado la cantidad de talentos o no sse han registrado datos")
            } else {
                let mejoresmision1 = [datos[0][2]];
                let posicion = [0];
                for (let i = 1; i < ctdaddetalentos; i++) {
                    if (datos[i][2] > mejoresmision1[0]) {
                        mejoresmision1 = [datos[i][2]];
                        posicion = [i]
                    } else if (datos[i][2] === mejoresmision1[0]) {
                        mejoresmision1.push(datos[i][2]);
                        posicion.push(i)
                    }
                }
                for (let i = 0; i < mejoresmision1.length; i++) {
                    alert("El estudiante " + datos[posicion[i]][1] + " fue la nota mas alta en la mision 1 con un puntaje de " + mejoresmision1[i])
                }
            }
            break;
        case 4:
            if (ctdaddetalentos == 0 || validador==1) {
                alert("no se puede usar esta opcion porque aun no se ha registrado la cantidad de talentos o no se han registrado datos")
            } else {
                let mejoresmision2 = [datos[0][3]];
                let posicion = [0];
                for (let i = 1; i < ctdaddetalentos; i++) {
                    if (datos[i][3] > mejoresmision2[0]) {
                        mejoresmision2 = [datos[i][3]];
                        posicion = [i]
                    } else if (datos[i][3] === mejoresmision2[0]) {
                        mejoresmision2.push(datos[i][3]);
                        posicion.push(i)
                    }
                }
                for (let i = 0; i < mejoresmision2.length; i++) {
                    alert("El estudiante " + datos[posicion[i]][1] + " fue la nota mas alta en la mision 1 con un puntaje de " + mejoresmision2[i])
                }
            }
            break;
        case 5:
            if (ctdaddetalentos == 0|| validador ==1) {
                alert("no se puede usar esta opcion porque aun no se ha registrado la cantidad de talentos o no se han registrado datos")
            } else {
                let mejoresmision3 = [datos[0][4]];
                let posicion = [0];
                for (let i = 1; i < ctdaddetalentos; i++) {
                    if (datos[i][4] > mejoresmision3[0]) {
                        mejoresmision3 = [datos[i][4]];
                        posicion = [i]
                    } else if (datos[i][4] === mejoresmision3[0]) {
                        mejoresmision3.push(datos[i][4]);
                        posicion.push(i)
                    }
                }
                for (let i = 0; i < mejoresmision3.length; i++) {
                    alert("El estudiante " + datos[posicion[i]][1] + " fue la nota mas alta en la mision 1 con un puntaje de " + mejoresmision3[i])
                }
            }
            break;
        case 6:
            if (ctdaddetalentos == 0 || validador==1) {
                alert("no se puede usar esta opcion porque aun no se ha registrado la cantidad de talentos o no se han registrado datos")
            } else {
                let promedios = []
                for (let i = 0; i <ctdaddetalentos; i++) {
                    promedios[i] = new Array()
                    for (let y = 0; y < 2; y++) {
                        if (y == 0) {
                            promedios[i]["NOMBRE"] = datos[i]["nombre"]
                        } else {
                            promedios[i]["PROMEDIO"] = ((datos[i]["Mision1"] + datos[i]["Mision2"] + datos[i]["Mision3"] + datos[i]["MisionFinal"])/4)
                        }
                    }
                }
                console.table(promedios);
            }
            break;
        case 7:
            if (ctdaddetalentos == 0 || validador == 1) {
                alert("no se puede usar esta opcion porque aun no se ha registrado la cantidad de talentos o no se han registrado datos")
            } else {
                console.table(datos);
            }
            break;
        case 8:
                alert("Autor: Carlos Villamizar")           
            break;
        case 9:
            alert("chau");
            x=1;
            break;
    }

}