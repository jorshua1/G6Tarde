//-ARTICULO UNO
let articuloUno = prompt("Ingrese el nombre del pirmer articulo");
let precioArticuloUno = parseFloat(prompt("Ingrese el precio del articulo: " + articuloUno));
while (isNaN(precioArticuloUno) || precioArticuloUno <= 0) {
    precioArticuloUno = parseFloat(prompt("Ingrese el precio del articulo: " + articuloUno));
}

let claveUno = parseInt(prompt("Por facor ingrese una clave para elegir su forma de pago. \nPara el articulo " + articuloUno + "\nSelecione (1) para pagar de contado. \nSelecione (2) para pagar con credito"));

while (isNaN(claveUno) || claveUno !== 1 && claveUno !== 2) {
    claveUno = parseInt(prompt("Por facor ingrese datos validos \nSelecione (1) para pagar de contado. \nSelecione (2) para pagar con credito"));
}

if (claveUno == 1) {
    precioArticuloUno = precioArticuloUno - (precioArticuloUno * 0.1)
    alert("El precio del articulo " + articuloUno + " es: " + precioArticuloUno);
}else{
    precioArticuloUno = precioArticuloUno - (precioArticuloUno * 0.2)
    alert("El precio del articulo " + articuloUno + " es: " + precioArticuloUno);
}

//-ARTICULO DOS
let articuloDos = prompt("Ingrese el nombre del segundo articulo");

let precioArticuloDos = parseFloat(prompt("Ingrese el precio del articulo: " + articuloDos));
while (isNaN(precioArticuloDos) || precioArticuloDos <= 0) {
    precioArticuloDos = parseFloat(prompt("Ingrese el precio del articulo: " + articuloDos));
}
let claveDos = parseInt(prompt("Por facor ingrese una clave para elegir su forma de pago. \nPara el articulo " + articuloUno + "\nSelecione (1) para pagar de contado. \nSelecione (2) para pagar con credito"));

while (isNaN(claveDos) || claveDos !== 1 && claveDos !== 2) {
    claveDos = parseInt(prompt("Por facor ingrese datos validos \nSelecione (1) para pagar de contado. \nSelecione (2) para pagar con credito"));
}

if (claveDos == 1) {
    precioArticuloDOs = precioArticuloDos - (precioArticuloDos * 0.1)
    alert("El precio del articulo " + articuloDos + " es: " + precioArticuloDos);
}else{
    precioArticuloDos = precioArticuloDos - (precioArticuloDos * 0.2)
    alert("El precio del articulo " + articuloDos + " es: " + precioArticuloDos);
}

//-ARTICULO TRES
let articuloTres = prompt("Ingrese el nombre del tercer articulo");
let precioArticuloTres = parseFloat(prompt("Ingrese el precio del articulo: " + articuloTres));
while (isNaN(precioArticuloTres) || precioArticuloTres <= 0) {
    precioArticuloTres = parseFloat(prompt("Ingrese el precio del articulo: " + articuloTres));
}
let claveTres = parseInt(prompt("Por facor ingrese una clave para elegir su forma de pago. \nPara el articulo " + articuloUno + "\nSelecione (1) para pagar de contado. \nSelecione (2) para pagar con credito"));

while (isNaN(claveTres) || claveTres !== 1 && claveTres !== 2) {
    claveTres = parseInt(prompt("Por facor ingrese datos validos \nSelecione (1) para pagar de contado. \nSelecione (2) para pagar con credito"));
}

if (claveTres == 1) {
    precioArticuloTres = precioArticuloTres - (precioArticuloTres * 0.1)
    alert("El precio del articulo " + articuloTres + " es: " + precioArticuloTres)
}else{
    precioArticuloTres = precioArticuloTres - (precioArticuloTres * 0.2)
    alert("El precio del articulo " + articuloTres + " es: " + precioArticuloTres)
}

//-ARTICULO CUATRO
let articuloCuatro = prompt("Ingrese el nombre del cuarto articulo");
let precioArticuloCuatro = parseFloat(prompt("Ingrese el precio del articulo: " + articuloCuatro));
while (isNaN(precioArticuloCuatro) || precioArticuloCuatro <= 0) {
    precioArticuloCuatro = parseFloat(prompt("Ingrese el precio del articulo: " + articuloCuatro));
}
let claveCuatro = parseInt(prompt("Por facor ingrese una clave para elegir su forma de pago. \nPara el articulo " + articuloUno + "\nSelecione (1) para pagar de contado. \nSelecione (2) para pagar con credito"));

while (isNaN(claveCuatro) || claveCuatro !== 1 && claveCuatro !== 2) {
    claveCuatro = parseInt(prompt("Por facor ingrese datos validos \nSelecione (1) para pagar de contado. \nSelecione (2) para pagar con credito"));
}
if (claveCuatro == 1) {
    precioArticuloCuatro = precioArticuloCuatro - (precioArticuloCuatro * 0.1)
    alert("El precio del articulo " + precioArticuloCuatro + " es: " + precioArticuloCuatro)
}else{
    precioArticuloCuatro = precioArticuloCuatro - (precioArticuloCuatro * 0.2)
    alert("El precio del articulo " + articuloCuatro + " es: " + precioArticuloCuatro)
}
