let opcion,repetir = 0, cant_familiares = 0, imc_total = 0, promedio, nombre, parentesco, altura, peso, imc;
let infogeneral;

do{
opcion = parseInt(prompt("Menú de opciones:  \n"+
                        "(1) Ingresar familiares \n"+
                        "(2) Ingresar datos \n"+
                        "(3) Mostrar resultados \n"+
                        "(4) Salir"));
    while (isNaN(opcion) || opcion < 0){
        alert("Error, parametro establecido no valido, por favor elegir una opcion del menú de opciones");
        opcion = parseInt(prompt("Menú de opciones:  \n"+
                        "(1) Ingresar familiares \n"+
                        "(2) Ingresar datos \n"+
                        "(3) Mostrar resultados \n"+
                        "(4) Salir"));
    }

switch(opcion) {
    case 1:
        if (cant_familiares == 0){
        cant_familiares  = parseInt(prompt("Por favor ingresar la cantidad de familiares a realizar calculo de IMC:"));
        while(isNaN(cant_familiares) || cant_familiares < 0) {
            cant_familiares  = parseInt(prompt("Por favor ingresar la cantidad de familiares a realizar calculo de IMC:"));
        }
        console.log(cant_familiares);
        }else{
        alert("Se actualizara la cantidad de familiares a realizar el calculo de IMC");

        cant_familiares = null;
        nombre = "";
        parentesco = "";
        peso = null;
        altura = null;
        imc_total = null;
        promedio = null;
        infogeneral = "";

        cant_familiares  = parseInt(prompt("Por favor ingresar la cantidad de familiares a realizar calculo de IMC:"));
        while(isNaN(cant_familiares) || cant_familiares < 0) {
            cant_familiares  = parseInt(prompt("Por favor ingresar la cantidad de familiares a realizar calculo de IMC:"));
        }
        console.log(cant_familiares);
    }
        break;

    case 2:
        if (cant_familiares <= 0 || cant_familiares == null) {
            alert("lo lamento, no se ha establecido una cantidad de familiares a registrar.");
        }else{
        for (i = 1 ; i <= cant_familiares ; i++){
            parentesco = prompt("Por favor ingresar el parentesco del familiar");
            while(!isNaN(parentesco)){
                alert("Lo lamento, valores numericos son invalidos");
                parentesco= prompt("Por favor ingresar el parentesco del familiar");
            }
            nombre = prompt("Por favor ingresar el nombre del familiar");
            while(!isNaN(nombre)){
                alert("Lo lamento, valores numericos son invalidos");
                nombre = prompt("Por favor ingresar el nombre del familiar");
            }
            peso = parseInt(prompt("Por favor ingresar el peso del familiar en Kilogramos"));
            while(isNaN(peso) || peso < 0){
                alert("Lo lamento, valores de texto son invalidos");
                peso = prompt("Por favor ingresar el peso del familiar en Kilogramos");
            }
            altura = parseFloat(prompt("Por favor ingresar la altura del familiar en Metros"));
            while(isNaN(altura) || altura < 0){
                alert("Lo lamento, valores de texto son invalidos");
                altura = parseFloat(prompt("Por favor ingresar la altura del familiar en Metros"));
            }
            
            imc = peso / (altura * altura);

            alert("\n"+"----------------------------------------\n"+
                    "el indice de masa corporal del familiar: \n"+
                    nombre + " de parentesco "+ parentesco +"\n"+
                    "es de: "+imc);

            alert("Registro del familiar realizado de manera exitosa");

            infogeneral += "\n"+"----------------------------------------\n"+
                            "el indice de masa corporal del familiar: \n"+
                            nombre + " de parentesco "+ parentesco +"\n"+
                            "es de: "+imc;

            imc_total = imc_total + imc;
        }
    }
        break;

    case 3:
        if(infogeneral != null){
            alert(infogeneral);
            promedio = imc_total/cant_familiares;
            if (promedio < 18.5){
                alert("El promedio de IMC de los familiares indica que estan en un estado de bajo peso.");
            }else if (promedio > 18.5 && promedio < 24.9){
                alert("El promedio de IMC de los familiares indica que estan en un estado de peso normal");
            }else if (promedio > 25 && promedio < 28.9){
                alert("El promedio de IMC de los familiares indica que estan en un estado de sobrepeso.");
            }else if (promedio > 29 && promedio < 34.9){
                alert("El promedio de IMC de los familiares indica que estan en un estado de sobrepeso 1.");
            }else if (promedio > 35){
                alert("El promedio de IMC de los familiares indica que estan en un estado de sobrepeso 2.");
            }else{

            }
        }else{
            alert("Lo lamento, no hay datos guardados.");
        }

        break;

    case 4:
        repetir = 1;
        break;

    default:
        alert("Error, el valor registrado no aparece en el menú de opciones");
        break;
    }
}while(repetir == 0);
alert("Gracias por usar este programa :3");
//:(
