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
var array = new Array(10);

for (var i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100);
}
for (var i = 0; i < array.length; i++) {
    console.log("array[" + i + "] =" + array[i]);
}
var numeroBuscado = prompt("Ingrese el número a buscar:");
var encontrado = false;

for (var i = 0; i < array.length; i++) {
    if (array[i] === parseInt(numeroBuscado)) {
        console.log("El número " + numeroBuscado + " se encuentra en la posición " + i);
        encontrado = true;
        break; // Sale del ciclo for si se encuentra el número
    }
}

if (!encontrado) {
    console.log("VALOR NO ENCONTRADO");
}
//FORMA 2 
// Crear una matriz de 10 posiciones numéricas
let matriz = new Array(10);

// Llenar la matriz con valores numéricos
for (let i = 0; i < matriz.length; i++) {
    let numero = parseInt(prompt(`Ingresa un número en la posición ${i}`));
    matriz[i] = numero;
}

// Imprimir la matriz en pantalla
console.log("La matriz es:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}

// Buscar un número en la matriz
let encontradoDos = false;
let buscar = parseInt(prompt("Ingresa el número a buscar"));
for (let i = 0; i < matriz.length; i++) {
    if (matriz[i] === buscar) {
        encontradoDos = true;
        console.log(`El número ${buscar} está en la posición ${i}`);
        break;
    }
}
if (!encontradoDos) {
    console.log("Valor no encontrado")
}


/*HACER UN PROGRAMA QUE INICIALICE UN VECTOR DE NUMEROS CON VALORES ALEATORIOS
Y POSTERIOR ORDENE LOS ELEMENTOS DE MENOR A MAYOR*/
let vector = [];

for (let i = 0; i < 10; i++) {
    vector[i] = Math.floor(Math.random() * 100) + 1;
}

for (let i = 0; i < vector.length; i++) {
    for (let j = i + 1; j < vector.length; j++) {
        if (vector[j] < vector[i]) {
            let temp = vector[j];
            vector[j] = vector[i];
            vector[i] = temp;
        }
    }
}

for (let i = 0; i < vector.length; i++) {
    console.log(vector[i]);
}

// METODO DE ORDENAMIENTO DE BURBUJA 
let array = [5,10,20,11,6,3,2];
for (let i=0; i<7; i++){ //RECORRE
    for(j=0;j<7;j++){ //CAMBIA
        if(array[j]>array[j+1]){
            nu
        }
    }
}
//METODO DE ORDENAMIENTO SELECCION SORT
let array = [1,5,3,2,7];
let ordenamiento = array.length
for(let i=0; i<ordenamiento; i++){
    let min=i;
    for(j=i+1;j<ordenamiento;j++){
        if(array[j]<array[min]){
            min = j
        }
    }
if(min != i){
    let auxiliar = array[i];
    array[i] = array[min];
    array[min] = auxiliar
}
}
console.log(array);

//METODO DE ORDENAMIENTO QUICKSORT
//METODO DE ORDENAMIENTO INSERT
let arreglo = new Array(10);
for (let i=0;i<arreglo.length; i++){
    arreglo[i]= Math.floor(Math.random()*100)+1;
}
for(let i=1; i<arreglo.length;i++){
    let j=i-1;
    let temp= arreglo[i];
    while(j>=0 && arreglo[j] > temp){
        arreglo[j+i]=arreglo[j];
        j--;
    }
    arreglo[j+1]=temp;
}
console.log("Arreglo ordenado de menor a mayor: "+ arreglo);
//METODO DE ORDENAMIENTO MERGE
//METODO DE ORDENAMIENTO LINKED LIST
