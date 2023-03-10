let previo1 = Number(prompt("ingrese la nota del primer previo"))
let previo2 = Number(prompt("ingrese la nota del segundo previo"))
let previo3 = Number(prompt("ingrese la nota del tercer previo"))

let promedioP = (previo1 + previo2 + previo3) / 3 * 0.6


let trabajo1 = Number(prompt("ingrese la nota del trabajo 1"))
let trabajo2 = Number(prompt("ingrese la nota del trabajo 2"))

let promedioT = (trabajo1 + trabajo2) / 2 * 0.4

let notaFinal = (promedioP + promedioT)

alert ("la nota final es de" + notaFinal)


