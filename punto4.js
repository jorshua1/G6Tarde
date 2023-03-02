let salario = 980000


let autosVendidos = parseInt(prompt("ingrese el numero de autos vendidos"))
let montoTotal = parseInt(prompt("ingrese el monto total de ventas"))
let comision = 170000 * autosVendidos
let valorTotal = montoTotal * 0.05 
operacion = valorTotal + comision + salario 

alert("el valor de su salario total es de" + operacion)

