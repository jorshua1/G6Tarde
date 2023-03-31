let lista=[]
for(var fila=0;fila<3;fila++){
    lista[fila]=[]
    for(var columna=0;columna<3;columna++){
        lista[fila][columna]=Number(prompt("Ingrese dato"))
        while(isNaN(lista[fila][columna]) || lista[fila][columna]<0  ||  !Number.isInteger(lista[fila][columna])){
            alert("Ingrese un dato valido")
            lista[fila][columna]=Number(prompt("Ingrese dato"))
        }
          
    }
}
console.log(lista)
