let opciones;
let cantidadsamsung = 0;
let cantidadiphone = 0;
let cantidadhuawei = 0;
let cantidadxiaomi = 0;
let cantidadmotorola = 0;
let cantidadoppo = 0;
let preciodesamsung = 0;
let preciodeiphone = 0;
let preciodehuawei = 0;
let preciodexiaomi = 0;
let preciodemotorola = 0;
let perciodeoppo = 0;
let samsungvendidos = 0;
let iphonevendidos = 0;
let huaweivendidos = 0;
let xiaomivendidos = 0;
let mototrolavendidos = 0;
let oppovendidos = 0;
let dinerototalrecaudado= 0;
let dinerorecaudadosamasung=0;
let dinerorecaudadoiphone=0;
let dinerorecaudadohuawei=0;
let dinerorecaudadoxiaomi=0;
let dinerorecaudadomotorola=0;
let dinerorecaudadooppo=0;

while (opciones !== 5) {
    dinerorecaudadosamasung=(samsungvendidos*preciodesamsung);
    dinerorecaudadoiphone=(iphonevendidos*preciodeiphone);
    dinerorecaudadohuawei=(huaweivendidos*preciodehuawei);
    dinerorecaudadoxiaomi=(xiaomivendidos*preciodexiaomi);
    dinerorecaudadomotorola=(mototrolavendidos*preciodemotorola);
    dinerorecaudadooppo=(oppovendidos*perciodeoppo);
    dinerototalrecaudado=((samsungvendidos*preciodesamsung)+(iphonevendidos*preciodeiphone)+(xiaomivendidos*preciodexiaomi)+(huaweivendidos*preciodehuawei)+(mototrolavendidos*preciodemotorola)+(oppovendidos*perciodeoppo));
    opciones = parseInt(prompt("elige una opcion del menu \n 1.actualizar inventario\n 2.registrar una venta \n 3.ver inventario \n 4.ver dinero recaudado \n 5.salir del programa "));
    while(opciones<0 || opciones>5 || isNaN(opciones)){
        opciones = parseInt(prompt("dato invalido porfavor elige una opcion del menu: \n 1.actualizar inventario\n 2.registrar una venta \n 3.ver inventario \n 4.ver dinero recaudado \n 5.salir del programa "));
    }
    switch (opciones) {
        case 1:
            let menuparaactualizarinventario = 0;
            menuparaactualizarinventario = parseInt(prompt("elige una opcion del menu\n 1.actualizar la cantidad de telefonos\n 2.actualizar el precio de los telefonos\n 3.volver al menu principal"));
            while(menuparaactualizarinventario<0 || menuparaactualizarinventario>3 || isNaN(menuparaactualizarinventario)){
                menuparaactualizarinventario = parseInt(prompt("dato invalido porfavor elige una opcion del menu:\n 1.actualizar la cantidad de telefonos\n 2.actualizar el precio de los telefonos\n 3.volver al menu principal"));
            }
            switch (menuparaactualizarinventario) {

                case 1:

                    let menuparacantidad = parseInt(prompt("elige una marca para actualizar\n 1.samsung \n 2.iphone \n 3.huawei \n 4.xiaomi \n 5.motorola \n 6.oppo  "));
                    while(menuparacantidad<0 || menuparacantidad>6 ||isNaN(menuparacantidad)){
                        menuparacantidad = parseInt(prompt("valor invalido, porfavor elige una marca para actualizar: \n 1.samsung \n 2.iphone \n 3.huawei \n 4.xiaomi \n 5.motorola \n 6.oppo  "));
                    }
                    switch (menuparacantidad) {
                        case 1:
                            cantidadsamsung = parseInt(prompt("ingrese la nueva cantidad \n actualmente hay " + cantidadsamsung));
                            while(cantidadsamsung<0 || isNaN(cantidadsamsung)){
                                cantidadsamsung = parseInt(prompt("ingrese un valor valido porfavor \n ingrese la nueva cantidad \n actualmente hay " + cantidadsamsung));
                            }
                            break;
                        case 2:
                            cantidadiphone = parseInt(prompt("ingrese la nueva cantidad de iphone \n actualmente hay " + cantidadiphone));
                            while(cantidadiphone<0 || isNaN(cantidadiphone)){
                                cantidadiphone = parseInt(prompt("ingrese un valor valido porfavor\n ingrese la nueva cantidad de iphone \n actualmente hay " + cantidadiphone));
                            }
                            break;
                        case 3:
                            cantidadhuawei = parseInt(prompt("ingrese la nueva cantidad de huawei \n actualmente hay " + cantidadhuawei));
                            while(cantidadhuawei<0 ||isNaN(cantidadhuawei)){
                                cantidadhuawei = parseInt(prompt("ingrese un valor valido porfavor\n ingrese la nueva cantidad de huawei \n actualmente hay " + cantidadhuawei));
                            }
                            break;
                        case 4:
                            cantidadxiaomi = parseInt(prompt("ingrese la nueva cantidad de xiaomi \n actualmente hay " + cantidadxiaomi));
                            while(cantidadxiaomi<0 || isNaN(cantidadxiaomi)){
                                cantidadxiaomi = parseInt(prompt("ingrese un valor valido porfavor\n ingrese la nueva cantidad de xiaomi \n actualmente hay " + cantidadxiaomi));
                            }
                            break;
                        case 5:
                            cantidadmotorola = parseInt(prompt("ingrese la nueva cantidad de motorola \n actualmente hay " + cantidadmotorola));
                            while(cantidadmotorola<0 || isNaN(cantidadmotorola)){
                                cantidadmotorola = parseInt(prompt("ingrese un valor valido porfavor\n ingrese la nueva cantidad de motorola \n actualmente hay " + cantidadmotorola));
                            }
                            break;
                        case 6:
                            cantidadoppo = parseInt(prompt("ingrese la nueva cantidad de oppo \n actualmente hay " + cantidadoppo));
                            while(cantidadoppo<0 || isNaN(cantidadoppo)){
                                cantidadoppo = parseInt(prompt("ingrese un valor valido porfavor\n ingrese la nueva cantidad de oppo \n actualmente hay " + cantidadoppo));
                            }
                            break; 
                    }
                    break;
                case 2:
                    let menuparaprecio = parseInt(prompt("elige una marca para actualizar el precio\n 1.samsung \n 2.iphone \n 3.huawei \n 4.xiaomi \n 5.motorola \n 6.oppo  "))
                    while (menuparaprecio < 0 || isNaN(menuparaprecio) || menuparaprecio > 6) {
                        menuparaprecio = parseInt(prompt("porfavor ingrese un valor valido\n elige una marca para actualizar el precio\n 1.samsung \n 2.iphone \n 3.huawei \n 4.xiaomi \n 5.motorola \n 6.oppo  "))

                    }
                    switch (menuparaprecio) {
                        case 1:
                            preciodesamsung = parseInt(prompt("ingrese el nuevo precio\n el precio actual es de " + preciodesamsung));
                            break;
                        case 2:
                            preciodeiphone = parseInt(prompt("ingrese el nuevo precio\n el precio actual es de " + preciodeiphone));
                            break;
                        case 3:
                            preciodehuawei = parseInt(prompt("ingrese el nuevo precio\n el precio actual es de " + preciodehuawei));
                            break;
                        case 4:
                            preciodexiaomi = parseInt(prompt("ingrese el nuevo precio\n el precio actual es de " + preciodexiaomi));
                            break;
                        case 5:
                            preciodemotorola = parseInt(prompt("ingrese el nuevo precio\n el precio actual es de " + preciodemotorola));
                            break;
                        case 6:
                            perciodeoppo = parseInt(prompt("ingrese el nuevo precio\n el precio actual es de " + perciodeoppo));
                            break;
                        default: alert("alert de prueba")
                    }
            }
            break;

        case 2:
            let menuparaventas = parseInt(prompt("elige la marca de telefono que vendio\n 1.samsung \n 2.iphone \n 3.huawei \n 4.xiaomi \n 5.motorola \n 6.oppo  "));
            let menuparacancelar = 0;
            switch (menuparaventas) {
                case 1:
                    menuparacancelar = parseInt(prompt("se registrara una venta de un telefono samsung\n quedan " + cantidadsamsung + " en el inventario\n 1.confirmar \n 2.cancelar"));
                    while (menuparacancelar < 0 || isNaN(menuparacancelar) || menuparacancelar > 2) {
                        menuparacancelar = parseInt(prompt("ingrese un valor valido\n se registrara una venta de un telefono samsung\n 1.confirmar \n 2.cancelar"));
                    }
                    if (menuparacancelar === 1) {
                        if (cantidadsamsung === 0) {
                            alert("no se puede registrar esta venta porque no hay dispositivos disponibles de esta marca, porfavor revise su inventario")
                        }
                        else if (cantidadsamsung > 0) {
                            alert("se ha registrado correctamente la venta de un telefono samsung");
                            cantidadsamsung--;
                            samsungvendidos++;
                        }
                    }
                    break;
                case 2:
                    menuparacancelar = parseInt(prompt("se registrara una venta de un telefono iphone \n quedan " + cantidadiphone + " en el inventario\n 1.confirmar \n 2.cancelar"));
                    if (menuparacancelar === 1) {
                        if (cantidadiphone === 0) {
                            alert("no se puede registrar esta venta porque no hay dispositivos disponibles de esta marca, porfavor revise su inventario");
                        }
                        else if (cantidadiphone > 0) {
                            alert("se ha registrado correctamente la venta de un telefono iphone");
                            cantidadiphone--;
                            iphonevendidos++;
                        }
                    }
                    break;
                case 3:
                    menuparacancelar = parseInt(prompt("se registrara una venta de un telefono huawei \n quedan " + cantidadhuawei + " en el inventario\n 1.confirmar \n 2.cancelar"));
                    if (menuparacancelar === 1) {
                        if (cantidadhuawei === 0) {
                            alert("no se puede registrar esta venta porque no hay dispositivos disponibles de esta marca, porfavor revise su inventario");
                        }
                        else if (cantidadhuawei > 0) {
                            alert("se ha registrado correctamente la venta de un telefono huawei");
                            cantidadhuawei--;
                            huaweivendidos++;
                        }
                    }
                    break;
                case 4:
                    menuparacancelar = parseInt(prompt("se registrara una venta de un telefono xiaomi \n quedan " + cantidadxiaomi + " en el inventario\n 1.confirmar \n 2.cancelar"));
                    if (menuparacancelar === 1) {
                        if (cantidadxiaomi === 0) {
                            alert("no se puede registrar esta venta porque no hay dispositivos disponibles de esta marca, porfavor revise su inventario");
                        }
                        else if (cantidadxiaomi > 0) {
                            alert("se ha registrado correctamente la venta de un telefono xiaomi");
                            cantidadxiaomi--;
                            xiaomivendidos++;
                        }
                    }
                    break;
                case 5:
                    menuparacancelar = parseInt(prompt("se registrara una venta de un telefono motorola \n quedan " + cantidadmotorola + " en el inventario\n 1.confirmar \n 2.cancelar"));
                    if (menuparacancelar === 1) {
                        if (cantidadmotorola === 0) {
                            alert("no se puede registrar esta venta porque no hay dispositivos disponibles de esta marca, porfavor revise su inventario");
                        }
                        else if (cantidadmotorola > 0) {
                            alert("se ha registrado correctamente la venta de un telefono motorola");
                            cantidadmotorola--;
                            mototrolavendidos++;
                        }
                    }
                    break;
                case 6:
                    menuparacancelar = parseInt(prompt("se registrara una venta de un telefono oppo \n quedan " + cantidadoppo + " en el inventario\n 1.confirmar \n 2.cancelar"));
                    if (menuparacancelar === 1) {
                        if (cantidadoppo === 0) {
                            alert("no se puede registrar esta venta porque no hay dispositivos disponibles de esta marca, porfavor revise su inventario");
                        }
                        else if (cantidadoppo > 0) {
                            alert("se ha registrado correctamente la venta de un telefono motorola");
                            cantidadoppo--;
                            oppovendidos++;
                        }
                    }
                    break;
            }
            break;
        case 3:
            alert("bienvenido, este es el inventario disponible:\n hay "+cantidadsamsung+" celulares samsung\n hay "+cantidadiphone+" celulares iphone \n hay "+cantidadhuawei+" celulares huawei\n hay "+cantidadxiaomi+" celulares xiaomi\n hay "+cantidadmotorola+" celulares motorola \n hay "+cantidadoppo+" celulares oppo");
            break;
        case 4:

            let menufinal=parseInt(prompt("elige una de las dos opciones\n 1. ver dinero recaudado por cada marca \n 2. ver el total recaudado\n 3.salir al menu principal"));
            while(menufinal<0 || menufinal>3 || isNaN(menufinal)){
                menufinal=parseInt(prompt("error dato invalido, porfavor ingrese una de las tres opciones\n 1. ver dinero recaudado por cada marca \n 2. ver el total recaudado\n 3.salir al menu principal"));
            }
            if (menufinal===1){
                alert("se ha recaudado:\n "+dinerorecaudadosamasung+" por samsung\n "+ dinerorecaudadoiphone+" por iphone\n "+dinerorecaudadohuawei+"por huawei\n "+dinerorecaudadoxiaomi+"por xiaomi \n "+dinerorecaudadomotorola+" por motorola\n "+dinerorecaudadooppo+" por oppo");
            }
            else if(menufinal===2){
            alert("el dinero total recaudado es "+ dinerototalrecaudado);
            }

            break;




    }
}