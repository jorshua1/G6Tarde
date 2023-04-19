let C1 = parseFloat(prompt("Ingrese la cantidad de conejos blancos"));
let C2 = parseFloat(prompt("Ingrese la cantidad de conejos negros"));

let x = parseFloat(prompt("Ingrese la cantidad de conejos negros vendidos"));
let y = parseFloat(prompt("Ingrese la cantidad de conejos blancos vendidos"));

let P1 = parseFloat(prompt(""))

if (isNaN(C1) || isNaN(C2) || isNaN(x) || isNaN(y)){
    alert("Porvafor ingrese datos validos")
}else{
    let vendidos = x +y ;
    alert("La cantidad total de conejos vendidos fue: " + vendidos);
}

