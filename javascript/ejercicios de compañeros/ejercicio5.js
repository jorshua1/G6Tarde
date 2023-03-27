/*Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre.
 El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre 
 posterior a la N y el grupo B por el resto. Escribir un programa que pregunte al usuario su nombre 
 y sexo, y muestre por pantalla el grupo que le corresponde. */

 let nombre=prompt("ingrese su nombre");
 let sexo=prompt("ingrese 1 si es hombre y 2 si es mujer");

 if((nombre[0]<"N" && sexo==2) || (nombre[0]>"N" && sexo==1)){
    console.log("usted quedo en el grupo A")
 }
 else{
    console.log("usted pertenece al grupo B")
 }