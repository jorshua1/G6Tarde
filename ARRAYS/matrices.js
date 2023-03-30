//las matrices son arreglos de dos divisiones
let tabla = [];
for(let fila=0;fila<4;fila++){
    console.log(`creando fila ${fila + 1}`)
    tabla[fila]=[]
    for(let columna=0;columna<2;columna++){
        console.log(`Esta insertando datos en la fila ${fila + 1} y la columna ${columna+1}`)
        tabla[fila][columna] = prompt("Ingrese dato")
    }
}
console.log(tabla)