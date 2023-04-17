let tabla = [];

for (var fila = 0; fila < 3; fila++) {
    console.log("Esta creando la fila " + (fila + 1));
    tabla[fila]=[];
    for (var columna = 0; columna < 3; columna++) {
        tabla[fila][columna] = prompt("ingrese algo");
    }
}
console.table(tabla)

