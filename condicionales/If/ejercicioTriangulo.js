//determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero

alert("Este prorama determina si el triangulo es equilatero, isosceles o escaleno")

var ladoA = Number(prompt("Ingree medida lado A"))
var ladoB = Number(prompt("Ingrese medida lado B"))
var ladoC = Number(prompt("Ingrese medida lado C"))

if (isNaN(ladoA) || ladoA <= 0) {
    console.log("Ingrese un valor valido")
}else if(isNaN(ladoB) || ladoB <= 0) {
    console.log("Ingrese un valor valido")
}else if (isNaN(ladoC) || ladoC <= 0) {
    console.log("Ingrese un valor valido")
}else if ((ladoA === ladoB) && (ladoB === ladoC)) {
    alert("Triangulo equilatero")
}else if ((ladoA === ladoB) || (ladoB === ladoC) || (ladoC === ladoA)) {
    alert("Triangulo isosceles")
}else {
    alert("Triangulo escaleno")
}
