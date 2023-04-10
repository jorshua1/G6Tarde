//ESTRUCTURAS DE DATOS//
//datos inmutables
saludo = "Hola"
saludo[0] = "k"
console.log(saludo);
//datos mutables
let array = [1, 2, 3, 4];
array[2] = "x";
console.log(array);




//ARREGLOS
let arregloNumerico = [5, 6, 7, 8, 9];
console.log(arregloNumerico);
let arregloCadenaCaracteres = ["casa", "carro", "familia", "mascotas"];
console.log(arregloCadenaCaracteres);
let arregloMixtos = [arregloNumerico, arregloCadenaCaracteres];
console.log(arregloMixtos);
let arregloCubico = [];

for (let i = 0; i < arregloNumerico.length; i++) {
    arregloCubico[i] = arregloNumerico[i] ** 3
}
console.log(arregloNumerico.length)
let hola = "hola";
console.log(hola.length)
console.log(arregloCubico);
//ejemplo
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let cubico = [];
let datos = Number(prompt("ingrese la cantidad de numeros que quiere en el arreglo"))
for (let i = 0; i < datos; i++) {
    cubico[i] = prompt("ingrese un numero")
    console.log(`Acaba de ingresar
    ${cubico[i]} en la posicion ${i} del arreglo`);
}
console.log(cubico);
//OBJETOS
//Objeto anidado
let celular = {
    marca: "xiaomi",
    color: "negro",
    sistema: "android",
    precio: {
        moneda: "colombiana",
        valor: {
            cosa: 510000,
            bola: "HOLA"
        }
    }
}
console.log(celular.precio.valor.bola)

//ARREGLOS :::: > MATRICES
let tabla = new array();
let tabla2 = [];

for (let fila = 0; fila < 4; fila++) {
    console.log(`creando fila ${fila + 1}`);
    tabla[fila] = new array();
    for (let columna = 0; columna < 2; columna++) {
        console.log(`Esta insertando datos en la fila
        ${fila + 1} y columna ${columna + 1}`);
        tabla[fila][columna] = prompt("ingrese algo");
        console.log(`se ingresaron los datos de la fila
        ${fila + 1} y columna ${columna + 1}`);
    }
}
//EJERCICIOS DE ALGORITMIA
/* DESARROLLE UN ALGORITMO QUE REALICE LA SUMATORIA DE 10 NUMEROS ALMACENADOS EN UN VECTOR*/
let sumatoria = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let promediosumatoria = 0;
for (i = 0; i < sumatoria.length; i++) {
    promediosumatoria += sumatoria[i];
}
console.log(promediosumatoria);

/* ESCRIBIR UN PROGRAMA QUE ALMACENE EN UN ARREGLO UNIDIMENSIONAL 100 DATOS E INDIQUE CUANTOS
ELEMENTOS POSITIVOS HAY EN EL MISMO*/
let contadorPositivos = 0;
let array = [];
for (i = 0; i < 100; i++) {
    array[i] = Math.floor(Math.random() * (100 - (-100))) + (-100);
    (array[i] >= 0) {
        contadorPositivos++;
    }
} console.log(`En el arreglo existen ${contadorPositivos} datos positivos`);

/*CREAR UNA MATRIZ NUMERICA DE 3X3 QUE PERMITA ALMACENAR UN NUMERO DE CADA POSICION Y
MOSTRARLOS EN PANTALLA*/
let tabla = [];

for (fila = 0; fila < 3; fila++) {
    console.log(`creando fila ${fila + 1}`);
    tabla[fila] = [];
    for (let columna = 0; columna < 3; columna++) {
        console.log(`Esta insertando datos en la fila
        ${fila + 1} y columna ${columna + 1}`);
        tabla[fila][columna] = prompt("ingrese algo");
        console.log(`se ingresaron los datos de la fila
        ${fila + 1} y columna ${columna + 1} el dato registrado es ${tabla[fila]}`);
    }
}
/*HACER EL CALCULO PROMEDIO DE 5 NOTAS EN UN ALGORITMO Y DEFINIR SI SACA EXCELENTE, ACEPTABLE , SOBRESALIENTE Y DEFICIENTE 
PARA PASAR EL AÑO CON UNA SOLA VARIABLE TIPO VECTOR O ARRAY*/
let notas = [];
let promedioNotas = 0;
for (fila = 1; fila < 6; fila++) {
    notas[fila] = parseFloat(prompt(`ingrese la nota ${fila}`));
    if (isNaN(notas[fila]) || notas[fila] < 0 || notas[fila] > 5) {
        console.log(`ERROR DATO INVALIDO RECUERDE QUE LAS NOTAS VAN DE 0 HASTA 5`);
    } else {
        promedioNotas += notas[fila];
    }
}
let promedioFinal = (promedioNotas / 5);
if (promedioFinal <= 5 && promedioFinal >= 4.5) {
    console.log(`su promedio fue ${promedioFinal} sacas EXCELENTE.`);
} else if (promedioFinal <= 4.5 && promedioFinal >= 4) {
    console.log(`su promedio fue ${promedioFinal} sacas SOBRESALIENTE.`);
} else if (promedioFinal <= 4 && promedioFinal >= 3) {
    console.log(`su promedio fue ${promedioFinal} sacas ACEPTABLE.`);
} else if (promedioFinal < 3) {
    console.log(`su promedio fue ${promedioFinal} sacas DEFICIENTE.`);
} else {
    console.log(`ERROR DATO INVALIDO RECUERDE QUE LAS NOTAS VAN DE 0 HASTA 5`);
}

/*DISEÑAR UN ALGORITMO QUE CREE UNA MATRIZ UNIDIMENSIONAL DE
10 POSICIONES NUMERICAS, DESPUES LAS IMPRIMA EN PANTALLA Y LUEGO PERMITA
BUSCAR UN NUMERO ALMACENADO PREVIAMENTE, SI LO ENCUENTRA MUESTRE EN QUE POSICION
ESTA Y SI NO, QUE MUESTRE "VALOR NO ENCONTRADO". */
let array = [];

for (let i = 1; i < 11; i++) {
    array[i] = prompt("ingrese un numero")
    console.log(`Acaba de ingresar
    ${array[i]} en la posicion ${i} del arreglo`);
}

/*HACER UN PROGRAMA QUE INICIALICE UN VECTOR DE NUMEROS CON VALORES ALEATORIOS
Y POSTERIOR ORDENE LOS ELEMENTOS DE MENOR A MAYOR*/
let vector = [45,12,36,89,50];
/*let tamaño = parseInt(prompt("ingrese el tamaño del vector"));*/
for(i=1; i<5; i++){
    for(j=0; j<5-1; j++){
        if(vector[j] > vector[j+1]){
temp = vector[j];
vector[j]= vector[j+1];
vector[j+1]=temp;
        }
    }
}console.log(vector[j+1]);