let estudiante = prompt("Ingrese nombre del estudiante")

let nota1 = 0; 
let nota2 = 0; 
let nota3 = 0; 
let nota4 = 0; 
let nota5 = 0; 
let notaFinal = 0; 

alert("ATENCIÓN. La nota mínima es 1 y la máxima es 100. No se aceptan decimales.");

nota1 = Number(prompt("Ingrese la primera nota"));
while((isNaN(nota1))||(nota1<1)||(nota1>100)||(!Number.isInteger(nota1))){
    nota1 = Number(prompt("Por favor, ingrese una nota válida (min 1; max 100; no decimales)."));
}
nota2 = Number(prompt("Ingrese la segunda nota"));
while((isNaN(nota2))||(nota2<1)||(nota2>100)||(!Number.isInteger(nota2))){
    nota2 = Number(prompt("Por favor, ingrese una nota válida (min 1; max 100; no decimales)."));
}
nota3 = Number(prompt("Ingrese la tercera nota"));
while((isNaN(nota3))||(nota3<1)||(nota3>100)||(!Number.isInteger(nota3))){
    nota3 = Number(prompt("Por favor, ingrese una nota válida (min 1; max 100; no decimales)."));
}
nota4 = Number(prompt("Ingrese la cuarta nota"));
while((isNaN(nota4))||(nota4<1)||(nota4>100)||(!Number.isInteger(nota4))){
    nota4 = Number(prompt("Por favor, ingrese una nota válida (min 1; max 100; no decimales)."));
}
nota5 = Number(prompt("Ingrese la quinta nota"));
while((isNaN(nota5))||(nota5<1)||(nota5>100)||(!Number.isInteger(nota5))){
    nota5 = Number(prompt("Por favor, ingrese una nota válida (min 1; max 100; no decimales)."));
}

notaFinal = parseInt((((nota1+nota2)/2)*0.4)+(((nota3+nota4+nota5)/3)*0.6))
alert("La nota final del estudiante " + estudiante + " es de: " + notaFinal + ".");
