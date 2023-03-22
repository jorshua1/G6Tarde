/*Declaracion de variables e iniciacion de las mismas*/
let samsung = 0, iphone = 0, xiaomi = 0, motorola = 0, huawei = 0, oppo = 0;
let samsungcant = 0, iphonecant = 0, xiaomicant = 0, motorolacant = 0, huaweicant = 0, oppocant = 0;
let samsungvalor = 1100000, iphonevalor = 2000000, xiaomivalor = 1300000, motorolavalor = 1500000, huaweivalor = 1200000, oppovalor = 1400000;
let preciototal = 0,ventadia = 0, otrocel = 0, otraventa = 0, cantidadvendidos = 0, cantventas = 0;

/*ingreso de la cantidad de dispositivos disponibles para la jornada laboral*/
alert("buenos dias extrellitas :)\nEmpezamos el dia laboral con el ingreso de los dispositivos disponibles en el almacen");
samsungcant = parseInt(prompt("ingrese la cantidad de celulares samsung que hay en almacen"));
while (isNaN(samsungcant)) {
    console.log("Error, valor digitado no valido");
    nombre = (prompt("ingrese la cantidad de celulares samsung que hay en almacen"));
}
iphonecant = parseInt(prompt("ingrese la cantidad de celulares iphone que hay en almacen"));
while (isNaN(samsungcant)) {
    console.log("Error, valor digitado no valido");
    nombre = (prompt("ingrese la cantidad de celulares iphone que hay en almacen"));
}
xiaomicant = parseInt(prompt("ingrese la cantidad de celulares xiaomi que hay en almacen"));
while (isNaN(samsungcant)) {
    console.log("Error, valor digitado no valido");
    nombre = (prompt("ingrese la cantidad de celulares xiaomi que hay en almacen"));
}
motorolacant = parseInt(prompt("ingrese la cantidad de celulares motorola que hay en almacen"));
while (isNaN(samsungcant)) {
    console.log("Error, valor digitado no valido");
    nombre = (prompt("ingrese la cantidad de celulares motorola que hay en almacen"));
}
huaweicant = parseInt(prompt("ingrese la cantidad de celulares huawei que hay en almacen"));
while (isNaN(samsungcant)) {
    console.log("Error, valor digitado no valido");
    nombre = (prompt("ingrese la cantidad de celulares huawei que hay en almacen"));
}
oppocant = parseInt(prompt("ingrese la cantidad de celulares oppo que hay en almacen"));
while (isNaN(samsungcant)) {
    console.log("Error, valor digitado no valido");
    nombre = (prompt("ingrese la cantidad de celulares oppo que hay en almacen"));
}
alert("Mission complete\ningreso de inventario terminado");
//registro de ventas realizadas
do {
    let nombre = prompt("por favor ingresar el nombre del cliente");
    while (!isNaN(nombre)){
        console.log("Error, el nombre ha sido escrito con alguna anomalia");
        nombre = prompt("por favor ingresar el nombre del cliente");
    }

    //registro celulares por persona
    do{
    let celular = parseInt(prompt("Por favor elija el celular a vender: \n" +
        "    Marcas       " + "    Valor    " + "    en stock \n" +
        "(1) Samsung   " + "1100000" + "       " + samsungcant + "\n" +
        "(2) iphone       " + "2000000" + "       " + iphonecant + "\n" +
        "(3) xiaomi       " + "1300000" + "       " + xiaomicant + "\n" +
        "(4) motorola  " + "1500000" + "       " + motorolacant + "\n" +
        "(5) huawei      " + "1200000" + "       " + huaweicant + "\n" +
        "(6) oppo          " + "1400000" + "       " + oppocant));

    while (isNaN(celular) || celular < 0 || celular > 6) {
        console.log("Error, opcion fuera de los parametros!!!");
        celular = (parseInt(prompt("Por favor elija el celular a vender: \n" +
            "    Marcas       " + "    Valor    " + "    en stock \n" +
            "(1) Samsung   " + "1100000" + "       " + samsungcant + "\n" +
            "(2) iphone       " + "2000000" + "       " + iphonecant + "\n" +
            "(3) xiaomi       " + "1300000" + "       " + xiaomicant + "\n" +
            "(4) motorola  " + "1500000" + "       " + motorolacant + "\n" +
            "(5) huawei      " + "1200000" + "       " + huaweicant + "\n" +
            "(6) oppo          " + "1400000" + "       " + oppocant)));
    }

    //operaciones
    if (celular == 1) {
        cantidadvendidos++
        alert("Se ha añadido al carrito");
        samsungcant--
        preciototal = preciototal + samsungvalor;
    }
    if (celular == 2) {
        cantidadvendidos++
        alert("Se ha añadido al carrito");
        iphonecant--
        preciototal = preciototal + iphonevalor;
    }
    if (celular == 3) {
        cantidadvendidos++
        alert("Se ha añadido al carrito");
        xiaomicant--
        preciototal = preciototal + xiaomivalor;
    }
    if (celular == 4) {
        cantidadvendidos++
        alert("Se ha añadido al carrito");
        motorolacant--
        preciototal = preciototal + motorolavalor;
    }
    if (celular == 5) {
        cantidadvendidos++
        alert("Se ha añadido al carrito");
        huaweicant--
        preciototal = preciototal + huaweivalor;
    }
    if (celular == 6) {
        cantidadvendidos++
        alert("Se ha añadido al carrito");
        oppocant--
        preciototal = preciototal + oppovalor;
    }

    //retorno del do-while
    otrocel = parseInt(prompt("Desea agregar al carrito otro dispositivo? \n" +
        "(1) Si \n" +
        "(2) No"));
    while (isNaN(otrocel) || otrocel < 1 || otrocel > 2) {
        console.log("Error, opcion fuera de los parametros!!!");
        otrocel = parseInt(prompt("Desea agregar al carrito otro dispositivo? \n" +
            "(1) Si \n" +
            "(2) No"));
    }
} while (otrocel == 1)

//informacion de la venta
alert("El valor de la compra de "+cantidadvendidos+" celular/es es de "+ preciototal+"\n"+
        "\n"+
        "para el/la cliente "+nombre);
        
alert("Dispositivos celulares en almacen: \n" +
"    Marcas       " + "    en stock \n" +
"Samsung   " + "       " + samsungcant + "\n" +
"iphone       " + "       " + iphonecant + "\n" +
"xiaomi       " + "       " + xiaomicant + "\n" +
"motorola  " + "       " + motorolacant + "\n" +
"huawei      " + "       " + huaweicant + "\n" +
"oppo          " + "       " + oppocant + "\n" +
"Total ganancia de compra: " + preciototal);

//guardar el precio generado por el dia
ventadia = ventadia + preciototal;

//retorno del do-while
otraventa = parseInt(prompt("Desea realizar otra venta?\n" +
        "(1) Si \n" +
        "(2) No"));
    while (isNaN(otraventa) || otraventa < 1 || otraventa > 2) {
        console.log("Error, opcion fuera de los parametros!!!");
        otraventa = parseInt(prompt("Desea realizar otra venta?\n" +
            "(1) Si \n" +
            "(2) No"));
    }

//inicializar nuevamente parametros cambiantes por venta
preciototal = 0;
nombre = "";

}while (otraventa == 1)

//resultados por ventas realizadas en el dia :)
alert("Ha finalizado la jornada laboral con la venta de "+cantidadvendidos+ " celulares vendidos \n" +
    "Y una ganancia de: "+ventadia);

