let autos = parseInt(prompt("Ingrese la cantidad de autos"))
let montototal = parseInt(prompt("Ingrese la cantidad del monto"))
let salario = 980.000
let valordeventa = 0.5
let comision = 170.000

let operacion = autos * comision
let porcentaje = montototal * valordeventa

let total = operacion + porcentaje + salario

alert(total)
