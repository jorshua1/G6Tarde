//determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero

   alert("")

var ladoA = Number(prompt("Ingree medida lado A"))
var ladoB = Number(prompt("Ingrese medida lado B"))
var ladoC = Number(prompt("Ingrese medida lado C"))

if (isNaN(ladoA)|| ladoA <=0){
    console.log("Ingrese un valor valido")
}if (isNaN(ladoB)|| ladoB <=0){
    console.log("Ingrese un valor valido")
}if (isNaN(ladoC)|| ladoC <=0){
    console.log("Ingrese un valor valido")
}else if (ladoA == ladoB && ladoB == ladoC){
    alert("Triangulo equilatero")
}else if (ladoA == ladoB || ladoB == ladoA && ladoB != ladoC){
    alerta ("Triangulo isosceles")
}else (ladoA != ladoB || ladoA != ladoC || ladoC != ladoB)
    alert ("Triangulo escaleno")
