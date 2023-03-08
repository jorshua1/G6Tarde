/*Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre. El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N y el grupo B por el resto. Escribir un programa que pregunte al usuario su nombre y sexo, y muestre por pantalla el grupo que le corresponde. */


let vName = String(prompt("Ingrese su nombre"));
let vGender = String(prompt("Ingrese su genero"));

console.log(vName >= ["a"-"m"]);


let vName = String(prompt("Ingrese su nombre"));
let vGender = String(prompt("Ingrese su genero"));

console.log(vName >= ["a"-"m"]);

if ((vGender == "mujer") && (vName <= "l")) {
    alert("Su nombre es: " + vName + "\n Su genero es: " + vGender + "\n Pertenece al GRUPO A");
}
else if ((vGender == "hombre") && (vName >= "o")) {
    alert("Su nombre es: " + vName + "\n Su genero es: " + vGender + "\n Pertenece al GRUPO A");
}
else {
    alert("Su nombre es: " + vName + "\n Su genero es: " + vGender + "\n Pertenece al GRUPO B");
}

/*
if ((vGender == "mujer") && (vName == ["a"-"m"])) {
    alert("Su nombre es: " + vName + "\n Su genero es: " + vGender + "\n Pertenece al GRUPO A");
}
else if ((vGender === "hombre") && (vName == ["n"-"z"])) {
    alert("Su nombre es: " + vName + "\n Su genero es: " + vGender + "\n Pertenece al GRUPO A");
}
else {
    alert("Su nombre es: " + vName + "\n Su genero es: " + vGender + "\n Pertenece al GRUPO B");
}*/