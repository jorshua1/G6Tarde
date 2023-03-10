//MISION 2 USO DE CONDICIONALES
var nota1 = parseFloat(prompt("ingrese la nota del primer examen "));
if(isNaN(nota1) || nota1<0 || nota1 > 5){
    alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}else if(nota1>=0 && nota1<=5){
    var nota2 = parseFloat(prompt("ingrese la nota del segundo examen "));
}else{
    alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}if(nota2>=0 && nota2<=5){ 
    var nota3 = parseFloat(prompt("ingrese la nota del tercer examen "));
}else{
    alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}if(nota3>=0 && nota3<=5){
    var notaTrabajo1 = parseFloat(prompt("ingrese la nota del primer trabajo "));
}else{
    alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}if(notaTrabajo1>=0 && notaTrabajo1<=5){
    var notaTrabajo2 = parseFloat(prompt("ingrese la nota del segundo trabajo "));
}else{
    alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}if(notaTrabajo2>=0 && notaTrabajo2<=5){
    var notaexamenF = parseFloat(prompt("ingrese la nota del examen final"));
}else{
    alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}if(notaexamenF>=0 && notaexamenF<=5){
    var autoeva = parseFloat(prompt("ingrese la nota de la autoevaluación"));
}else{
    alert("error recuerde que las calificaciones deben ser entre 0 y 5 vuelva a ejecutar el programa")
}
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
}


