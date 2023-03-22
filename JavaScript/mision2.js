/* diseñar un algoritmo con diagrama de flujo de datos  y psedocòdigo que permita registrar un inventario de 
celulares de las siguientes marcas: Samsung, Iphone, Xiaomi, Motorola, Huawei, OPPO. el algoritmo debe permitir 
descontar del inventario los equipos vendidos segùn su marca y actualizar la cantidad de telefonos  disponibles,
ademas debe calcular el total de dinero recaudado por las ventas */
let Inventario = 0;
let TSamsung = 0;
let TIphone = 0;
let TMotorola = 0;
let THuawei = 0;
let TXiaomi = 0;
let TOPPO = 0;
let precioS = 0;
let precioI = 0;
let precioM = 0;
let precioH = 0;
let precioX = 0;
let precioO = 0;

while (boleano != false) {
    opciones = Number(prompt("si deseas agregar producto oprime 1, si deseas ver el inventario actual oprime 2, para salir 3"));
}
    while (isNaN(opciones) || (opciones != 1 && opciones != 2 && opciones != 3)) {
        opciones = Number(prompt("Seleccione que celular desea ingresar cantidad 1 Samsung, 2 Iphone, 
        3 Motorola, 4 Xiaomi, 5 Huawei, 6 OPPO, 7 salir"));
    }

    switch (opciones) {
        case 1:
            let TelefonoMarca = 0;
            while (TelefonoMarca != 7) {
                TelefonoMarca = Number(prompt(""));
                while (isNaN(TelefonoMarca) || (TelefonoMarca!= 1 && TelefonoMarca != 2 && TelefonoMarca != 3 && TelefonoMarca!= 4 && TelefonoMarca != 5 && TelefonoMarca != 6 && TelefonoMarca!= 7)) {
                    celular = Number(prompt("Error"));
                }
                switch (TelefonoMarca) {
                    case 1:
                        Inventario = Number(prompt("Ingrese la cantidad de celulares Samsung "));
                        while (isNaN(Inventario) || Inventario < 0) {
                            Inventario = Number(prompt("Ingrese una cantidad valida"));
                        }
                        TSamsung += Inventario;
                        Inventario = 0;
                        if (precioS == 0) {
                            precioS = Number(prompt("Ingrese el valor del celular Samsung"));
                            while (isNaN(precioS) || precioS < 0) {
                                precioS = Number(prompt("Error"));
                            }
                        }
                        break;
                        case 2:
                            Inventario = Number(prompt("Ingrese la cantidad de celulares Iphone"));
                            while (isNaN(Inventario) || Inventario < 0) {
                                Inventario = Number(prompt("Ingrese una cantidad valida"));
                            }
                            TIphone += Inventario;
                            Inventario = 0;
                            if (precioI == 0) {
                                precioI = Number(prompt("Ingrese el valor del celular Iphone"));
                                while (isNaN(precioI) || precioI < 0) {
                                    precioI = Number(prompt("Error"));
                                }
                            }
                            break;
                            case 3:
                                Inventario = Number(prompt("Ingrese la cantidad de celulares Motorola"));
                                while (isNaN(Inventario) || Inventario < 0) {
                                    Inventario = Number(prompt("Ingrese una cantidad valida"));
                                }
                                TMotorola += Inventario;
                                Inventario = 0;
                                if (precioM == 0) {
                                    precioM = Number(prompt("Ingrese el valor del celular Motorola"));
                                    while (isNaN(precioM) || precioM < 0) {
                                        precioM = Number(prompt("Error"));
                                    }
                                }
                                break;
                                case 4:
                                    Inventario = Number(prompt("Ingrese la cantidad de celulares Xiaomi"));
                                    while (isNaN(Inventario) || Inventario < 0) {
                                        Inventario = Number(prompt("Ingrese una cantidad valida"));
                                    }
                                    TXiaomi += Inventario;
                                    Inventario = 0;
                                    if (precioX == 0) {
                                        precioX = Number(prompt("Ingrese el valor del celular Xiaomi"));
                                        while (isNaN(precioX) || precioX < 0) {
                                            precioX = Number(prompt("Error"));
                                        }
                                    }
                                    break;
                                    case 5:
                                        Inventario = Number(prompt("Ingrese la cantidad de celulares Huawie"));
                                        while (isNaN(Inventario) || Inventario < 0) {
                                            Inventario= Number(prompt("Ingrese una cantidad valida"));
                                        }
                                        THuawei += Inventario;
                                        Inventario = 0;
                                        if (precioH == 0) {
                                            precioH = Number(prompt("Ingrese el valor del celular Huawie"));
                                            while (isNaN(precioH) || precioH < 0) {
                                                precioH = Number(prompt("Error"));
                                            }
                                        }
                                        break;
                                        case 6:
                                            Inventario = Number(prompt("Ingrese la cantidad de celulares OPPO"));
                                            while (isNaN(Inventario) || Inventario < 0) {
                                                Inventario = Number(prompt("Ingrese una cantidad valida"));
                                            }
                                            TOPPO += Inventario;
                                            Inventario = 0;
                                            if (precioO == 0) {
                                                precioO = Number(prompt("Ingrese el valor del celular OPPO"));
                                                while (isNaN(precioO) || precioO < 0) {
                                                    precioO = Number(prompt("Error"));
                                                }
                                            }
                                            break;
                                            case 7:
                                                break;
                                                default:
                                                    alert("No ingresó una de las opciones.")
                                                }
                                                break;
        case 2 =                                         


let VentaTotal = ((TSamsung*precioS)+(TIphone*precioI)+(TMotorola*precioM)+(THuawei*precioH)+(TXiaomi*precioX)+(TOPPO*precioO))
console.log ("el total de la venta es", VentaTotal)













