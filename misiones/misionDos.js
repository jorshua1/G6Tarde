/*Diseñar un algoritmo con diagrama de flujo de datos y pseudocodigo que permita gegistrar
un inventario de celulares de la siguinetes marcas:
Samsung
Iphome
Xiaomi
Motorola
Huawei
OPPO
El algoritmo debe permitir descontar segun su marca y actualizar la cantidad de telefonos disponibles,
ademas debe calcular el total de dimnero recaudado por las ventas
*/
let inicio = prompt("Por favor ingrese: \n (Y) para iniciar registro de inventario \n o \n (N) para terminar registro de inventario");
let registros = 0;
let marca = 0;
let precio = 0;
let salidad = 0;

let inSamsung = 0;
let inIphone = 0;
let inXiaomi = 0;
let inMotorola = 0;
let inHuawei = 0;
let inOPPO = 0;

let outSamsung = 0;
let outIphone = 0;
let outXiaomi = 0;
let outMotorola = 0;
let outHuawei = 0;
let outOPPO = 0;

let invSamsung = 0;
let invIphone = 0;
let invXiaomi = 0;
let invMotorola = 0;
let invHuawei = 0;
let invOPPO = 0;

let precioVentaSamsung = 0;
let precioVentaIphone = 0;
let precioVentaXiaomi = 0;
let precioVentaMotorola = 0;
let precioVentaHuawei = 0;
let precioVentaOPPO = 0;

if (inicio == "N" || inicio == "n") {
    alert("Has oprimido salir, gracias");
} else {
    if (inicio == "Y" || inicio == "y"); {
        alert("Iniciamos ingreso de materiales al inventario.");
        registros = parseInt(prompt("Por favor ingrese el numero de registros a ingresar"));
        for (i = 0; i < registros; i++) {
            marca = parseInt(prompt("Por favor ingrese el codigo de la marca de celular segun la siguiente lista: \n (1) - Samsung. \n (2) - Iphome. \n (3) - Xiaomi. \n (4) - Motorola. \n (5) - Huawei. \n (6) - OPPO."));
            precio = parseInt(prompt("Digite precio de venta."));
            if (isNaN(marca) || marca < 0 || marca > 6) {
                alert("Por favor ingrese un codigo valido");
            } else {
                if (marca == 1) {
                    inSamsung++;
                    invSamsung++;
                    precioVentaSamsung = precioVentaSamsung + precio;
                } else {
                    if (marca == 2) {
                        inIphone++;
                        invIphone++;
                        precioVentaIphone = precioVentaIphone + precio;
                    } else {
                        if (marca == 3) {
                            inXiaomi++;
                            invXiaomi++;
                            precioVentaXiaomi = precioVentaXiaomi + precio;
                        } else {
                            if (marca == 4) {
                                inMotorola++;
                                invMotorola++;
                                precioVentaMotorola = precioVentaMotorola + precio;
                            } else {
                                if (marca == 5) {
                                    inHuawei++;
                                    invHuawei++;
                                    precioVentaHuawei = precioVentaHuawei + precio;
                                } else {
                                    if (marca == 6) {
                                        inOPPO++;
                                        invOPPO++;
                                        precioVentaOPPO = precioVentaOPPO + precio;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        alert("Material        Ent      Sal      Inv     | Costo Inv \n Samsung:      " + inSamsung + "         " + outSamsung + "         " + invSamsung + "         " + precioVentaSamsung + " \n Iphone:          " + inIphone + "         " + outIphone + "         " + invIphone + "         " + precioVentaIphone + " \n Xiaomi:          " + inXiaomi + "         " + outXiaomi + "         " + invXiaomi + "         " + precioVentaXiaomi + " \n Motorola:      " + inMotorola + "         " + outMotorola + "         " + invMotorola + "         " + precioVentaMotorola + " \n Huawei:         " + inHuawei + "         " + outHuawei + "         " + invHuawei + "         " + precioVentaHuawei + " \n OPPO:           " + inOPPO + "         " + outOPPO + "         " + invOPPO + "         " + precioVentaOPPO);
    }
}