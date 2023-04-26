alert('caculadora de nota definitiva para el estudiante')

let previo1 = Number(prompt('ingrese la nota de su primera evaluacion'))
let previo2 = Number(prompt('ingrese la nota de su segunda evaluacion'))
let previo3 = Number(prompt('ingrese la nota de su tercera evaluacion'))

let trabajo1 = Number(prompt('ingrese la nota del trabajo 1 '))
let trabajo2 = Number(prompt('ingrese la nota del trabajo 2 '))

notaprevios = ((previo1 + previo2 + previo3) / 3) * 0.6
notatrabajos = ((trabajo1 + trabajo2) / 2) * 0.4

notafinal = notatrabajos + notaprevios
alert('su nota final es de ' + notafinal)
