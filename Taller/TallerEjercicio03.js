//-------------------------EJERCICIO #3---------------------------
//---------------------- Triangulo 3 lados 
{
    let vLadoA = parseInt(prompt("Ingrese el lado A del triangulo"));
    let vLadoB = parseInt(prompt("Ingrese el lado B del triangulo"));
    let vLadoC = parseInt(prompt("Ingrese el lado C del triangulo"));
    let vPerimetro = vLadoA * vLadoB * vLadoC;
    let vSp = vPerimetro / 2;
    let vCalculo = ((vSp - vLadoA) * (vSp - vLadoB) * (vSp - vLadoC))
    let vArea = Math.sqrt(vCalculo)

    alert("El area del triangulo es = " + vArea);
}

//---------------------- Triangulo Base * Altura

{
    let vBase = parseFloat(prompt("Ingrese base del triangulo"));
    let vAltura = parseFloat(prompt("Ingrese altura del triangulo"));
    let vArea = vBase * vAltura / 2;

    alert("El area del triangulo es = " + vArea);
}
