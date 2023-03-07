/*Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre. 
El grupo A esta formado por las mujeres con un nombre anterior a la M 
y los hombres con un nombre posterior a la N y el grupo B por el resto. 
Escribir un programa que pregunte al usuario su nombre y sexo, 
y muestre por pantalla el grupo que le corresponde.*/

let genero = (prompt("Escriba su genero H o M (La inicial con mayuscula)"));
let nombre =(prompt("Escriba su nombre"));
if (genero === "M" && (nombre[0] === "A" || nombre[0] === "B" || nombre[0] === "C" || nombre[0] === "D" || nombre[0] === "E" || nombre[0] === "F" || nombre[0] === "G" || nombre[0] === "H" || nombre[0] === "I" || nombre[0] === "J" || nombre[0] === "K" || nombre[0] === "L")){
    console.log("ud es del grupo A");
}else if(genero === "H" && (nombre[0] === "Ñ" || nombre[0] === "O" || nombre[0] === "P" || nombre[0] === "Q" || nombre[0] === "R" || nombre[0] === "S" || nombre[0] === "T" || nombre[0] === "U" || nombre[0] === "V" || nombre[0] === "W" || nombre[0] === "X" || nombre[0] === "Y" || nombre[0] === "Z")){
    console.log("ud pertenece al grupo A");
}else{
    console.log("ud pertenece al grupo B");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
