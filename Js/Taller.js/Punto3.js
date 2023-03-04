//-------------------------EJERCICIO #3---------------------------

let vBase = parseFloat(prompt("Ingrese base del triangulo"));
let vAltura = parseFloat(prompt("Ingrese altura del triangulo"));
let vArea = (vBase * vAltura) / 2

    alert("El area del triangulo es = " + vArea);

// si solo conocemos el valor de los lados se aplica formula de heron "vSp: valor de semiPerimetro"


let vLadoA = parseFloat(prompt("Ingrese el lado A del triangulo"));
let vLadoB = parseFloat(prompt("Ingrese el lado B del triangulo"));
let vLadoC = parseFloat(prompt("Ingrese el lado C del triangulo"));
let vPerimetro = vLadoA * vLadoB * vLadoC;
let vSp = vPerimetro / 2
let vArea1 = Math.sqrt ((vSp - vLadoA) * (vSp - vLadoB) * (vSp - vLadoC))

    alert("El area del triangulo es = " + vArea1);