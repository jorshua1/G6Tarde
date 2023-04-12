//ejercicio de matrix
//creacion de una matriz

tabla=[] //creamos un array vacio

for (fila = 0; fila < 4; fila++) {
    
    console.log("creando fila: "+fila)
    tabla[fila]=[] //aqui estamos diciendo que que el la posicion de fila vamos a hacer un array, el cual correspondera a las columnas
    for (let columna = 0; columna < 2; columna++) {//en este for vamos a crear las columnas y vamos a proceder a llenarlo
        dato=prompt("ingrese un dato")
        tabla[fila][columna]= dato//aqui decimos que en la posicion 0/0 para el primer ciclo, vamos a asignar un valor para esa posicion de la matriz
        
        console.log("se ha ingresado el dato: "+dato+" en la posicion: "+[fila]+" , "+[columna]) // mostramos informacion del dato que se a ingresado en x posicion

    }
}
console.log(tabla)
