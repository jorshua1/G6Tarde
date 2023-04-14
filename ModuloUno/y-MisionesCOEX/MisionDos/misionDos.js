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
let inicio = prompt("Por favor ingrese: \n\n (Y) para iniciar registro de inventario \n\n (N) para terminar registro de inventario");
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

let precioInvSamsung = 0;
let precioInvIphone = 0;
let precioInvXiaomi = 0;
let precioInvMotorola = 0;
let precioInvHuawei = 0;
let precioInvOPPO = 0;

//Codigo para alimentar inventario//
if (inicio != "N" || inicio != "n") {
    alert("Has oprimido salir, gracias.");
} else {
    if (inicio == "Y" || inicio == "y"); {
        alert("Iniciamos ingreso de celulares al inventario.");
        registros = parseInt(prompt("Por favor ingrese el numero de registros de marcas a ingresar"));
        for (i = 0; i < registros; i++) {
            marca = parseInt(prompt("Por favor ingrese el codigo de la marca de celular según la siguiente lista: \n (1) - Samsung. \n (2) - Iphone. \n (3) - Xiaomi. \n (4) - Motorola. \n (5) - Huawei. \n (6) - OPPO."));
            cantidad = parseInt(prompt("Digite la cantidad de celulares."));
            precio = parseInt(prompt("Digite el precio de venta unitario."));
            if (isNaN(marca) || marca < 0 || marca > 6) {
                alert("Has digitado una referencia no existente,\n por favor ingrese un codigo valido.");
                break;
            } else {
                if (marca == 1) {
                    inSamsung = inSamsung + cantidad;
                    invSamsung = inSamsung;
                    precioInvSamsung = invSamsung * precio;
                } else {
                    if (marca == 2) {
                        inIphone = inIphone + cantidad;
                        invIphone = inIphone;
                        precioInvIphone = invIphone * precio;
                    } else {
                        if (marca == 3) {
                            inXiaomi = inXiaomi + cantidad;
                            invXiaomi = inXiaomi;
                            precioInvXiaomi = invXiaomi * precio;
                        } else {
                            if (marca == 4) {
                                inMotorola = inMotorola + cantidad;
                                invMotorola = inMotorola;
                                precioInvMotorola = invMotorola * precio;
                            } else {
                                if (marca == 5) {
                                    inHuawei = inHuawei + cantidad;
                                    invHuawei = inHuawei;
                                    precioInvHuawei = invHuawei * precio;
                                } else {
                                    if (marca == 6) {
                                        inOPPO = inOPPO + cantidad;
                                        invOPPO = inOPPO;
                                        precioInvOPPO = invOPPO * precio;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        alert("          ALMACEN DE INVENTARIO \n Material        Ent      Sal      Inv     | Costo Inv \n\n Samsung:      " + inSamsung + "         " + outSamsung + "         " + invSamsung + "         " + precioInvSamsung + " \n Iphone:          " + inIphone + "         " + outIphone + "         " + invIphone + "         " + precioInvIphone + " \n Xiaomi:          " + inXiaomi + "         " + outXiaomi + "         " + invXiaomi + "         " + precioInvXiaomi + " \n Motorola:      " + inMotorola + "         " + outMotorola + "         " + invMotorola + "         " + precioInvMotorola + " \n Huawei:         " + inHuawei + "         " + outHuawei + "         " + invHuawei + "         " + precioInvHuawei + " \n OPPO:           " + inOPPO + "         " + outOPPO + "         " + invOPPO + "         " + precioInvOPPO);
    }
}