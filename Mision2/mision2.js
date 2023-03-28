let Samsung = 0; let Iphone = 0; let Xiaomi = 0; let Motorola = 0; let Huawei = 0; let Oppo = 0;
let vendidoSamsung=0;let vendidoIphone=0;let vendidoXiaomi=0;let vendidoMotorola=0;let vendidoHuawei=0;let vendidoOppo=0;
let valorSamsung = 0; let valorIphone = 0; let valorXiaomi = 0; let valorMotorola = 0; let valorHuawei = 0; let valorOppo = 0;
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
                celular = Number(prompt(`Escriba el numero segun el telefono que desea ingresarle una cantidad
        CELULAR.........CANTIDAD
        1.. Samsung.....${Samsung}
        2.. Iphone......${Iphone}
        3.. Xiaomi......${Xiaomi}
        4.. Motorola....${Motorola}
        5.. Huawei......${Huawei}
        6.. Oppo........${Oppo}
        7.. Atrás`));
                while (isNaN(celular) || (celular != 1 && celular != 2 && celular != 3 && celular != 4 && celular != 5 && celular != 6 && celular != 7)) {
                    celular = Number(prompt(`ERROR. Escriba el numero segun el telefono que desea ingresarle una cantidad
                    CELULAR.........CANTIDAD
                    1.. Samsung.....${Samsung}
                    2.. Iphone......${Iphone}
                    3.. Xiaomi......${Xiaomi}
                    4.. Motorola....${Motorola}
                    5.. Huawei......${Huawei}
                    6.. Oppo........${Oppo}
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
                        if (valorSamsung === 0) {
                            valorSamsung = Number(prompt("Ingrese el valor por unidad del telefono Samsung"));
                            while (isNaN(valorSamsung) || valorSamsung < 0) {
                                valorSamsung = Number(prompt("ERROR. Ingrese el valor por unidad del telefono Samsung"));
                            }
                        }
                        break;


                    case 2:
                        cantidad = Number(prompt("Ingrese la cantidad de Iphone que tiene"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de Iphone que tiene"));
                        }
                        Iphone += cantidad;
                        cantidad = 0;
                        if (valorIphone === 0) {
                            valorIphone = Number(prompt("Ingrese el valor por unidad del telefono Iphone"));
                            while (isNaN(valorIphone) || valorIphone < 0) {
                                valorIphone = Number(prompt("ERROR. Ingrese el valor por unidad del telefono Iphone"));
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
                        if (valorXiaomi === 0) {
                            valorXiaomi = Number(prompt("Ingrese el valor por unidad del telefono xiaomi"));
                            while (isNaN(valorXiaomi) || valorXiaomi < 0) {
                                valorXiaomi = Number(prompt("ERROR. Ingrese el valor por unidad del telefono xiaomi"));
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
                        if (valorMotorola === 0) {
                            valorMotorola = Number(prompt("Ingrese el valor por unidad del telefono motorola"));
                            while (isNaN(valorMotorola) || valorMotorola < 0) {
                                valorMotorola = Number(prompt("ERROR. Ingrese el valor por unidad del telefono motorola"));
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
                        if (valorHuawei === 0) {
                            valorHuawei = Number(prompt("Ingrese el valor por unidad del telefono huawei"));
                            while (isNaN(valorHuawei) || valorHuawei < 0) {
                                valorHuawei = Number(prompt("ERROR. Ingrese el valor por unidad del telefono huawei"));
                            }
                        }
                        break;

                    case 6:
                        cantidad = Number(prompt("Ingrese la cantidad de Oppo que tiene"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de Oppo que tiene"));
                        }
                        Oppo += cantidad;
                        cantidad = 0;
                        if (valorOppo === 0) {
                            valorOppo = Number(prompt("Ingrese el valor por unidad del telefono Oppo"));
                            while (isNaN(valorOppo) || valorOppo < 0) {
                                valorOppo = Number(prompt("ERROR. Ingrese el valor por unidad del telefono Oppo"));
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
                CELULAR.........CANTIDAD
                1.. Samsung.....${Samsung}
                2.. Iphone......${Iphone}
                3.. Xiaomi......${Xiaomi}
                4.. Motorola....${Motorola}
                5.. Huawei......${Huawei}
                6.. Oppo........${Oppo}
                7.. Atrás`));
                while (isNaN(opcion) || (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4 && opcion != 5 && opcion != 6 && opcion != 7)) {
                    opcion = Number(prompt(`Seleccione el celular el cual desea descontarle cantidad de inventario
                    CELULAR.........CANTIDAD
                    1.. Samsung.....${Samsung}
                    2.. Iphone......${Iphone}
                    3.. Xiaomi......${Xiaomi}
                    4.. Motorola....${Motorola}
                    5.. Huawei......${Huawei}
                    6.. Oppo........${Oppo}
                    7.. Atrás`));
                }

                switch (opcion) {
                    case 1:
                        cantidad = Number(prompt("Ingrese la cantidad de samsung que vendió"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de samsung que vendió"));
                        }
                        if (Samsung === 0 && cantidad > Samsung) {
                            alert(`ERROR. La cantidad (${cantidad}) ingresada supera la cantidad (${Samsung}) de celulares Samsung que tiene, no se puede realizar la operación. `);
                        } else {
                            Samsung -= cantidad;
                            vendidoSamsung+=cantidad;
                        } cantidad = 0;

                        break;

                    case 2:

                        cantidad = Number(prompt("Ingrese la cantidad de Iphone que vendió"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de Iphone que vendió"));
                        }
                        if (Iphone === 0 && cantidad > Iphone) {
                            alert(`ERROR. La cantidad (${cantidad}) ingresada supera la cantidad (${Iphone}) de celulares Iphone que tiene, no se puede realizar la operación. `);
                        } else {
                            Iphone -= cantidad;
                            vendidoIphone+=cantidad;
                        } cantidad = 0;

                        break;

                    case 3:

                        cantidad = Number(prompt("Ingrese la cantidad de Xiaomi que vendió"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de Xiaomi que vendió"));
                        }
                        if (Xiaomi === 0 && cantidad > Xiaomi) {
                            alert(`ERROR. La cantidad (${cantidad}) ingresada supera la cantidad (${Xiaomi}) de celulares Xiaomi que tiene, no se puede realizar la operación. `);
                        } else {
                            Xiaomi -= cantidad;
                            vendidoXiaomi+=cantidad;
                        } cantidad = 0;

                        break;

                    case 4:

                        cantidad = Number(prompt("Ingrese la cantidad de Motorola que vendió"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de Motorola que vendió"));
                        }
                        if (Motorola === 0 && cantidad > Motorola) {
                            alert(`ERROR. La cantidad (${cantidad}) ingresada supera la cantidad (${Motorola}) de celulares Motorola que tiene, no se puede realizar la operación. `);
                        } else {
                            Motorola -= cantidad;
                            vendidoMotorola+=cantidad;
                        } cantidad = 0;

                        break;

                    case 5:

                        cantidad = Number(prompt("Ingrese la cantidad de Huawei que vendió"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Ingrese la cantidad de Huawei que vendió"));
                        }
                        if (Huawei === 0 && cantidad > Huawei) {
                            alert(`ERROR. La cantidad (${cantidad}) ingresada supera la cantidad (${Huawei}) de celulares Huawei que tiene, no se puede realizar la operación. `);
                        } else {
                            Huawei -= cantidad;
                            vendidoHuawei+=cantidad;
                        } cantidad = 0;

                        break;

                    case 6:

                        cantidad = Number(prompt("Ingrese la cantidad de Oppo que vendió"));
                        while (isNaN(cantidad) || cantidad < 0) {
                            cantidad = Number(prompt("Error. Ingrese la cantidad de Oppo que vendió"));
                        }
                        if (Oppo === 0 && cantidad > Oppo) {
                            alert(`ERROR. La cantidad (${cantidad}) ingresada supera la cantidad (${Oppo}) de celulares Oppo que tiene, no se puede realizar la operación. `);
                        } else {
                            Oppo -= cantidad;
                            vendidoOppo+=cantidad;
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

let recaudo= ((vendidoSamsung*valorSamsung)+(vendidoIphone*valorIphone)+(vendidoXiaomi*valorXiaomi)+(vendidoMotorola*valorMotorola)+(vendidoHuawei*valorHuawei)+(vendidoOppo*valorOppo))
alert(`
Se vendieron....CANTIDAD......VALOR 
Samsung.........${vendidoSamsung}....${valorSamsung}
Iphone..........${vendidoIphone}.....${valorIphone}
Xiaomi..........${vendidoXiaomi}.....${valorXiaomi}
Motorola........${vendidoMotorola}...${valorMotorola}
Huawei..........${vendidoHuawei}.....${valorHuawei}
Oppo............${vendidoOppo}.......${valorOppo}
El dinero total recaudado por las ventas es ${recaudo}`);

