let samsung = 0, iphone = 0, xiaomi = 0, motorola = 0, huawei = 0, oppo = 0;
let marca = ""
let cantidadMarca = 0;
let inventarioMarcas = 6;
let dispositivosTotalesInventario = 0;
let inventario = ""
let registrarVenta = 0;
let marcaTelefonoVendido = 0;
let cantidadVentaTelefono = 0;
let contadorPrecios = 0;
let contadorTelefono = 0;
let precioTelefono = 0;
let precioAcumulado = 0;
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
    dispositivosTotalesInventario = samsung + iphone + xiaomi + motorola + huawei + oppo;
    if (dispositivosTotalesInventario > 0) {
        contadorTelefono = 0;
        precioTelefono = 0;
        precioAcumulado = 0;
        alert(inventario);
        registrarVenta = Number(prompt("¿Desea registrar alguna venta? Escriba:\n1 para registrar una venta.\n2 para ver los teléfonos disponibles.\n3 para ver el resumen de ventas y ganancias.\n4 para cerrar el programa"));
        while ((registrarVenta !== 1) && (registrarVenta !== 2) && (registrarVenta !== 3) && (registrarVenta !== 4)) {
            alert("Parece ser que ha introducido una opción no válida, por favor, inténtelo de nuevo.");
            registrarVenta = Number(prompt("¿Desea registrar alguna venta? Escriba:\n1 para registrar una venta.\n2 para ver los teléfonos disponibles.\n3 para ver el resumen de ventas y ganancias.\n4 para cerrar el programa"));
        }
        if (registrarVenta === 1) {
            marcaTelefonoVendido = Number(prompt("¿Cuál es la marca del teléfono vendido? Seleccione digitando el número de la opción.\n1. Samsung.\n2. iPhone.\n3. Xiaomi.\n4. Motorola.\n5. Huawei.\n6. OPPO.\n7. Volver al menú principal."));
            while ((marcaTelefonoVendido < 1) || (marcaTelefonoVendido > 7) || (isNaN(marcaTelefonoVendido)) || (!Number.isInteger(marcaTelefonoVendido))) {
                alert("Parece ser que ha introducido una opción no válida, por favor, inténtelo de nuevo.");
                marcaTelefonoVendido = Number(prompt("¿Cuál es la marca del teléfono vendido? Seleccione digitando el número de la opción.\n1. Samsung.\n2. iPhone.\n3. Xiaomi.\n4. Motorola.\n5. Huawei.\n6. OPPO.\n7. Volver al menú principal."));
            }
            if ((marcaTelefonoVendido === 1) && (samsung > 0)) {
                cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Samsung vendió?"));
                while((isNaN(cantidadVentaTelefono))||(cantidadVentaTelefono<=0)||(!Number.isInteger(cantidadVentaTelefono))||(cantidadVentaTelefono>samsung)){
                    alert("Por favor, ingrese un cantidad de teléfonos válida");
                    alert("Teléfonos Samsung disponibles: " + samsung + ".");
                    cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Samsung vendió?"));
                }
                contadorPrecios = cantidadVentaTelefono
                for(contadorPrecios;contadorPrecios>0;contadorPrecios--){
                    contadorTelefono++
                    precioTelefono = Number(prompt("Ingrese el valor del teléfono Nº" + contadorTelefono + " vendido."))
                    while ((isNaN(precioTelefono)) || (precioTelefono <= 0)) {
                        alert("Ha ingresado un precio de venta no válido, por favor, ingrese un valor válido.");
                        precioTelefono = Number(prompt("¿Cuál fue el precio del teléfono marca Samsung vendido?"));
                    }
                    precioAcumulado = precioAcumulado + precioTelefono;
                }
                confirmarVenta = Number(prompt("Marca teléfono: Samsung.\nCantidad: " + cantidadVentaTelefono + "$.\nPrecio total: " + precioAcumulado +  "$\n\nEs correcta la información? 1. Si./2. No."));
                while((confirmarVenta!==1)&&(confirmarVenta!==2)){
                    alert("Por favor, seleccione una opción válida para confirmar.");
                    confirmarVenta = Number(prompt("Marca teléfono: Samsung.\nCantidad: " + cantidadVentaTelefono + "$.\nPrecio total: " + precioAcumulado + "$\n\nEs correcta la información? 1. Si./2. No."));
                }
                if(confirmarVenta === 1){
                    alert("Muchas gracias, se ha registrado la venta realizada.");
                    dispositivosTotalesVendidos = dispositivosTotalesVendidos+cantidadVentaTelefono;
                    samsung = samsung-cantidadVentaTelefono;
                }else{
                    precioTelefono = 0;
                    precioAcumulado = 0;
                    alert("La venta no se ha registrado. Volverás al menú principal.")
                }
            } else if ((marcaTelefonoVendido === 2) && (iphone > 0)) {
                cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca iPhone vendió?"));
                while((isNaN(cantidadVentaTelefono))||(cantidadVentaTelefono<=0)||(!Number.isInteger(cantidadVentaTelefono))||(cantidadVentaTelefono>iphone)){
                    alert("Por favor, ingrese un cantidad de teléfonos válida");
                    alert("Teléfonos iphone disponibles: " + iphone + ".");
                    cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca iPhone vendió?"));
                }
                contadorPrecios = cantidadVentaTelefono
                for(contadorPrecios;contadorPrecios>0;contadorPrecios--){
                    contadorTelefono++
                    precioTelefono = Number(prompt("Ingrese el valor del teléfono Nº" + contadorTelefono + " vendido."))
                    while ((isNaN(precioTelefono)) || (precioTelefono <= 0)) {
                        alert("Ha ingresado un precio de venta no válido, por favor, ingrese un valor válido.");
                        precioTelefono = Number(prompt("¿Cuál fue el precio del teléfono marca iPhone vendido?"));
                    }
                    precioAcumulado = precioAcumulado + precioTelefono;
                }
                confirmarVenta = Number(prompt("Marca teléfono: iPhone.\nCantidad: " + cantidadVentaTelefono + "$.\nPrecio total: " + precioAcumulado +  "$\n\nEs correcta la información? 1. Si./2. No."));
                while((confirmarVenta!==1)&&(confirmarVenta!==2)){
                    alert("Por favor, seleccione una opción válida para confirmar.");
                    confirmarVenta = Number(prompt("Marca teléfono: iPhone.\nCantidad: " + cantidadVentaTelefono + "$.\nPrecio total: " + precioAcumulado + "$\n\nEs correcta la información? 1. Si./2. No."));
                }
                if(confirmarVenta === 1){
                    alert("Muchas gracias, se ha registrado la venta realizada.");
                    dispositivosTotalesVendidos = dispositivosTotalesVendidos+cantidadVentaTelefono;
                    iphone = iphone-cantidadVentaTelefono;
                }else{
                    precioTelefono = 0;
                    precioAcumulado = 0;
                    alert("La venta no se ha registrado. Volverás al menú principal.")
                }
            } else if ((marcaTelefonoVendido === 3) && (xiaomi > 0)) {
                cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Xiaomi vendió?"));
                while((isNaN(cantidadVentaTelefono))||(cantidadVentaTelefono<=0)||(!Number.isInteger(cantidadVentaTelefono))||(cantidadVentaTelefono>xiaomi)){
                    alert("Por favor, ingrese un cantidad de teléfonos válida");
                    alert("Teléfonos Xiaomi disponibles: " + xiaomi + ".");
                    cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Xiaomi vendió?"));
                }
                contadorPrecios = cantidadVentaTelefono
                for(contadorPrecios;contadorPrecios>0;contadorPrecios--){
                    contadorTelefono++
                    precioTelefono = Number(prompt("Ingrese el valor del teléfono Nº" + contadorTelefono + " vendido."))
                    while ((isNaN(precioTelefono)) || (precioTelefono <= 0)) {
                        alert("Ha ingresado un precio de venta no válido, por favor, ingrese un valor válido.");
                        precioTelefono = Number(prompt("¿Cuál fue el precio del teléfono marca Xiaomi vendido?"));
                    }
                    precioAcumulado = precioAcumulado + precioTelefono;
                }
                confirmarVenta = Number(prompt("Marca teléfono: Xiaomi.\nCantidad: " + cantidadVentaTelefono + "$.\nPrecio total: " + precioAcumulado +  "$\n\nEs correcta la información? 1. Si./2. No."));
                while((confirmarVenta!==1)&&(confirmarVenta!==2)){
                    alert("Por favor, seleccione una opción válida para confirmar.");
                    confirmarVenta = Number(prompt("Marca teléfono: Xiaomi.\nCantidad: " + cantidadVentaTelefono + "$.\nPrecio total: " + precioAcumulado + "$\n\nEs correcta la información? 1. Si./2. No."));
                }
                if(confirmarVenta === 1){
                    alert("Muchas gracias, se ha registrado la venta realizada.");
                    dispositivosTotalesVendidos = dispositivosTotalesVendidos+cantidadVentaTelefono;
                    xiaomi = xiaomi-cantidadVentaTelefono;
                }else{
                    precioTelefono = 0;
                    precioAcumulado = 0;
                    alert("La venta no se ha registrado. Volverás al menú principal.")
                }
            } else if ((marcaTelefonoVendido === 4) && (motorola > 0)) {
                cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Motorola vendió?"));
                while((isNaN(cantidadVentaTelefono))||(cantidadVentaTelefono<=0)||(!Number.isInteger(cantidadVentaTelefono))||(cantidadVentaTelefono>motorola)){
                    alert("Por favor, ingrese un cantidad de teléfonos válida");
                    alert("Teléfonos Motorola disponibles: " + motorola + ".");
                    cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Motorola vendió?"));
                }
                contadorPrecios = cantidadVentaTelefono
                for(contadorPrecios;contadorPrecios>0;contadorPrecios--){
                    contadorTelefono++
                    precioTelefono = Number(prompt("Ingrese el valor del teléfono Nº" + contadorTelefono + " vendido."))
                    while ((isNaN(precioTelefono)) || (precioTelefono <= 0)) {
                        alert("Ha ingresado un precio de venta no válido, por favor, ingrese un valor válido.");
                        precioTelefono = Number(prompt("¿Cuál fue el precio del teléfono marca Motorola vendido?"));
                    }
                    precioAcumulado = precioAcumulado + precioTelefono;
                }
                confirmarVenta = Number(prompt("Marca teléfono: Motorola.\nCantidad: " + cantidadVentaTelefono + "$.\nPrecio total: " + precioAcumulado +  "$\n\nEs correcta la información? 1. Si./2. No."));
                while((confirmarVenta!==1)&&(confirmarVenta!==2)){
                    alert("Por favor, seleccione una opción válida para confirmar.");
                    confirmarVenta = Number(prompt("Marca teléfono: Motorola.\nCantidad: " + cantidadVentaTelefono + "$.\nPrecio total: " + precioAcumulado + "$\n\nEs correcta la información? 1. Si./2. No."));
                }
                if(confirmarVenta === 1){
                    alert("Muchas gracias, se ha registrado la venta realizada.");
                    dispositivosTotalesVendidos = dispositivosTotalesVendidos+cantidadVentaTelefono;
                    motorola = motorola-cantidadVentaTelefono;
                }else{
                    precioTelefono = 0;
                    precioAcumulado = 0;
                    alert("La venta no se ha registrado. Volverás al menú principal.")
                }
            } else if ((marcaTelefonoVendido === 5) && (huawei > 0)) {
                cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Huawei vendió?"));
                while((isNaN(cantidadVentaTelefono))||(cantidadVentaTelefono<=0)||(!Number.isInteger(cantidadVentaTelefono))||(cantidadVentaTelefono>huawei)){
                    alert("Por favor, ingrese un cantidad de teléfonos válida");
                    alert("Teléfonos Huawei disponibles: " + huawei + ".");
                    cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca Huawei vendió?"));
                }
                contadorPrecios = cantidadVentaTelefono
                for(contadorPrecios;contadorPrecios>0;contadorPrecios--){
                    contadorTelefono++
                    precioTelefono = Number(prompt("Ingrese el valor del teléfono Nº " + contadorTelefono + " vendido."))
                    while ((isNaN(precioTelefono)) || (precioTelefono <= 0)) {
                        alert("Ha ingresado un precio de venta no válido, por favor, ingrese un valor válido.");
                        precioTelefono = Number(prompt("¿Cuál fue el precio del teléfono marca Huawei vendido?"));
                    }
                    precioAcumulado = precioAcumulado + precioTelefono;
                }
                confirmarVenta = Number(prompt("Marca teléfono: Huawei.\nCantidad: " + cantidadVentaTelefono + "$.\nPrecio total: " + precioAcumulado +  "$\n\nEs correcta la información? 1. Si./2. No."));
                while((confirmarVenta!==1)&&(confirmarVenta!==2)){
                    alert("Por favor, seleccione una opción válida para confirmar.");
                    confirmarVenta = Number(prompt("Marca teléfono: Huawei.\nCantidad: " + cantidadVentaTelefono + "$.\nPrecio total: " + precioAcumulado + "$\n\nEs correcta la información? 1. Si./2. No."));
                }
                if(confirmarVenta === 1){
                    alert("Muchas gracias, se ha registrado la venta realizada.");
                    dispositivosTotalesVendidos = dispositivosTotalesVendidos+cantidadVentaTelefono;
                    huawei = huawei-cantidadVentaTelefono;
                }else{
                    precioTelefono = 0;
                    precioAcumulado = 0;
                    alert("La venta no se ha registrado. Volverás al menú principal.")
                }
            } else if ((marcaTelefonoVendido === 6) && (oppo > 0)) {
                cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca OPPO vendió?"));
                while((isNaN(cantidadVentaTelefono))||(cantidadVentaTelefono<=0)||(!Number.isInteger(cantidadVentaTelefono))||(cantidadVentaTelefono>oppo)){
                    alert("Por favor, ingrese un cantidad de teléfonos válida");
                    alert("Teléfonos OPPO disponibles: " + oppo + ".");
                    cantidadVentaTelefono = Number(prompt("¿Cuántos teléfonos de marca OPPO vendió?"));
                }
                contadorPrecios = cantidadVentaTelefono
                for(contadorPrecios;contadorPrecios>0;contadorPrecios--){
                    contadorTelefono++
                    precioTelefono = Number(prompt("Ingrese el valor del teléfono Nº " + contadorTelefono + " vendido."))
                    while ((isNaN(precioTelefono)) || (precioTelefono <= 0)) {
                        alert("Ha ingresado un precio de venta no válido, por favor, ingrese un valor válido.");
                        precioTelefono = Number(prompt("¿Cuál fue el precio del teléfono marca OPPO vendido?"));
                    }
                    precioAcumulado = precioAcumulado + precioTelefono;
                }
                confirmarVenta = Number(prompt("Marca teléfono: OPPO.\nCantidad: " + cantidadVentaTelefono + ".\nPrecio total: " + precioAcumulado +  "$\n\nEs correcta la información? 1. Si./2. No."));
                while((confirmarVenta!==1)&&(confirmarVenta!==2)){
                    alert("Por favor, seleccione una opción válida para confirmar.");
                    confirmarVenta = Number(prompt("Marca teléfono: OPPO.\nCantidad: " + cantidadVentaTelefono + "$.\nPrecio total: " + precioAcumulado + "$\n\nEs correcta la información? 1. Si./2. No."));
                }
                if(confirmarVenta === 1){
                    alert("Muchas gracias, se ha registrado la venta realizada.");
                    dispositivosTotalesVendidos = dispositivosTotalesVendidos+cantidadVentaTelefono;
                    oppo = oppo-cantidadVentaTelefono;
                }else{
                    precioTelefono = 0;
                    precioAcumulado = 0;
                    alert("La venta no se ha registrado. Volverás al menú principal.")
                }
            } else if (marcaTelefonoVendido === 7){

            } else {
                alert("No hay teléfonos disponibles de la marca indicada. Volverás al menú principal.");
            }
            inventario = "Teléfonos disponibles de acuerdo a sus marcas:\n\nTélefonos Samsung: " + samsung + " disponibles.\nTélefonos iPhone: " + iphone + " disponibles.\nTélefonos Xiaomi: " + xiaomi + " disponibles.\nTélefonos Motorola: " + motorola + " disponibles.\nTélefonos Huawei: " + huawei + " disponibles.\nTélefonos OPPO: " + oppo + " disponibles.";
            dineroVentas = dineroVentas + precioAcumulado;
        } else if (registrarVenta===2){

        }else if (registrarVenta===3){
            alert("Teléfonos vendidos: " + dispositivosTotalesVendidos + ".\nTeléfonos sin vender: " + dispositivosTotalesInventario + ".\nDinero recaudado con las ventas realizadas: " + dineroVentas + "$.");
        }else if (registrarVenta===4){
            dispositivosTotalesInventario = samsung + iphone + xiaomi + motorola + huawei + oppo;
            alert("Se cerrará el programa.\nTeléfonos vendidos: " + dispositivosTotalesVendidos + ".\nTeléfonos sin vender: " + dispositivosTotalesInventario + ".\nDinero recaudado con las ventas realizadas: " + dineroVentas + "$.");
        }
    } else {
        alert("No hay ningún teléfono disponible en el inventario. Se cerrará el programa.\nTeléfonos vendidos: " + dispositivosTotalesVendidos + ".\nTeléfonos sin vender: " + dispositivosTotalesInventario + ".\nDinero recaudado con las ventas realizadas: " + dineroVentas + "$.");
    }
} while ((dispositivosTotalesInventario > 0) && (registrarVenta !== 4));
