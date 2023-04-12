let fila=new Array();
for(let a=0; a<3; a++){
    fila[a]=[];
    for(let i=0;i<3;i++){
        var f=(a+1);
        var c=(i+1)
        fila[a][i]=Number(prompt("esta ingresando numeros en la fila "+f+" y en la columna "+c));
    }
}
console.table(fila);