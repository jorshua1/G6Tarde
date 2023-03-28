let TelefonoSamsung = 0;
let TelefonoIphone = 0;
let TelefonoMotorola = 0;
let TelefonoXiaomi = 0;
let TelefonoHuawei = 0;
let TelefonoOPPO = 0;

let ValorSamsung = 0;
let ValorIphone = 0;
let ValorMotorola = 0;
let ValorXiaomi = 0;
let ValorHuawei = 0;
let ValorOPPO = 0;
let cantidad = 0;
let opcion = 0;
let opcionSubmenu = 0;

while (opcion !== 5) {
  opcion = parseInt(
    prompt(`SELELCCIONA UNA OPCIÓN DEL MENÚ:
          1. INGRESAR DATOS AL INVENTARIO
          2. INVENTARIO ACTUAL 
          3. REALIZAR UNA VENTA 
          4. DINERO RECAUDADO
          5 SALIR DEL PROGRAMA
          `)
  );
  while (isNaN(opcion) || opcion <= 0 || opcion > 6) {
    opcion = parseInt(
      prompt(`
          INGRESE DATOS VALIDOS
          
          SELECCIONA UNA OPCIÓN DEL MENÚ:
          1. INGRESAR DATOS AL INVENTARIO
          2. INVENTARIO ACTUAL 
          3. REALIZAR UNA VENTA 
          4. DINERO RECAUDADO
          5 SALIR DEL PROGRAMA
          `)
    );
  }
  switch (opcion) {
    case 1:
      while (opcionSubmenu !== 7) {
        opcionSubmenu = parseInt(
          prompt(`
            A que celulares les deseas agregar datos
            
            1. Samsung
            2. Iphone
            3. Motorola
            4. Xiaomi
            5. Huawei
            6. OPPO
            7. Salir
            `)
        );
        while (
          isNaN(opcionSubmenu) ||
          opcionSubmenu <= 0 ||
          opcionSubmenu > 8
        ) {
          opcionSubmenu = parseInt(
            prompt(`
                INGRESE DATOS VALIDOS
                
                A que celulares les deseas agregar datos

                1. Samsung
                2. Iphone
                3. Motorola
                4. Xiaomi
                5. Huawei
                6. OPPO
                7. Salir
            `)
          );
        }

        switch (opcionSubmenu) {
          case 1:
            cantidad = parseInt(prompt(`Ingrese la cantidad de celulares Samsung:
                        Actualmente hay ${TelefonoSamsung} celulares de esta marca`)
            );

            while (isNaN(cantidad) || cantidad <= 0) {
              cantidad = parseInt(
                prompt(`Ingrese la cantidad de celulares Samsung:
                            Actualmente hay ${TelefonoSamsung} celulares de esta marca`)
              );
            }

            TelefonoSamsung += cantidad;
            break;

          case 2:
            cantidad += parseInt(
              prompt(`Ingrese la cantidad de celulares Iphone:
                            Actualmente hay ${TelefonoIphone} celulares de esta marca`)
            );

            while (isNaN(cantidad) || cantidad <= 0) {
              cantidad = parseInt(
                prompt(`Ingrese la cantidad de celulares Iphone::
                                Actualmente hay ${TelefonoIphone} celulares de esta marca`)
              );
            }

            TelefonoIphone += cantidad;
            break;

          case 3:
            cantidad += parseInt(
              prompt(`Ingrese la cantidad de celulares Motorola:
                                Actualmente hay ${TelefonoMotorola} celulares de esta marca`)
            );

            while (isNaN(cantidad) || cantidad <= 0) {
              cantidad = parseInt(
                prompt(`Ingrese la cantidad de celulares Motorola:
                                    Actualmente hay ${TelefonoMotorola} celulares de esta marca`)
              );
            }

            TelefonoMotorola += cantidad;
            break;

          case 4:
            cantidad += parseInt(
              prompt(`Ingrese la cantidad de celulares Xiaomi:
                                    Actualmente hay ${TelefonoXiaomi} celulares de esta marca`)
            );

            while (isNaN(cantidad) || cantidad <= 0) {
              cantidad = parseInt(
                prompt(`Ingrese la cantidad de celulares Xiaomi:
                                        Actualmente hay ${TelefonoXiaomi} celulares de esta marca`)
              );
            }

            TelefonoXiaomi += cantidad;
            break;

          case 5:
            cantidad += parseInt(
              prompt(`Ingrese la cantidad de celulares Huawei:
                                        Actualmente hay ${TelefonoHuawei} celulares de esta marca`)
            );

            while (isNaN(cantidad) || cantidad <= 0) {
              cantidad = parseInt(
                prompt(`Ingrese la cantidad de celulares Huawei:
                                            Actualmente hay ${TelefonoHuawei} celulares de esta marca`)
              );
            }

            TelefonoHuawei += cantidad;
            break;

          case 6:
            cantidad += parseInt(
              prompt(`Ingrese la cantidad de celulares OPPO:
                                            Actualmente hay ${TelefonoOPPO} celulares de esta marca`)
            );

            while (isNaN(cantidad) || cantidad <= 0) {
              cantidad = parseInt(
                prompt(`Ingrese la cantidad de celulares OPPO:
                                                Actualmente hay ${TelefonoOPPO} celulares de esta marca`)
              );
            }

            TelefonoOPPO += cantidad;
            break;

          case 7:
            break;
          default:
            alert("Ingrese un dato valido");
            break;
        }
      }
      break;
    case 2:
      alert(`
        El inventario cuenta con la siguientes cantidades:
        Samsung:${TelefonoSamsung}
        Iphone:${TelefonoIphone}
        Motorola:${TelefonoMotorola}
        Xiaomi:${TelefonoXiaomi}
        Huawei:${TelefonoHuawei}
        OPPO:${TelefonoOPPO}
        `);
      break;
    case 3:
      opcionSubmenu = 0;
      while (opcionSubmenu !== 7) {
        opcionSubmenu = parseInt(prompt(`
        Que celular desea vender:
        
        1. Samsung
        2. Iphone
        3. Motorola
        4. Xiaomi
        5. Huawei
        6. OPPO
        7. Salir
        `));
        while (
          isNaN(opcionSubmenu) ||opcionSubmenu <= 0 ||opcionSubmenu > 8) {
          opcionSubmenu = parseInt(
            prompt(`
            INGRESE DATOS VALIDOS
            
            A que celulares les deseas agregar datos

            1. Samsung
            2. Iphone
            3. Motorola
            4. Xiaomi
            5. Huawei
            6. OPPO
            7. Salir
        `));
        }
        switch (opcionSubmenu) {
            case 1:
                if (TelefonoSamsung!==0){
              cantidad = parseInt(
                prompt(`Ingrese la cantidad de celulares que desea vender de Samsung:
                          Actualmente hay ${TelefonoSamsung} celulares de esta marca`));
  
              while (isNaN(cantidad) || cantidad <= 0) {
                cantidad = parseInt(
                  prompt(`Ingrese la cantidad de celulares Samsung:
                              Actualmente hay ${TelefonoSamsung} celulares de esta marca`));
              }
  
              TelefonoSamsung -= cantidad;
            }else{
                alert("Actualmente no hay unidades disponibles de Samsung")
            }
              break;
  
            case 2:
              cantidad = parseInt(
                prompt(`Ingrese la cantidad de celulares Iphone:
                              Actualmente hay ${TelefonoIphone} celulares de esta marca`)
              );
  
              while (isNaN(cantidad) || cantidad <= 0) {
                cantidad = parseInt(
                  prompt(`Ingrese la cantidad de celulares Iphone::
                                  Actualmente hay ${TelefonoIphone} celulares de esta marca`)
                );
              }
  
              TelefonoIphone += cantidad;
              break;
  
            case 3:
              cantidad = parseInt(
                prompt(`Ingrese la cantidad de celulares Motorola:
                                  Actualmente hay ${TelefonoMotorola} celulares de esta marca`)
              );
  
              while (isNaN(cantidad) || cantidad <= 0) {
                cantidad = parseInt(
                  prompt(`Ingrese la cantidad de celulares Motorola:
                                      Actualmente hay ${TelefonoMotorola} celulares de esta marca`)
                );
              }
  
              TelefonoMotorola += cantidad;
              break;
  
            case 4:
              cantidad += parseInt(
                prompt(`Ingrese la cantidad de celulares Xiaomi:
                                      Actualmente hay ${TelefonoXiaomi} celulares de esta marca`)
              );
  
              while (isNaN(cantidad) || cantidad <= 0) {
                cantidad = parseInt(
                  prompt(`Ingrese la cantidad de celulares Xiaomi:
                                          Actualmente hay ${TelefonoXiaomi} celulares de esta marca`)
                );
              }
  
              TelefonoXiaomi += cantidad;
              break;
  
            case 5:
              cantidad += parseInt(
                prompt(`Ingrese la cantidad de celulares Huawei:
                                          Actualmente hay ${TelefonoHuawei} celulares de esta marca`)
              );
  
              while (isNaN(cantidad) || cantidad <= 0) {
                cantidad = parseInt(
                  prompt(`Ingrese la cantidad de celulares Huawei:
                                              Actualmente hay ${TelefonoHuawei} celulares de esta marca`)
                );
              }
  
              TelefonoHuawei += cantidad;
              break;
  
            case 6:
              cantidad += parseInt(
                prompt(`Ingrese la cantidad de celulares OPPO:
                                              Actualmente hay ${TelefonoOPPO} celulares de esta marca`)
              );
  
              while (isNaN(cantidad) || cantidad <= 0) {
                cantidad = parseInt(
                  prompt(`Ingrese la cantidad de celulares OPPO:
                                                  Actualmente hay ${TelefonoOPPO} celulares de esta marca`)
                );
              }
  
              TelefonoOPPO += cantidad;
              break;
  
            case 7:
              break;
            default:
              alert("Ingrese un dato valido");
              break;
          }
        }
        break;
      }
    break;
  }
}