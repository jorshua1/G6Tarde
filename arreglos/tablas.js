let tabla =  [];
//let tabla2 = [];

for(fila = 0; fila < 4; fila++){
    console.log(`Creando fila ${fila + 1 }`);
    tabla [fila] = [];
    for(columna = 0; columna < 2; columna++){
        console.log(`Está insertando datos en la fila ${fila + 1} y columna ${columna + 1}`);

        tabla [fila][columna] = prompt("INGRESE ALGO");
    }
    console.log(`Se ingresaron los datos de la fila ${fila + 1} y columna ${columna + 1}`);
}
console.log(tabla);