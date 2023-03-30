let tabla = new Array();
let tabla2 = [];

for(let fila = 0;fila<4;fila++){
    console.log(`Creando fila ${fila}`);
    tabla[fila]=new Array();
    for(let columna = 0;columna<2;columna++){
        console.log(`Está insertando datos en la fila ${fila} y columna ${columna}`);
        tabla[fila][columna] = prompt("Ingrese cualquier dato");
    }
    console.log(`Se ingresaron los datos de la fila ${fila}`)
}
console.log(tabla);