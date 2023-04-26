
let nombre = prompt("Ingrese su nombre ");
let genero = prompt("Ingrese su género masculino o femenino");

if ((genero == "Femenino" || genero == "femenino") && (nombre[0] <= "M") || ((genero == "Masculino" || genero == "masculino") && (nombre[0] >= "N"))){
    alert("El usuario " + nombre + " pertenece al grupo A");
}else if((genero == "Femenino" || genero == "femenino") && (nombre[0] >= "M") || ((genero == "Masculino" || genero == "masculino") && (nombre[0] <= "N"))){
    alert("El usuario " + nombre + " pertenece al grupo B");
}else {
    alert("ingrese datos validos")}



    /////


    let cantidadSamsung = 0;
let cantidadIphone = 0;
let cantidadHuawei = 0;
let cantidadMotorola = 0;
let cantidadXiaomi = 0;
let cantidadOppo = 0;
let opcionSubmenu = 0;
let cantidad = 0;
let opcion = 0;

while (opcion !== 5) {
    opcion = parseInt(prompt(`
Selecciona una opcion del menu:
1. Ingresar datos al inventario.
2. Ver Inventario.
3. Realizar una venta.
4. Ver dinero recaudado.
5. Salir del programa.
`))
    while (isNaN(opcion) || opcion <= 0 || opcion > 6) {
        opcion = parseInt(prompt(`
    JORSHUA INGRESE BIEN LO VALORES!!!
    
    Selecciona una opcion del menu:
    1. Ingresar datos al inventario.
    2. Ver Inventario.
    3. Realizar una venta.
    4. Ver dinero recaudado.
    5. Salir del programa.
    `))
    }
    alert(opcion)
    switch (opcion) {
        case 1:
            opcionSubmenu=0
            while (opcionSubmenu !== 7) {

                opcionSubmenu = parseInt(prompt(`
            A que celulares desea agregarles existencias:

            1. Samsung.
            2. Iphone.
            3. Huawei.
            4. Xiaomi
            5. Motorola.
            6. Oppo.
            7. No registrar y salir.
            `))
                while (isNaN(opcionSubmenu) || opcionSubmenu <= 0 || opcionSubmenu > 8) {
                    opcionSubmenu = parseInt(prompt(`
                Ingrese una opcion correcta
                A que celulares desea agregarles existencias:
    
                1. Samsung.
                2. Iphone.
                3. Huawei.
                4. Xiaomi
                5. Motorola.
                6. Oppo.
                7. No registrar y salir.
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
                        cantidadIphone += parseInt(prompt(`
                    Ingrese la cantidad de celulares que desea agregar:

                    Actualmente hay ${cantidadIphone} celulares de esta marca`));
                        break;

                    case 3:
                        cantidadHuawei += parseInt(prompt(`
                    Ingrese la cantidad de celulares que desea agregar:

                    Actualmente hay ${cantidadHuawei} celulares de esta marca`));
                        break;

                    case 4:
                        cantidadXiaomi += parseInt(prompt(`
                    Ingrese la cantidad de celulares que desea agregar:

                    Actualmente hay ${cantidadXiaomi} celulares de esta marca`));
                        break;
                    case 5:
                        cantidadMotorola += parseInt(prompt(`
                    Ingrese la cantidad de celulares que desea agregar:

                    Actualmente hay ${cantidadMotorola} celulares de esta marca`));
                        break;

                    case 6:
                        cantidadOppo += parseInt(prompt(`
                    Ingrese la cantidad de celulares que desea agregar:

                    Actualmente hay ${cantidadOppo} celulares de esta marca`));
                        break;
                    case 7:
                        alert("Volviendo al menu anterior");
                        break;
                    default:
                        alert("Ingrese un valor valido");
                        break;
                }
            }
    }

}