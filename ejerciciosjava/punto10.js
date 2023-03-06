/*Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre. 
El grupo A esta formado por las mujeres con un nombre anterior a la M 
y los hombres con un nombre posterior a la N y el grupo B por el resto. 
Escribir un programa que pregunte al usuario su nombre y sexo, 
y muestre por pantalla el grupo que le corresponde.*/

let genero = (prompt("Escriba su genero H o M"));
let nombre =(prompt("Escriba su nombre"));
let m = 13;
let n = 14;
if (genero = "M"){
    nombre[0] > m;
        console.log("ud es del grupo B");
}else if(genero = "H"){
    nombre[0] < n;
    console.log("ud pertenece al grupo B");
}else{
    console.log("ud pertenece al grupo A");
}