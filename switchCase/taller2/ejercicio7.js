let nombreArticulo= prompt("Ingrese el nombre del articulo");
let precioOriginal=Number(prompt("Ingrese el precio original"));
let descuento;
if (isNaN(precioOriginal)|| precioOriginal<=0){
    alert("Ingrese un precio válido.")
}else{
    let cantidadArticulo=Number(prompt("Ingrese la cantidad que hay: "))
    if (isNaN(cantidadArticulo)|| cantidadArticulo<=0){
        alert("Ingrese una cantidad válida");
    }else{
        let clave=Number(prompt("Ingrese la clave, 1 ó 2"));
        if (isNaN(clave)|| (clave != 1 && clave != 2)){
            alert("Ingrese una clave correcta.")
        }else{
            switch(clave){
                case 1:
                    descuento=precioOriginal*cantidadArticulo-((precioOriginal*cantidadArticulo)*0.1)
                    alert("El nombre del articulo es: "+nombreArticulo+"\nLa clave es: "+clave+"\nSu precio original es: "+precioOriginal+"\nLa cantidad de articulos son: "+cantidadArticulo+"\nCon el descuento le queda en: "+descuento);
                    break;

                case 2:
                    descuento=precioOriginal*cantidadArticulo-((precioOriginal*cantidadArticulo)*0.1)
                    alert("El nombre del articulo es: "+nombreArticulo+"\nLa clave es: "+clave+"\nSu precio original es: "+precioOriginal+"\nLa cantidad de articulos son: "+cantidadArticulo+"\nCon el descuento le queda en: "+descuento);
                    break;
            }
        }
    }
}