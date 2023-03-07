//"Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre. El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N y el grupo B por el resto. Escribir un programa que pregunte al usuario su nombre y sexo, y muestre por pantalla el grupo que le corresponde.

alert("Este programa determina a que gupo pertenece");

var nombre = prompt("Ingrese su nombre");
var sexo = prompt("Ingrese su tipo de sexo");
if (!isNaN(nombre) || nombre <= 0) {
  console.log("Ingrese un dato valido");
}if (!isNaN(sexo) || sexo <= 0) {
  console.log("Ingrese un dato valido");
}if (nombre <= "l" && sexo === "mujer") {
  alert("Pertenece a grupo A");
}else if (nombre >= "o" && sexo === "hombre"){
  alert("Pertenece a grupo A");
}else if (nombre >= "n" && sexo === "mujer"){
  alert("Pertenece a grupo B");
}else {
    alert("Pertenece a grupo B")
}


