let samsung = 0, iphone = 0, xiaomi = 0, motorola = 0, huawei = 0, oppo = 0;
let marca = ""
let cantidadMarca = 0;
let inventarioMarcas = 6;
let dispositivosTotalesInventario = 0;
let inventario = ""
let registrarVenta = 0;
let cicloRegistrarVenta = 0;
let añadirAlInventario = 0;
let añadirCantidad = 0;
let cicloAñadirInventario = 0;
let marcaTelefonoVendido = 0;
let cantidadVentaTelefono = 0;
let precioTelefonos = 0;
let confirmarVenta = 0;
let dispositivosTotalesVendidos = 0;
let dineroVentas = 0;

for (inventarioMarcas; inventarioMarcas > 0; inventarioMarcas--) {
    if (inventarioMarcas === 6) {
        marca = "Samsung";
    } else if (inventarioMarcas === 5) {
        marca = "iPhone";
    } else if (inventarioMarcas === 4) {
        marca = "Xiaomi";
    } else if (inventarioMarcas === 3) {
        marca = "Motorola";
    } else if (inventarioMarcas === 2) {
        marca = "Huawei";
    } else if (inventarioMarcas === 1) {
        marca = "OPPO";
    }
    cantidadMarca = Number(prompt("¿Cuántos teléfonos de la marca " + marca + " están disponibles para la venta?"));
    while ((isNaN(cantidadMarca)) || (cantidadMarca < 0) || (!Number.isInteger(cantidadMarca))) {
        alert("Se ha ingresado una cantidad inválida de dispositivos. Inténtelo de nuevo.");
        cantidadMarca = Number(prompt("¿Cuántos teléfonos de la marca " + marca + " están disponibles para la venta?"));
    }
    if (marca === "Samsung") {
        samsung = cantidadMarca;
    } else if (marca === "iPhone") {
        iphone = cantidadMarca;
    } else if (marca === "Xiaomi") {
        xiaomi = cantidadMarca;
    } else if (marca === "Motorola") {
        motorola = cantidadMarca;
    } else if (marca === "Huawei") {
        huawei = cantidadMarca;
    } else if (marca === "OPPO") {
        oppo = cantidadMarca;
    }
}
dispositivosTotalesInventario = samsung + iphone + xiaomi + motorola + huawei + oppo;
inventario = "Teléfonos disponibles de acuerdo a sus marcas:\n\nTélefonos Samsung: " + samsung + " disponibles.\nTélefonos iPhone: " + iphone + " disponibles.\nTélefonos Xiaomi: " + xiaomi + " disponibles.\nTélefonos Motorola: " + motorola + " disponibles.\nTélefonos Huawei: " + huawei + " disponibles.\nTélefonos OPPO: " + oppo + " disponibles.";

