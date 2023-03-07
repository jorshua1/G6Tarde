alert("Este programa determinara si usted debe tributar")

var edad = Number(prompt("Ingrese edad"));
var salarioM = Number(prompt("Ingrese salario mensual"))

if (isNaN(edad) || edad <= 0) {
    alert("Ingrese un valor valido")
} if (isNaN(salarioM) || salarioM <= 0) {
    alert("Ingrese un calor valido")
} if (edad >= 18 && salarioM >= 1.000) {
    alert("Debe tributar")
} if (edad >= 18 && salarioM <= 999){
    alert("No debe trinutar")
}if (edad <= 17 && salarioM <= 999) {
    alert("No debe tributar")
}



var edad = Number(prompt("Ingrese edad"));
var salarioM = Number(prompt("Ingrese salario mensual"))

if (isNaN(edad) || edad <= 0) {
    alert("Ingrese un valor valido")
} if (isNaN(salarioM) || salarioM <= 0) {
    alert("Ingrese un calor valido")
} if (edad >= 18 && salarioM >= 1.000) {
    alert("Debe tributar")
}else if (edad >= 18 && salarioM <= 999){
    alert("No debe trinutar")
}else (edad <= 17 && salarioM <= 999)
    alert("No debe tributar")
