
let tabla = [];
let tabla2 = [];

for (let fila = 0;fila < 3 ; fila++){
    tabla[fila] = new Array();
    for (let columna = 0; columna < 3; columna++){
        tabla[fila][columna]=prompt(`Escriba un numero. `);
        while(isNaN(tabla[fila][columna]) ){
            tabla[fila][columna]=prompt(`Por favor escriba un dato valido, solo se aceptan numeros. `);
        }
    }
}
console.log(tabla);
