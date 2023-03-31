
let tabla = new Array();
let tabla2 = [];

for(let fila = 0; fila<4;fila++){
    console.log('creando fila ${fila+1}');
    tabla[fila]= new Array();
    for(let columna=0; columna<2;columna++){
        console.log('estan insertando datos en la fila ${fila+1} y columna ${columna+1}')
        tabla[fila][columna]=prompt("Ingrese un valor");
        console.log('Se ingresaron los datos de la ${fila1} y de la columna ${columna+1}');

    }
}