//Ejercicio de Nicolas Ruiz

let lado1 = Number(prompt("¿Cuál es la longitud del lado 1 del triángulo?"))
let lado2 = Number(prompt("¿Cuál es la longitud del lado 2 del triángulo?"))
let lado3 = Number(prompt("¿Cuál es la longitud del lado 3 del triángulo?"))

if((isNaN(lado1))||(isNaN(lado2))||(isNaN(lado3))){
    alert("ERROR - Alguno de los lados no tiene un valor permitido")
}else if((lado1==lado2)&&(lado2==lado3)&&(lado3==lado1)){
    alert("El triangulo es equilatero")
}else if((lado1!=lado2)&&(lado2!=lado3)&&(lado3!=lado1)){
    alert("El triangulo es escaleno")
}else{
    alert("El triangulo es isósceles")
}