do {
        precioTelefonos = 0;
        alert(inventario);
        registrarVenta = Number(prompt("¿Qué desea hacer? Elija una de las siguientes opciones:\n1 para registrar una venta.\n2 para agregar teléfonos al inventario.\n3 para ver los teléfonos disponibles.\n4 para ver el resumen de ventas y ganancias.\n5 para cerrar el programa"));
        while ((registrarVenta < 1) || (registrarVenta > 5) || (isNaN(registrarVenta)) || (!Number.isInteger(registrarVenta))) {
            alert("Parece ser que ha introducido una opción no válida, por favor, inténtelo de nuevo.");
            registrarVenta = Number(prompt("¿Qué desea hacer? Elija una de las siguientes opciones:\n1 para registrar una venta.\n2 para agregar teléfonos al inventario.\n3 para ver los teléfonos disponibles.\n4 para ver el resumen de ventas y ganancias.\n5 para cerrar el programa"));
        }
        if (registrarVenta === 1) {
            do{
                precioTelefonos = 0;
                if(dispositivosTotalesInventario>0){
                    marcaTelefonoVendido = Number(prompt("¿Cuál es la marca del teléfono vendido? Seleccione digitando el número de la opción.\n1. Samsung.\n2. iPhone.\n3. Xiaomi.\n4. Motorola.\n5. Huawei.\n6. OPPO.\n7. Ver inventario.\n8. Volver al menú principal."));
                    while ((marcaTelefonoVendido < 1) || (marcaTelefonoVendido > 8) || (isNaN(marcaTelefonoVendido)) || (!Number.isInteger(marcaTelefonoVendido))) {
                        alert("Parece ser que ha introducido una opción no válida, por favor, inténtelo de nuevo.");
                        marcaTelefonoVendido = Number(prompt("¿Cuál es la marca del teléfono vendido? Seleccione digitando el número de la opción.\n1. Samsung.\n2. iPhone.\n3. Xiaomi.\n4. Motorola.\n5. Huawei.\n6. OPPO.\n7. Ver inventario.\n8. Volver al menú principal."));
                    }
                    if ((marcaTelefonoVendido === 1) && (samsung > 0)) {
                        cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Samsung vendió?"));
                        while((isNaN(cantidadVentaTelefono))||(cantidadVentaTelefono<=0)||(!Number.isInteger(cantidadVentaTelefono))||(cantidadVentaTelefono>samsung)){
                            alert("Por favor, ingrese un cantidad de teléfonos válida");
                            alert("Teléfonos Samsung disponibles: " + samsung + ".");
                            cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Samsung vendió?"));
                        }
                            precioTelefonos = Number(prompt("Ingrese el valor total de los " + cantidadVentaTelefono + " teléfonos marca Samsung vendidos."));
                            while ((isNaN(precioTelefonos)) || (precioTelefonos <= 0)) {
                                alert("Ha ingresado un precio de venta no válido, por favor, ingrese un valor válido.");
                                precioTelefonos = Number(prompt("Ingrese el valor total de los " + cantidadVentaTelefono + " teléfonos marca Samsung vendidos."));
                            }
                        confirmarVenta = Number(prompt("Marca teléfono: Samsung.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioTelefonos +  "$\n\nEs correcta la información? 1. Si./2. No."));
                        while((confirmarVenta!==1)&&(confirmarVenta!==2)){
                            alert("Por favor, seleccione una opción válida para confirmar.");
                            confirmarVenta = Number(prompt("Marca teléfono: Samsung.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioTelefonos + "$\n\nEs correcta la información? 1. Si./2. No."));
                        }
                        if(confirmarVenta === 1){
                            alert("Muchas gracias, se ha registrado la venta realizada.");
                            dispositivosTotalesVendidos = dispositivosTotalesVendidos+cantidadVentaTelefono;
                            samsung = samsung-cantidadVentaTelefono;
                        }else{
                            precioTelefonos = 0;
                            alert("La venta no se ha registrado. Volverás al menú principal.");
                        }
                    } else if ((marcaTelefonoVendido === 2) && (iphone > 0)) {
                        cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca iPhone vendió?"));
                        while((isNaN(cantidadVentaTelefono))||(cantidadVentaTelefono<=0)||(!Number.isInteger(cantidadVentaTelefono))||(cantidadVentaTelefono>iphone)){
                            alert("Por favor, ingrese un cantidad de teléfonos válida");
                            alert("Teléfonos iphone disponibles: " + iphone + ".");
                            cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca iPhone vendió?"));
                        }
                            precioTelefonos = Number(prompt("Ingrese el valor total de los " + cantidadVentaTelefono + " teléfonos marca iPhone vendidos."));
                            while ((isNaN(precioTelefonos)) || (precioTelefonos <= 0)) {
                                alert("Ha ingresado un precio de venta no válido, por favor, ingrese un valor válido.");
                                precioTelefonos = Number(prompt("Ingrese el valor total de los " + cantidadVentaTelefono + " teléfonos marca iPhone vendidos."));
                            }
                        confirmarVenta = Number(prompt("Marca teléfono: iPhone.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioTelefonos +  "$\n\nEs correcta la información? 1. Si./2. No."));
                        while((confirmarVenta!==1)&&(confirmarVenta!==2)){
                            alert("Por favor, seleccione una opción válida para confirmar.");
                            confirmarVenta = Number(prompt("Marca teléfono: iPhone.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioTelefonos + "$\n\nEs correcta la información? 1. Si./2. No."));
                        }
                        if(confirmarVenta === 1){
                            alert("Muchas gracias, se ha registrado la venta realizada.");
                            dispositivosTotalesVendidos = dispositivosTotalesVendidos+cantidadVentaTelefono;
                            iphone = iphone-cantidadVentaTelefono;
                        }else{
                            precioTelefonos = 0;
                            alert("La venta no se ha registrado. Volverás al menú principal.");
                        }
                    } else if ((marcaTelefonoVendido === 3) && (xiaomi > 0)) {
                        cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Xiaomi vendió?"));
                        while((isNaN(cantidadVentaTelefono))||(cantidadVentaTelefono<=0)||(!Number.isInteger(cantidadVentaTelefono))||(cantidadVentaTelefono>xiaomi)){
                            alert("Por favor, ingrese un cantidad de teléfonos válida");
                            alert("Teléfonos Xiaomi disponibles: " + xiaomi + ".");
                            cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Xiaomi vendió?"));
                        }
                            precioTelefonos = Number(prompt("Ingrese el valor total de los " + cantidadVentaTelefono + " teléfonos marca Xiaomi vendidos."));
                            while ((isNaN(precioTelefonos)) || (precioTelefonos <= 0)) {
                                alert("Ha ingresado un precio de venta no válido, por favor, ingrese un valor válido.");
                                precioTelefonos = Number(prompt("Ingrese el valor total de los " + cantidadVentaTelefono + " teléfonos marca Xiaomi vendidos."));
                            }
                        confirmarVenta = Number(prompt("Marca teléfono: Xiaomi.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioTelefonos +  "$\n\nEs correcta la información? 1. Si./2. No."));
                        while((confirmarVenta!==1)&&(confirmarVenta!==2)){
                            alert("Por favor, seleccione una opción válida para confirmar.");
                            confirmarVenta = Number(prompt("Marca teléfono: Xiaomi.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioTelefonos + "$\n\nEs correcta la información? 1. Si./2. No."));
                        }
                        if(confirmarVenta === 1){
                            alert("Muchas gracias, se ha registrado la venta realizada.");
                            dispositivosTotalesVendidos = dispositivosTotalesVendidos+cantidadVentaTelefono;
                            xiaomi = xiaomi-cantidadVentaTelefono;
                        }else{
                            precioTelefonos = 0;
                            alert("La venta no se ha registrado. Volverás al menú principal.");
                        }
                    } else if ((marcaTelefonoVendido === 4) && (motorola > 0)) {
                        cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Motorola vendió?"));
                        while((isNaN(cantidadVentaTelefono))||(cantidadVentaTelefono<=0)||(!Number.isInteger(cantidadVentaTelefono))||(cantidadVentaTelefono>motorola)){
                            alert("Por favor, ingrese un cantidad de teléfonos válida");
                            alert("Teléfonos Motorola disponibles: " + motorola + ".");
                            cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Motorola vendió?"));
                        }
                            precioTelefonos = Number(prompt("Ingrese el valor total de los " + cantidadVentaTelefono + " teléfonos marca Motorola vendidos."));
                            while ((isNaN(precioTelefonos)) || (precioTelefonos <= 0)) {
                                alert("Ha ingresado un precio de venta no válido, por favor, ingrese un valor válido.");
                                precioTelefonos = Number(prompt("Ingrese el valor total de los " + cantidadVentaTelefono + " teléfonos marca Motorola vendidos."));
                            }
                        confirmarVenta = Number(prompt("Marca teléfono: Motorola.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioTelefonos +  "$\n\nEs correcta la información? 1. Si./2. No."));
                        while((confirmarVenta!==1)&&(confirmarVenta!==2)){
                            alert("Por favor, seleccione una opción válida para confirmar.");
                            confirmarVenta = Number(prompt("Marca teléfono: Motorola.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioTelefonos + "$\n\nEs correcta la información? 1. Si./2. No."));
                        }
                        if(confirmarVenta === 1){
                            alert("Muchas gracias, se ha registrado la venta realizada.");
                            dispositivosTotalesVendidos = dispositivosTotalesVendidos+cantidadVentaTelefono;
                            motorola = motorola-cantidadVentaTelefono;
                        }else{
                            precioTelefonos = 0;
                            alert("La venta no se ha registrado. Volverás al menú principal.")
                        }
                    } else if ((marcaTelefonoVendido === 5) && (huawei > 0)) {
                        cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Huawei vendió?"));
                        while((isNaN(cantidadVentaTelefono))||(cantidadVentaTelefono<=0)||(!Number.isInteger(cantidadVentaTelefono))||(cantidadVentaTelefono>huawei)){
                            alert("Por favor, ingrese un cantidad de teléfonos válida");
                            alert("Teléfonos Huawei disponibles: " + huawei + ".");
                            cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Huawei vendió?"));
                        }
                            precioTelefonos = Number(prompt("Ingrese el valor total de los " + cantidadVentaTelefono + " teléfonos marca Huawei vendidos."));
                            while ((isNaN(precioTelefonos)) || (precioTelefonos <= 0)) {
                                alert("Ha ingresado un precio de venta no válido, por favor, ingrese un valor válido.");
                                precioTelefonos = Number(prompt("Ingrese el valor total de los " + cantidadVentaTelefono + " teléfonos marca Huawei vendidos."));
                            }
                        confirmarVenta = Number(prompt("Marca teléfono: Huawei.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioTelefonos +  "$\n\nEs correcta la información? 1. Si./2. No."));
                        while((confirmarVenta!==1)&&(confirmarVenta!==2)){
                            alert("Por favor, seleccione una opción válida para confirmar.");
                            confirmarVenta = Number(prompt("Marca teléfono: Huawei.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioTelefonos + "$\n\nEs correcta la información? 1. Si./2. No."));
                        }
                        if(confirmarVenta === 1){
                            alert("Muchas gracias, se ha registrado la venta realizada.");
                            dispositivosTotalesVendidos = dispositivosTotalesVendidos+cantidadVentaTelefono;
                            huawei = huawei-cantidadVentaTelefono;
                        }else{
                            precioTelefonos = 0;
                            alert("La venta no se ha registrado. Volverás al menú principal.")
                        }
                    } else if ((marcaTelefonoVendido === 6) && (oppo > 0)) {
                        cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca OPPO vendió?"));
                        while((isNaN(cantidadVentaTelefono))||(cantidadVentaTelefono<=0)||(!Number.isInteger(cantidadVentaTelefono))||(cantidadVentaTelefono>oppo)){
                            alert("Por favor, ingrese un cantidad de teléfonos válida");
                            alert("Teléfonos OPPO disponibles: " + oppo + ".");
                            cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca OPPO vendió?"));
                        }
                            precioTelefonos = Number(prompt("Ingrese el valor total de los " + cantidadVentaTelefono + " teléfonos marca OPPO vendidos."));
                            while ((isNaN(precioTelefonos)) || (precioTelefonos <= 0)) {
                                alert("Ha ingresado un precio de venta no válido, por favor, ingrese un valor válido.");
                                precioTelefonos = Number(prompt("Ingrese el valor total de los " + cantidadVentaTelefono + " teléfonos marca OPPO vendidos."));
                            }
                        confirmarVenta = Number(prompt("Marca teléfono: OPPO.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioTelefonos +  "$\n\nEs correcta la información? 1. Si./2. No."));
                        while((confirmarVenta!==1)&&(confirmarVenta!==2)){
                            alert("Por favor, seleccione una opción válida para confirmar.");
                            confirmarVenta = Number(prompt("Marca teléfono: OPPO.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioTelefonos + "$\n\nEs correcta la información? 1. Si./2. No."));
                        }
                        if(confirmarVenta === 1){
                            alert("Muchas gracias, se ha registrado la venta realizada.");
                            dispositivosTotalesVendidos = dispositivosTotalesVendidos+cantidadVentaTelefono;
                            oppo = oppo-cantidadVentaTelefono;
                        }else{
                            precioTelefonos = 0;
                            alert("La venta no se ha registrado. Volverás al menú principal.");
                        }
                    } else if (marcaTelefonoVendido === 7){
                        confirmarVenta = 0;
                        alert(inventario)
                    } else if (marcaTelefonoVendido === 8){
                        alert("Volviendo al menú principal.");
                        cicloRegistrarVenta = 0;
                        confirmarVenta = 0;
                    }else {
                        alert("No hay teléfonos disponibles de la marca indicada. Volverás al menú principal.");
                        confirmarVenta = 0;
                        cicloRegistrarVenta = 0;
                    }
                    inventario = "Teléfonos disponibles de acuerdo a sus marcas:\n\nTélefonos Samsung: " + samsung + " disponibles.\nTélefonos iPhone: " + iphone + " disponibles.\nTélefonos Xiaomi: " + xiaomi + " disponibles.\nTélefonos Motorola: " + motorola + " disponibles.\nTélefonos Huawei: " + huawei + " disponibles.\nTélefonos OPPO: " + oppo + " disponibles.";
                    dineroVentas += precioTelefonos;
                    dispositivosTotalesInventario = samsung + iphone + xiaomi + motorola + huawei + oppo;
                    if(confirmarVenta===1){
                        if(dispositivosTotalesInventario>0){
                            cicloRegistrarVenta = Number(prompt("¿Deseas seguir registrando ventas?\n1. Si.\n2. No."));
                            while((cicloRegistrarVenta !==1)&&(cicloRegistrarVenta !==2)){
                                alert("Por favor, ingrese una opción válida.")
                                cicloRegistrarVenta = Number(prompt("¿Deseas seguir registrando ventas?\n1. Si.\n2. No."));
                            }
                            if(cicloRegistrarVenta===2){
                                alert("Volviendo al menú principal");
                            }
                        }else if(dispositivosTotalesInventario<=0){
                            alert("Parece ser que no hay teléfonos disponibles para la venta. Si deseas añadir teléfonos, puedes hacerlo desde el menú principal.");
                            cicloRegistrarVenta = 0;
                        }
                    }else{
                        cicloRegistrarVenta = 0;
                    }
                }else{
                    alert("Parece ser que no hay teléfonos disponibles para la venta. Si deseas añadir teléfonos, puedes hacerlo desde el menú principal.");
                    cicloRegistrarVenta = 0;
                }
                if(marcaTelefonoVendido===7){
                    cicloRegistrarVenta = 1;
                }
        }while(cicloRegistrarVenta===1)
    }else if (registrarVenta===2){
            do{
                añadirAlInventario = Number(prompt("Indique la marca de teléfono a la cual desea añadir unidades al inventario.\n1. Samsung\n2. iPhone.\n3. Xiaomi.\n4. Motorola.\n5. Huawei.\n6. OPPO.\n7. Ver inventario.\n8. Volver al menú principal."));
                while((añadirAlInventario < 1) || (añadirAlInventario > 8) || (isNaN(añadirAlInventario)) || (!Number.isInteger(añadirAlInventario))){
                    alert("Se ha seleccionado una opción no válida. Por favor, inténtelo de nuevo.");
                    añadirAlInventario = Number(prompt("Indique la marca de teléfono a la cual desea añadir unidades al inventario.\n1. Samsung\n2. iPhone.\n3. Xiaomi.\n4. Motorola.\n5. Huawei.\n6. OPPO.\n7. Ver inventario.\n8. Volver al menú principal."));
                }
                if (añadirAlInventario===1){
                    añadirCantidad = Number(prompt("¿Cuántos teléfonos marca Samsung desea añadir al inventario?"));
                    while((isNaN(añadirCantidad))||(añadirCantidad<0)||(!Number.isInteger(añadirCantidad))){
                        alert("Por favor, ingrese una cantidad de teléfonos válida a añadir.");
                        añadirCantidad = Number(prompt("¿Cuántos teléfonos marca Samsung desea añadir al inventario?"));
                    }
                    if(añadirCantidad ===0){
                        alert("No se ha añadido ningún teléfono al inventario. Volviendo al menú principal.");
                    } else{
                        samsung += añadirCantidad;
                        alert("Se han añadido " + añadirCantidad + " teléfonos Samsung al inventario.");
                    }
                } else if(añadirAlInventario===2){
                    añadirCantidad = Number(prompt("¿Cuántos teléfonos marca iPhone desea añadir al inventario?"));
                    while((isNaN(añadirCantidad))||(añadirCantidad<0)||(!Number.isInteger(añadirCantidad))){
                        alert("Por favor, ingrese una cantidad de teléfonos válida a añadir.");
                        añadirCantidad = Number(prompt("¿Cuántos teléfonos marca iPhone desea añadir al inventario?"));
                    }
                    if(añadirCantidad ===0){
                        alert("No se ha añadido ningún teléfono al inventario.");
                    } else{
                        iphone += añadirCantidad;
                        alert("Se han añadido " + añadirCantidad + " teléfonos iPhone al inventario.");
                    }
                }else if(añadirAlInventario===3){
                    añadirCantidad = Number(prompt("¿Cuántos teléfonos marca Xiaomi desea añadir al inventario?"));
                    while((isNaN(añadirCantidad))||(añadirCantidad<0)||(!Number.isInteger(añadirCantidad))){
                        alert("Por favor, ingrese una cantidad de teléfonos válida a añadir.");
                        añadirCantidad = Number(prompt("¿Cuántos teléfonos marca Xiaomi desea añadir al inventario?"));
                    }
                    if(añadirCantidad ===0){
                        alert("No se ha añadido ningún teléfono al inventario.");
                    } else{
                        xiaomi += añadirCantidad;
                        alert("Se han añadido " + añadirCantidad + " teléfonos Xiaomi al inventario.");
                    }
                }else if(añadirAlInventario===4){
                    añadirCantidad = Number(prompt("¿Cuántos teléfonos marca Motorola desea añadir al inventario?"));
                    while((isNaN(añadirCantidad))||(añadirCantidad<0)||(!Number.isInteger(añadirCantidad))){
                        alert("Por favor, ingrese una cantidad de teléfonos válida a añadir.");
                        añadirCantidad = Number(prompt("¿Cuántos teléfonos marca Motorola desea añadir al inventario?"));
                    }
                    if(añadirCantidad ===0){
                        alert("No se ha añadido ningún teléfono al inventario.");
                    } else{
                        motorola += añadirCantidad;
                        alert("Se han añadido " + añadirCantidad + " teléfonos Motorola al inventario.");
                    }
                }else if(añadirAlInventario===5){
                    añadirCantidad = Number(prompt("¿Cuántos teléfonos marca Huawei desea añadir al inventario?"));
                    while((isNaN(añadirCantidad))||(añadirCantidad<0)||(!Number.isInteger(añadirCantidad))){
                        alert("Por favor, ingrese una cantidad de teléfonos válida a añadir.");
                        añadirCantidad = Number(prompt("¿Cuántos teléfonos marca Huawei desea añadir al inventario?"));
                    }
                    if(añadirCantidad ===0){
                        alert("No se ha añadido ningún teléfono al inventario.");
                    } else{
                        huawei += añadirCantidad;
                        alert("Se han añadido " + añadirCantidad + " teléfonos Huawei al inventario.");
                    }
                }else if(añadirAlInventario===6){
                    añadirCantidad = Number(prompt("¿Cuántos teléfonos marca OPPO desea añadir al inventario?"));
                    while((isNaN(añadirCantidad))||(añadirCantidad<0)||(!Number.isInteger(añadirCantidad))){
                        alert("Por favor, ingrese una cantidad de teléfonos válida a añadir.");
                        añadirCantidad = Number(prompt("¿Cuántos teléfonos marca OPPO desea añadir al inventario?"));
                    }
                    if(añadirCantidad ===0){
                        alert("No se ha añadido ningún teléfono al inventario.");
                    } else{
                        oppo += añadirCantidad;
                        alert("Se han añadido " + añadirCantidad + " teléfonos OPPO al inventario.");
                    }
                }
                if(añadirAlInventario===7){
                    cicloAñadirInventario = 1;
                    alert(inventario);
                }else if (añadirAlInventario===8){
                    cicloAñadirInventario = 0;
                    alert("Volviendo al menú principal");
                }else{
                    inventario = "Teléfonos disponibles de acuerdo a sus marcas:\n\nTélefonos Samsung: " + samsung + " disponibles.\nTélefonos iPhone: " + iphone + " disponibles.\nTélefonos Xiaomi: " + xiaomi + " disponibles.\nTélefonos Motorola: " + motorola + " disponibles.\nTélefonos Huawei: " + huawei + " disponibles.\nTélefonos OPPO: " + oppo + " disponibles.";
                    cicloAñadirInventario = Number(prompt("¿Deseas seguir añadiendo teléfonos al inventario?\n1 Si.\n2 No."));
                    while((cicloAñadirInventario!==1)&&(cicloAñadirInventario!==2)){
                        alert("Por favor, ingrese una opción válida.");
                        cicloAñadirInventario = Number(prompt("¿Deseas seguir añadiendo teléfonos al inventario?\n1 Si.\n2 No."));
                    }
                }
                if(cicloAñadirInventario===2){
                    alert("Volviendo al menú principal.")
                }
                dispositivosTotalesInventario = samsung + iphone + xiaomi + motorola + huawei + oppo;
            }while(cicloAñadirInventario===1)
        } else if (registrarVenta===3){

        }else if (registrarVenta===4){
            alert("Teléfonos vendidos: " + dispositivosTotalesVendidos + ".\nTeléfonos sin vender: " + dispositivosTotalesInventario + ".\nDinero recaudado con las ventas realizadas: " + dineroVentas + "$.");
        }else if (registrarVenta===5){
            dispositivosTotalesInventario = samsung + iphone + xiaomi + motorola + huawei + oppo;
            alert("Se cerrará el programa.\nTeléfonos vendidos: " + dispositivosTotalesVendidos + ".\nTeléfonos sin vender: " + dispositivosTotalesInventario + ".\nDinero recaudado con las ventas realizadas: " + dineroVentas + "$.");
        }
} while (registrarVenta !== 5);
