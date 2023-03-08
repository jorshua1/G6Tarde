//// se a invitado a una fiesta privada ciertas personas (carlos, sofia, claudia, oscar, carlota, manolo y adolfo), permitir el acceso solo a las personas que se han mencionado anteriormente.

var nombre = prompt("Ingrese su nombre")
var entrada = nombre === "" ? "Ingrese valor valido" : nombre == "carlos" || nombre == "sofia" || nombre == "claudia" || nombre == "oscar" || nombre == "carlota" || nombre == "manolo" || nombre == "adolfo" ? "Sea bienvenido a la fiesta": "no eres un invitado"

alert(entrada)