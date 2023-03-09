let articulo = prompt("Ingrese el nombre del articulo ");
let precio = parseFloat(prompt("Ingrese el precio por unidad del articulo "));
let cantidad = parseFloat(prompt("Ingrese la cantidad de articulos"));
let clave = parseInt(prompt("Ingrese la clase: \n  (1) \n  (2)"));

if (isNaN(precio) || isNaN(cantidad) || isNaN(clave)) {
    alert("Por favor revise los datos e ingrese valores validos");
} else {
    let total = precio * cantidad;
    switch (clave) {
        case 1:
            total = total - (total * 0.10);
            alert("El precio final del articulo " + articulo + " con el descuento del 10% es de: " + total)
            break;
        case 2:
            total = total - (total * 0.20);
            alert("El precio final del articulo " + articulo + " con el descuento del 20% es de: " + total)
            break;
        default:
            alert("La contraseña que ingreso no es valida");
            break;
    }
}