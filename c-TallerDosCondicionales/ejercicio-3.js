/*
Determinar el tipo de triangulo según la medida de sus lados: escaleno, isósceles o equilátero.
*/

let ladoUno = 1/*parsefloat(prompt("Por favor ingrese lado uno del triangulo."));*/
let ladoDos = 1/*parsefloat(prompt("Por favor ingrese lado dos del triangulo."));*/
let ladoTres = 1/*parsefloat(prompt("Por favor ingrese lado tres del triangulo."));*/

if (isNaN(ladoUno) || isNaN(ladoDos) || isNaN(ladoTres) || ladoUno != ladoDos && ladoDos != ladoTres && ladoTres != ladoUno) {
    console.log(" Segun los lados dados el triangulo es escaleno.");

} else if (ladoUno == ladoDos && ladoDos != ladoTres || ladoDos == ladoTres && ladoTres != ladoUno || ladoTres == ladoUno && ladoUno != ladoDos) {
    console.log(" Segun los lados dados el triangulo es isoceles.");
    
} else {
    console.log(" Segun los lados dados el triangulo es equilatero.");
}