let matriz = new Array(5);
let tablaValores = ""

for(let i = 0;i<matriz.length;i++){
    matriz[i] = new Array(5);
    for(let j = 0;j<matriz[i].length;j++){
        matriz[i][j] = Number(prompt(`Ingrese un valor numérico entero.(Posición ${i}.${j})`));
        while((isNaN(matriz[i][j]))||(!Number.isInteger(matriz[i][j]))){
            alert("Por favor, ingrese un valor válido.");
            matriz[i][j] = Number(prompt(`Ingrese un valor numérico entero.(Posición ${i}.${j})`));
        }
    }
}

tablaValores = `Tabla\n${matriz[0]}\n${matriz[1]}\n${matriz[2]}\n${matriz[3]}\n${matriz[4]}`;
console.log(tablaValores);

for(let i = 0;i<matriz.length;i++){
    matriz[i][5] = 0;
    for(let j = 0;j<matriz[i].length-1;j++){
        matriz[i][5] += matriz[i][j];
    }
}

tablaValores = `Suma filas\n${matriz[0][5]}\n${matriz[1][5]}\n${matriz[2][5]}\n${matriz[3][5]}\n${matriz[4][5]}`

console.log(tablaValores);

matriz[5] = new Array(5);
for(let i = 0;i<matriz.length-1;i++){
    matriz[5][i] = 0;
    for(let j = 0;j<matriz[i].length-1;j++){
        matriz[5][i] += matriz[j][i];
    }
}

tablaValores = `Suma columnas\n${matriz[5][0]},${matriz[5][1]},${matriz[5][2]},${matriz[5][3]},${matriz[5][4]}`;

console.log(tablaValores);