
let nombre = 0;
let parentesco = 0;
let estatura = 0;
let peso = 0;
let edad = 0;
let menu = 0;
let cantidadFamiliares = 0;
let promedioImc = 0;


while (menu !== 4) {
    menu = parseInt(prompt(`
    Digite un número según 
    la acción que desea ejecutar:
    1. Ingresar familiares.
    2. Ingresar datos necesarios para los cálculos.
    3. Mostrar resultados.
    4. Salir`))
    while (isNaN(menu) || menu <= 0 || menu >= 5) {
        menu = parseInt(prompt(`
    ERROR NUMERO INVALIDO!!!
    Digite un número según 
    la acción que desea ejecutar:
    1. Ingresar familiares.
    2. Ingresar datos necesarios para los cálculos.
    3. Mostrar resultados.
    4. Salir`))
    }
    alert(menu);
    switch (menu) {
        case 1:
            cantidadFamiliares = parseInt(prompt(`
            Ingrese el numero total de familiares,
            recuerde que este dato es necesario para
            realizar continuar a la opción 2 y 3 
            para poder realizar los cálculos.
            `))
            if (isNaN(cantidadFamiliares) || cantidadFamiliares <= 0) {
                alert("ERROR INGRESE UN DATO VALIDO")
            } else {
                alert("Dato registrado correctamente")
            }
            break;
        case 2:
            if (cantidadFamiliares <= 0) {
                alert(`
                No se pueden realizar cálculos hasta que no indique
                cuantos familiares son en la opción 1 por favor 
                registrar la cantidad para continuar con el cálculo.`)

            } else {
                for (i = 1; i <= cantidadFamiliares; i++) {
                    edad = parseInt(prompt(`Ingrese la edad del familiar ${i}`));
                    if (edad < 20) {
                        alert(`Lo sentimos esta persona por la edad no cumple 
                        para calcular el imc deben tener 20 o mas años`)
                    } else {
                        nombre = prompt(`Ingrese el nombre del familiar ${i}`);
                        parentesco = prompt(`Ingrese el parentesco del familiar ${i}`);
                        estatura = Number(prompt(`Ingrese la estatura del familiar ${i}`));
                        peso = Number(prompt(`Ingrese el peso del familiar ${i}`));
                        let imc = (peso / (estatura ** 2));
                        if (imc < 18.5) {
                            alert(`
                            DATOS DEL FAMILIAR:
                            NOMBRE: ${nombre}   EDAD: ${edad}
                            PESO: ${peso}       ESTATURA: ${estatura}
                            PARENTESCO: ${parentesco}
                            El imc de ${nombre} es de ${imc} esto indica 
                            que esta en la categoria de Bajo peso.`)
                        } else if (imc >= 18.5 && imc <= 24.9) {
                            alert(`
                            NOMBRE: ${nombre}   EDAD: ${edad}
                            PESO: ${peso}       ESTATURA: ${estatura}
                            PARENTESCO: ${parentesco}
                            El imc de ${nombre} es de ${imc} esto indica 
                            que esta en la categoria de peso Normal.
                            `)
                        } else if (imc >= 25 && imc <= 28.9) {
                            alert(`
                            NOMBRE: ${nombre}   EDAD: ${edad}
                            PESO: ${peso}       ESTATURA: ${estatura}
                            PARENTESCO: ${parentesco}
                            El imc de ${nombre} es de ${imc} esto indica 
                            que esta en la categoria de Sobrepeso.
                            `)
                        } else if (imc >= 29 && imc <= 34.9) {
                            alert(`
                            NOMBRE: ${nombre}   EDAD: ${edad}
                            PESO: ${peso}       ESTATURA: ${estatura}
                            PARENTESCO: ${parentesco}
                            El imc de ${nombre} es de ${imc} esto indica 
                            que esta en la categoria de Obeso I.
                            `)
                        } else if (imc >= 35) {
                            alert(`
                            NOMBRE: ${nombre}   EDAD: ${edad}
                            PESO: ${peso}       ESTATURA: ${estatura}
                            PARENTESCO: ${parentesco}
                            El imc de ${nombre} es de ${imc} esto indica 
                            que esta en la categoria de Obeso II.
                            `)
                        } else {
                            alert("ERROR DATOS INVALIDADOS")
                        }
                        promedioImc += imc;

                    }

                }
            }
            break;
        case 3:
            promedioTotalImc = promedioImc / cantidadFamiliares;
            if (isNaN(promedioTotalImc) || promedioTotalImc <= 0) {
                alert("ERROR DATOS INVALIDOS RECUERDE QUE DEBE REGISTRAR LA INFORMACIÓN DE 1 Y 2 ANTES.")
            } else if (promedioTotalImc < 18.5) {
                alert(`La familia evaluada de ${cantidadFamiliares} personas
                se encuentra en la categoria de bajo peso
                su imc promedio fue de ${promedioTotalImc}`)
            } else if (promedioTotalImc >= 18.5 && promedioTotalImc <= 24.9) {
                alert(`La familia evaluada de ${cantidadFamiliares} personas
                se encuentra en la categoria de peso Normal
                su imc promedio fue de ${promedioTotalImc}`)
            } else if (promedioTotalImc >= 25 && promedioTotalImc <= 28.9) {
                alert(`La familia evaluada de ${cantidadFamiliares} personas
                se encuentra en la categoria de Sobrepeso
                su imc promedio fue de ${promedioTotalImc}`)
            } else if (promedioTotalImc >= 29 && promedioTotalImc <= 34.9) {
                alert(`La familia evaluada de ${cantidadFamiliares} personas
                se encuentra en la categoria de Obeso I
                su imc promedio fue de ${promedioTotalImc}`)
            } else if (promedioTotalImc >= 35) {
                alert(`La familia evaluada de ${cantidadFamiliares} personas
                se encuentra en la categoria de Obeso II
                su imc promedio fue de ${promedioTotalImc}`)
            } else {
                alert("ERROR DATOS INVALIDOS RECUERDE QUE DEBE REGISTRAR LA INFORMACIÓN DE 1 Y 2 ANTES.")
            }
            break;
        case 4:
            alert("programa finalizado");
            break;
        default:
            alert("ERROR DATO INVALIDO")
    }
}

