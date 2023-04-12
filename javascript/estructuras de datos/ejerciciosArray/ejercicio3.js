let notas = new Array (5);
let sumatoria = 0;
let min = 0;
let max = 0;

for(let i = 0; i<notas.length;i++){
    notas[i] = Number(prompt(`Ingrese la nota Nº${i+1}. (Min 0 - Max 10.)`));
    while((isNaN(notas[i]))||(notas<0)||(notas>10)){
        alert("Ingrese una nota válida");
        notas[i] = Number(prompt(`Ingrese la nota Nº${i+1}. (Min 0 - Max 10.)`));
    }
    sumatoria += notas[i]
}
alert(`Las notas del estudiante son: \n${notas}`);

alert(`El promedio del estudiante es de: ${sumatoria/(notas.length)}`);

alert(`La nota más alta del estudiante fue de: ${Math.max(...notas)}\nLa nota más baja del estudiante fue de: ${Math.min(...notas)}`);



//--------------------------
//Ordenamiento con for (Método burbuja);
for(let i = 0;i<notas.length;i++){
    let temp = 0;
    if(notas[i]>notas[i+1]){
        temp = notas[i+1];
        notas[i+1] = notas[i];
        notas [i] = temp
    }
    max = notas[4];
    min = notas[0];
}

alert(`La nota más alta del estudiante fue de: ${max}\nLa nota más baja del estudiante fue de: ${min}`);