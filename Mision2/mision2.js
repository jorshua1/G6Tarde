/* diseñar un algoritmo con diagrama de flujo de datos y pseudocodigo que permita registrar un inventario
de celulares de las siguientes marcas: samsung, iphone, xiaomi, motorola, huawei, OPPO. El algoritmo debe 
permitir descontar del inventario los equipos vendidos segun su marca y actualizar la cantidad de telefonos
disponibles, ademas calcular el total de dinero recaudado por las ventas. */

let cantidadSamsung = 0;
let cantidadIphone = 0;
let cantidadXiaomi = 0;
let cantidadMotorola = 0;
let cantidadHuawei = 0;
let cantidadOppo = 0;
let opcionSubmenu = 0;
let opcion = 0;
let cantidad = 0;

while (opcion !== 5) {
    opcion = parseInt(prompt(`
    Selecciona una opción del Menu:
    1.Ingresar datos al inventario.
    2.Ver inventario.
    3.Realizar una venta.
    4.Ver dinero recaudado.
    5.Salir del programa.
    `))
    while (isNaN(opcion) || opcion <= 0 || opcion >= 6) {
        opcion = parseInt(prompt(`
    ERROR POR FAVOR INGRESE BIEN LOS VALORES !!!
    Selecciona una opción del Menu:
    1.Ingresar datos al inventario.
    2.Ver inventario.
    3.Realizar una venta.
    4.Ver dinero recaudado.
    5.Salir del programa.
    `))
    }
    alert(opcion)
    switch (opcion) {
        case 1:
            opcionSubmenu = 0
            while (opcionSubmenu !== 7) {
                opcionSubmenu = parseInt(prompt(`
            A que celulares desea agregarles existencias:
            1.Samsung
            2.Iphone
            3.Huawei
            4.Xiaomi
            5.Motorola
            6.Oppo
            7.No registrar y salir
            `))
                while (isNaN(opcionSubmenu) || opcionSubmenu <= 0 || opcionSubmenu >= 8) {
                    opcionSubmenu = parseInt(prompt(`
                INGRESE UN VALOR VALIDO ERROR!!!
                A que celulares desea agregarles existencias:
                1.Samsung
                2.Iphone
                3.Huawei
                4.Xiaomi
                5.Motorola
                6.Oppo
                7.No registrar y salir
                `))
                }



                switch (opcionSubmenu) {
                    case 1:
                        cantidad = parseInt(prompt(`
                        Ingrese la cantidad de celulares samsung que desea agregar:
                        
                        Actualmente hay ${cantidadSamsung} celulares de esta marca`));
                        while (isNaN(cantidad) || cantidad <= 0) {
                            cantidad = parseInt(prompt(`
                        Ingrese la cantidad de celulares samsung que desea agregar:
                        
                        Actualmente hay ${cantidadSamsung} celulares de esta marca`));
                        }
                        cantidadSamsung += cantidad;
                        break;
                    case 2:
                        cantidad = parseInt(prompt(`
                        Ingrese la cantidad de celulares Iphone que desea agregar:
                        
                        Actualmente hay ${cantidadIphone} celulares de esta marca`));
                        while (isNaN(cantidad) || cantidad <= 0) {
                            cantidad = parseInt(prompt(`
                            Ingrese la cantidad de celulares Iphone que desea agregar:
                            
                            Actualmente hay ${cantidadIphone} celulares de esta marca`));
                        }
                        break;
                    case 3:
                        cantidad = parseInt(prompt(`
                            Ingrese la cantidad de celulares Huawei que desea agregar:
                            
                            Actualmente hay ${cantidadHuawei} celulares de esta marca`));
                        while (isNaN(cantidad) || cantidad <= 0) {
                            cantidad = parseInt(prompt(`
                        Ingrese la cantidad de celulares Huawei que desea agregar:
                        
                        Actualmente hay ${cantidadHuawei} celulares de esta marca`));
                        }
                        break;
                    case 4:
                        cantidad = parseInt(prompt(`
                        Ingrese la cantidad de celulares Xiaomi que desea agregar:
                        
                        Actualmente hay ${cantidadXiaomi} celulares de esta marca`));
                        while (isNaN(cantidad) || cantidad <= 0) {
                            cantidad = parseInt(prompt(`
                            Ingrese la cantidad de celulares Xiaomi que desea agregar:
                            
                            Actualmente hay ${cantidadXiaomi} celulares de esta marca`));
                        }
                        break;
                    case 5:
                        cantidad = parseInt(prompt(`
                            Ingrese la cantidad de celulares motorola que desea agregar:
                            
                            Actualmente hay ${cantidadMotorola} celulares de esta marca`));
                        while (isNaN(cantidad) || cantidad <= 0) {
                            cantidad = parseInt(prompt(`
                                Ingrese la cantidad de celulares Motorola que desea agregar:
                                
                                Actualmente hay ${cantidadMotorola} celulares de esta marca`));
                        }
                        break;
                    case 6:
                        cantidad = parseInt(prompt(`
                                Ingrese la cantidad de celulares oppo que desea agregar:
                                
                                Actualmente hay ${cantidadOppo} celulares de esta marca`));
                        while (isNaN(cantidad) || cantidad <= 0) {
                            cantidad = parseInt(prompt(`
                                    Ingrese la cantidad de celulares Oppo que desea agregar:
                                    
                                    Actualmente hay ${cantidadOppo} celulares de esta marca`));
                        }
                        break;
                    case 7:
                        alert("volviendo al menu anterior");
                        break;

                    default:
                        alert("ingrese un valor valido")
                        break;
                }
            }
            break;
        case 2:
            alert(`
            El inventario cuenta con las siguientes cantidades:
            Samsung:   ${cantidadSamsung}
            Iphone:    ${cantidadIphone}
            Huawei:    ${cantidadHuawei}
            Xiaomi:    ${cantidadXiaomi}
            Motorola:  ${cantidadMotorola}
            Oppo:      ${cantidadOppo}
            `)
            break;
        case 3:
            opcionSubmenu = 0;
            while (opcionSubmenu !== 7) {
                opcionSubmenu = parseInt(prompt(`
                Indique que celulares desea vender:
                1.Samsung
                2.Iphone
                3.Huawei
                4.Xiaomi
                5.Motorola
                6.Oppo
                7.No registrar y salir
                `))
                while (isNaN(opcionSubmenu) || opcionSubmenu <= 0 || opcionSubmenu >= 8) {
                    opcionSubmenu = parseInt(prompt(`
                    INGRESE UN VALOR VALIDO ERROR!!!
                    Indique que celulares desea vender:
                    1.Samsung
                    2.Iphone
                    3.Huawei
                    4.Xiaomi
                    5.Motorola
                    6.Oppo
                    7.No registrar y salir
                    `))
                }
                switch (opcionSubmenu) {
                    case 1:
                        if(cantidadSamsung!==0)

                    {
                        cantidad = parseInt(prompt(`
                        Ingrese la cantidad de celulares samsung que desea vender:
                        
                        Actualmente hay ${cantidadSamsung} celulares de esta marca`));
                        while (isNaN(cantidad) || cantidad <= 0) {
                            cantidad = parseInt(prompt(`
                        Ingrese la cantidad de celulares samsung que desea vender:
                        
                        Actualmente hay ${cantidadSamsung} celulares de esta marca`));
                        }
                        cantidadSamsung -= cantidad;
                    }else{
                        alert("Actualmente no hay unidades disponibles de Samsung")
                    }
                        break;
                    case 2:
                        if(cantidadIphone!==0)
                        
                        cantidad = parseInt(prompt(`
                        Ingrese la cantidad de celulares Iphone que desea vender:
                        
                        Actualmente hay ${cantidadIphone} celulares de esta marca`));
                        while (isNaN(cantidad) || cantidad <= 0) {
                            cantidad = parseInt(prompt(`
                            Ingrese la cantidad de celulares Iphone que desea vender:
                            
                            Actualmente hay ${cantidadIphone} celulares de esta marca`));
                        }
                        break;
                    case 3:
                        cantidad = parseInt(prompt(`
                            Ingrese la cantidad de celulares Huawei que desea vender:
                            
                            Actualmente hay ${cantidadHuawei} celulares de esta marca`));
                        while (isNaN(cantidad) || cantidad <= 0) {
                            cantidad = parseInt(prompt(`
                        Ingrese la cantidad de celulares Huawei que desea vender:
                        
                        Actualmente hay ${cantidadHuawei} celulares de esta marca`));
                        }
                        break;
                    case 4:
                        cantidad = parseInt(prompt(`
                        Ingrese la cantidad de celulares Xiaomi que desea vender:
                        
                        Actualmente hay ${cantidadXiaomi} celulares de esta marca`));
                        while (isNaN(cantidad) || cantidad <= 0) {
                            cantidad = parseInt(prompt(`
                            Ingrese la cantidad de celulares Xiaomi que desea vender:
                            
                            Actualmente hay ${cantidadXiaomi} celulares de esta marca`));
                        }
                        break;
                    case 5:
                        cantidad = parseInt(prompt(`
                            Ingrese la cantidad de celulares motorola que desea vender:
                            
                            Actualmente hay ${cantidadMotorola} celulares de esta marca`));
                        while (isNaN(cantidad) || cantidad <= 0) {
                            cantidad = parseInt(prompt(`
                                Ingrese la cantidad de celulares Motorola que desea vender:
                                
                                Actualmente hay ${cantidadMotorola} celulares de esta marca`));
                        }
                        break;
                    case 6:
                        cantidad = parseInt(prompt(`
                                Ingrese la cantidad de celulares oppo que desea vender:
                                
                                Actualmente hay ${cantidadOppo} celulares de esta marca`));
                        while (isNaN(cantidad) || cantidad <= 0) {
                            cantidad = parseInt(prompt(`
                                    Ingrese la cantidad de celulares Oppo que desea vender:
                                    
                                    Actualmente hay ${cantidadOppo} celulares de esta marca`));
                        }
                        break;
                    case 7:
                        alert("volviendo al menu anterior");
                        break;

                    default:
                        alert("ingrese un valor valido")
                        break;
                }
            }

            break;

    }
}