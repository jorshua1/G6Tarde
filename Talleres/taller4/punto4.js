let notas = new Array(7);

notas[6] = prompt("Ingrese el nombre del estudiante.");
while(!isNaN(notas[6])||(notas[6]===null)||(notas[6]==="")){
    notas[6] = prompt("Ingrese un nombre de estudiante válido.");
}
notas[5] = 0;
for(let i = 0; i<(notas.length-2); i++){
    notas[i] = Number(prompt(`Ingrese la nota N°${(i+1)}. \nNota mínima: 1.0.\nNota máxima: 10.0`));
    while((isNaN(notas[i]))||(notas[i]<1)||(notas[i]>10)){
        alert("Por favor, ingrese una nota válida de acuerdo al límite.");
        notas[i] = Number(prompt(`Ingrese la nota N°${(i+1)}. \nNota mínima: 1.0.\nNota máxima: 10.0`));
    }
    notas[5] += notas[i];
}
notas[5] = notas[5]/5;

if(notas[5]>=9){
    alert(`El estudiante ${notas[6]} tiene un promedio Excelente. Ha sido promovido.\nPromedio: ${notas[5]}`);
}else if((notas[5]<9)&&(notas[5]>=8)){
    alert(`El estudiante ${notas[6]} tiene un promedio Sobresaliente. Ha sido promovido.\nPromedio: ${notas[5]}`);
}else if((notas[5]<8)&&(notas[5]>=6.5)){
    alert(`El estudiante ${notas[6]} tiene un promedio Aceptable. Ha sido promovido.\nPromedio: ${notas[5]}`);
}else{
    alert(`El estudiante ${notas[6]} tiene un promedio Deficiente. No ha sido promovido.\nPromedio: ${notas[5]}`);
}