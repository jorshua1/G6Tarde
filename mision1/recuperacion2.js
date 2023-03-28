sumatoriaPeso = 0;
sumatoriaEstatura = 0;

bandera = 1;
do {
    opcion = parseInt(prompt("Digite la opcion que desea realizar: \n 1. Ingresar familiares. \n 2. Ingresar datos. \n 3. Mostrar resultados. \n 4. Salir"));
    while (isNaN(opcion) || opcion <= 0 || opcion > 4) {
        opcion = parseInt(prompt("Digite la opcion que desea realizar: \n 1. Ingresar familiares. \n 2. Ingresar datos. \n 3. Mostrar resultados. \n 4. Salir"));
    }

    switch (opcion) {
        case 1:
            key = parseInt(prompt("\n 1. Ingresar cantidad familiares. \n 2. Salir al menu principal "));
            while (isNaN(key) || key <=0 || key > 2) {
                key = parseInt(prompt("\n 1. Ingresar cantidad familiares. \n 2. Salir al menu principal "));
            }
            switch (key) {
                case 1:
                    cantidadFamiliares = parseFloat(prompt("Ingrese la cantidad de familiares"));
                    while (isNaN(cantidadFamiliares) || cantidadFamiliares <= 0) {
                        cantidadFamiliares = parseFloat(prompt("Ingrese una cantidad valida de familiares"));
                    }
                    break;
                
                case 2:
                    
                    break;
            
                default:
                    break;
            }
            break;

        case 2:
            for (let index = 0; index < cantidadFamiliares; index++) {
                nombre = prompt("Ingrese el nombre del familiar " +(index+1));
                while (!isNaN(nombre)) {
                    nombre = prompt("Ingrese un nombre valido del familiar " +(index+1));
                }
                parentesco = prompt("Ingrese el parentesco del familiar " +(index+1));
                while (!isNaN(parentesco)) {
                    parentesco = prompt("Ingrese el parentesco del familiar " +(index+1));
                }

                peso = parseFloat(prompt("Ingrese el peso de " +nombre));
                while (isNaN(peso) || peso <= 0) {
                    peso = parseFloat(prompt("Ingrese un peso valido de " +nombre));
                }

                sumatoriaPeso = sumatoriaPeso + peso;

                estatura = parseFloat(prompt("Ingrese la estatura de " +nombre));
                while (isNaN(estatura) || estatura <= 0) {
                    estatura = parseFloat(prompt("Ingrese una estatura valida de " +nombre));
                }

                sumatoriaEstatura = sumatoriaEstatura + estatura;

                imcPersona = peso/(estatura*estatura);

                if (imcPersona < 18.5) {
                    console.log("El IMC de su " +parentesco+ " " +nombre+ " es de: " +imcPersona);
                    console.log("Se encuentra Bajo de peso");
                } else {
                    if (imcPersona >= 18.5 && imcPersona <= 24.9) {
                        console.log("El IMC de su " +parentesco+ " " +nombre+ " es de: " +imcPersona);
                        console.log("Se encuentra Normal de peso");
                    } else {
                        if (imcPersona >= 25 && imcPersona <= 28.9) {
                            console.log("El IMC de su " +parentesco+ " " +nombre+ " es de: " +imcPersona);
                            console.log("Se encuentra en Sobrepeso");
                        } else {
                            if (imcPersona >= 29 && imcPersona <= 34.9) {
                                console.log("El IMC de su " +parentesco+ " " +nombre+ " es de: " +imcPersona);
                                console.log("Se encuentra en Obesidad 1");
                            } else {
                                console.log("El IMC de su " +parentesco+ " " +nombre+ " es de: " +imcPersona);
                                console.log("Se encuentra en Obesidad 2");
                            }
                        }
                    }
                }

            }
            break;

        case 3:
            promedioPeso = sumatoriaPeso/cantidadFamiliares;
            promedioEstatura = sumatoriaEstatura/cantidadFamiliares;

            imcFamilia = promedioPeso/(promedioEstatura*promedioEstatura);

            if (imcFamilia < 18.5) {
                alert("El IMC de su familia es de: " +imcFamilia);
                alert("Se encuentran Bajos de peso");
            } else {
                if (imcFamilia >= 18.5 && imcFamilia <= 24.9) {
                    alert("El IMC de su familia es de: " +imcFamilia);
                    alert("Se encuentran Normal de peso");
                } else {
                    if (imcFamilia >= 25 && imcFamilia <= 28.9) {
                        alert("El IMC de su familia es de: " +imcFamilia);
                        alert("Se encuentran en Sobrepeso");
                    } else {
                        if (imcFamilia >= 29 && imcFamilia <= 34.9) {
                            alert("El IMC de su familia es de: " +imcFamilia);
                            alert("Se encuentran en Obesidad 1");
                        } else {
                            alert("El IMC de su familia es de: " +imcFamilia);
                            alert("Se encuentran en Obesidad 2");
                        }
                    }
                }
            }

            break;

        case 4:
            bandera = 2;
            break;
    
        default:
            break;
    }
    
} while (bandera === 1);



