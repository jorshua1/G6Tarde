let marcaCelular = "", continuar = "";
let cantidadTotal = 0, cantidadVenta = 0, cantidad = 0;
let cantidadSamsung = 0, cantidadIphone = 0, cantidadXiaomi = 0, cantidadMotorola = 0, cantidadHuawei = 0, cantidadOPPO = 0;
let ventaSamsung = 0, ventaIphone = 0, ventaXiaomi = 0, ventaMotorola = 0, ventaHuawei = 0, ventaOPPO = 0, venta = 0;
let precio = 0, precioSamsung = 0, precioIphone = 0, precioXiaomi = 0, precioMotorola = 0, precioHuawei = 0, precioOPPO = 0, precioTotal = 0;
let ERROR = "Por favor ingrese datos validos, solo puede continuar si ingresa la marca del dispositivo: \n- Samsung\n- Iphone\n- Xiaomi\n- Motorola\n- Huawei\n- OPPO "

do {

    marcaCelular = prompt("Selecione la marca de celular que desea agregar al inventario este mes: \n--Samsung\n--Iphone\n--Xiaomi\n--Motorola\n--Huawei\n--OPPO ");
    while (marcaCelular != "Samsung" && marcaCelular != "Iphone" && marcaCelular != "Xiaomi" && marcaCelular != "Motorola" && marcaCelular != "Huawei" && marcaCelular != "OPPO") {
        marcaCelular = prompt(ERROR);
    }

    if (marcaCelular === "Samsung") {
        cantidad = parseInt(prompt("Ingrese la cantidad de telefonos agregados al inventario este mes"));
        cantidadSamsung += cantidad;
    } else if (marcaCelular === "Iphone") {
        cantidad = parseInt(prompt("Ingrese la cantidad de telefonos agregados al inventario este mes"));
        cantidadIphone += cantidad;
    } else if (marcaCelular === "Xiaomi") {
        cantidad = parseInt(prompt("Ingrese la cantidad de telefonos agregados al inventario este mes"));
        cantidadXiaomi += cantidad;
    } else if (marcaCelular === "Motorola") {
        cantidad = parseInt(prompt("Ingrese la cantidad de telefonos agregados al inventario este mes"));
        cantidadMotorola += cantidad;
    } else if (marcaCelular === "Huawei") {
        cantidad = parseInt(prompt("Ingrese la cantidad de telefonos agregados al inventario este mes"));
        cantidadHuawei += cantidad;
    } else if (marcaCelular === "OPPO") {
        cantidad = parseInt(prompt("Ingrese la cantidad de telefonos agregados al inventario este mes"));
        cantidadOPPO += cantidad;
    }
    continuar = prompt("¿Desea continuar ingresando datos? \nIngrese (Si) para continuar\nPresione cualquier tecla para terminar");
} while (continuar == "Si" || continuar == "si" || continuar == "SI");

cantidadTotal = (cantidadSamsung + cantidadIphone + cantidadXiaomi + cantidadMotorola + cantidadHuawei + cantidadOPPO);

alert("Hay un total de: " + cantidadTotal + " dispositivos en el inventario \n-Samsung: " + cantidadSamsung + "\n-Iphone: " + cantidadIphone + "\n-Xiaomi: " + cantidadXiaomi + "\n-Motorola: " + cantidadMotorola + "\n-Huawei: " + cantidadHuawei + "\n-OPPO: " + cantidadOPPO);

