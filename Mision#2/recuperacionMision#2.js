    let cantidadFamiliares = 0;
    let edad = 0;
    let estatura = 0;
    let peso = 0;
    let contador = 0;
    let parentesco = "";
    let opcion = 0;
    var resultados = "";
    var cantidad = 0;
    var sumaImc = 0;

    while (opcion !== 4) {
        opcion = parseInt(prompt(`
            Selecciona una opcion del menu:
            1. Ingrese la cantidad de Familiares a calcular.
            2. Ingresar los datos.
            3. Ver Resultados
            4. Salir del programa.
            `));
        while (isNaN(opcion) || opcion <= 0 || opcion > 5) {
            opcion = parseInt(prompt(`
            Por favor Ingrese los valores correctamente

            Selecciona una opcion del menu:
            1. Ingrese la cantidad de Familiares a calcular.
            2. Ingresar los datos.
            3. Ver Resultados
            4. Salir del programa.
            `));
        }
        switch (opcion) {
            case 1:
                cantidad = Number(prompt(`
                Ingrese la cantidad de personas a registrar
                
                Actualmente hay ${cantidad} personas registradas`));
                while (cantidad === 0 || isNaN(cantidad)) {
                    alert("Por favor ingrese un dato Numerico. \n Ingrese la cantidad de familiaresa registrar");
                    cantidad = Number(prompt(`
                    Ingrese la cantidad de personas a registrar
                    
                    Actualmente hay ${cantidad} personas registradas`));
                }
                break;
            case 2:
                
                alert("La cantidad de personas a registrar son: " + cantidad)
                for (i = 1; i <= cantidad; i++) {
                    nombre = (prompt("Ingrese el nombre de la persona"));
                    parentesco = (prompt("Ingrese el parentesco de la persona"));
                    edad = Number(prompt("Ingrese la edad de la persona recuerde que debe ser mayor de 20 años en adelante"));
                    while ((edad < 20) || (isNaN(edad))) {
                        alert("Por favor ingrese una edad positiva y que sea mayor de 20 años en adelante");
                        edad = Number(prompt("Ingrese la edad de la persona recuerde que debe ser mayor de 20 años en adelante"));
                    }
                    peso = parseFloat(prompt("Ingrese por favor el peso de la persona en Kilogramos"));
                    while ((peso < 0) || (isNaN(peso))) {
                        alert("Por favor un peso positivo.");
                        peso = Number(prompt("Ingrese por favor el peso de la persona en Kilogramos"));
                    }
                    estatura = Number(prompt("Ingrese la estatura en metros"));
                    while ((estatura < 0) || (isNaN(estatura))) {
                        alert("Por favor una estatura positivo.");
                        peso = Number(prompt("Ingrese por favor el peso de la persona en Kilogramos"));
                    }
                    imc = (peso / estatura ** 2);
                    sumaImc = sumaImc + imc;
                    console.log(imc);
                    if (imc < 18.5) {
                        alert("Su nombre es: " + nombre + " Su peso es de : " + peso + " Su altura en metros es de: " + estatura + " Su IMC es de : " + imc + " Su nivel de peso es Bajo");
                    } else {
                        if (imc >= 18.5 && imc <= 24.9) {
                            alert("Su nombre es: " + nombre + " Su peso es de : " + peso + " Su altura en metros es de: " + estatura + " Su IMC es de : " + imc + " Su nivel de peso es Normal");
                        } else {
                            if (imc >= 25.0 && imc <= 28.9) {
                                alert("Su nombre es: " + nombre + " Su peso es de : " + peso + " Su altura en metros es de: " + estatura + " Su IMC es de : " + imc + " Su nivel de peso es Sobrepeso");
                            } else {
                                if (imc >= 29.0 && imc <= 34.9) {
                                    alert("Su nombre es: " + nombre + " Su peso es de : " + peso + " Su altura en metros es de: " + estatura + " Su IMC es de : " + imc + " Su nivel de peso es Obeso I");
                                } else {
                                    alert("Su nombre es: " + nombre + " Su peso es de : " + peso + " Su altura en metros es de: " + estatura + " Su IMC es de : " + imc + " Su nivel de peso es Obeso II");
                                }
                            }
                        }
                    }

                }
                break;
            case 3:
            promediofamiliaImc=(sumaImc/cantidad);
            if (imc < 18.5) {
                alert("El promedio de IMC de la familia fue: " + promediofamiliaImc + " y Sus niveles de peso son Bajos");
            } else {
                if (imc >= 18.5 && imc <= 24.9) {
                    alert("El promedio de IMC de la familia fue: " + promediofamiliaImc + " y Sus niveles de peso son Normales");
                } else {
                    if (imc >= 25.0 && imc <= 28.9) {
                        alert("El promedio de IMC de la familia fue: " + promediofamiliaImc + " y Sus niveles de peso son Sobrepeso");
                    } else {
                        if (imc >= 29.0 && imc <= 34.9) {
                            alert("El promedio de IMC de la familia fue: " + promediofamiliaImc + " y Sus niveles de peso son Obeso I");
                        } else {
                            alert("El promedio de IMC de la familia fue: " + promediofamiliaImc + " y Sus niveles de peso son Obeso II");
                        }
                    }
                }
            }
        }
    }