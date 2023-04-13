let matriz=[];
let fila1=0;
let fila2=0;
let fila3=0;
let fila4=0;
let fila5=0;
let col1=0;
let col2=0;
let col3=0;
let col4=0;
let col5=0;
for(var fila=0;fila<5;fila++){
    matriz[fila]=[]
    for(var columna=0;columna<5;columna++){
        matriz[fila][columna]=Number(prompt("Ingrese dato posicion " +fila + "x"+ columna))
        while(isNaN(matriz[fila][columna]) || matriz[fila][columna]<0 || !Number.isInteger(matriz[fila][columna]) ){
            alert("Error, ingrese un dato valido")
            matriz[fila][columna]=Number(prompt("Ingrese dato posicion " +fila + "x"+ columna))
        }
    }
}
for(let j=0;j<5;j++){
    for(let i=0;i<5;i++){
        if(j==0){
        fila1=fila1+matriz[j][i]
        col1=col1+matriz[i][j]
        }
        if(j==1){
        fila2=fila2+matriz[j][i]
        col2=col2+matriz[i][j]
        }
        if(j==2){
            fila3=fila3+matriz[j][i]
            col3=col3+matriz[i][j]
        }
        if(j==3){
            fila4=fila4+matriz[j][i]
            col4=col4+matriz[i][j]
        }
        if(j==4){
            fila5=fila5+matriz[j][i]
            col5=col5+matriz[i][j]
        }
    }
}
console.log(matriz);
alert(`
Suma fila 1: ${fila1}
Suma fila 2: ${fila2}
Suma fila 3: ${fila3}
Suma fila 4: ${fila4}
Suma fila 5: ${fila5}`)
alert(`
Suma columna 1: ${col1}
Suma columna 2: ${col2}
Suma columna 3: ${col3}
Suma columna 4: ${col4}
Suma columna 5: ${col5}`)