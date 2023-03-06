/* determinar el tipo de triangulo segun la medida de sus lados: escaleno, iscoceles o equilatero*/

let vLadoA = Number(prompt("Ingrese el lado A"));
let vLadoB = Number(prompt("Ingrese el lado B"));
let vLadoC = Number(prompt("Ingrese el lado C"));

if (isNaN(vLadoA) || isNaN(vLadoB) || isNaN(vLadoC) || ((vLadoA != vLadoB) && (vLadoA != vLadoC) && (vLadoB != vLadoC))) {
    alert("Es un triangulo ESCALENO");
}
else if (((vLadoA != vLadoB) && (vLadoA != vLadoC) && (vLadoB == vLadoC)) || ((vLadoB != vLadoA) && (vLadoB != vLadoC) && (vLadoA == vLadoC)) || ((vLadoC != vLadoA) && (vLadoC != vLadoB) && (vLadoA == vLadoB))) {
    alert("Es un triangulo ISOSELES");
}
else if ((vLadoA == vLadoB) && (vLadoA == vLadoC) && (vLadoB == vLadoC)) {
    alert("Es un triangulo EQUILATERO");
}