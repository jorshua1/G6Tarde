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
        tabla[fila][columna]=prompt("ingrese algo");
        console.log(`se ingresaron los datos de la fila
        ${fila + 1} y columna ${columna + 1}`);
    }
}