let nombre;
let peso = 0;
let altura = 0;
let parentesco = 0;
let primermenu = 0;
let cantidadfamiliares = 0;
let menu2 = 0;

primermenu = Number(prompt("bienvenido a su algoritmo para calcular el IMC\n porfavor selecione una de las siguientes opciones:\n 1.ingresar cantidad de familiares\n 2.ingresar datos \n 3.salir "));
    while (primermenu <=0 || isNaN(primermenu) || primermenu > 3) {
        primermenu = Number(prompt("bienvenido a su algoritmo para calcular el IMC\n valor ingresado anteriormente no es valido \nporfavor selecione una de las siguientes opciones:\n 1.ingresar cantidad de familiares\n 2.ingresar datos \n 3.salir "));
    }
    while (primermenu == 2) {
        alert("lo siento no puede ingresar datos sin haber ingresado la cantidad de familiares");
        primermenu = Number(prompt("bienvenido a su algoritmo para calcular el IMC\n selecione una de las siguientes opciones:\n 1.ingresar cantidad de familiares\n 2.ingresar datos \n 3.salir "));
    }
    if(primermenu==1){
        cantidadfamiliares = Number(prompt("ingrese la cantidad de familiares a los que le realizara el calculo del IMC"));
    while (cantidadfamiliares <=0 || isNaN(cantidadfamiliares)) {
        cantidadfamiliares = Number(prompt("valor invalido \n ingrese nuevamente la cantidad de familiares a los que le realizara el calculo del IMC"));
    }
    while (menu2 !== 3) {
        menu2 = Number(prompt("bienvenido a su algoritmo para calcular el IMC\nselecione una de las siguientes opciones:\n 1.ingresar cantidad de familiares\n 2.ingresar datos \n 3.salir "));
        while (menu2 <=0 || isNaN(menu2) || menu2 > 3) {
            menu2 = Number(prompt("valor ingresado anteriormente no es valido \nporfavor selecione una de las siguientes opciones:\n 1.ingresar cantidad de familiares\n 2.ingresar datos \n 3.salir "));

        }
        switch (menu2) {
            case 1:
                alert("no se puede cambiar la cantidad de familiares");
                break;
            case 2:
                let contador = 0;
                let salida=0;
                while (contador < cantidadfamiliares) {
                    contador++
                    nombre = prompt("ingrese el nombre del familiar");
                    while (!isNaN(nombre)) {
                        nombre = prompt("porfavor ingrese un nombre valido");
                    }
                    parentesco = prompt("escriba el parentesco que tiene con esta persona");
                    while (!isNaN(parentesco)) {
                        parentesco = prompt("porfavor escriba solo letras\n escriba cual es su parentesco");
                    }
                    peso = Number(prompt("ingrese el peso en kilogramos"));
                    while (isNaN(peso) || peso <=0) {
                        peso = Number(prompt("dato invalido\n ingrese el peso en kilogramos"));
                    }
                    altura = Number(prompt("ingrese la estatura en metros"));
                    while (altura <=0 || isNaN(altura)) {
                        altura = Number(prompt("dato invalido\n ingrese la estatura en metros"));
                    }
                    let imc = peso / (altura ** 2);
                    if (imc < 18.5) {
                        alert(nombre + " " + parentesco + "tiene un indice de masa corporal de " + imc + " y es bajo");
                    }
                    else if (imc >= 18.5 && imc <= 24.9) {
                        alert(nombre + " con parentesco " + parentesco + " tiene un indice de masa corporal de " + imc + " y es normal");
                    }
                    else if (imc >= 25 && imc <= 28.9) {
                        alert(nombre + " con parentesco " + parentesco + " tiene un indice de masa corporal de " + imc + " y tiene sobre peso");
                    }
                    else if (imc >= 29 && imc <= 34.9) {
                        alert(nombre + " con parentesco " + parentesco + " tiene un indice de masa corporal de " + imc + " y tiene obesidad 1");
                    }
                    else {
                        alert(nombre + " con parentesco " + parentesco + " tiene un indice de masa corporal de " + imc + " y tiene obesidad 2");
                    }
                 salida=Number(prompt("desea cancelar la operacion?\nselecione:\n 1. si \n 2. no "));
                if(salida==1 && contador!==cantidadfamiliares){
                    contador=cantidadfamiliares
                }
                }
                break;
            case 3:
                break;
        }
    }
    }

