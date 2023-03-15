// Ejercicio - elaborar algoritmo que informe si esta en un peso saludable o sobrepeso

alert("Este programa determinara si su peso es saludable");
var peso = Number(prompt("Ingrese su peso"));
var altura = Number(prompt("Ingrese su estatura"));
var imc = peso / (altura ** 2);
// alert(imc)
if (isNaN(peso) || peso <= 0) {
    console.log("Ingrese un valor valido")
} if (isNaN(altura) || altura <= 0) {
    console.log("Ingrese un valor valido")
} if (imc == 0 || imc <= 18.5) {
    alert("Delgado o bajo de peso ¡¡¡comience a tragar!!! flaco")
}else if (imc == 18.6 || imc <= 24.9) {
    alert("Saludable ¡¡¡caucho, mi pa!!!")
} else if (imc == 25.0 || imc <= 29.9) {
    alert("Sobrepeso ¡¡¡deje de tragar!!!")
} else {
    alert("Obesidad ¡¡¡a correr!!! gordo")
}

//(imc >= 29.9 && imc >= 30.0)
