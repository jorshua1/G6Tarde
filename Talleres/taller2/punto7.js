let articulo = prompt("Escriba el nombre del artículo");
let precioArticulo = Number(prompt("¿Qué precio por unidad tiene el artículo que compró?"));
let cantidadArticulos = 0;

let clave1 = 0.1;
let clave2 = 0.2;
let seleccionClave = 0;

let precioTotal = 0;
let descuento = 0;

if((isNaN(precioArticulo)) || (precioArticulo<=0)){
    alert("Por favor, ingrese un precio de artículo válido");
}else{
    cantidadArticulos = Number(prompt("¿Cuántos " + articulo + " compró?"))
    if((isNaN(cantidadArticulos)) || (cantidadArticulos<=0)){
        alert("Por favor, ingrese una cantidad de artículos válida")
    }else{
        seleccionClave = Number(prompt("Seleccione el número 1 o 2"));
        switch(seleccionClave){
            case 1:
                precioTotal = precioArticulo*cantidadArticulos;
                descuento = precioTotal*clave1;
                precioTotal = precioTotal-descuento;
                alert("Artículo a comprar: " + articulo + "\nPrecio original del artículo (por unidad): " + precioArticulo + "\nLa cantidad de " + articulo +  " es de " + cantidadArticulos + "\nLa compra tuvo un descuento de: " + descuento + "$ \n\nEl precio final de la compra es de " + precioTotal + "$");
                break;
            case 2:
                precioTotal = precioArticulo*cantidadArticulos;
                descuento = precioTotal*clave2;
                precioTotal = precioTotal-descuento;
                alert("Artículo a comprar: " + articulo + "\nPrecio original del artículo (por unidad): " + precioArticulo + "\nLa cantidad de " + articulo +  " es de " + cantidadArticulos + "\nLa compra tuvo un descuento de: " + descuento + "$ \n\nEl precio final de la compra es de " + precioTotal + "$");
                break;
            default:
                alert("Por favor, seleccione un número válido (1 o 2)");
                break;
        }
    }
}