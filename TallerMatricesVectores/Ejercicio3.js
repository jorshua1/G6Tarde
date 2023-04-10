let lista = [];
let fila;
let columna;
for(fila=0; fila<3; fila++){
    lista[fila]=[];
    for(columna=0; columna<3; columna++){
    lista[fila][columna]=prompt("Ingresa los datos de la matriz");
    while (isNaN(lista[fila][columna])) {
        lista[fila][columna]=prompt("ERROR, Ingresa los datos de la matriz");
    }}
}
console.log(lista);