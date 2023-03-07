
let nombre = prompt("Ingrese su nombre ")
let genero = prompt("Ingrese su género (M para masculino o F para femenino)")
if ((genero == "F" || genero == "f") && (nombre[0] <= "M") || ((genero == "M" || genero == "m") && (nombre[0] >= "N"))){
    alert("El usuario " + nombre + " pertenece al grupo A")
}else if((genero == "F" || genero == "f") && (nombre[0] >= "M") || ((genero == "M" || genero == "m") && (nombre[0] <= "N"))){
    alert("El usuario " + nombre + " pertenece al grupo B")
}else {
    alert("Por favor, ingrese datos validos")}