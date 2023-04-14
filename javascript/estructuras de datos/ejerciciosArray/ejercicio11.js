let diagonal = new Array(5);
let tabla = "";

for(let i = 0;i<diagonal.length;i++){
    diagonal[i] = new Array(5);
    for(let j = 0;j<diagonal[i].length;j++){
        diagonal[i][j] = 0;
        diagonal[i][i] = 1;
    }
}
tabla = `Diagonal\n${diagonal[0]}\n${diagonal[1]}\n${diagonal[2]}\n${diagonal[3]}\n${diagonal[4]}`;
console.log(tabla);