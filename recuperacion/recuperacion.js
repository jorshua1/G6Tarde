

let nombre = 0;
let parentesco = 0;
let estatura = 0;
let peso = 0;
let edad = 0;
let opcion = 0;
let cantidadFamiliares = 0;
let datosFamiliar = 0;

while (opcion !== 4) {
    opcion = parseInt(prompt(`
        Selecciona una opción del Menú:
        1. Ingresar familiares.
        2. Ingresar datos del familiar para realizar el cálculo.
        3. Mostrar resultados.
        4. Salir del programa.
        `))
    while (isNaN(opcion) || opcion <= 0 || opcion >= 5) {
        opcion = parseInt(prompt(`
        ERROR POR FAVOR ELEGIR UN NUMERO ENTRE LAS OPCIONES(1,2,3,4)
        Selecciona una opción del Menú:
        1. Ingresar familiares.
        2. Ingresar datos del familiar para realizar el cálculo.
        3. Mostrar resultados.
        4. Salir del programa.
        `))
    }
    alert("Seleccionaste la opción" + opcion)
    switch (opcion) {
        case 1:
            cantidadFamiliares = parseInt(prompt(`
            Por favor digite la cantidad total
            de familiares que va a registrar
            (Recuerde este registro solo se puede hacer
            una vez por familia)
            `))
            if (isNaN(cantidadFamiliares) || cantidadFamiliares <= 0) {
                alert("ERROR recuerde que solo puede ingresar un numero indicando la cantidad de familiares")
            } else {
                alert("Dato registrado correctamente.")
            }
            break;
        case 2:
            datosFamiliar = 0;
            if (cantidadFamiliares > 0){ 
                while (datosFamiliar !== 7) {
                    datosFamiliar = parseInt(prompt(`
                A continuacion vamos a llenar 
                los siguientes datos:
                1.Nombre
                2.Parentesco
                3.Estatura
                4.Edad
                5.peso
                6.Conocer el imc del familiar
                7.Regresar al Menú anterior
                Datos obligatorios para el cálculo son 
                Nombre, estatura y peso(1,3,5)`))
                    while (isNaN(datosFamiliar) || datosFamiliar <= 0 || datosFamiliar >= 8) {
                        datosFamiliar = parseInt(prompt(`
                    ERROR POR FAVOR SELECCIONAR UN NUMERO VALIDO
                    A continuacion vamos a llenar 
                    los siguientes datos:
                    1.Nombre
                    2.Parentesco
                    3.Estatura
                    4.Edad
                    5.peso
                    6.Conocer el imc del familiar
                    7.Regresar al menú anterior
                    Datos obligatorios para el cálculo son 
                    Nombre, estatura y peso(1,3,5)`))
                    } }

                
            }else{
                alert("ERROR no se pueden ingresar los datos debido a que no ha registrado ningun familiar por favor ingrese a la opción 1")
            }
            switch (datosFamiliar) {
                case 1:
                    nombre = prompt("Ingrese el nombre del Familiar");
                    break;
                case 2:
                    parentesco = prompt("Ingrese el parentesco que tiene con el familiar");
                    break;
                case 3:
                    estatura = parseInt(prompt("Ingrese la estatura en metros por ejemplo: 1.70"));
                    while (isNaN(estatura) || estatura <= 0) {
                        estatura = parseInt(prompt(`
                            ERROR POR FAVOR DIGITAR UN NUMERO VALIDO
                            Ingrese la estatura en metros para
                            poder realizar el cálculo ej: 1.70`))
                    }
                    break;
                case 4:
                    edad = parseInt(prompt("Ingrese la edad del familiar"))
                    while (isNaN(edad) || edad <= 0) {
                        edad = parseInt(prompt(`
                        ERROR INGRESE UN DATO VALIDO
                        Ingrese la edad del familiar`))
                    }
                    break;
                case 5:
                    peso = parseInt(prompt("Ingrese el peso del familiar en kilogramos"))
                    while (isNaN(peso) || peso <= 0) {
                        peso = parseInt(prompt(`
                            ERROR INGRESE UN DATO VALIDO
                            Ingrese el peso del familiar`))
                    }
                    break;
                case 6:
                    if (isNaN(peso) || peso <= 0) {
                        alert("Error aun no ha registrado los datos requeridos para el cálculo")
                    } else {
                        imc = (peso / (estatura ** 2));
                        if (imc <= 18.5) {
                            alert(`
                                El imc de ${nombre} es de ${imc} su nivel de peso segun este
                                imc es de nivel bajo.
                                datos utilizados del familiar para el cálculo:
                                ${estatura}
                                ${peso}
                                demas datos del familiar:
                                parentesco: ${parentesco}
                                edad: ${edad}`)
                        }
                    }
                    break;
                case 7:
                    alert("volviendo al menu anterior");
                    break;
                default:
                    alert("ingrese un valor valido")
            }
    

    break;
        case 3:
    break;

        default:
    alert("ingrese un valor valido")
}
}

