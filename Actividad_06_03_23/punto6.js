/*"Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre. 
El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N 
y el grupo B por el resto. Escribir un programa que pregunte al usuario su nombre y sexo, y muestre por pantalla el grupo que le corresponde. "*/

let genero = prompt("¿Cuál es tu sexo (M o H)? ");
let nombre = prompt("¿Cual es su nombre?(ponerlo en minuscula) ");

if(genero == "M" && nombre[0] < "m" || genero == "H" && nombre[0] > "n"){
    grupo = "A";
}else{
    grupo = "B";
}

alert("Tu grupo es " + grupo);

