let Samsung = 0; let iPhone = 0; let Xiaomi = 0; let Motorola = 0; let Huawei = 0; let OPPO = 0;
let valSamsung = 0; let valiPhone = 0; let valXiaomi = 0; let valMotorola = 0; let valHuawei = 0; let valOPPO = 0;
let cantidad = 0;
var boleano = true;


while (boleano != false) {
    menu = Number(prompt(`
Seleccione la operación que desea realizar
MENÚ

1... Ingresar cantidad en el inventario
2... Descontar del inventario
3... Salir`));

    while (isNaN(menu) || (menu != 1 && menu != 2 && menu != 3)) {
        menu = Number(prompt(`
    ERROR.
Seleccione la operación que desea realizar
MENÚ

1... Ingresar cantidad en el inventario
2... Descontar del inventario
3... Salir`));
    }

    switch (menu) {
        case 1:
            let celular = 0;
            while (celular != 7) {
                celular = Number(prompt(`Seleccione a cual celular desea ingresarle una cantidad
        CELULAR            CANTIDAD
        1.. Samsung      ${Samsung}
        2.. iPhone       ${iPhone}
        3.. Xiaomi       ${Xiaomi}
        4.. Motorola     ${Motorola}
        5.. Huawei       ${Huawei}
        6.. OPPO         ${OPPO}
        7.. Atrás`));
                while (isNaN(celular) || (celular != 1 && celular != 2 && celular != 3 && celular != 4 && celular != 5 && celular != 6 && celular != 7)) {
                    celular = Number(prompt(`Seleccione a cual celular desea ingresarle una cantidad
                1CELULAR            CANTIDAD
                1.. Samsung      ${Samsung}
                2.. iPhone       ${iPhone}
                3.. Xiaomi       ${Xiaomi}
                4.. Motorola     ${Motorola}
                5.. Huawei       ${Huawei}
                6.. OPPO         ${OPPO}
                7.. Atrás`));
                }
                switch (celular) {
                    case 1:
                        cantidad = Number(prompt("Ingrese la cantidad de Samsung que tiene"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de Samsung que tiene"));
                        }
                        Samsung += cantidad;
                        cantidad = 0;
                        if (valSamsung == 0) {
                            valSamsung = Number(prompt("Ingrese el valor por unidad del telefono Samsung"));
                            while (isNaN(valSamsung) || valSamsung < 0) {
                                valSamsung = Number(prompt("ERROR. Ingrese el valor por unidad del telefono Samsung"));
                            }
                        }
                        break;


                    case 2:
                        cantidad = Number(prompt("Ingrese la cantidad de iPhone que tiene"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de iPhone que tiene"));
                        }
                        iPhone += cantidad;
                        cantidad = 0;
                        if (valiPhone == 0) {
                            valiPhone = Number(prompt("Ingrese el valor por unidad del telefono iPhone"));
                            while (isNaN(valiPhone) || valiPhone < 0) {
                                valiPhone = Number(prompt("ERROR. Ingrese el valor por unidad del telefono iPhone"));
                            }
                        }
                        break;

                    case 3:
                        cantidad = Number(prompt("Ingrese la cantidad de Xiaomi que tiene"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de xiaomi que tiene"));
                        }
                        Xiaomi += cantidad;
                        cantidad = 0;
                        if (valXiaomi == 0) {
                            valXiaomi = Number(prompt("Ingrese el valor por unidad del telefono xiaomi"));
                            while (isNaN(valXiaomi) || valXiaomi < 0) {
                                valXiaomi = Number(prompt("ERROR. Ingrese el valor por unidad del telefono xiaomi"));
                            }
                        }
                        break;

                    case 4:
                        cantidad = Number(prompt("Ingrese la cantidad de motorola que tiene"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de motorola que tiene"));
                        }
                        Motorola += cantidad;
                        cantidad = 0;
                        if (valMotorola == 0) {
                            valMotorola = Number(prompt("Ingrese el valor por unidad del telefono motorola"));
                            while (isNaN(valMotorola) || valMotorola < 0) {
                                valMotorola = Number(prompt("ERROR. Ingrese el valor por unidad del telefono motorola"));
                            }
                        }
                        break;

                    case 5:
                        cantidad = Number(prompt("Ingrese la cantidad de huawei que tiene"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de huawei que tiene"));
                        }
                        Huawei += cantidad;
                        cantidad = 0;
                        if (valHuawei == 0) {
                            valHuawei = Number(prompt("Ingrese el valor por unidad del telefono huawei"));
                            while (isNaN(valHuawei) || valHuawei < 0) {
                                valHuawei = Number(prompt("ERROR. Ingrese el valor por unidad del telefono huawei"));
                            }
                        }
                        break;

                    case 6:
                        cantidad = Number(prompt("Ingrese la cantidad de oppo que tiene"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de OPPO que tiene"));
                        }
                        OPPO += cantidad;
                        cantidad = 0;
                        if (valOPPO == 0) {
                            valOPPO = Number(prompt("Ingrese el valor por unidad del telefono OPPO"));
                            while (isNaN(valOPPO) || valOPPO < 0) {
                                valOPPO = Number(prompt("ERROR. Ingrese el valor por unidad del telefono OPPO"));
                            }
                        }
                        break;

                    case 7:
                        break;

                    default:
                        alert("No ingresó una de las opciones.")

                }
            }
            break;

        case 2:
            let opcion = 0;
            while (opcion != 7) {
                opcion = Number(prompt(`Seleccione el celular el cual desea descontarle cantidad de inventario
            CELULAR            CANTIDAD
            1.. Samsung      ${Samsung}
            2.. iPhone       ${iPhone}
            3.. Xiaomi       ${Xiaomi}
            4.. Motorola     ${Motorola}
            5.. Huawei       ${Huawei}
            6.. OPPO         ${OPPO}
            7.. Atrás`));
                while (isNaN(opcion) || (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4 && opcion != 5 && opcion != 6 && opcion != 7)) {
                    opcion = Number(prompt(`Seleccione el celular el cual desea descontarle cantidad de inventario
            CELULAR            CANTIDAD
            1.. Samsung      ${Samsung}
            2.. iPhone       ${iPhone}
            3.. Xiaomi       ${Xiaomi}
            4.. Motorola     ${Motorola}
            5.. Huawei       ${Huawei}
            6.. OPPO         ${OPPO}
            7.. Atrás`));
                }

                switch (opcion) {
                    case 1:
                        cantidad = Number(prompt("Ingrese la cantidad de samsung que vendió"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de samsung que vendió"));
                        }
                        if (cantidad > Samsung) {
                            cantidad = Number(prompt(`Ingrese una cantidad válida, la cantidad (${cantidad})ingresada supera la cantidad de celulares samsung (${Samsung}) que tiene`))
                        } else {
                            Samsung -= cantidad;
                        } cantidad = 0;

                        break;

                    case 2:

                        cantidad = Number(prompt("Ingrese la cantidad de iPhone que vendió"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de iPhone que vendió"));
                        }
                        if (cantidad > iPhone) {
                            cantidad = Number(prompt(`Ingrese una cantidad válida.
                        La cantidad (${cantidad}) ingresada supera la cantidad (${iPhone}) de celulares iPhone que tiene`));
                        } else {
                            iPhone -= cantidad;
                        } cantidad = 0;

                        break;

                    case 3:

                        cantidad = Number(prompt("Ingrese la cantidad de Xiaomi que vendió"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de Xiaomi que vendió"));
                        }
                        if (cantidad > Xiaomi) {
                            cantidad = Number(prompt(`Ingrese una cantidad válida.
                        La cantidad (${cantidad}) ingresada supera la cantidad (${Xiaomi}) de celulares Xiaomi que tiene`));
                        } else {
                            Xiaomi -= cantidad;
                        } cantidad = 0;

                        break;

                    case 4:

                        cantidad = Number(prompt("Ingrese la cantidad de Motorola que vendió"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de Motorola que vendió"));
                        }
                        if (cantidad > Motorola) {
                            cantidad = Number(prompt(`Ingrese una cantidad válida.
                        La cantidad (${cantidad}) ingresada supera la cantidad (${Motorola}) de celulares Motorola que tiene`));
                        } else {
                            Motorola -= cantidad;
                        } cantidad = 0;

                        break;

                    case 5:

                        cantidad = Number(prompt("Ingrese la cantidad de Huawei que vendió"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de Huawei que vendió"));
                        }
                        if (cantidad > Huawei) {
                            cantidad = Number(prompt(`Ingrese una cantidad válida.
                        La cantidad (${cantidad}) ingresada supera la cantidad (${Huawei}) de celulares Huawei que tiene`));
                        } else {
                            Huawei -= cantidad;
                        } cantidad = 0;

                        break;

                    case 6:

                        cantidad = Number(prompt("Ingrese la cantidad de OPPO que vendió"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de OPPO que vendió"));
                        }
                        if (cantidad > OPPO) {
                            cantidad = Number(prompt(`Ingrese una cantidad válida.
                        La cantidad (${cantidad}) ingresada supera la cantidad (${OPPO}) de celulares OPPO que tiene`));
                        } else {
                            OPPO -= cantidad;
                        } cantidad = 0;

                        break;

                    case 7:
                        break;

                    default:
                        alert("No ingresó una de las opciones.")
                }
            } break;
        case 3:
            boleano = false
            break;
    }
}

let recaudo= ((Samsung*valSamsung)+(iPhone*valiPhone)+(Xiaomi*valXiaomi)+(Motorola*valMotorola)+(Huawei*valHuawei)+(OPPO*valOPPO))
alert(`
Se vendieron -> CANTIDAD   ->  VALOR 
Samsung -> ${Samsung}   -> ${valSamsung}
iPhone -> ${iPhone}  -> ${valiPhone}
Xiaomi -> ${Xiaomi}  -> ${valXiaomi}
Motorola -> ${Motorola}  -> ${valMotorola}
Huawei -> ${Huawei}  -> ${valHuawei}
OPPO -> ${OPPO}   -> ${valOPPO}
El dinero total recaudado por las ventas es ${recaudo}`);