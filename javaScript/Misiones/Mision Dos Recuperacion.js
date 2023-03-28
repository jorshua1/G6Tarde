let menu = 0;
let TEXTOMENU = `
Escoja una de las siguietes opciones
1. Ingresar familiares
2. Ingresar datos de los familiares
3. Mostrar los resultados de la familia
4. Salir del programa `;
let familiares = 0;
let persona = 0;
let nombre = " ";
let opcionParentesco = 0;
let parentesco = 0;
let estatura = 0;
let peso = 0;
let IMC = 0;
let nivelDePeso = " ";
let pesoFamilia = 0;
let IMCFamilia = 0;

menu = parseInt(prompt(TEXTOMENU));

while (isNaN(menu) || menu <= 0 || menu > 4) {
    menu = parseInt(prompt("Por favor ingrese datos validos " + TEXTOMENU));
}

while (menu !== 4) {

    if (menu == 1) {

        familiares = parseInt(prompt(`Ingrese la canditad de familiares`))
        while (isNaN(familiares) || familiares <= 0) {
            familiares = parseInt(prompt(`Porfavor ingrese bien los datos de la canditad de familiares`))
        }

    } else if (menu == 2 && familiares === 0) {
        alert("No puede ingresar datos si no hay familiares para registrar");
        familiares = parseInt(prompt(`Para continuar ingrese la cantidad de familiares`));
        while (isNaN(familiares) || familiares <= 0) {
            familiares = parseInt(prompt(`Porfavor ingrese bien los datos de la canditad de familiares`))
        }

    } else if (menu == 3 && familiares === 0) {
        alert("No puede visualizar datos si no hay familiares registrados");
        familiares = parseInt(prompt(`Para continuar ingrese la cantidad de familiares`));
        while (isNaN(familiares) || familiares <= 0) {
            familiares = parseInt(prompt(`Porfavor ingrese bien los datos de la canditad de familiares`))
        }

        if (menu == 1) {

            familiares = parseInt(prompt(`Ingrese la canditad de familiares`))
            while (isNaN(familiares) || familiares <= 0) {
                familiares = parseInt(prompt(`Porfavor ingrese bien los datos de la canditad de familiares`))
            }
        }

    }

    menu = parseInt(prompt(`
    Escoja una de las siguietes opciones
    2. Ingresar datos de los familiares
    3. Mostrar los resultados de la familia
    4. Salir del programa `));

    while (isNaN(menu) || menu <= 0 || menu > 6) {
        menu = parseInt(prompt(`INGRESE DATOS VALIDOS (solo numeros)
        
        Escoja una de las siguietes opciones
        2. Ingresar datos de los familiares
        3. Mostrar los resultados de la familia
        4. Salir del programa `))
    }

    if (menu === 2 && (estatura !== 0 || peso != 0)) {
        alert("No puede sobre escribir datos de los familiares");
        menu = 0;
    }

    if (menu === 3 && (estatura == 0 || peso == 0)) {
        alert("No puede visualizar datos si aun no ingresa datos familiares");
        menu = 0;
    }

    switch (menu) {
        case 2:

            for (persona = 1; persona <= familiares; persona++) {

                nombre = prompt("Ingrese el nombre de la persona N" + persona);
                estatura = parseFloat(prompt("Ingrese la estatura de: " + nombre));
                while (isNaN(estatura) || estatura <= 0) {
                    estatura = parseFloat(prompt("No creo que: " + nombre + " pese eso. \nPorfavor ingrese una estatura valida"));
                }
                peso = parseFloat(prompt("¿Cuanto pesa " + nombre + " en KG?"));
                while (isNaN(peso) || peso <= 0) {
                    peso = parseFloat(prompt("No creo que " + nombre + " pese eso. \nIngrese un peso valido (en Kg)"));
                }

                opcionParentesco = parseInt(prompt(`
                Ingrese el parentesco de: `+ nombre + `
                1. Abuel@               2. Padr@
                3. Ti@                  4. Herman@
                5. Hij@                 6. Sobrin@
                7. Niet@                8. Prim@
                9. Bisniet@             10. Cuñad@
                11. Yerno/Nuera         `));

                while (isNaN(opcionParentesco) || opcionParentesco <= 0 || opcionParentesco > 11) {
                    opcionParentesco = parseInt(prompt(`
                    Porfavor Ingrese datos validos 
                    de una de las siguientes opciones

                    Ingrese el parentesco de: `+ nombre + `
                    1. Abuel@               2. Padre/Madre
                    3. Ti@                  4. Herman@
                    5. Hij@                 6. Sobrin@
                    7. Niet@                8. Prim@
                    9. Bisniet@             10. Cuñad@
                    11. Yerno/Nuera`));
                }

                switch (opcionParentesco) {
                    case 1:
                        parentesco = "Abuel@";
                        break;
                    case 2:
                        parentesco = "Padre/Madre";
                        break;
                    case 3:
                        parentesco = "Ti@";
                        break;
                    case 4:
                        parentesco = "Herman@";
                        break;
                    case 5:
                        parentesco = "Hij@";
                        break;
                    case 6:
                        parentesco = "Sobrin@";
                        break;
                    case 7:
                        parentesco = "Niet@";
                        break;
                    case 8:
                        parentesco = "Prim@";
                        break;
                    case 9:
                        parentesco = "Bisniet@";
                        break;
                    case 10:
                        parentesco = "Cuñad@";
                        break;
                    case 11:
                        parentesco = "Yerno/Nuera";
                        break;
                    default:
                        break
                }

                pesoFamilia += peso;
                IMC = peso / estatura ** 2;
                IMCFamilia += IMC;

                if (IMC < 18.5) {
                    nivelDePeso = "Bajo peso";
                } else if (IMC >= 18.5 && IMC <= 24.9) {
                    nivelDePeso = "Normal";
                } else if (IMC >= 25.0 && IMC <= 28.9) {
                    nivelDePeso = "Sobre peso";
                } else if (IMC >= 29.0 && IMC <= 34.9) {
                    nivelDePeso = "Obeso I";
                } else if (IMC >= 35.0) {
                    nivelDePeso = "Obeso II";
                }

                console.log("El/la " + parentesco + " " + nombre + " tiene un IMC de: " + IMC + " y un nivel de peso en " + nivelDePeso);

            }

            break;
        case 3:

            pesoFamilia = (pesoFamilia / familiares);
            IMCFamilia = (IMCFamilia / familiares);
            alert("El peso promedio en la familia es de: " + pesoFamilia + " \nEl IMC prodemio de la failia es de: " + IMCFamilia);

            break;
        default:


            break;

    }
}



