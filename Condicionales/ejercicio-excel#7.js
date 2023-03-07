let articulos = parseInt(prompt("Ingrese la cantidad de articulos de la compra"));
let precio = parseInt(prompt("Ingrese el precio de un articulo"));
precio = articulos * precio;
let descuento = precio - (precio * 0.15)

if ((isNaN(articulos)) || (isNaN(precio)) || articulos <= 0 || precio <= 0){
    alert("Digite valores validos ")
}else if(articulos > 10 && precio > 40){
    alert("Tiene un descuento del 15% el valor a pagar es de: " + descuento )
}else {
    alert("No tiene descuento")
}