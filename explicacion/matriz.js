let tabla = [];

for (var fila = 0; fila < 3; fila++) {
    console.log("Esta creando la fila " + (fila + 1));
    tabla[fila]=[];
    for (var columna = 0; columna < 3; columna++) {
        console.log("Esta insertando datos en la fila " +(fila + 1)+ " y columna "+ (columna + 1));
        tabla[fila][columna] = prompt("ingrese algo");
        console.log("se ingresaron los datos de la fila " +(fila +1)+ " y columna "+ (columna + 1));
    }
}

