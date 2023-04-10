let notas = new Array(6);
notas[5] = 0;

for(let i = 0; i<notas.length-1; i++){
    notas[i] = Number(prompt(`Ingrese la nota N°${(i+1)}. \nTenga en cuenta que va desde 0.0 a 5.0`));
    while((isNaN(notas[i]))||(notas[i]<0)||(notas[i]>5)){
        notas[i] = Number(prompt(`Por favor, ingrese una nota válida.\nIngrese la nota N${(i+1)}. \nNota mínima: 0.0.\nNota máxima: 5.0`));
    }
    notas[5] += notas[i];
}

notas[5] /= notas.length-1;

if(notas[5]>=4.5){
    alert(`El estudiante tiene un promedio Excelente. Ha sido promovido.\nPromedio: ${notas[5]}`);
}else if((notas[5]<4.5)&&(notas[5]>=4)){
    alert(`El estudiante tiene un promedio Sobresaliente. Ha sido promovido.\nPromedio: ${notas[5]}`);
}else if((notas[5]<4)&&(notas[5]>=3)){
    alert(`El estudiante tiene un promedio Aceptable. Ha sido promovido.\nPromedio: ${notas[5]}`);
}else{
    alert(`El estudiante tiene un promedio Deficiente. Ha sido reprovado.\nPromedio: ${notas[5]}`);
}