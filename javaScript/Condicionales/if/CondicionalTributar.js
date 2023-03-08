/*Para tributar un determinado impuesto se debe ser mayor de 16 años 
y tener unos ingresos iguales o superiores a 1000 € mensuales. Escribir 
un programa que pregunte al usuario su edad y sus ingresos mensuales y 
muestre por pantalla si el usuario tiene que tributar o no. */

let edad = parseInt(prompt("Ingrese su edad"))
let ingreso = parseInt(prompt("Dijite el valor de sus ingresos"))

if (isNaN(edad && ingreso)){
    alert("Digite valores validos en ambos campos "  )
}else if (edad > 16 && ingreso >= 1000){
    alert("El usuario puede tributar")
}else {
    alert("El usuario no puede tributar")
}