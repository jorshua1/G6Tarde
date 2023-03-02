let examenMate=parseFloat(prompt("Ingrese la nota del examen de matematicas:"))
let tarea1Mate=parseFloat(prompt("Ingrese la nota de la tarea 1 de matematicas:"))
let tarea2Mate=parseFloat(prompt("Ingrese la nota de la tarea 2 de matematicas:"))
let tarea3Mate=parseFloat(prompt("Ingrese la nota de la tarea 3 de matematicas:"))
let examenFisica=parseFloat(prompt("Ingrese la nota del examen de Fisica:"))
let tarea1Fisica=parseFloat(prompt("Ingrese la nota de la tarea 1 de Fisica:"))
let tarea2Fisica=parseFloat(prompt("Ingrese la nota de la tarea 2 de Fisica:"))
let examenQuimica=parseFloat(prompt("Ingrese la nota del examen de quimica:"))
let tarea1Quimica=parseFloat(prompt("Ingrese la nota de la tarea 1 de quimica:"))
let tarea2quimica=parseFloat(prompt("Ingrese la nota de la tarea 2 de quimica:"))
let tarea3quimica=parseFloat(prompt("Ingrese la nota de la tarea 3 de quimica:"))
let promMate=((examenMate*0.9)+(((tarea1Mate+tarea2Mate+tarea3Mate)/3)*0.1))
console.log("El promedio de Matematicas es: " , promMate);
let promFisica=((examenFisica*0.8)+(((tarea1Fisica+tarea2Fisica)/2)*0.2))
console.log("El promedio de Fisica es: " , promFisica);
let promQuimica=(examenQuimica*0.85+(((tarea1Quimica+tarea2quimica+tarea3quimica)/3)*0.15))
console.log("El promedio de Quimica es: " , promQuimica);
let prom=(promMate+promFisica+promQuimica)/3
console.log("El promedio de general es: " , prom);

