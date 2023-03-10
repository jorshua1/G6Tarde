let lado1 = Number(prompt("ingrese el valor del lado 1"))
let lado2 = Number(prompt("ingrese el valor del lado 2"))
let lado3 = Number(prompt("ingrese el valor del lado 3"))

if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
    alert("el triangulo es equilatero")
}else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
    alert("el triangulo es escaleno")
}else if (lado1 == lado2 && lado2 !== lado3 && lado1 !== lado3){
    alert("el triangulo es isosceles")
}