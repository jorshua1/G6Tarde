let nombre = prompt("ingrese su nombre");
let evaluacion1= parseFloat(prompt("ingrese la nota de su 1ra Evaluacion"));
let evaluacion2= parseFloat(prompt("ingrese la nota de su 2da Evaluacion"));
let evaluacion3= parseFloat(prompt("ingrese la nota de su 3ra Evaluacion"));
let notasPrevios = ((evaluacion1+evaluacion2+evaluacion3)/3)*0.60;
let trabajo1= parseFloat(prompt("ingrese la nota de su 1er Trabajo"));
let trabajo2= parseFloat(prompt("ingrese la nota de su 2do Trabajo"));
let notasTrabajos= ((trabajo1+trabajo2)/2)*0.40;
let notaFinal = (notasPrevios+notasTrabajos);

if ((isNaN(evaluacion1)|| isNaN (evaluacion2)|| isNaN(evaluacion3)|| isNaN(trabajo1)|| isNaN(trabajo2))){
    alert("ERROR, alguno de los dos datos ingresados no son numeros");
}else if((evaluacion1>=1 && evaluacion1<=5) && (evaluacion2>=1 && evaluacion2<=5) && (evaluacion3>=1 && evaluacion3<=5) && (trabajo1>=1 && trabajo1<=5) && (trabajo2>=1 && trabajo2<=5)){
    alert("Apreciado estudiante: " + nombre + "Su nota Final fue de : " + notaFinal);
}else{
    alert("El valor de las notas que esta ingresando no cumple los criterios de Nota Minima >=1.0 y Nota Maxima <=5.0 verifique nuevamente");
}