/*"Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre. El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N y el grupo B por el resto. Escribir un programa que pregunte al usuario su nombre y sexo, y muestre por pantalla el grupo que le corresponde. 
*/


let nombre = prompt("ingrese el nombre");
let sexo = prompt("ingrese el sexo M o F ");


if (!isNaN(Number(nombre))) {
    console.log("ingresó un numero");
}else {

}if ((nombre[0] === "A" || nombre[0] === "B" || nombre[0] === "C" || nombre[0] === "D" || nombre[0] === "E" || nombre[0] === "F" || nombre[0] === "G" || nombre[0] === "H" || nombre[0] === "I" || nombre[0] === "J" || nombre[0] === "K" || nombre[0] === "L" || nombre[0] === "M") && sexo === "F") {
    console.log("va en el gp A")   

}else if ((nombre[0] === "N" || nombre[0] === "O" || nombre[0] === "P" || nombre[0] === "Q" || nombre[0] === "R" || nombre[0] === "S" || nombre[0] === "T" || nombre[0] === "U" || nombre[0] === "V" || nombre[0] === "W" || nombre[0] === "X" || nombre[0] === "Y" || nombre[0] === "Z") && sexo === "M") {
    console.log("va en el gp A")

}else{
    console.log("va en el gp B")
}


