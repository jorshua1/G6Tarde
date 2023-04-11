/*Hacer un programa que inicialice un vector de números con valores 
aleatorios, y posterior ordene los elementos de menor a mayor.*/

//Crear un vector vacío:
let vectorNumerosUno = [];

//Llenar el vector con valores aleatorios:
for (let i = 0; i < 10; i++) { // Cambia el 10 por la cantidad de números que desees
    vectorNumerosUno.push(Math.floor(Math.random() * 10)); // Genera un número aleatorio entre 0 y 99 y lo agrega al vector
}

//Ordenar el vector de menor a mayor utilizando el método sort():
vectorNumerosUno.sort(function (a, b) {
    return a - b;
});

//Imprimir el vector ordenado en la consola:
console.log(vectorNumerosUno);


//////////////////////////////////*sin usar .push y tampoco usando el  .sort, tendriamos el siguiente codigo*//////////////////////////////////
//Crear un vector de tamaño 10:
let vectorNumerosDos = new Array(10);
console.log(vectorNumerosDos);

//Inicializamos los elementos del vector con valores aleatorios entre 0 y 9
for (let i = 0; i < vectorNumerosDos.length; i++) {

    vectorNumerosDos[i] = Math.floor(Math.random() * 10);

    console.log(vectorNumerosDos);

}
console.log(vectorNumerosDos)

//Ordenamos los elementos del vector de menor a mayor utilizando el algoritmo de ordenación por sleccion
for (let i = 0; i < vectorNumerosDos.length - 1; i++) {

    for (let j = i + 1; j < vectorNumerosDos.length; j++) {

        if (vectorNumerosDos[i] > vectorNumerosDos[j]) {
            let temp = vectorNumerosDos[i];
            vectorNumerosDos[i] = vectorNumerosDos[j];
            vectorNumerosDos[j] = temp;
            /*La variable temp se utiliza para intercambiar los valores de los dos elementos. 
            El valor de vectorNumerosDos[i] se guarda en temp, 
            el valor de vectorNumerosDos[j] se guarda en vectorNumerosDos[i] y 
            el valor de temp se guarda en vectorNumerosDos[j].*/
        }
        console.log(vectorNumerosDos)
    }
    console.log(vectorNumerosDos)
}

//Imprimir el vector ordenado en la consola:
console.log(vectorNumerosDos);