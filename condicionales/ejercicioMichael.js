alert("Este programa determinara si usted debe tributar")

var edad = Number(prompt("Ingrese edad"));
var salarioM = Number(prompt("Ingrese salario mensual"))

if (isNaN(edad) || edad <= 0) {
    alert("Ingrese un valor valido")
} if (isNaN(salarioM) || salarioM <= 0) {
    alert("Ingrese un calor valido")
} if (edad <= 16 && salarioM <= 900) {
    alert("No debe tributar")
}else{
    alert("Debe tributar")
}