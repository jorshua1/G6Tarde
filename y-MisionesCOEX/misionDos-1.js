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
var CantidadPersonas = 0;
var registroPersonas = 0;
let parentescoPersona;
let nombrePersona;
let pesoPersona;
let alturaPersona;
let indiceMasaCorporal = 0;


//Desarrollo del menu principal de opciones.

while (opcionesMenu !== 4) {
    opcionesMenu = parseInt(prompt(`IMC FAMILIAR.
    Por favor ingrese el digito de su selección:
    
    1. Ingresar familiares.
    2. Ingresar datos para cálculo de IMC.
    3. Mostrar resultados de IMC.
    4. Salir del programa`)
    );

    // bucle de confirmación del menu principal e opciones.
    while (isNaN(opcionesMenu) || opcionesMenu <= 0 || opcionesMenu > 4) {
        opcionesMenu = parseInt(prompt(`¡¡¡POR FAVOR INGRESE UNA OPCIÓN VALIDA!!!
        
        1. Ingresar familiares.
        2. Ingresar datos para cálculo de IMC.
        3. Mostrar resultados de IMC.
        4. Salir del programa`));
    }
    alert("Has ingresado la opción: " + opcionesMenu);

    // Desarrollo para el sub menu de opciones.
    switch (opcionesMenu) {

        //1.Ingresar familiares.:::::MENU PRINCIPAL:::::
        case 1:
            opcionesSubMenu = 0;
            while (opcionesSubMenu !== 3) {
                opcionesSubMenu = parseInt(prompt(`INGRESAR FAMILIARES.
                1. Ingresar cantidad de familiares.
                2. Ingresar datos basicos de familiares.
                3. Regresar al menu principal.`)
                );

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
                        CantidadPersonas = parseInt(prompt(`Por favor ingrese numero de personas a registrar:`));

                        while (isNaN(CantidadPersonas) || CantidadPersonas <= 0) {
                            CantidadPersonas = parseInt(prompt(`Por favor ingrese numero de personas a registrar:`));
                        }
                        registroPersonas = CantidadPersonas;
                        alert("Se Han habilitado " + registroPersonas + " registros.");
                        break;

                    //1. Ingresar datos basicos de familiares.:::::SUBMENU INGRESAR FAMILIARES:::::
                    case 2:
                        for (i = 1; i <= CantidadPersonas; i++) {

                            parentescoPersona = prompt("Por favor ingrese parentesco de persona " + i + ":");
                            nombrePersona = prompt("Por favor ingrese nombre de su " + parentescoPersona + ":");

                            while (!isNaN(parentescoPersona) || !isNaN(nombrePersona)) {
                                alert("Por favor no usar numeros o caracteres especiales.");
                                parentescoPersona = prompt("Por favor ingrese parentesco de persona " + i + ":");
                                nombrePersona = prompt("Por favor ingrese nombre de su " + parentescoPersona + ":");
                            }
                            alert("Has registrado a " + nombrePersona + " con parentesco " + parentescoPersona);
                        }
                        break;
                }
            }
            break;

        //2.Ingresar datos para calculo de IMC.:::::MENU PRINCIPAL:::::
        case 2:
            opcionesSubMenu = 0;
            while (opcionesSubMenu !== 2) {
                opcionesSubMenu = parseInt(prompt(`INGRESAR DATOS PARA CALCULO DE IMC.
                
                1. Ingresar medidas.
                2. Regresar al menu principal.`)
                );

                while (isNaN(opcionesSubMenu) || opcionesSubMenu <= 0 || opcionesSubMenu > 2) {
                    opcionesSubMenu = parseInt(prompt(`¡¡¡POR FAVOR INGRESE UNA OPCIÓN VALIDA!!!
            
                    1. Ingresar medidas.
                    2. Regresar al menu principal.`)
                    );
                }
                //Desarrollo sub menu ingresar medidas.
                switch (opcionesSubMenu) {

                    //1. Ingresar medidas.:::::SUBMENU INGRESAR DATOS PARA CALCULO DE IMC.:::::
                    case 1:
                        for (i = 1; i <= CantidadPersonas; i++) {

                            alturaPersona = prompt("Por favor ingrese altura de persona " + i + ":");
                            pesoPersona = prompt("Por favor ingrese peso de persona " + i + ":");

                            while (isNaN(alturaPersona) || isNaN(pesoPersona)) {
                                alert("Por favor no usar texo.");
                                pesoPersona = prompt("Por favor ingrese parentesco de persona " + i + ":");
                                nombrePersona = prompt("Por favor ingrese nombre de su " + parentescoPersona + ":");

                            }
                            indiceMasaCorporal= (pesoPersona/(alturaPersona)**2);
                            alert("El IMC de la persona 1 es: " + indiceMasaCorporal);
                        }
                        break;
                }
            }
            break;

        //3.Mostrar resultados de IMC.:::::MENU PRINCIPAL:::::
        case 3:
            opcionesSubMenu = 0;
            while (opcionesSubMenu !== 3) {
                opcionesSubMenu = parseInt(prompt(`MOSTRAR RESULTADO DE IMC.
                
                1. Ver resultado por familiar.
                2. Ver resultado general de la familia.
                3. Regresar al menu principal.`)
                );

                while (isNaN(opcionesSubMenu) || opcionesSubMenu <= 0 || opcionesSubMenu > 3) {
                    opcionesSubMenu = parseInt(prompt(`¡¡¡POR FAVOR INGRESE UNA OPCIÓN VALIDA!!!
            
                    1. Ver resultado por familiar.
                    2. Ver resultado general de la familia.
                    3. Regresar al menu principal.`)
                    );
                }
            }
            break;
    }
}