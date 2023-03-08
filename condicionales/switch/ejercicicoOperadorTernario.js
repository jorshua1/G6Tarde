///Ejercicio operador ternario. A tener en cuenta: no debe superar 3 if, de caso contrario hacer uso de if  

let nombre = prompt("Ingrese su nombre")
let saludo = nombre === "" ? "Ingrese nombre valido" : "Hola "+ nombre

console.log(saludo)