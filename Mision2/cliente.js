    let samsung = 10, iphone = 10, xiaomi = 10, motorola = 10, huawei = 10, oppo = 10;
    let samsungcant = 10, iphonecant = 10, xiaomicant = 10, motorolacant = 10, huaweicant = 10, oppocant = 10;
    let samsungvalor = 1100000, iphonevalor = 2000000, xiaomivalor = 1300000, motorolavalor = 1500000, huaweivalor = 1200000, oppovalor = 1400000;
    let preciototal = 0;
    let denuevo = 0;
    let cantidadvendidos = 0;

    let nombre = prompt("Bienvenido a celphone Store Online \n"+
                        "\n"+
                        "me regala su nombre por favor:");

    while (!isNaN(nombre)){
        console.log("Error, el nombre ha sido escrito con alguna anomalia");
        nombre = prompt("me regala su nombre por favor:");
    }

    do{
    let celular = parseInt(prompt("Por favor elija el celular a comprar: \n"+
                                "    Marcas       "+"    Valor    "+"    en stock \n"+
                                "(1) Samsung   "+"1100000"+"       "+samsungcant+"\n"+
                                "(2) iphone       "+"2000000"+"       "+iphonecant+"\n"+
                                "(3) xiaomi       "+"1300000"+"       "+xiaomicant+"\n"+
                                "(4) motorola  "+"1500000"+"       "+motorolacant+"\n"+
                                "(5) huawei      "+"1200000"+"       "+huaweicant+"\n"+
                                "(6) oppo          "+"1400000"+"       "+oppocant));

    while (isNaN(celular) || celular < 0 || celular > 6) {
        console.log("Error, opcion fuera de los parametros!!!");
        celular = (parseInt(prompt("Por favor elija el celular a comprar: \n"+
        "    Marcas       "+"    Valor    "+"    en stock \n"+
        "(1) Samsung   "+"1100000"+"       "+samsungcant+"\n"+
        "(2) iphone       "+"2000000"+"       "+iphonecant+"\n"+
        "(3) xiaomi       "+"1300000"+"       "+xiaomicant+"\n"+
        "(4) motorola  "+"1500000"+"       "+motorolacant+"\n"+
        "(5) huawei      "+"1200000"+"       "+huaweicant+"\n"+
        "(6) oppo          "+"1400000"+"       "+oppocant)));
    }

    if (celular == 1){
        cantidadvendidos++
        alert("Se ha añadido al carrito");
        samsungcant--
        preciototal = preciototal + samsungvalor;
    }
    if (celular == 2){
        cantidadvendidos++
        alert("Se ha añadido al carrito");
        iphonecant--
        preciototal = preciototal + iphonevalor;
    }   
    if (celular == 3){
        cantidadvendidos++
        alert("Se ha añadido al carrito");
        xiaomicant--
        preciototal = preciototal + xiaomivalor;
    }
    if (celular == 4){
        cantidadvendidos++
        alert("Se ha añadido al carrito");
        motorolacant--
        preciototal = preciototal + motorolavalor;
    }
    if (celular == 5){
        cantidadvendidos++
        alert("Se ha añadido al carrito");
        huaweicant--
        preciototal = preciototal + huaweivalor;
    }
    if (celular == 6){
        cantidadvendidos++
        alert("Se ha añadido al carrito");
        oppocant--
        preciototal = preciototal + oppovalor;
    }

    denuevo = parseInt(prompt("Desea agregar al carrito otro dispositivo? \n"+
                                "(1) Si \n"+
                                "(2) No"));
    while (isNaN(denuevo) || denuevo < 1 || denuevo > 2) {
        console.log("Error, opcion fuera de los parametros!!!");
        denuevo = parseInt(prompt("Desea agregar al carrito otro dispositivo? \n"+
        "(1) Si \n"+
        "(2) No"));
    }
    }while (denuevo == 1)

    alert("El valor de la compra de "+cantidadvendidos+" celular/es es de "+ preciototal+"\n"+
        "\n"+
        nombre+" Gracias por su compra");
//:)