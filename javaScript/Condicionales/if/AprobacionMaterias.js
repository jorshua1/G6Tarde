/*Elabore un programa que le diga si paso la materia, solicitando 
las notas que saco en las 3 evaluaciones y teniendo en cuenta que 
la primera y la segunda evaluacion valen el 30% y la tercera el 40% */

let nota1 = parseFloat(prompt("Digite la nota que saco el la primera nota del 30% "))
let nota2 = parseFloat(prompt("Digite la nota que saco el la segunda nota del 30% "))
let nota3 = parseFloat(prompt("Digite la nota que saco el la nota del 40% "))
let notaFinal = 0;
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
    alert("Ingrese datos validos")
}else{
    nota1 = nota1 * 0.30;
    nota2 = nota2 * 0.30;
    nota3 = nota3 * 0.40;

    let notaFinal = nota1 + nota2 + nota3;
    if (notaFinal >= 3.0){
        alert("Felicidades paso la materia con una nota final de: " + notaFinal)
    }else 
    alert("Lo sentimos perdio la materia con una nota final de: " + notaFinal)
}


