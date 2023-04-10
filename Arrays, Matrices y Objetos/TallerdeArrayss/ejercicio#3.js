let tabla = [];
let numero = 0;
let mostrarTabla = "";

for(let fila=0;fila<3;fila++){
    tabla[fila] = new Array();
    if(fila>0){
        mostrarTabla += "\n"
    }
    for(let columna=0;columna<3;columna++){
        tabla[fila][columna] = Number(prompt(`Ingrese un número en la fila ${fila} y columna ${columna}`));
        while(isNaN(tabla[fila][columna])){
            alert("Ha ingresado un valor no válido. Inténtelo de nuevo.");
            tabla[fila][columna] = Number(prompt(`Ingrese un número en la fila ${fila} y columna ${columna}`));
        }
        mostrarTabla += tabla[fila][columna] + "  ";
    }
}
alert(`Matriz numérica 3x3 \n${mostrarTabla}`);