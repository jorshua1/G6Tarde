let articulo1 = prompt("Ingrese el nombre del articulo");
let precio1 = parseInt(prompt("Ingrese el precio del articulo 1"));
while (isNaN(precio1) || precio1 === "" || precio1 === null || precio1 <= 0) {
    precio1 = parseInt(prompt("ingrese algo valido pirobo"));
}
let articulo2 = prompt("Ingrese el nombre del articulo 2");
let precio2 = parseInt(prompt("Ingrese el precio del articulo 2"));
while (isNaN(precio2) || precio2 === "" || precio2 === null || precio2 <= 0) {
    precio1 = parseInt(prompt("ingrese algo valido pirobo"));
}
let articulo3 = prompt("Ingrese el nombre del articulo 3");
let precio3 = parseInt(prompt("Ingrese el precio del articulo 3"));
while (isNaN(precio3) || precio3 === "" || precio3 === null || precio3 <= 0) {
    precio1 = parseInt(prompt("ingrese algo valido pirobo"));
}
let articulo4 = prompt("Ingrese el nombre del articulo 4");
let precio4 = parseInt(prompt("Ingrese el precio del articulo 4"));
while (isNaN(precio4) || precio4 === "" || precio4 === null || precio4 <= 0) {
    precio1 = parseInt(prompt("ingrese algo valido pirobo"));
}
let clave = parseInt(prompt("Ingrese 1 si desea pagar de contado o 2 si desea pagar a credito"));
while (clave !== 1 && clave !== 2) {
    precio1 = parseInt(prompt("ingrese algo valido pirobo"));
}
do {
    let preciodescuento1 = precio1 - precio1 * 0.2;
    let preciodescuento2 = precio2 - precio2 * 0.2;
    let preciodescuento3 = precio3 - precio3 * 0.2;
    let preciodescuento4 = precio4 - precio4 * 0.2;
    alert(`El precio total del ${articulo1} es de ${precio1} y el precio con descuento es de ${preciodecuento1}`);
    alert(`El precio total del ${articulo2} es de ${precio2} y el precio con descuento es de ${preciodecuento2}`);
    alert(`El precio total del ${articulo3} es de ${precio3} y el precio con descuento es de ${preciodecuento3}`);
    alert(`El precio total del ${articulo4} es de ${precio4} y el precio con descuento es de ${preciodecuento4}`);
} while (clave === 1);

do {
    let preciodescuento1 = precio1 - precio1 * 0.2;
    let preciodescuento2 = precio2 - precio2 * 0.2;
    let preciodescuento3 = precio3 - precio3 * 0.2;
    let preciodescuento4 = precio4 - precio4 * 0.2;
    alert(`El precio total del ${articulo1} es de ${precio1} y el precio con descuento es de ${preciodecuento1}`);
    alert(`El precio total del ${articulo2} es de ${precio2} y el precio con descuento es de ${preciodecuento2}`);
    alert(`El precio total del ${articulo3} es de ${precio3} y el precio con descuento es de ${preciodecuento3}`);
    alert(`El precio total del ${articulo4} es de ${precio4} y el precio con descuento es de ${preciodecuento4}`);
} while (clave === 2);



articulos = []

n_articulos = parseInt(prompt("Ingrese el número de artículos:"))

for (let i = 1; i <= n_articulos; i++) {

    nombrearticulo = prompt("Ingrese el nombre del artículo " + i)
    preciooriginal = parseFloat(prompt("Ingrese el precio original del artículo " + i))

    articulos.push({ nombre: nombrearticulo, preciooriginal: preciooriginal })
}

formapago = parseInt(prompt("Ingrese la forma de pago (1 para contado, 2 para crédito)"))

for (let i = 0; i < articulos.length; i++) {

    if (forma_pago == 1) {
        descuento = 0.1
    } else if (forma_pago == 2) {
        descuento = 0.2
    }

    preciodescuento = articulos[i].preciooriginal * (1 - descuento)

    console.log("Artículo:", articulos[i].nombre)
    console.log("Precio original:", articulos[i].precio_original)
    console.log("Precio con descuento:", precio_descuento)
}
