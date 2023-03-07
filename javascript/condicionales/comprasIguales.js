let cantidadArticulos = Number(prompt("¿Cuántos artículos comprará el usuario?"));
let precioArticulo = 0;
let costoTotal = 0;
let descuento = 0;

if(isNaN(cantidadArticulos) || (cantidadArticulos<=0)){
    alert("Ingrese una cantidad de válida de artículos");
}else{
    precioArticulo = Number(prompt("¿Cuánto vale una unidad del artículo?"));
    if(isNaN(precioArticulo) || (precioArticulo<=0)){
        alert("Ingrese un precio válido para el artículo");
    }else{
        costoTotal = cantidadArticulos*precioArticulo;
        if((cantidadArticulos>10) && (costoTotal>40)){
            descuento = costoTotal*0.15;
            costoTotal = costoTotal-descuento;
            alert("La cantidad de dinero a pagar por el usuario es: " + costoTotal + "$ . La compra tuvo un descuento de " + descuento + "$");
        }else{
            alert("La cantidad de dinero a pagar por el usuario es: " + costoTotal + "$ . No hubo ningún descuento");
        }
    }
}