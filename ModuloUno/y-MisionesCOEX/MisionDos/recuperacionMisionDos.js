/*
MISION – USO DE CONDICIONALES Y CICLOS
Muchos fueron los cambios que promovió la pandemia generada por el COVID-19 y sus variantes;
por mencionar algunos: la alimentación, el control de peso, entre otros. 

Leidy se encuentra preocupada por la salud de su familia, y encuentra un artículo para llevar un control de sobre el
peso, conocido como "Índice de masa corporal" (IMC) para adultos de 20 años o más. 

El IMC permite establecer una clasificación al relacionar la estura en metros, con el peso en Kilogramos; la
relación está determinada por el peso (Kg)/ estatura (m) elevada a la 2, que determina un índice y
a su vez el nivel de peso (bajo, normal, sobrepeso, obeso).

IMC                Nivel de peso
Menor a 18,5       Bajo peso
18,5-24,9          Normal
25,0 – 28,9        Sobrepeso
29,0-34,9          Obeso I
35,0 en adelante   Obeso II

Planteamiento de la misión
Con respecto a la situación planteada, ¿De qué manera crees que Leidy puede automatizar el
control del nivel de peso para sus familiares con base al IMC? Considerando que la frecuencia y
cantidad de integrantes del grupo familiar son numerosos, demandando mucho tiempo para
realizar los cálculos de forma manual, y la alta probabilidad de equivocarse; entonces, Leidy decide
diseñar un algoritmo, que simplifique el tiempo empleado, minimice la probabilidad de error
humano al realizar las operaciones y control con el registro del nombre y parentesco a cada uno de
sus familiares.

Analizar, identificar y declarar las variables que considere necesarias para realizar los cálculos del
IMC y los estados relacionados con el nivel de peso.

Determinar desde las variables identificadas, cual(es) corresponden a los datos de entrada, las
operaciones entre ellas que dan solución al reto, y cual(es) son los datos para presentar como
salida.

Diseñar el algoritmo que implemente la navegación a través de un menú con las siguientes
opciones: Ingresar familiares, ingresar datos necesarios para realizar los cálculos, mostrar
resultados, salir.
*/

let opcionesMenu = 0;
let opcionesSubMenu = 0;
var registroPersonas = 0;
var contadorDatosFamiliares = 0;
var contadorDatosCalculIMC = 0;
let parentescoPersona;
let nombrePersona;
let pesoPersona = 0;
let alturaPersona = 0;
let indiceMasaCorporal = 0;
let indiceMasaCorpFamilia = 0;

//Desarrollo del menu principal de opciones.

