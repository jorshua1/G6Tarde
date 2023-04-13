let diagonal=[];
let valor=0;
for(var fila=0;fila<5;fila++){
    diagonal[fila]=[]
    for(var columna=0;columna<5;columna++){
        valor=Number(prompt("Ingrese dato posicion " +fila + "x"+ columna))
        if(fila===columna){
            while(valor!==1){
                alert("Error, ingrese el numero 1 porque es un dato diagonal")
                valor=Number(prompt("Ingrese dato posicion " +fila + "x"+ columna))
            }
        }
        if(fila!==columna){
            while(valor!==0){
                alert("Error, ingrese el numero 0 porque es un dato no diagonal")
                valor=Number(prompt("Ingrese dato posicion " +fila + "x"+ columna))
        }
    }
    diagonal[fila][columna]=valor
}
}
console.log(diagonal)