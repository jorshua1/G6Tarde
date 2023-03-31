let notas=[];
let sumaNotas=0;
for(let i=0;i<5;i++){
    let nota=parseFloat(prompt("Ingrese nota (1 a 5)"))
    while(isNaN(nota) || nota<0 || nota>5){
        alert("Ingrese un dato valido")
        nota=parseFloat(prompt("Ingrese nota (1 a 5)"))
    }
    notas[i]=nota
    sumaNotas += notas[i]
}
prom=sumaNotas/5;
alert("Promedio de notas:" + prom)
