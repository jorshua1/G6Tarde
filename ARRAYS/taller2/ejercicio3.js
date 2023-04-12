let notas=[];
let nota=0;
let sumatoria=0;
let mayor=0;
let menor=10;
for(let i=0;i<10;i++){
    nota=Number(prompt("Ingrese nota "+(i+1)+" del estudiante"))
    while(isNaN(nota) || nota<1 || nota>10 ){
        alert("Error, ingrese dato valido")
        nota=Number(prompt("Ingrese nota "+(i+1)+" del estudiante"))
    }
    notas[i]=nota
}
for(let x=0;x<notas.length;x++){
    sumatoria=sumatoria+notas[x]
    if(notas[x]>mayor){
        mayor=notas[x]
    }
    if(notas[x]<menor){
        menor=notas[x]
    }
}
let prom=sumatoria/notas.length;
alert(`notas del estudiante ${notas}
Nota media: ${prom}
Nota mas alta: ${mayor}
Nota mas baja: ${menor}`)