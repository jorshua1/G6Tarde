//MISION 2 USO DE CONDICIONALES
var nota1 = parseFloat(prompt("ingrese la nota del primer examen "));
if(isNaN(nota1) || nota1<0 || nota1 > 5){
    alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}else{
    var nota2 = parseFloat(prompt("ingrese la nota del segundo examen "));
    if(isNaN(nota2) || nota2<0 || nota2 > 5){
        alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}else{
    var nota3 = parseFloat(prompt("ingrese la nota del tercer examen "));
    if(isNaN(nota3) || nota3<0 || nota3 > 5){
        alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}else{
    var notaTrabajo1 = parseFloat(prompt("ingrese la nota del primer trabajo "));
    if(isNaN(notaTrabajo1) || notaTrabajo1<0 || notaTrabajo1 > 5){
        alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}else{
    var notaTrabajo2 = parseFloat(prompt("ingrese la nota del segundo trabajo "));
    if(isNaN(notaTrabajo2) || notaTrabajo2<0 || notaTrabajo2 > 5){
        alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}else{
    var notaexamenF = parseFloat(prompt("ingrese la nota del examen final"));
    if(isNaN(notaexamenF) || notaexamenF<0 || notaexamenF > 5){
        alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}else{
    var autoeva = parseFloat(prompt("ingrese la nota de la autoevaluación"));
    if(isNaN(autoeva) || autoeva<0 || autoeva > 5){
        alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}else{

var notaDefinitiva = (((nota1+nota2+nota3)/3)*0.55)+(((notaTrabajo1+notaTrabajo2)/2)*0.15)+(notaexamenF*0.20)+(autoeva*0.1);
if(notaDefinitiva>=4.7 && notaDefinitiva<=5){
    console.log("aprobado su nota es " + notaDefinitiva + "nivel superior");
}else if(notaDefinitiva>=4.0 && notaDefinitiva<=4.6){
    console.log("aprobado su nota es " + notaDefinitiva + "nivel alto");
}else if(notaDefinitiva>=3.0 && notaDefinitiva<=3.9){
    console.log("aprobado su nota es " + notaDefinitiva + "nivel Básico");
}else if(notaDefinitiva>=2.0 && notaDefinitiva<=2.9){
    console.log("reprobado su nota es " + notaDefinitiva + "nivel Bajo");
}else if(notaDefinitiva>=0 && notaDefinitiva<=1.9){
    console.log("reprobado su nota es " + notaDefinitiva + "nivel muy Bajo")
}else{
    alert("error datos invalidos")
}  }  }  }  }  }  }  }