do {
    marcaCelular = prompt("Ingrese la marca de celular que vendio para hacer el registro");
    while (marcaCelular != "Samsung" && marcaCelular != "Iphone" && marcaCelular != "Xiaomi" && marcaCelular != "Motorola" && marcaCelular != "Huawei" && marcaCelular != "OPPO") {
        marcaCelular = prompt(ERROR);
    }
    if (marcaCelular === "Samsung") {
        venta = parseInt(prompt("Cuantos " + marcaCelular + " vendio este mes?"));
        while (isNaN(venta) || venta > cantidadSamsung) {
            venta = parseInt(prompt("No puede vender mas equipos de los que hay, ingrese un dato valido"));
        }
        ventaSamsung += venta;
        precio = parseFloat(prompt("Ingrese el valor por unidad del celular"));
        while (isNaN(precio) || precio <= 0) {
            precio = parseFloat(prompt("Ingrese un precio valido"));
        }
        precioSamsung += precio;
    } else if (marcaCelular === "Iphone") {
        venta = parseInt(prompt("Cuantos " + marcaCelular + " vendio este mes?"));
        while (isNaN(venta) || venta > cantidadIphone) {
            venta = parseInt(prompt("No puede vender mas equipos de los que hay, ingrese un dato valido"));
        }
        ventaIphone += venta;
        precio = parseFloat(prompt("Ingrese el valor por unidad del celular"));
        while (isNaN(precio) || precio <= 0) {
            precio = parseFloat(prompt("Ingrese un precio valido"));
        }
        precioIphone += precio;
    } else if (marcaCelular === "Xiaomi") {
        venta = parseInt(prompt("Cuantos " + marcaCelular + " vendio este mes?"));
        while (isNaN(venta) || venta > cantidadXiaomi) {
            venta = parseInt(prompt("No puede vender mas equipos de los que hay, ingrese un dato valido"));
        }
        ventaXiaomi += venta;
        precio = parseFloat(prompt("Ingrese el valor por unidad del celular"));
        while (isNaN(precio) || precio <= 0) {
            precio = parseFloat(prompt("Ingrese un precio valido"));
        }
        precioXiaomi += precio;
    } else if (marcaCelular === "Motorola") {
        venta = parseInt(prompt("Cuantos " + marcaCelular + " vendio este mes?"));
        while (isNaN(venta) || venta > cantidadMotorola) {
            venta = parseInt(prompt("No puede vender mas equipos de los que hay, ingrese un dato valido"));
        }
        ventaMotorola += venta;
        precio = parseFloat(prompt("Ingrese el valor por unidad del celular"));
        while (isNaN(precio) || precio <= 0) {
            precio = parseFloat(prompt("Ingrese un precio valido"));
        }
        precioMotorola += precio;
    } else if (marcaCelular === "Huawei") {
        venta = parseInt(prompt("Cuantos " + marcaCelular + " vendio este mes?"));
        while (isNaN(venta) || venta > cantidadHuawei) {
            venta = parseInt(prompt("No puede vender mas equipos de los que hay, ingrese un dato valido"));
        }
        ventaHuawei += venta;
        precio = parseFloat(prompt("Ingrese el valor por unidad del celular"));
        while (isNaN(precio) || precio <= 0) {
            precio = parseFloat(prompt("Ingrese un precio valido"));
        }
        precioHuawei += precio;
    } else if (marcaCelular === "OPPO") {
        venta = parseInt(prompt("Cuantos " + marcaCelular + " vendio este mes?"));
        while (isNaN(venta) || venta > cantidadOPPO) {
            venta = parseInt(prompt("No puede vender mas equipos de los que hay, ingrese un dato valido"));
        }
        ventaOPPO += venta;
        precio = parseFloat(prompt("Ingrese el valor por unidad del celular"));
        while (isNaN(precio) || precio <= 0) {
            precio = parseFloat(prompt("Ingrese un precio valido"));
        }
        precioOPPO += precio;
    }
    continuar = prompt("¿Desea continuar ingresando ventas? \nIngrese (Si) para continuar\nPresione cualquier tecla para terminar");

} while (continuar == "Si" || continuar == "si" || continuar == "SI");

cantidadSamsung -= ventaSamsung;
cantidadIphone -= ventaIphone;
cantidadXiaomi -= ventaXiaomi;
cantidadMotorola -= ventaMotorola;
cantidadHuawei -= ventaHuawei;
cantidadOPPO -= ventaOPPO;

precioTotal = ((precioSamsung * ventaSamsung) + (precioIphone * ventaIphone) + (precioXiaomi * ventaXiaomi) + (precioMotorola * ventaMotorola) + (precioHuawei * ventaHuawei) + (precioOPPO * ventaOPPO));

cantidadVenta = (ventaSamsung + ventaIphone + ventaXiaomi + ventaMotorola + ventaHuawei + ventaOPPO);

alert("Se vendieron en total: " + cantidadVenta + " dispositivos\nCon un valor total de: " + precioTotal + " $" + "\nEn el inventario quedan: \n- Samsung: " + cantidadSamsung + "\n- Iphone: " + cantidadIphone + "\n- Xiaomi: " + cantidadXiaomi + "\n- Motorola: " + cantidadMotorola + "\n- Huawei: " + cantidadHuawei + "\n- OPPO: " + cantidadOPPO);