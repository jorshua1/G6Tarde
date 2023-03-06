/*Los alumnos de un curso se han dividido en dos grupos A y B 
de acuerdo al sexo y el nombre. El grupo A esta formado por las
mujeres con un nombre anterior a la M y los hombres con un nombre
posterior a la N y el grupo B por el resto. Escribir un programa
que pregunte al usuario su nombre y sexo, y muestre por 
pantalla el grupo que le corresponde. */

let nombre = prompt("Ingrese su nombre ")
let genero = prompt("Ingree su genero (M) o (F)")
if ((genero == "F" || genero == "f") && (nombre[0] <= "M") || ((genero == "M" || genero == "m") && (nombre[0] >= "N"))){
    alert("Pertenece al grupo A")
}else if((genero == "F" || genero == "f") && (nombre[0] >= "M") || ((genero == "M" || genero == "m") && (nombre[0] <= "N"))){
    alert("Pertenece al grupo B")
}else {
    alert("Ingrese datos validos")}