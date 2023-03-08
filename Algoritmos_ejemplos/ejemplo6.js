
let nombre = prompt("Ingrese su nombre ");
let genero = prompt("Ingrese su género masculino o femenino");

if ((genero == "Femenino" || genero == "femenino") && (nombre[0] <= "M") || ((genero == "Masculino" || genero == "masculino") && (nombre[0] >= "N"))){
    alert("El usuario " + nombre + " pertenece al grupo A");
}else if((genero == "Femenino" || genero == "femenino") && (nombre[0] >= "M") || ((genero == "Masculino" || genero == "masculino") && (nombre[0] <= "N"))){
    alert("El usuario " + nombre + " pertenece al grupo B");
}else {
    alert("ingrese datos validos")}