let matriz = [];

for(fila = 0; fila <=2; fila++){
    console.log(`creando fila ${ fila + 1 }`);
    matriz [fila] = [];
    for(columna = 0; columna <= 2; columna++){
        console.log(`creando columnas ${ columna + 1 }`);
        matriz [fila] [columna] = prompt("Ingrese un numero");
    }
}
console.log(matriz);