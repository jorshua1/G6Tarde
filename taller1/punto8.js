
//Sin terminar

let examenMat = parseFloat(prompt("¿Cuánto sacó en el examen de Matemáticas?"))*0.9

let tareaMat1 = parseFloat(prompt("¿Cuánto sacó en la primera tarea de Matemáticas?"))
let tareaMat2 = parseFloat(prompt("¿Cuánto sacó en la segunda tarea de Matemáticas?"))
let tareaMat3 = parseFloat(prompt("¿Cuánto sacó en la tercera tarea de Matemáticas?"))

let promedioTareas = (tareaMat1+tareaMat2+tareaMat3)*0.1

let notaMat = examenMat+promedioTareas

alert("El estudiante tuvo una nota de: " + notaMat + " en Matemáticas")