while (opcionesMenu !== 3) {

    opcionesMenu = parseInt(prompt(`IMC FAMILIAR.
    Por favor ingrese el digito de su selección:
    
    1. Ingresar familiares.
    2. Cálculo de IMC.
    3. Salir del programa`));

    // bucle de confirmación del menu principal e opciones.
    while (isNaN(opcionesMenu) || opcionesMenu <= 0 || opcionesMenu > 3) {

        opcionesMenu = parseInt(prompt(`¡¡¡POR FAVOR INGRESE UNA OPCIÓN VALIDA!!!
        
        1. Ingresar familiares.
        2. Cálculo de IMC.
        3. Salir del programa`));
    }

    // Desarrollo para el sub menu de opciones.
    switch (opcionesMenu) {

        //1.Ingresar familiares.:::::MENU PRINCIPAL:::::
        case 1:
            opcionesSubMenu = 0;
            while (opcionesSubMenu !== 3) {

                opcionesSubMenu = parseInt(prompt(`INGRESAR FAMILIARES.
                1. Ingresar cantidad de familiares.
                2. Ingresar datos basicos de familiares.
                3. Regresar al menu principal.`));

                while (isNaN(opcionesSubMenu) || opcionesSubMenu <= 0 || opcionesSubMenu > 3) {

                    opcionesSubMenu = parseInt(prompt(`¡¡¡POR FAVOR INGRESE UNA OPCIÓN VALIDA!!!
                    
                    1. Ingresar cantidad de familiares.
                    2. Ingresar datos basicos de familiares.
                    3. Regresar al menu principal.`));
                }

                //Desarrollo sub menu ingresar  familiares.
                switch (opcionesSubMenu) {

                    //1. Ingresar cantidad de familiares.:::::SUBMENU INGRESAR FAMILIARES:::::
                    case 1:

                        registroPersonas = parseInt(prompt(`Por favor ingrese numero de personas a registrar:`));

                        while (isNaN(registroPersonas) || registroPersonas <= 0) {

                            registroPersonas = parseInt(prompt(`Por favor ingrese numero de personas a registrar:`));
                        }

                        contadorDatosFamiliares = registroPersonas;
                        contadorDatosCalculIMC = registroPersonas;

                        alert("Se Han habilitado " + registroPersonas + " registros.");
                        break;

                    //2. Ingresar datos basicos de familiares.:::::SUBMENU INGRESAR FAMILIARES:::::
                    case 2:

                        for (i = 1; i <= contadorDatosFamiliares; i++) {

                            if (contadorDatosFamiliares >= i) {

                                parentescoPersona = prompt("Por favor ingrese parentesco de persona " + i + ":");
                                nombrePersona = prompt("Por favor ingrese nombre de su " + parentescoPersona + ":");

                                while (!isNaN(parentescoPersona) || !isNaN(nombrePersona)) {

                                    alert("Por favor no usar numeros o caracteres especiales.");
                                    parentescoPersona = prompt("Por favor ingrese parentesco de persona " + i + ":");
                                    nombrePersona = prompt("Por favor ingrese nombre de su " + parentescoPersona + ":");
                                }

                                alert("Has registrado a " + nombrePersona + " con parentesco " + parentescoPersona);

                            } else {
                            }
                        }

                        alert("Has terminado los registros habilitados, para ingresar más personas por favor digita la opción 1.");
                        contadorDatosFamiliares = 0;

                        break;
                    default:
                }
            }
            break;

        //2.Cálculo de IMC.:::::MENU PRINCIPAL:::::
        case 2:

            opcionesSubMenu = 0;

            while (opcionesSubMenu !== 2) {

                opcionesSubMenu = parseInt(prompt(`INGRESAR DATOS PARA CALCULO DE IMC.
                
                1. Ingresar medidas.
                2. Regresar al menu principal.`));

                while (isNaN(opcionesSubMenu) || opcionesSubMenu <= 0 || opcionesSubMenu > 2) {

                    opcionesSubMenu = parseInt(prompt(`¡¡¡POR FAVOR INGRESE UNA OPCIÓN VALIDA!!!
            
                    1. Ingresar medidas.
                    2. Regresar al menu principal.`));
                }

                //Desarrollo sub menu ingresar medidas.
                switch (opcionesSubMenu) {

                    //1. Ingresar medidas.:::::SUBMENU INGRESAR DATOS PARA CALCULO DE IMC.:::::
                    case 1:

                        for (i = 1; i <= contadorDatosCalculIMC; i++) {

                            if (contadorDatosCalculIMC >= i) {

                                alturaPersona = parseFloat(prompt("Por favor ingrese altura de persona " + i + " en metros:"));
                                pesoPersona = parseFloat(prompt("Por favor ingrese peso de persona " + i + " en kg:"));

                                while (isNaN(alturaPersona) || isNaN(pesoPersona)) {

                                    alert("Por favor no usar texto.");
                                    alturaPersona = parseFloat(prompt("Por favor ingrese altura de persona " + i + " en metros:"));
                                    pesoPersona = parseFloat(prompt("Por favor ingrese peso de persona " + i + " en kg:"));
                                }

                                //Calculo de IMC individual por familiar.
                                indiceMasaCorporal = (pesoPersona / (alturaPersona) ** 2);

                                if (indiceMasaCorporal < 18.5) {
                                    alert("El IMC de la persona " + i + " es: " + indiceMasaCorporal + "\n Según la infomación su estado es Bajo Peso");
                                } else if (indiceMasaCorporal >= 18.5 && indiceMasaCorporal <= 24.9) {
                                    alert("El IMC de la persona " + i + " es: " + indiceMasaCorporal + "\n Según la infomación su estado es Normal");
                                } else if (indiceMasaCorporal >= 25 && indiceMasaCorporal <= 28.9) {
                                    alert("El IMC de la persona " + i + " es: " + indiceMasaCorporal + "\n Según la infomación su estado es Sobrepeso");
                                } else if (indiceMasaCorporal >= 29 && indiceMasaCorporal <= 34.9) {
                                    alert("El IMC de la persona " + i + " es: " + indiceMasaCorporal + "\n Según la infomación su estado es Obeso I");
                                } else if (indiceMasaCorporal > 35) {
                                    alert("El IMC de la persona " + i + " es: " + indiceMasaCorporal + "\n Según la infomación su estado es Obeso II");
                                } else {
                                }
                
                            } else {
                            }

                            //Calculo de IMC total de los miembros de la familia.
                            if (indiceMasaCorporal > 0) {
                                indiceMasaCorpFamilia = indiceMasaCorpFamilia + indiceMasaCorporal;
                            }

                            if ((indiceMasaCorpFamilia / i) < 18.5) {
                                alert("El IMC de la familia es de: " + (indiceMasaCorpFamilia / i) + "\n Según la infomación el estado de la familia es Bajo Peso");
                            } else if ((indiceMasaCorpFamilia / i) >= 18.5 && (indiceMasaCorpFamilia / i) <= 24.9) {
                                alert("El IMC de la familia es de: " + (indiceMasaCorpFamilia / i) + "\n Según la infomación el estado de la familia es Normal");
                            } else if ((indiceMasaCorpFamilia / i) >= 25 && (indiceMasaCorpFamilia / i) <= 28.9) {
                                alert("El IMC de la familia es de: " + (indiceMasaCorpFamilia / i) + "\n Según la infomación el estado de la familia es Sobrepeso");
                            } else if ((indiceMasaCorpFamilia / i) >= 29 && (indiceMasaCorpFamilia / i) <= 34.9) {
                                alert("El IMC de la familia es de: " + (indiceMasaCorpFamilia / i) + "\n Según la infomación el estado de la familia es Obeso I");
                            } else if ((indiceMasaCorpFamilia / i) > 35) {
                                alert("El IMC de la familia es de: " + (indiceMasaCorpFamilia / i) + "\n Según la infomación el estado de la familia es Obeso II");
                            } else {
                            }
                        }

                        alert("Has terminado los registros habilitados, para ingresar más personas por favor regresar al menu principal.");
                        contadorDatosCalculIMC = 0;

                        break;
                    default:
                }
            }
            break;
        default:
    }
}