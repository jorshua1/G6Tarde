let nombre = prompt("Ingrese su nombre ")
let genero = prompt("Ingree su genero (M) o (F)")
if ((genero == "F" || genero == "f") && (nombre[0] <= "M") || ((genero == "M" || genero == "m") && (nombre[0] >= "N"))){
    alert("Pertenece al grupo A")
}else if((genero == "F" || genero == "f") && (nombre[0] >= "M") || ((genero == "M" || genero == "m") && (nombre[0] <= "N"))){
    alert("Pertenece al grupo B")
}else {
    alert("Ingrese datos validos")}
