/*Planteamiento de la misión
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
resultados, salir.*/
let menu = 0;
let numeroDeFamilares = 0;
let contador = 0;
let nombreDelFamiliar = 0;
let edadDelFamiliar = 0;
let estaturaDelFamiliar = 0;
let pesoDelFamiliar = 0;
let parentescoFamiliar = 0;
let imc = 0;
let imcFamiliar = 0;
let promedioPeso = 0;
let promedioEstatura = 0;
let sumaPesos = 0;
let sumaEstaturas = 0;

do {

    menu = Number(prompt("INGRESE LA OPCIÓN QUE DESEA \n 1. Ingresar familiares \n 2. Ingresar datos para los calculos \n 3. Mostrar resultados \n 4. Salir"))
    while (isNaN(menu) || menu < 1 || menu > 4) {
        menu = Number(prompt("INGRESE LA OPCIÓN QUE DESEA \n 1. Ingresar familiares \n 2. Ingresar datos para los calculos \n 3. Mostrar resultados \n 4. Salir"))
    }
    switch (menu) {
        case 1:
            numeroDeFamilares = Number(prompt("INGRESAR LA CANTIDAD DE FAMILIARES"));
            while (isNaN(numeroDeFamilares) || numeroDeFamilares <= 0) {
                numeroDeFamilares = Number(prompt("INGRESAR NUMERO VALIDO"));
            }

            break;
        case 2:
            for (contador = 1; contador <= numeroDeFamilares; contador++) {

                parentescoFamiliar = (prompt("QUE PARENTEZCO TIENE CON LEIDY"));
                while (!isNaN(parentescoFamiliar)) {
                    parentescoFamiliar = (prompt("INGRESE UN PARENTESCO VALIDO"));
                }

                nombreDelFamiliar = (prompt("INGRESE SU NOMBRE"))
                while (!isNaN(nombreDelFamiliar)) {
                    nombreDelFamiliar = (prompt("INGRESE UN NOMBRE VALIDO"))
                }

                edadDelFamiliar = Number(prompt("INGRESE SU EDAD (PARA MAYORES DE 19 AÑOS)"))
                while (isNaN(edadDelFamiliar) || edadDelFamiliar < 20) {
                    edadDelFamiliar = Number(prompt("INGRESE UNA EDAD VALIDA"))
                }

                pesoDelFamiliar = Number(prompt("INGRESE SU PESO EN (KG)"))
                while(isNaN(pesoDelFamiliar) || pesoDelFamiliar < 0){
                    pesoDelFamiliar = Number(prompt("INGRESE UN PESO VALIDO"))
                }

                sumaPesos = sumaPesos + pesoDelFamiliar;

                estaturaDelFamiliar = Number(prompt("INGRESE SU ESTATURA EN (METROS)"))
                while(isNaN(estaturaDelFamiliar) || estaturaDelFamiliar < 0){
                    estaturaDelFamiliar = Number(prompt("INGRESE UNA ESTATURA VALIDA"))
                }

                sumaEstaturas = sumaEstaturas + estaturaDelFamiliar

                imc = (pesoDelFamiliar)/(estaturaDelFamiliar)**2

                if(imc < 18.5){
                    console.log("Parentesco " + parentescoFamiliar+ "\n Nombre " + nombreDelFamiliar+ "\n Edad " + edadDelFamiliar+ " \n Peso " + pesoDelFamiliar+ "\n Estatura " + estaturaDelFamiliar+ "\n IMC " + imc+ "\n SU PESO ESTÁ EN UN NIVEL BAJO ");
                }else if(imc >= 18.5 && imc <= 24.9){
                    console.log("Parentesco " + parentescoFamiliar+ "\n Nombre " + nombreDelFamiliar+ "\n Edad " + edadDelFamiliar+ " \n Peso " + pesoDelFamiliar+ "\n Estatura " + estaturaDelFamiliar+ "\n IMC " + imc+ "\n SU PESO ESTÁ EN UN NIVEL NORMAL ");
                }else if(imc >= 25.0 && imc <= 28.9){                    
                    console.log("Parentesco " + parentescoFamiliar+ "\n Nombre " + nombreDelFamiliar+ "\n Edad " + edadDelFamiliar+ " \n Peso " + pesoDelFamiliar+ "\n Estatura " + estaturaDelFamiliar+ "\n IMC " + imc+ "\n SU PESO ESTÁ EN UN NIVEL SOBREPESO ");
                }else if( imc >= 29.0 && imc <= 34.9){
                    console.log("Parentesco " + parentescoFamiliar+ "\n Nombre " + nombreDelFamiliar+ "\n Edad " + edadDelFamiliar+ " \n Peso " + pesoDelFamiliar+ "\n Estatura " + estaturaDelFamiliar+ "\n IMC " + imc+ "\n SU PESO ESTÁ EN UN NIVEL OBESO I ");
                }else if( imc > 35.0){
                    console.log("Parentesco " + parentescoFamiliar+ "\n Nombre " + nombreDelFamiliar+ "\n Edad " + edadDelFamiliar+ " \n Peso " + pesoDelFamiliar+ "\n Estatura " + estaturaDelFamiliar+ "\n IMC " + imc+ "\n SU PESO ESTÁ EN UN NIVEL OBESO II ");
                } 

            }

            break;

            case 3:
            promedioPeso = sumaPesos/numeroDeFamilares;
            promedioEstatura = sumaEstaturas/numeroDeFamilares;
            

            imcFamiliar = (promedioPeso)/(promedioEstatura)**2
            
            if(imcFamiliar < 18.5){
                alert("EL NIVEL DE PESO FAMILIAR ES BAJO")
            }else if(imcFamiliar >= 18.5 && imcFamiliar <= 24.9){
                alert("EL NIVEL DE PESO FAMILIAR ES NORMAL")
            }else if(imcFamiliar >= 25.0 && imcFamiliar <= 28.9){
                alert("EL NIVEL DE PESO FAMILIAR ES SOBREPESO")
            }else if( imcFamiliar >= 29.0 && imcFamiliar <= 34.9){
                alert("EL NIVEL DE PESO FAMILIAR ES OBESO I")
            }else if( imcFamiliar > 35.0){
                alert("EL NIVEL DE PESO FAMILAR ES OBESO II")
            }
            alert("EL IMC TOTAL DE LA FAMILIA ES DE " +imcFamiliar);

            
            break;

        default:
            break;
    }


} while (menu !== 4)